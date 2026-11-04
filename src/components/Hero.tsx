import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { companyData } from '../data/companyData';
import NetworkDiagram from './NetworkDiagram';
import CountUp from './CountUp';

const logos = [
  { src: '/turkcell.png', alt: 'Turkcell' },
  { src: '/vodafone.png', alt: 'Vodafone' },
  { src: '/karellogo.png', alt: 'Karel' },
  { src: '/ntmlogo.png', alt: 'NTM' },
  { src: '/ulak.svg', alt: 'Ulak' },
  { src: '/ttlogo.png', alt: 'Türk Telekom' },
];

const stats = [
  { value: '500+', label: 'Kurulum Projesi' },
  { value: '10+', label: 'Yıl Tecrübe' },
  { value: '%100', label: 'Başarı Oranı' },
];

const typed = ['baz istasyonu kurulumu', 'survey & saha analizi', 'gsm network', 'transmisyon', 'devreye alma & kabul'];

/** Types and erases phrases in a loop, like a terminal prompt. */
const useTypewriter = (words: string[]) => {
  const [i, setI] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i];
    let delay = deleting ? 28 : 62;
    if (!deleting && text === word) delay = 1700;
    if (deleting && text === '') delay = 250;

    const id = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === '') {
        setDeleting(false);
        setI((i + 1) % words.length);
      } else setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(id);
  }, [text, deleting, i, words]);

  return text;
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: [0.2, 0.7, 0.2, 1] as const } }),
};

const Hero = () => {
  const text = useTypewriter(typed);

  return (
    <>
      <section id="home" className="relative overflow-hidden grid-paper pt-[104px] pb-14 lg:pt-[120px] lg:pb-20">
        {/* Soft fade at the bottom of the grid */}
        <div
          className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, var(--bg))' }}
        />

        <div className="container-custom relative grid grid-cols-1 lg:grid-cols-[1fr_1.08fr] gap-12 lg:gap-14 items-center">
          {/* Left — copy */}
          <div className="min-w-0">
            <motion.div variants={item} initial="hidden" animate="show" custom={0} className="eyebrow">
              {companyData.tagline}
            </motion.div>

            <motion.h1
              variants={item}
              initial="hidden"
              animate="show"
              custom={0.08}
              className="mt-6 font-extrabold leading-[1.02]"
              style={{ fontSize: 'clamp(2.6rem, 6vw, 4.6rem)', letterSpacing: '0.02em' }}
            >
              Şebekeyi
              <br />
              <em className="italic" style={{ color: 'var(--primary)' }}>
                sahadan
              </em>{' '}
              kuruyoruz.
            </motion.h1>

            <motion.div
              variants={item}
              initial="hidden"
              animate="show"
              custom={0.16}
              className="mt-6 mono text-[15px] sm:text-base font-medium flex items-center gap-2 min-h-[1.6em]"
              style={{ color: 'var(--ink)' }}
            >
              <span style={{ color: 'var(--green)' }}>$</span>
              <span style={{ color: 'var(--ink-muted)' }}>cnl --hizmet</span>
              <span>
                {text}
                <span className="caret" />
              </span>
            </motion.div>

            <motion.p
              variants={item}
              initial="hidden"
              animate="show"
              custom={0.24}
              className="mt-5 max-w-xl text-[16.5px] leading-relaxed"
              style={{ color: 'var(--ink-body)' }}
            >
              {companyData.description}
            </motion.p>

            <motion.div variants={item} initial="hidden" animate="show" custom={0.32} className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="btn primary">
                Hizmetlerimiz <span className="arrow">→</span>
              </a>
              <a href="#contact" className="btn">
                Bize Ulaşın
              </a>
            </motion.div>

            {/* Stats */}
            <motion.dl
              variants={item}
              initial="hidden"
              animate="show"
              custom={0.4}
              className="mt-10 grid grid-cols-3 max-w-md"
              style={{ borderTop: '1px solid var(--line)' }}
            >
              {stats.map(({ value, label }, i) => (
                <div
                  key={label}
                  className="pt-4 pr-3"
                  style={{ borderLeft: i ? '1px solid var(--line)' : 'none', paddingLeft: i ? 16 : 0 }}
                >
                  <dd className="mono text-2xl sm:text-3xl font-extrabold tabular-nums" style={{ color: 'var(--ink-strong)' }}>
                    <CountUp value={value} />
                  </dd>
                  <dt className="mono mt-1 text-[10.5px] font-bold uppercase tracking-[0.12em]" style={{ color: 'var(--ink-muted)' }}>
                    {label}
                  </dt>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Right — live network */}
          <motion.div
            className="min-w-0"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <NetworkDiagram />
          </motion.div>
        </div>
      </section>

      {/* Partners — seamless infinite scroll */}
      <section
        aria-label="Referanslarımız"
        className="relative overflow-hidden"
        style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', background: 'var(--panel)' }}
      >
        <div className="flex items-stretch">
          <div
            className="hidden sm:flex flex-none items-center px-6 mono text-[11px] font-extrabold tracking-[0.16em] uppercase z-20"
            style={{ color: 'var(--ink)', background: 'var(--panel-soft)', borderRight: '1px solid var(--line)' }}
          >
            Referanslar
          </div>
          <div className="relative flex-1 overflow-hidden py-7">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10" style={{ background: 'linear-gradient(to right, var(--panel), transparent)' }} />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10" style={{ background: 'linear-gradient(to left, var(--panel), transparent)' }} />
            <div className="flex w-max animate-scroll-logos">
              {[0, 1, 2, 3].map((set) => (
                <div key={set} aria-hidden={set > 0} className="flex items-center gap-16 px-8 shrink-0">
                  {logos.map(({ src, alt }) => (
                    <img
                      key={alt}
                      src={src}
                      alt={alt}
                      className="h-8 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
