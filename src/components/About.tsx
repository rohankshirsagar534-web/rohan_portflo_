import React from 'react';
import { ArrowUpRight, Camera, Film, Sparkles, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Marquee } from './Marquee';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative bg-[#000000] text-white py-20 sm:py-28 overflow-hidden film-grain-dark border-t border-white/10"
    >
      {/* Huge Horizontally Moving Marquee */}
      <div className="mb-14 sm:mb-20">
        <Marquee
          items={['ABOUT', 'VISION', 'DISCIPLINES', 'EXPERIENCE', 'ABOUT', 'CREATOR']}
          theme="dark"
          speed="normal"
          fontSize="text-5xl sm:text-7xl md:text-9xl"
          className="border-white/15 bg-black"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        
        {/* Top Section Header with Editorial Index */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 sm:mb-16 border-b border-white/15 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="text-[#F7A928] font-bold">[ 02 ]</span>
            <span className="tracking-widest uppercase text-white/70">
              PHILOSOPHY &amp; PROFILE
            </span>
          </div>
          <div className="flex items-center gap-6 text-white/50">
            <span className="hidden sm:inline">FRAME: 2.39:1 CINEMASCOPE</span>
            <span className="text-[#F7A928]">AUDIO // 48KHZ 24-BIT</span>
          </div>
        </div>

        {/* Main Grid: Left Portrait/Visual with Viewfinder & Right Editorial Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Cinematic Photo Frame with Camera Optics & Floating Elements */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl sm:rounded-[32px] overflow-hidden border border-white/20 bg-[#111111] p-3 aspect-[4/5] shadow-2xl group">
              
              {/* Inner Photo */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-zinc-900">
                <img
                  src="/images/profile_rohan.jpg"
                  alt="Rohan Kshirsagar Profile"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out brightness-95"
                />

                {/* Viewfinder Overlays & Crosshairs */}
                <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-start font-mono text-[10px] text-white/80">
                    <span className="bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-xs border border-white/10">
                      CAM A // 50MM T1.5
                    </span>
                    <span className="bg-red-600/80 px-2 py-0.5 rounded-xs font-bold uppercase text-white flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                      STBY
                    </span>
                  </div>

                  {/* Center Optical reticle */}
                  <div className="self-center flex items-center justify-center w-16 h-16 border border-white/40 rounded-full relative">
                    <div className="w-2 h-2 rounded-full bg-[#F7A928]"></div>
                    <div className="absolute -top-2 w-0.5 h-2 bg-white/60"></div>
                    <div className="absolute -bottom-2 w-0.5 h-2 bg-white/60"></div>
                    <div className="absolute -left-2 w-2 h-0.5 bg-white/60"></div>
                    <div className="absolute -right-2 w-2 h-0.5 bg-white/60"></div>
                  </div>

                  <div className="flex justify-between items-end font-mono text-[10px] text-white/80">
                    <span className="bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-xs">
                      SHUTTER: 180.0°
                    </span>
                    <span className="bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-xs text-[#F7A928]">
                      WB: 5600K
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Circular Graphic Elements inspired by camera dials */}
              <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-full bg-[#F7A928] text-black font-mono text-[9px] p-2 flex flex-col items-center justify-center text-center font-bold shadow-2xl border-4 border-black animate-spin-slow">
                <span className="uppercase tracking-widest leading-none">VISUAL</span>
                <span className="text-base my-0.5">●</span>
                <span className="uppercase tracking-widest leading-none">CRAFT</span>
              </div>
            </div>

            {/* Micro Caption */}
            <div className="mt-4 flex items-center justify-between text-xs font-mono text-white/50 px-2">
              <span>PHOTO: DIRECTORS REEL ARCHIVE</span>
              <span>INDEX: RK-2026</span>
            </div>
          </div>

          {/* RIGHT: Large Heading, Body Copy & Verified Stats */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Large Section Heading */}
            <h2
              id="about-main-title"
              style={{ fontFamily: 'Arial', lineHeight: '108.2px' }}
              className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase mb-8"
            >
              I CREATE<br />
              VISUAL<br />
              <span
                style={{ fontFamily: 'Georgia', lineHeight: '92.2px' }}
                className="text-[#F7A928]"
              >
                EXPERIENCES.
              </span>
            </h2>

            {/* Body Copy */}
            <div className="space-y-5 text-base sm:text-lg text-white/80 font-normal leading-relaxed max-w-2xl">
              <p>
                {PERSONAL_INFO.bio}
              </p>
              <p className="text-white/60 text-sm sm:text-base">
                Whether cutting high-intensity narrative edits, crafting invisible visual effects composites, animating kinetic typographic identities, or engineering clean digital web systems, my work prioritizes visual gravity, emotional precision, and refined aesthetic polish.
              </p>
            </div>

            {/* Core Pillars / Floating highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <div className="p-4 rounded-xl border border-white/10 bg-white/5 flex items-start gap-3.5 hover:border-[#F7A928]/60 transition-colors">
                <div className="p-2 bg-black rounded-lg text-[#F7A928] shrink-0 border border-white/10">
                  <Film size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm tracking-wider uppercase text-white mb-1">
                    SHORT AD FILM CRAFT
                  </h4>
                  <p className="text-xs text-white/60 leading-normal">
                    High-retention commercial pacing, 3-second visual hooks, audio-visual sync, and brand-first emotional tension.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-white/5 flex items-start gap-3.5 hover:border-[#F7A928]/60 transition-colors">
                <div className="p-2 bg-black rounded-lg text-[#F7A928] shrink-0 border border-white/10">
                  <Layers size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm tracking-wider uppercase text-white mb-1">
                    VFX &amp; MOTION SYNERGY
                  </h4>
                  <p className="text-xs text-white/60 leading-normal">
                    Seamless composites, planar tracking, kinetic type, and photoreal integration.
                  </p>
                </div>
              </div>
            </div>

            {/* Editable Verified Statistics */}
            <div className="pt-8 border-t border-white/15 grid grid-cols-3 gap-4 sm:gap-8">
              {PERSONAL_INFO.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#F7A928] tracking-tight leading-none mb-2">
                    {stat.value}
                  </span>
                  <span className="font-mono text-[11px] sm:text-xs tracking-wider uppercase font-bold text-white mb-1">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-white/50 leading-snug hidden sm:inline-block">
                    {stat.detail}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
