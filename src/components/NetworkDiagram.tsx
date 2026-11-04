import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FaPause, FaPlay } from 'react-icons/fa';

/* ──────────────────────────────────────────────────────────────────────────
   A live "network" of a base-station rollout. Packets travel along dashed
   lanes between nodes while a packet log underneath records every hop —
   the same idea as a protocol explorer, told through CNL's own work.
   ────────────────────────────────────────────────────────────────────────── */

type NodeId = 'user' | 'bts' | 'trx' | 'core' | 'saha';
type LaneId = 'user-bts' | 'bts-trx' | 'trx-core' | 'saha-bts' | 'saha-core';

const NODES: Record<NodeId, { x: number; y: number; name: string; sub: string; labelBelow?: boolean }> = {
  user: { x: 72, y: 78, name: 'ABONE', sub: '4G · 5G' },
  bts: { x: 230, y: 196, name: 'BAZ İSTASYONU', sub: 'eNodeB · gNodeB', labelBelow: true },
  trx: { x: 404, y: 78, name: 'TRANSMİSYON', sub: 'MW · Fiber' },
  core: { x: 488, y: 262, name: 'ÇEKİRDEK', sub: 'Operatör Ağı', labelBelow: true },
  saha: { x: 84, y: 316, name: 'SAHA EKİBİ', sub: 'CNL İletişim', labelBelow: true },
};

const LANES: Record<LaneId, { from: NodeId; to: NodeId; d: string }> = {
  'user-bts': { from: 'user', to: 'bts', d: 'M72 78 C72 150 150 196 230 196' },
  'bts-trx': { from: 'bts', to: 'trx', d: 'M230 196 C318 196 316 78 404 78' },
  'trx-core': { from: 'trx', to: 'core', d: 'M404 78 C476 78 488 170 488 262' },
  'saha-bts': { from: 'saha', to: 'bts', d: 'M84 316 C160 316 230 290 230 196' },
  'saha-core': { from: 'saha', to: 'core', d: 'M84 316 C230 352 380 340 488 262' },
};

const COLORS = {
  blue: '#1f6fe8',
  teal: '#0e95a3',
  green: '#12a56b',
  violet: '#6d4bdc',
  amber: '#f2ac0a',
  slate: '#546588',
};

type Step = {
  lane: LaneId;
  reverse?: boolean;
  label: string;
  color: keyof typeof COLORS;
  action: string;
};

const STEPS: Step[] = [
  { lane: 'saha-bts', label: 'SURVEY', color: 'teal', action: 'Saha keşfi ve ölçüm' },
  { lane: 'saha-bts', label: 'KURULUM', color: 'blue', action: 'Anten · RRU montajı' },
  { lane: 'bts-trx', label: 'MW LINK', color: 'violet', action: 'Transmisyon hattı' },
  { lane: 'trx-core', label: 'ETH/IP', color: 'violet', action: 'Omurga bağlantısı' },
  { lane: 'trx-core', reverse: true, label: 'CONFIG', color: 'slate', action: 'Konfigürasyon' },
  { lane: 'bts-trx', reverse: true, label: 'TEST', color: 'blue', action: 'Devreye alma testi' },
  { lane: 'user-bts', reverse: true, label: '5G', color: 'green', action: 'Kapsama yayında' },
  { lane: 'user-bts', label: 'TRAFİK', color: 'green', action: 'Abone trafiği akıyor' },
  { lane: 'saha-core', label: 'KABUL', color: 'amber', action: 'Kabul dosyası teslim' },
];

const HOP = 1.7; // seconds per hop at 1×
const HOLD = 0.35; // pause at destination (fraction of hop)

const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

const fmt = (s: number) => {
  const m = Math.floor(s / 60);
  const sec = s - m * 60;
  return `${String(m).padStart(2, '0')}:${sec.toFixed(3).padStart(6, '0')}`;
};

type LogRow = { n: number; time: string; step: Step };

