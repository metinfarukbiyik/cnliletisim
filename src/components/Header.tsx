import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Ana Sayfa', href: '#home' },
    { label: 'Hizmetlerimiz', href: '#services' },
    { label: 'Hakkımızda', href: '#about' },
    { label: 'İletişim', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/70 backdrop-blur-sm'
    }`}>
      <div className="container-custom px-6">
        <nav className="flex items-center justify-between h-16">
          <Logo size="md" />

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-700 hover:text-slate-900 font-medium transition-colors text-sm relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-slate-700 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-slate-700 hover:text-slate-900 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
