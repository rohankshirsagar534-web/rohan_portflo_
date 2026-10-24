import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice || window.innerWidth < 1024) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectCard = target.closest('[id^="project-card-"], #hero-image-card');
      const interactiveEl = target.closest('button, a, input, select, textarea');

      if (projectCard) {
        setIsHovered(true);
        setCursorText('VIEW');
      } else if (interactiveEl) {
        setIsHovered(true);
        setCursorText('');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      id="custom-cursor"
      className="hidden lg:flex fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 items-center justify-center transition-all duration-75 ease-out"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
    >
      <div
        className={`rounded-full flex items-center justify-center font-mono font-bold tracking-wider transition-all duration-200 ${
          isHovered
            ? cursorText
              ? 'w-16 h-16 bg-[#F7A928] text-black text-xs shadow-xl scale-100'
              : 'w-10 h-10 bg-black/80 border border-[#F7A928] text-white scale-90'
            : 'w-3.5 h-3.5 bg-black text-transparent scale-100'
        }`}
      >
        {cursorText}
      </div>
    </div>
  );
};