/* ───── Node glyphs (24×24, centered) ───── */
const Glyph = ({ id }: { id: NodeId }) => {
  const p = { fill: 'none', stroke: 'var(--ink-strong)', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  switch (id) {
    case 'user':
      return (
        <g {...p}>
          <rect x="7" y="2.5" width="10" height="19" rx="2" />
          <path d="M10.5 18.5h3" />
        </g>
      );
    case 'bts':
      return (
        <g {...p}>
          <path d="M12 7 7.5 22M12 7l4.5 15M9 17h6M10.2 12.5h3.6" />
          <circle cx="12" cy="5" r="1.6" fill="var(--amber)" />
          <path d="M7.6 2.2a6 6 0 0 0 0 5.6M16.4 2.2a6 6 0 0 1 0 5.6" />
        </g>
      );
    case 'trx':
      return (
        <g {...p}>
          <path d="M4 14a8.5 8.5 0 0 1 10-10z" />
          <path d="M9 9l6.5-6.5M17 5.5a4 4 0 0 1 1.5 3M19.5 3a7.5 7.5 0 0 1 2 5" />
          <path d="M8 15.5 6.5 21h8l-1.5-5" />
        </g>
      );
    case 'core':
      return (
        <g {...p}>
          <rect x="3.5" y="3.5" width="17" height="7" rx="1.2" />
          <rect x="3.5" y="13.5" width="17" height="7" rx="1.2" />
          <path d="M7 7h.01M7 17h.01M11 7h6M11 17h6" />
        </g>
      );
    case 'saha':
      return (
        <g {...p}>
          <path d="M4 16a8 8 0 0 1 16 0z" />
          <path d="M2.5 16h19v2.5h-19zM12 8v4M9 9.2v3M15 9.2v3" />
        </g>
      );
  }
};

const NetworkDiagram = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { margin: '0px' });
  const pathRefs = useRef<Partial<Record<LaneId, SVGPathElement | null>>>({});
  const packetRef = useRef<SVGGElement>(null);

  const [stepIdx, setStepIdx] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [log, setLog] = useState<LogRow[]>([{ n: 1, time: fmt(0), step: STEPS[0] }]);

  const stepRef = useRef(0);
  const tRef = useRef(0);
  const clockRef = useRef(0);
  const countRef = useRef(1);
  const runRef = useRef(true);
  const speedRef = useRef(1);

  useEffect(() => {
    runRef.current = playing && inView;
  }, [playing, inView]);
  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();

    const place = () => {
      const step = STEPS[stepRef.current];
      const path = pathRefs.current[step.lane];
      const g = packetRef.current;
      if (!path || !g) return;
      const L = path.getTotalLength();
      const t = Math.min(tRef.current, 1);
      const e = ease(t);
      const pt = path.getPointAtLength(step.reverse ? L * (1 - e) : L * e);
      g.setAttribute('transform', `translate(${pt.x.toFixed(2)} ${pt.y.toFixed(2)})`);
      const fadeIn = Math.min(tRef.current / 0.08, 1);
      const fadeOut = tRef.current > 1 ? Math.max(1 - (tRef.current - 1) / HOLD, 0) : 1;
      g.style.opacity = String(Math.min(fadeIn, fadeOut));
    };

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (runRef.current) {
        const adv = (dt * speedRef.current) / HOP;
        tRef.current += adv;
        clockRef.current += dt * speedRef.current;
        if (tRef.current >= 1 + HOLD) {
          tRef.current = 0;
          stepRef.current = (stepRef.current + 1) % STEPS.length;
          countRef.current += 1;
          const row: LogRow = { n: countRef.current, time: fmt(clockRef.current), step: STEPS[stepRef.current] };
          setStepIdx(stepRef.current);
          setLog((l) => [...l.slice(-4), row]);
        }
      }
      place();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const step = STEPS[stepIdx];
  const lane = LANES[step.lane];
  const src = step.reverse ? lane.to : lane.from;
  const dst = step.reverse ? lane.from : lane.to;
  const tagW = step.label.length * 7.4 + 18;
  const color = COLORS[step.color];

  return (
    <div ref={wrapRef} className="panel overflow-hidden">
      {/* Head */}
      <div className="panel-head">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-70" style={{ background: 'var(--green)' }} />
          <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: 'var(--green)' }} />
        </span>
        Canlı Saha Akışı
        <span className="ml-auto mono tabular-nums" style={{ color: 'var(--ink-muted)' }}>
          {String(stepIdx + 1).padStart(2, '0')}/{String(STEPS.length).padStart(2, '0')}
        </span>
        <button
          className="btn !h-7 !w-8 !p-0 !min-w-0"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? 'Duraklat' : 'Oynat'}
        >
          {playing ? <FaPause size={10} /> : <FaPlay size={10} />}
        </button>
        <button
          className="btn !h-7 !px-2 !text-[11px]"
          onClick={() => setSpeed((s) => (s === 1 ? 2 : s === 2 ? 0.5 : 1))}
          aria-label="Hız"
        >
          {speed}×
        </button>
      </div>

      {/* Progress segments */}
      <div className="flex gap-[3px] px-[14px] pt-3">
        {STEPS.map((s, i) => (
          <div key={i} className="h-[3px] flex-1 overflow-hidden" style={{ background: 'var(--line)' }}>
            {i <= stepIdx && (
              <div key={`${i}-${i === stepIdx ? log[log.length - 1]?.n : 'done'}`} className="h-full seg-fill" style={{ background: COLORS[s.color] }} />
            )}
          </div>
        ))}
      </div>

      {/* Diagram */}
      <div className="grid-paper">
        <svg viewBox="0 0 560 380" className="w-full h-auto block" role="img" aria-label="Baz istasyonu ağ akış diyagramı">
          {/* Lanes */}
          {(Object.keys(LANES) as LaneId[]).map((id) => {
            const active = id === step.lane;
            return (
              <path
                key={id}
                ref={(el) => {
                  pathRefs.current[id] = el;
                }}
                d={LANES[id].d}
                className={`lane${active ? ' is-active' : ''}${active && step.reverse ? ' reverse' : ''}`}
                style={active ? { stroke: color } : undefined}
              />
            );
          })}

          {/* Nodes */}
          {(Object.keys(NODES) as NodeId[]).map((id) => {
            const n = NODES[id];
            const isSrc = id === src;
            const isDst = id === dst;
            const hot = isSrc || isDst;
            return (
              <g key={id} transform={`translate(${n.x} ${n.y})`}>
                {isDst && (
                  <rect
                    key={`ring-${stepIdx}`}
                    x={-26}
                    y={-26}
                    width={52}
                    height={52}
                    rx={4}
                    fill="none"
                    stroke={color}
                    strokeWidth={2}
                    className="signal-ring"
                    style={{ animationDuration: '1.8s' }}
                  />
                )}
                <rect
                  x={-24}
                  y={-24}
                  width={48}
                  height={48}
                  rx={3}
                  fill="var(--panel)"
                  stroke={hot ? color : 'var(--line-strong)'}
                  strokeWidth={hot ? 2.2 : 1.5}
                  style={{ transition: 'stroke .35s' }}
                />
                <g transform="translate(-12 -12)">
                  <Glyph id={id} />
                </g>
                <text className="node-name" textAnchor="middle" y={n.labelBelow ? 42 : -34}>
                  {n.name}
                </text>
                <text className="node-sub" textAnchor="middle" y={n.labelBelow ? 57 : -50}>
                  {n.sub}
                </text>
              </g>
            );
          })}

          {/* Packet */}
          <g ref={packetRef} style={{ opacity: 0 }}>
            <circle r={9} fill={color} opacity={0.18} />
            <circle r={4} fill={color} stroke="var(--panel)" strokeWidth={1.5} />
            <g transform={`translate(${-tagW / 2} -27)`}>
              <rect width={tagW} height={18} rx={2} fill={color} />
              <text className="packet-label" x={tagW / 2} y={12.5} textAnchor="middle" style={step.color === 'amber' ? { fill: '#0b2b86' } : undefined}>
                {step.label}
              </text>
            </g>
          </g>
        </svg>
      </div>

      {/* Packet log */}
      <div style={{ borderTop: '1px solid var(--line)', height: 28 + 5 * 31, overflow: 'hidden' }}>
        <table className="packet-table">
          <colgroup>
            <col style={{ width: 46 }} />
            <col className="hidden sm:table-column" style={{ width: 98 }} />
            <col style={{ width: '38%' }} />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th>#</th>
              <th className="hidden sm:table-cell">Zaman</th>
              <th>Yön</th>
              <th>İşlem</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence initial={false}>
              {log.map((row, i) => {
                const l = LANES[row.step.lane];
                const a = NODES[row.step.reverse ? l.to : l.from].name;
                const b = NODES[row.step.reverse ? l.from : l.to].name;
                const current = i === log.length - 1;
                return (
                  <motion.tr
                    key={row.n}
                    layout
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={current ? 'is-current' : 'is-past'}
                  >
                    <td className="tabular-nums">{row.n}</td>
                    <td className="hidden sm:table-cell tabular-nums">{row.time}</td>
                    <td title={`${a} → ${b}`}>
                      {a.split(' ')[0]} <span style={{ color: 'var(--ink-faint)' }}>→</span> {b.split(' ')[0]}
                    </td>
                    <td>
                      <span className="tag mr-2" style={{ ['--c' as string]: COLORS[row.step.color], color: row.step.color === 'amber' ? '#0b2b86' : '#fff' }}>
                        {row.step.label}
                      </span>
                      <span className="hidden md:inline">{row.step.action}</span>
                    </td>
                  </motion.tr>
                );
              })}
            </AnimatePresence>
            {Array.from({ length: Math.max(0, 5 - log.length) }).map((_, i) => (
              <tr key={`empty-${i}`} aria-hidden="true">
                <td style={{ color: 'var(--ink-faint)' }}>·</td>
                <td className="hidden sm:table-cell" style={{ color: 'var(--ink-faint)' }}>--:--.---</td>
                <td colSpan={2} style={{ color: 'var(--ink-faint)', letterSpacing: '0.04em' }}>
                  bekleniyor…
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NetworkDiagram;
