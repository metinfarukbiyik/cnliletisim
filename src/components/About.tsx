import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBroadcastTower, FaUsers, FaAward, FaShieldAlt, FaHardHat } from 'react-icons/fa';
import { companyData } from '../data/companyData';
import CountUp from './CountUp';
import Reveal from './Reveal';

const photos = [
  { src: '/cnl3.jpg', tag: 'SAHA_03' },
  { src: '/cnl1.png', tag: 'SAHA_01' },
  { src: '/cnl2.jpg', tag: 'SAHA_02' },
  { src: '/cnl4.jpg', tag: 'SAHA_04' },
];

const stats = [
  { icon: FaBroadcastTower, label: 'Başarılı Kurulum', value: '500+', color: 'var(--blue)' },
  { icon: FaUsers, label: 'Mutlu Müşteri', value: '100+', color: 'var(--green)' },
  { icon: FaAward, label: 'Yıllık Tecrübe', value: '10+', color: 'var(--amber)' },
];

const About = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % photos.length), 6000);
    return () => clearInterval(id);
  }, [idx]);

  return (
    <section id="about" className="py-24 lg:py-28">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
        {/* Photos */}
        <Reveal>
          <div className="bracket">
            <div className="relative overflow-hidden rounded-[3px] aspect-[4/5] sm:aspect-[5/5] lg:aspect-[4/5]" style={{ border: '1px solid var(--line)' }}>
              <AnimatePresence mode="sync">
                <motion.img
                  key={photos[idx].src}
                  src={photos[idx].src}
                  alt="CNL İletişim saha çalışması"
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.1, ease: [0.2, 0.7, 0.2, 1] }}
                />
              </AnimatePresence>
              {/* scan grid overlay */}
              <div className="absolute inset-0 pointer-events-none grid-paper opacity-60 mix-blend-overlay" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,20,70,.55), transparent)' }} />
              {/* HUD */}
              <div className="absolute top-3 left-3 mono text-[10.5px] font-bold tracking-[0.12em] px-2 py-1 rounded-[2px]" style={{ background: 'rgba(11,43,134,.75)', color: '#fff' }}>
                ● REC · {photos[idx].tag}
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between mono text-[10.5px] font-bold tracking-[0.1em] text-white/90">
                <span>40.9925° N · 39.7168° E</span>
                <span>TRABZON</span>
              </div>
            </div>
          </div>

          {/* thumbnails */}
          <div className="mt-5 grid grid-cols-4 gap-3">
            {photos.map((p, i) => (
              <button
                key={p.src}
                onClick={() => setIdx(i)}
                className="relative aspect-[4/3] overflow-hidden rounded-[2px] transition-all"
                style={{ outline: i === idx ? '2px solid var(--primary)' : '1px solid var(--line)', outlineOffset: i === idx ? 2 : 0, opacity: i === idx ? 1 : 0.6 }}
                aria-label={`Fotoğraf ${i + 1}`}
              >
                <img src={p.src} alt="" className="h-full w-full object-cover" />
                {i === idx && <div key={idx} className="absolute bottom-0 left-0 h-[3px] w-full origin-left" style={{ background: 'var(--amber)', animation: 'seg-fill 6s linear both' }} />}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Content */}
        <div>
          <Reveal>
            <div className="eyebrow">03 · Hakkımızda</div>
            <h2 className="section-title mt-4">Güvenilir ve deneyimli ekip</h2>
          </Reveal>

          <div className="mt-6 space-y-4">
            {companyData.about.content.map((p, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <p className="leading-relaxed text-[15.5px]" style={{ color: 'var(--ink-body)' }}>
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-8 grid grid-cols-3 panel !shadow-none overflow-hidden">
              {stats.map(({ icon: Icon, label, value, color }, i) => (
                <div key={label} className="p-4 sm:p-5" style={{ borderLeft: i ? '1px solid var(--line)' : 'none' }}>
                  <Icon className="h-4 w-4" style={{ color }} />
                  <div className="mt-3 mono text-2xl sm:text-3xl font-extrabold tabular-nums" style={{ color: 'var(--ink-strong)' }}>
                    <CountUp value={value} />
                  </div>
                  <div className="mono mt-1 text-[10.5px] font-bold uppercase tracking-[0.1em]" style={{ color: 'var(--ink-muted)' }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                { icon: FaHardHat, text: 'Sertifikalı saha ekibi' },
                { icon: FaShieldAlt, text: '7/24 teknik destek' },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="group flex items-center gap-3 p-4 rounded-[3px] transition-colors"
                  style={{ background: 'var(--panel-soft)', border: '1px solid var(--line)' }}
                >
                  <Icon className="h-4 w-4 transition-transform group-hover:scale-110" style={{ color: 'var(--primary)' }} />
                  <span className="mono text-[12.5px] font-bold tracking-[0.04em]" style={{ color: 'var(--ink)' }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
