import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FaCheck, FaChevronRight } from 'react-icons/fa';
import { companyData } from '../data/companyData';
import Reveal from './Reveal';

const meta = [
  { code: 'BTS', badge: 'blue', color: '#1f6fe8' },
  { code: 'SRV', badge: 'teal', color: '#0e95a3' },
  { code: 'GSM', badge: 'green', color: '#12a56b' },
  { code: 'TRX', badge: 'violet', color: '#6d4bdc' },
] as const;

const StepList = ({ items, color, run }: { items: string[]; color: string; run: boolean }) => {
  const [done, setDone] = useState(0);

  useEffect(() => {
    if (!run) return;
    // Remounted per service (keyed by AnimatePresence), so `done` always starts at 0.
    let n = 0;
    const id = setInterval(() => {
      n += 1;
      setDone(n);
      if (n >= items.length) clearInterval(id);
    }, 420);
    return () => clearInterval(id);
  }, [items, run]);

  return (
    <ol className="relative">
      {/* vertical rail */}
      <div className="absolute left-[14px] top-3 bottom-3 w-[2px]" style={{ background: 'var(--line)' }} />
      <motion.div
        className="absolute left-[14px] top-3 w-[2px] origin-top"
        style={{ background: color, bottom: 12 }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: items.length ? Math.min(done / items.length, 1) : 0 }}
        transition={{ duration: 0.4 }}
      />
      {items.map((f, i) => {
        const state = i < done ? 'done' : i === done && run ? 'pending' : 'idle';
        return (
          <motion.li
            key={f}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="relative flex items-center gap-4 py-2.5"
          >
            <span
              className="relative z-10 flex h-[30px] w-[30px] flex-none items-center justify-center rounded-full"
              style={{
                background: state === 'done' ? color : 'var(--panel)',
                border: `2px solid ${state === 'idle' ? 'var(--line-strong)' : color}`,
                transition: 'background .3s, border-color .3s',
              }}
            >
              {state === 'done' && <FaCheck key="c" className="step-pop text-white" size={11} />}
              {state === 'pending' && (
                <span
                  className="step-spin block h-3.5 w-3.5 rounded-full"
                  style={{ border: `2px solid ${color}`, borderTopColor: 'transparent' }}
                />
              )}
              {state === 'idle' && (
                <span className="mono text-[11px] font-bold" style={{ color: 'var(--ink-faint)' }}>
                  {i + 1}
                </span>
              )}
            </span>
            <span
              className="text-[15px] font-medium transition-colors duration-300"
              style={{ color: state === 'done' ? 'var(--ink-strong)' : 'var(--ink-muted)' }}
            >
              {f}
            </span>
          </motion.li>
        );
      })}
    </ol>
  );
};

const Services = () => {
  const [active, setActive] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const inView = useInView(panelRef, { once: true, margin: '-100px' });
  const services = companyData.services;
  const s = services[active];
  const m = meta[active % meta.length];
  const Icon = s.icon;

  return (
    <section id="services" className="py-24 lg:py-28">
      <div className="container-custom">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="eyebrow">01 · Hizmetler</div>
            <h2 className="section-title mt-4">Uçtan uca şebeke hizmeti</h2>
          </div>
          <p className="max-w-md text-[15.5px] leading-relaxed" style={{ color: 'var(--ink-muted)' }}>
            Telekomünikasyon altyapısı için eksiksiz hizmet yelpazesi. Bir hizmet seçin, iş akışını adım adım izleyin.
          </p>
        </Reveal>

        <div ref={panelRef} className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-5 [&>*]:min-w-0">
          {/* Lesson-style list */}
          <div className="panel !shadow-none overflow-hidden h-fit">
            <div className="panel-head">Hizmet Listesi</div>
            <ul className="flex lg:block overflow-x-auto">
              {services.map((svc, i) => {
                const mm = meta[i % meta.length];
                const isOn = i === active;
                return (
                  <li key={svc.id} className="flex-none lg:flex-auto">
                    <button
                      onClick={() => setActive(i)}
                      className="w-full flex items-center gap-3 px-4 py-4 text-left transition-colors"
                      style={{
                        background: isOn ? 'var(--panel-tint)' : 'transparent',
                        boxShadow: isOn ? `inset 3px 0 0 ${mm.color}` : 'none',
                        borderTop: i ? '1px solid var(--line-soft)' : 'none',
                      }}
                      aria-pressed={isOn}
                    >
                      <span className={`step-badge ${mm.badge}${isOn ? ' dot-pop' : ''}`} key={isOn ? 'on' : 'off'}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="min-w-0">
                        <span className="block mono text-[11px] font-bold tracking-[0.14em]" style={{ color: mm.color }}>
                          {mm.code}
                        </span>
                        <span
                          className="block mono text-[14px] font-extrabold tracking-[0.02em] whitespace-nowrap"
                          style={{ color: isOn ? 'var(--ink-strong)' : 'var(--ink)' }}
                        >
                          {svc.title}
                        </span>
                      </span>
                      <FaChevronRight
                        className="hidden lg:block ml-auto flex-none transition-transform duration-300"
                        size={11}
                        style={{ color: 'var(--ink-faint)', transform: isOn ? 'translateX(3px)' : 'none' }}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Detail / inspector */}
          <div className="panel overflow-hidden">
            <div className="panel-head">
              <span>Hizmet · {String(active + 1).padStart(2, '0')}</span>
              <span className="ml-auto tag" style={{ ['--c' as string]: m.color }}>
                {m.code}
              </span>
            </div>
            <div className="h-[3px] w-full" style={{ background: 'var(--line-soft)' }}>
              <div key={active} className="h-full seg-fill" style={{ background: m.color }} />
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-[1fr_1.1fr] gap-8 p-6 sm:p-8"
              >
                <div>
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-[3px]"
                    style={{
                      color: m.color,
                      background: `linear-gradient(135deg, color-mix(in srgb, ${m.color} 14%, transparent), transparent)`,
                      border: `1px solid color-mix(in srgb, ${m.color} 40%, transparent)`,
                    }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-2xl font-extrabold tracking-[0.01em]">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-[15.5px]" style={{ color: 'var(--ink-body)' }}>
                    {s.description}
                  </p>
                  <div
                    className="mt-6 inline-flex items-center gap-2 mono text-[11.5px] font-bold tracking-[0.1em] uppercase"
                    style={{ color: 'var(--green)' }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'var(--green)' }} />
                    7/24 teknik destek dahil
                  </div>
                </div>

                <div
                  className="rounded-[3px] p-4 sm:p-5"
                  style={{ background: 'var(--panel-soft)', border: '1px solid var(--line)' }}
                >
                  <div className="mono text-[11px] font-extrabold tracking-[0.14em] uppercase mb-2" style={{ color: 'var(--ink-muted)' }}>
                    İş Akışı
                  </div>
                  <StepList items={s.features} color={m.color} run={inView} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
