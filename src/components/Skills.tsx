import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(SKILL_CATEGORIES[0].id);

  return (
    <section
      id="skills"
      className="py-20 sm:py-28 bg-[#F5F4F0] relative overflow-hidden film-grain border-t border-black/10"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-12 sm:mb-16 border-b border-black/15 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#555555] uppercase mb-3">
              <span className="text-[#F7A928] font-bold">[ 04 ]</span>
              <span>CAPABILITIES &amp; TOOLING</span>
            </div>
            <h2
              id="skills-heading"
              style={{ fontFamily: 'Arial' }}
              className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.9] text-black"
            >
              WHAT I<br />
              <span
                style={{ backgroundColor: '#ff9b09' }}
                className="text-black inline-flex items-center"
              >
                DO<span className="text-[#F7A928]">.</span>
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#555555] font-normal leading-relaxed">
            A versatile multi-tool approach across motion, editorial cutting, composite VFX, spatial 3D and responsive digital layouts.
          </p>
        </div>

        {/* Six Editorial Skill Rows/Cards */}
        <div className="flex flex-col divide-y divide-black/15 border-y border-black/15">
          {SKILL_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;

            return (
              <div
                key={cat.id}
                id={`skill-row-${cat.id}`}
                onMouseEnter={() => setActiveCategory(cat.id)}
                onClick={() => setActiveCategory(cat.id)}
                className={`group cursor-pointer py-6 sm:py-9 px-4 sm:px-6 transition-all duration-300 ${
                  isSelected
                    ? 'bg-black text-[#F5F4F0]'
                    : 'hover:bg-black/5 text-[#050505]'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center">
                  
                  {/* Left: Number & Title */}
                  <div className="md:col-span-4 flex items-center gap-5">
                    <span
                      className={`font-mono text-sm sm:text-base font-bold transition-colors ${
                        isSelected ? 'text-[#F7A928]' : 'text-[#888888] group-hover:text-black'
                      }`}
                    >
                      {cat.number}
                    </span>
                    <h3
                      style={cat.id === 'vfx' ? { fontFamily: 'Arial', fontSize: '52px' } : undefined}
                      className={`font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight transition-transform duration-300 ${
                        isSelected ? 'translate-x-2 text-white' : 'group-hover:translate-x-2'
                      }`}
                    >
                      {cat.title}
                    </h3>
                  </div>

                  {/* Middle: Tagline & Software Pills */}
                  <div className="md:col-span-7 flex flex-col justify-center gap-3">
                    <p
                      className={`text-xs sm:text-sm transition-colors ${
                        isSelected ? 'text-white/80' : 'text-[#555555]'
                      }`}
                    >
                      {cat.tagline}
                    </p>

                    {/* Software Tools Pills */}
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      {cat.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className={`text-xs font-mono px-2.5 py-1 rounded-xs transition-all ${
                            isSelected
                              ? 'bg-white/10 text-white border border-white/20'
                              : 'bg-black/5 text-black border border-black/10 group-hover:bg-white group-hover:border-black/20'
                          }`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Interactive Arrow */}
                  <div className="md:col-span-1 flex justify-end">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? 'bg-[#F7A928] text-black rotate-45'
                          : 'bg-black/5 text-black group-hover:bg-black group-hover:text-[#F7A928] group-hover:rotate-45'
                      }`}
                    >
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                </div>

                {/* Expanded Competencies Drawer when active */}
                {isSelected && (
                  <div className="mt-6 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 animate-in fade-in duration-200">
                    {cat.competencies.map((comp, cIdx) => (
                      <div
                        key={cIdx}
                        className="flex items-center gap-2 text-xs font-mono text-white/90"
                      >
                        <CheckCircle2 size={13} className="text-[#F7A928] shrink-0" />
                        <span>{comp}</span>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Bottom Toolset Summary Strip */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-black/10 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#F7A928]"></span>
            <span className="font-bold text-black uppercase">
              HARDWARE &amp; PIPELINE:
            </span>
            <span className="text-[#666666]">
              Apple Silicon M-Series + NVIDIA CUDA Rigs // 4K 10-Bit Calibrated Rec.709 &amp; DCI-P3 Displays
            </span>
          </div>
          <div className="text-black/60 hidden sm:block">
            READY FOR POST-PRODUCTION COMMISSIONS
          </div>
        </div>

      </div>
    </section>
  );
};
