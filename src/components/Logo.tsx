const Logo = ({ className = '', size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) => {
  const s = { sm: 0.82, md: 1, lg: 1.2 }[size];

  return (
    <div className={`flex items-center ${className}`}>
      {/* Tower mark with animated signal rings */}
      <svg width={40 * s} height={40 * s} viewBox="0 0 40 40" aria-hidden="true" className="flex-none">
        <rect x="0.75" y="0.75" width="38.5" height="38.5" rx="2" fill="var(--panel)" stroke="var(--line-strong)" strokeWidth="1.5" />
        <circle cx="20" cy="13" r="5" fill="none" stroke="var(--blue)" strokeWidth="1.5" className="signal-ring" />
        <circle cx="20" cy="13" r="5" fill="none" stroke="var(--blue)" strokeWidth="1.5" className="signal-ring" style={{ animationDelay: '1.2s' }} />
        <path d="M20 14 L13 33 M20 14 L27 33 M15.3 27 H24.7 M16.8 22 H23.2" stroke="var(--ink-strong)" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="20" cy="13" r="2.6" fill="var(--amber)" stroke="var(--ink-strong)" strokeWidth="1.2" />
      </svg>

      <div className="ml-3 leading-none">
        <div
          className="mono font-extrabold whitespace-nowrap"
          style={{ fontSize: 19 * s, letterSpacing: '0.085em', color: 'var(--ink-strong)' }}
        >
          CNL <em className="italic" style={{ color: 'var(--primary)' }}>İLETİŞİM</em>
        </div>
        <div
          className="mono mt-1 whitespace-nowrap"
          style={{ fontSize: 10.5 * s, letterSpacing: '0.16em', color: 'var(--ink-muted)' }}
        >
          BASE STATION SOLUTIONS
        </div>
      </div>
    </div>
  );
};

export default Logo;
