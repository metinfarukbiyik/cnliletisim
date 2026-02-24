import { useState, useEffect } from 'react';
import { companyData } from '../data/companyData';

const bgImages = ['/cnl1.png', '/cnl2.jpg', '/cnl3.jpg', '/cnl4.jpg'];

const logos = [
  { src: '/turkcell.png',  alt: 'Turkcell'  },
  { src: '/vodafone.png',  alt: 'Vodafone'  },
  { src: '/karellogo.png', alt: 'Karel'     },
  { src: '/ntmlogo.png',   alt: 'NTM'       },
  { src: '/ulak.svg',      alt: 'Ulak'      },
  { src: '/ttlogo.png',    alt: 'TT'        },
];

const stats = [
  { value: '500+', label: 'Kurulum Projesi' },
  { value: '10+',  label: 'Yıl Tecrübe'    },
  { value: '%100', label: 'Başarı Oranı'   },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev]       = useState<number | null>(null);
  const [flash, setFlash]     = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (current + 1) % bgImages.length;

      // 1. Show the flash burst
      setFlash(false);
      requestAnimationFrame(() => requestAnimationFrame(() => setFlash(true)));

      // 2. After a very short delay (peak of flash), swap the visible image
      setTimeout(() => {
        setPrev(current);
        setCurrent(next);
      }, 200);

      // 3. Remove prev layer and clear flash class after full transition
      setTimeout(() => {
        setPrev(null);
        setFlash(false);
      }, 1600);
    }, 8000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <>
      <section id="home" className="relative overflow-hidden" style={{ height: '72vh', minHeight: 520 }}>

        {/* ── Background slideshow ─────────────────── */}
        {/* Previous image — fades out */}
        {prev !== null && (
          <img
            key={`prev-${prev}`}
            src={bgImages[prev]}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center scale-105"
            style={{
              filter: 'brightness(0.45) saturate(1.1)',
              opacity: 0,
              transition: 'opacity 1.2s ease-in-out',
              zIndex: 1,
            }}
          />
        )}
        {/* Current image — always visible */}
        <img
          key={`curr-${current}`}
          src={bgImages[current]}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
          style={{
            filter: 'brightness(0.45) saturate(1.1)',
            zIndex: 2,
          }}
        />

        {/* ── Flash overlay ────────────────────────── */}
        <div
          aria-hidden="true"
          key={flash ? 'flash-on' : 'flash-off'}
          className={`absolute inset-0 bg-white pointer-events-none${flash ? ' hero-flash' : ''}`}
          style={{ zIndex: 15, opacity: 0 }}
        />

        {/* Subtle vignette — darker at edges, lighter in center */}
        <div className="absolute inset-0 z-10"
          style={{
            background:
              'radial-gradient(ellipse 120% 100% at 50% 60%, transparent 30%, rgba(2,8,23,0.55) 100%)',
          }}
        />

        {/* Fine horizontal scan-line texture for depth */}
        <div
          className="absolute inset-0 z-10 opacity-[0.04]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 4px)',
          }}
        />

        {/* ── Content ────────────────────────────────── */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">

          {/* Live badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-white/15 bg-white/8 backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[11px] font-bold text-white/70 uppercase tracking-[0.18em]">
              {companyData.tagline}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
            CNL İletişim
          </h1>

          {/* Thin accent line */}
          <div className="mt-6 w-12 h-[2px] rounded-full bg-white/25" />

          {/* Sub-text */}
          <p className="mt-6 text-base sm:text-lg text-white/60 max-w-xl leading-relaxed font-light">
            {companyData.description}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white text-slate-900 text-sm font-bold shadow-xl hover:shadow-white/20 hover:bg-slate-50 transition-all duration-200"
            >
              Hizmetlerimiz
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-white border border-white/25 hover:bg-white/10 backdrop-blur-sm transition-all duration-200"
            >
              Bize Ulaşın
            </a>
          </div>
        </div>

        {/* ── Stats bar — pinned to bottom ───────────── */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          {/* Glass strip */}
          <div className="border-t border-white/10 bg-black/30 backdrop-blur-md">
            <div className="container-custom px-6">
              <div className="flex items-stretch divide-x divide-white/10">
                {stats.map(({ value, label }) => (
                  <div key={label} className="flex-1 py-5 flex flex-col items-center">
                    <span className="text-2xl font-extrabold text-white">{value}</span>
                    <span className="mt-0.5 text-[10px] uppercase tracking-widest text-white/45 font-semibold">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Partners — seamless infinite scroll ──────── */}
      <section className="relative py-9 bg-white border-b border-slate-100 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-28 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-28 z-10 bg-gradient-to-l from-white to-transparent" />

        <div className="flex w-max animate-scroll-logos">
          {[0, 1, 2, 3].map((set) => (
            <div
              key={set}
              aria-hidden={set > 0}
              className="flex items-center gap-16 px-12 shrink-0"
            >
              {logos.map(({ src, alt }) => (
                <img
                  key={alt}
                  src={src}
                  alt={alt}
                  className="h-8 w-auto object-contain grayscale opacity-45 hover:grayscale-0 hover:opacity-90 transition-all duration-300 cursor-default"
                />
              ))}
            </div>
          ))}
        </div>

        <p className="text-center text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mt-5">
          Referanslarımız
        </p>
      </section>
    </>
  );
};

export default Hero;
