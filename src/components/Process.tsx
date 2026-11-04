import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Reveal from './Reveal';

const stages = [
  { code: 'SRV', badge: 'teal', color: '#0e95a3', title: 'Survey', text: 'Saha keşfi, teknik ölçüm ve fizibilite raporu.' },
  { code: 'INS', badge: '', color: '#1f6fe8', title: 'Kurulum', text: 'Anten, RRU, kabinet ve kablo tesisatı montajı.' },
  { code: 'TRX', badge: 'violet', color: '#6d4bdc', title: 'Transmisyon', text: 'MW / fiber hat kurulumu ve omurga bağlantısı.' },
  { code: 'OSS', badge: 'green', color: '#12a56b', title: 'Devreye Alma', text: 'Konfigürasyon, test ve yayına alma.' },
  { code: 'ACK', badge: 'amber', color: '#f2ac0a', title: 'Kabul', text: 'Kabul süreçleri ve dosya hazırlama, teslim.' },
];

const Process = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.75', 'end 0.55'] });
  const pct = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const [reached, setReached] = useState(-1);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.floor(v * (stages.length - 1) + 0.02);
    setReached(v <= 0.001 ? -1 : Math.min(idx, stages.length - 1));
  });

  const done = reached >= stages.length - 1;

  return (
    <section id="process" className="py-24 lg:py-28 grid-paper" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="container-custom">
        <Reveal className="mb-14">
          <div className="eyebrow">02 · Süreç</div>
          <h2 className="section-title mt-4">
            Bir sahanın yolculuğu, <em className="italic" style={{ color: 'var(--primary)' }}>adım adım</em>
          </h2>
          <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed" style={{ color: 'var(--ink-muted)' }}>
            Aşağı kaydırdıkça paketi takip edin: keşiften kabule kadar her aşama tek elden yönetilir.
          </p>
        </Reveal>

        <div ref={ref} className="relative">
          {/* ── Horizontal lane (lg+) ── */}
          <div className="hidden lg:block relative h-[30px] mb-8">
            <div
              className="absolute left-[15px] right-[15px] top-1/2 h-0"
              style={{ borderTop: '2px dashed var(--lane)' }}
            />
            <motion.div
              className="absolute left-[15px] top-1/2 h-[2px] -translate-y-[1px] sheen"
              style={{ width: `calc((100% - 30px) * 1)`, scaleX: scrollYProgress, transformOrigin: 'left' }}
            />
            <div className="absolute inset-x-[15px] top-0 bottom-0">
              <motion.div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20" style={{ left: pct }}>
                <span
                  className="mono flex items-center h-[20px] px-2 rounded-[2px] text-[10.5px] font-extrabold tracking-[0.06em] -translate-y-[22px] whitespace-nowrap"
                  style={{
                    background: done ? 'var(--amber)' : 'var(--primary)',
                    color: done ? '#0b2b86' : '#fff',
                    transition: 'background .3s',
                  }}
                >
                  {done ? 'TESLİM ✓' : 'SAHA #061'}
                </span>
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full" style={{ background: 'var(--primary)', boxShadow: '0 0 0 5px color-mix(in srgb, var(--primary) 18%, transparent)' }} />
              </motion.div>
            </div>
          </div>

          <ol className="grid lg:grid-cols-5 gap-4 relative">
            {/* vertical rail (mobile) */}
            <div className="lg:hidden absolute left-[15px] top-4 bottom-4 border-l-2 border-dashed" style={{ borderColor: 'var(--lane)' }} />
            <motion.div
              className="lg:hidden absolute left-[14px] top-4 bottom-4 w-[2px] origin-top"
              style={{ background: 'var(--primary)', scaleY: scrollYProgress }}
            />
            {stages.map((s, i) => {
              const on = i <= reached;
              return (
                <li
                  key={s.code}
                  className="relative pl-12 lg:pl-0"
                >
                  <span
                    className={`lg:hidden absolute left-0 top-5 step-badge ${s.badge}`}
                    style={{ opacity: on ? 1 : 0.35, transition: 'opacity .3s' }}
                  >
                    {i + 1}
                  </span>
                  <div
                    className="panel h-full p-5 transition-all duration-500"
                    style={{
                      borderColor: on ? s.color : 'var(--line)',
                      transform: on ? 'translateY(0)' : 'translateY(6px)',
                      opacity: on ? 1 : 0.6,
                      boxShadow: on ? `0 12px 32px color-mix(in srgb, ${s.color} 18%, transparent)` : 'none',
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`hidden lg:inline-flex step-badge ${s.badge}`}>{i + 1}</span>
                      <span className="tag" style={{ ['--c' as string]: on ? s.color : 'var(--ink-faint)', color: s.badge === 'amber' && on ? '#0b2b86' : '#fff' }}>
                        {s.code}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-extrabold">{s.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed" style={{ color: 'var(--ink-muted)' }}>
                      {s.text}
                    </p>
                    <div className="mt-4 h-[3px] w-full overflow-hidden" style={{ background: 'var(--line-soft)' }}>
                      <div
                        className="h-full origin-left transition-transform duration-700"
                        style={{ background: s.color, transform: `scaleX(${on ? 1 : 0})` }}
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Process;
