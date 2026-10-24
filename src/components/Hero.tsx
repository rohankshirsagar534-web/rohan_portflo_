import React, { useState } from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.getBoundingClientRect();
    const centerX = card.left + card.width / 2;
    const centerY = card.top + card.height / 2;
    const rotateX = ((e.clientY - centerY) / (card.height / 2)) * -6;
    const rotateY = ((e.clientX - centerX) / (card.width / 2)) * 6;
    setCardTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setCardTilt({ x: 0, y: 0 });
  };

  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-12 sm:pt-32 sm:pb-16 flex flex-col justify-between overflow-hidden film-grain font-bold text-[20px] leading-[23px]"
    >
      {/* Decorative background grid line accents */}
      <div className="absolute inset-0 pointer-events-none max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6 opacity-20">
        <div className="border-r border-black/30 h-full"></div>
        <div className="border-r border-black/30 h-full hidden md:block"></div>
        <div className="border-r border-black/30 h-full"></div>
        <div className="border-r border-black/30 h-full hidden md:block"></div>
        <div className="border-r border-black/30 h-full"></div>
        <div className="border-r border-black/30 h-full hidden md:block"></div>
        <div className="border-r border-black/30 h-full"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 w-full my-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Editorial Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Small Top Metadata Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2.5 h-2.5 bg-[#F7A928] rounded-full"></div>
              <div className="flex flex-col">
                <span className="font-mono text-[28px] leading-[42px] tracking-widest uppercase font-bold text-black">
                  {PERSONAL_INFO.name}
                </span>
                <span className="font-mono text-[16px] tracking-widest uppercase text-[#555555]">
                  {PERSONAL_INFO.shortRole}
                </span>
              </div>
              <span className="text-black/30 font-mono text-xs ml-auto hidden sm:inline-block">
                [ EDITION 2026 // VOL. 01 ]
              </span>
            </div>

            {/* Main Headline (Oversized Editorial Typography) */}
            <h1
              id="hero-main-title"
              className="font-display font-black text-black text-[69px] leading-[84.72px] tracking-tighter uppercase mb-6 select-none"
            >
              VISUAL<br />
              <span className="text-black inline-flex items-center leading-[98.72px]">
                STORYTELLER<span className="text-[#F7A928]">.</span>
              </span>
            </h1>

            {/* Secondary Subtitle & Bio intro */}
            <p className="text-base sm:text-lg md:text-xl text-[#444444] font-normal leading-relaxed max-w-xl mb-9">
              {PERSONAL_INFO.heroSubtext}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                id="hero-view-work-btn"
                href="#work"
                onClick={scrollToWork}
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-black text-[#F5F4F0] font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-xs transition-all duration-300 hover:bg-[#F7A928] hover:text-black hover:shadow-lg focus:outline-hidden"
              >
                <span>VIEW MY WORK</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                id="hero-contact-btn"
                href="#contact"
                onClick={scrollToContact}
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-transparent border border-black/30 text-black font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-xs transition-all duration-300 hover:border-black hover:bg-black hover:text-[#F7A928] focus:outline-hidden"
              >
                <span>LET'S TALK</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            {/* Editorial Quick Tags */}
            <div className="mt-10 pt-6 border-t border-black/10 flex flex-wrap items-center gap-3 text-xs font-mono text-[#666666]">
              <span className="px-2.5 py-1 bg-black/5 rounded-xs text-[13px]">#CINEMATIC_VFX</span>
              <span className="px-2.5 py-1 bg-black/5 rounded-xs">#VIDEO_POST</span>
              <span className="px-2.5 py-1 bg-black/5 rounded-xs text-[13px]">#MOTION_SYSTEMS</span>
              <span className="px-2.5 py-1 bg-black/5 rounded-xs">#3D_ART</span>
            </div>
          </div>

          {/* RIGHT SIDE: Large Rounded Image Card with Orange Background */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              id="hero-image-card"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${cardTilt.x}deg) rotateY(${cardTilt.y}deg)`,
                transition: 'transform 0.15s ease-out',
              }}
              className="relative w-full max-w-[440px] aspect-[4/5] bg-[#F7A928] rounded-3xl sm:rounded-[32px] p-3 sm:p-4 shadow-2xl flex flex-col justify-between overflow-hidden group cursor-pointer border border-black/10"
              onClick={scrollToWork}
            >
              {/* Inner Film Frame Graphic Accents */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
                <span className="font-mono text-[10px] tracking-widest uppercase font-bold text-black/80">
                  REC ● 24FPS
                </span>
              </div>

              <div className="absolute top-4 right-4 z-20 font-mono text-[10px] tracking-widest text-black/80 font-bold bg-white/70 backdrop-blur-xs px-2 py-0.5 rounded-xs">
                PRORES 4K
              </div>

              {/* Central Photographic Visual */}
              <div className="relative w-full h-[82%] rounded-2xl sm:rounded-[24px] overflow-hidden bg-black mt-6">
                <img
                  id="hero-card-img"
                  src="https://i.ibb.co/0jdjh24J/Chat-GPT-Image-Sep-17-2026-02-16-34-AM.png"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/assets/hero_portrait_v2.png';
                  }}
                  referrerPolicy="no-referrer"
                  alt="Rohan Kshirsagar Visual Universe"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                
                {/* Viewfinder Crosshairs */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                  <div className="w-12 h-12 border border-white/60 relative">
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-white"></div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-white"></div>
                    <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-0.5 h-2 bg-white"></div>
                    <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-0.5 h-2 bg-white"></div>
                  </div>
                </div>

                {/* Card Overlay Text */}
                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <div
                    id="hero-card-eyebrow"
                    className="font-mono text-[10px] text-[#F7A928] uppercase tracking-wider mb-0.5"
                  >
                    BEHIND THE FRAME
                  </div>
                  <h3
                    id="hero-card-title"
                    className="font-display font-bold text-lg sm:text-xl uppercase tracking-tight"
                  >
                    I turn raw ideas into visual experiences.
                  </h3>
                </div>
              </div>

              {/* Bottom Card Footer with Circular Arrow */}
              <div className="flex items-center justify-between px-2 pt-2">
                <div className="flex flex-col">
                  <span
                    id="hero-card-author-name"
                    className="font-display font-extrabold text-xs uppercase tracking-wider text-black"
                  >
                    ROHAN KSHIRSAGAR
                  </span>
                  <span className="font-mono text-[10px] text-black/70">
                    CLICK TO DISCOVER WORK
                  </span>
                </div>
                
                {/* Circular Arrow Button */}
                <div className="w-10 h-10 rounded-full bg-black text-[#F7A928] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black shadow-md">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Hero Indicator & Timecode strip */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 w-full z-10 mt-8 pt-4 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#555555]">
        <div className="flex items-center gap-6">
          <span>LOC: MUMBAI / REMOTE</span>
          <span className="hidden md:inline-block">TIMECODE: 00:00:24:16</span>
          <span className="hidden sm:inline-block">ISO: 400 // SHUTTER: 180°</span>
        </div>

        <button
          type="button"
          onClick={onExploreClick || scrollToWork}
          className="inline-flex items-center gap-2 font-bold tracking-widest text-black hover:text-[#F7A928] transition-colors focus:outline-hidden group"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown
            size={16}
            className="animate-bounce group-hover:text-[#F7A928]"
          />
        </button>
      </div>
    </section>
  );
};
