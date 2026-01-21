const Logo = ({ className = '', size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Teknolojik Logo İkonu - CSS ile */}
      <div className="relative">
        {/* Ana Hexagon Şekli */}
        <div className="relative w-12 h-12 flex items-center justify-center">
          {/* Arka plan gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 opacity-90 rounded-lg rotate-45"></div>
          
          {/* İç tasarım */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="text-white font-black text-xl tracking-tighter">CNL</div>
          </div>
          
          {/* Glow efekti */}
          <div className="absolute inset-0 bg-blue-500 blur-md opacity-40 rounded-lg"></div>
        </div>
        
        {/* Köşe detayları */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full"></div>
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-600 rounded-full"></div>
      </div>
      
      {/* Logo Metni */}
      <div className="flex flex-col leading-none">
        <span className={`${sizeClasses[size]} font-bold text-gray-800 tracking-tight`}>
          CNL İletişim
        </span>
        <span className="text-xs text-blue-600 font-semibold tracking-wide">
          Base Station Solutions
        </span>
      </div>
    </div>
  );
};

export default Logo;
