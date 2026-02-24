const Logo = ({ className = '', size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) => {
  const textSize = { sm: 'text-base', md: 'text-xl', lg: 'text-2xl' }[size];
  const iconScale = { sm: 'scale-75', md: 'scale-100', lg: 'scale-125' }[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Signal Tower Icon */}
      <div className={`relative flex items-end justify-center ${iconScale} origin-left`} style={{ width: 36, height: 36 }}>
        {/* Bars — left to right, height increases */}
        <span className="absolute bottom-0 left-0 w-[5px] rounded-sm bg-slate-800" style={{ height: '45%' }} />
        <span className="absolute bottom-0 w-[5px] rounded-sm bg-slate-800" style={{ left: 8, height: '65%' }} />
        <span className="absolute bottom-0 w-[5px] rounded-sm bg-slate-800" style={{ left: 16, height: '85%' }} />
        <span className="absolute bottom-0 w-[5px] rounded-sm bg-slate-500" style={{ left: 24, height: '55%' }} />

        {/* Pulse dot on tallest bar */}
        <span
          className="absolute top-0 w-[5px] h-[5px] rounded-full bg-slate-800"
          style={{ left: 16 }}
        />
        {/* Animated ring around the dot */}
        <span
          className="absolute rounded-full border border-slate-500 animate-ping opacity-60"
          style={{ top: -3, left: 13, width: 11, height: 11 }}
        />
      </div>

      {/* Text */}
      <div className="flex flex-col leading-none gap-0.5">
        <span className={`${textSize} font-bold text-slate-800 tracking-tight`}>
          CNL İletişim
        </span>
        <span className="text-[10px] font-semibold text-slate-400 tracking-[0.12em] uppercase">
          Base Station Solutions
        </span>
      </div>
    </div>
  );
};

export default Logo;
