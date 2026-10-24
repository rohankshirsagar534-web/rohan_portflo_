import React, { useState } from 'react';
import { PROCESS_STAGES } from '../data/portfolioData';

export const CreativeProcess: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  return (
    <section
      id="process"
      className="py-20 sm:py-28 bg-[#000000] text-white relative overflow-hidden film-grain-dark border-t border-white/10"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 mb-16 border-b border-white/15 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-white/50 uppercase mb-3">
              <span className="text-[#F7A928] font-bold">[ 05 ]</span>
              <span>METHODOLOGY &amp; WORKFLOW</span>
            </div>
            <h2
              id="process-heading"
              className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.88] text-white"
            >
              FROM<br />
              IDEA<br />
              TO<br />
              <span className="text-[#F7A928]">IMAGE.</span>
            </h2>
          </div>

          <div className="max-w-md space-y-3">
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              Every production follows a disciplined four-stage pipeline designed to protect the core vision from initial sketch through final color-timed master delivery.
            </p>
            <div className="font-mono text-xs text-[#F7A928] flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#F7A928]"></span>
              <span>STAGE-GATED REVIEW // NON-DESTRUCTIVE PIPELINE</span>
            </div>
          </div>
        </div>

        {/* 4-Stage Horizontal / Responsive Grid with Connecting Lines */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-8 right-8 h-0.5 bg-white/10 -z-0"></div>

          {PROCESS_STAGES.map((stage, idx) => {
            const isHovered = activeStage === idx;

            return (
              <div
                key={stage.number}
                id={`process-stage-${stage.number}`}
                onMouseEnter={() => setActiveStage(idx)}
                className={`relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[360px] ${
                  isHovered
                    ? 'bg-[#111111] border-[#F7A928] shadow-xl translate-y-[-4px]'
                    : 'bg-[#080808] border-white/10 hover:border-white/30'
                }`}
              >
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between mb-8 z-10">
                  <span
                    className={`font-mono text-sm font-bold px-3 py-1 rounded-full border transition-colors ${
                      isHovered
                        ? 'bg-[#F7A928] text-black border-[#F7A928]'
                        : 'bg-white/5 text-white/60 border-white/10'
                    }`}
                  >
                    PHASE {stage.number}
                  </span>

                  <span className="font-mono text-[10px] tracking-widest text-[#F7A928]">
                    [{stage.iconMarker}]
                  </span>
                </div>

                {/* Stage Title & Big Number */}
                <div className="my-auto space-y-3">
                  <div className="font-mono text-xs text-[#F7A928] tracking-widest uppercase font-bold">
                    0{idx + 1} — {stage.phase}
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
                    {stage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                {/* Deliverables checklist */}
                <div className="pt-6 border-t border-white/10 mt-6 space-y-1.5 font-mono text-[11px] text-white/60">
                  <span className="block text-white/40 uppercase text-[9px] tracking-wider mb-2">
                    KEY DELIVERABLES:
                  </span>
                  {stage.deliverables.map((deliv, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#F7A928]"></span>
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
