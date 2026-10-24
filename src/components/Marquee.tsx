import React from 'react';

interface MarqueeProps {
  id?: string;
  items: string[];
  separator?: string;
  speed?: 'normal' | 'fast' | 'slow';
  direction?: 'left' | 'right';
  theme?: 'light' | 'dark' | 'orange';
  className?: string;
  fontSize?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  id,
  items,
  separator = '•',
  speed = 'normal',
  direction = 'left',
  theme = 'light',
  className = '',
  fontSize = 'text-4xl sm:text-6xl md:text-7xl',
}) => {
  const repeatedItems = [...items, ...items, ...items, ...items];

  const animationClass =
    direction === 'right'
      ? 'animate-marquee-right'
      : speed === 'fast'
      ? 'animate-marquee-fast'
      : 'animate-marquee-left';

  const themeClasses = {
    light: 'bg-[#F5F4F0] text-[#050505] border-y border-black/10',
    dark: 'bg-[#000000] text-white/90 border-y border-white/10',
    orange: 'bg-[#F7A928] text-black border-y border-black',
  }[theme];

  return (
    <div
      id={id}
      className={`overflow-hidden select-none py-4 sm:py-6 ${themeClasses} ${className}`}
      aria-hidden="true"
    >
      <div className={animationClass}>
        {repeatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-6 sm:gap-10 px-3 sm:px-5 shrink-0"
          >
            <span
              className={`font-display font-black uppercase tracking-tight ${fontSize} transition-opacity duration-300 hover:opacity-80`}
            >
              {item}
            </span>
            <span className="text-[#F7A928] text-2xl sm:text-4xl opacity-80 font-bold">
              {separator}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
