import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from './Logo';

const menuItems = [
  { label: 'Ana Sayfa', href: '#home', id: 'home' },
  { label: 'Hizmetler', href: '#services', id: 'services' },
  { label: 'Süreç', href: '#process', id: 'process' },
  { label: 'Hakkımızda', href: '#about', id: 'about' },
  { label: 'İletişim', href: '#contact', id: 'contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    menuItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'color-mix(in srgb, var(--bg) 92%, transparent)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--line)' : 'transparent'}`,
      }}
    >
      <div className="container-custom">
        <nav className="flex items-center h-[68px]">
          <a href="#home" aria-label="CNL İletişim Ana Sayfa">
            <Logo size="md" />
          </a>

          <div className="hidden md:block w-px h-9 mx-6" style={{ background: 'var(--line-strong)' }} />

          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className="mono relative px-3 py-2 text-[12.5px] font-bold tracking-[0.08em] uppercase transition-colors"
                  style={{ color: isActive ? 'var(--ink-strong)' : 'var(--ink-muted)' }}
                >
                  {item.label}
                  <span
                    className="absolute left-3 right-3 -bottom-0.5 h-[2px] origin-left transition-transform duration-300"
                    style={{ background: 'var(--amber)', transform: `scaleX(${isActive ? 1 : 0})` }}
                  />
                </a>
              );
            })}
          </div>

          <div className="ml-auto flex items-center gap-3">
            <span className="hidden lg:inline-flex items-center gap-2 mono text-[11.5px] font-bold tracking-[0.12em]" style={{ color: 'var(--green)' }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-70" style={{ background: 'var(--green)' }} />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: 'var(--green)' }} />
              </span>
              7/24 AKTİF
            </span>
            <a href="#contact" className="btn primary hidden sm:inline-flex !h-9 !text-[12px]">
              Bize Ulaşın <span className="arrow">→</span>
            </a>
            <button
              className="md:hidden btn !h-9 !w-9 !p-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menü"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Scroll progress — packet bar */}
      <div className="absolute left-0 bottom-[-1px] h-[2px] w-full pointer-events-none">
        <div className="h-full sheen" style={{ width: `${progress * 100}%` }} />
      </div>

      {isMenuOpen && (
        <div className="md:hidden menu-in panel mx-4 mb-3 !rounded-[3px]">
          {menuItems.map((item, i) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 mono text-[13px] font-bold tracking-[0.06em] uppercase"
              style={{
                color: active === item.id ? 'var(--ink-strong)' : 'var(--ink-muted)',
                borderTop: i ? '1px solid var(--line-soft)' : 'none',
              }}
            >
              <span style={{ color: 'var(--ink-faint)' }}>{String(i + 1).padStart(2, '0')}</span>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
