import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { JOURNEY_ITEMS } from '../data/portfolioData';

interface ExperienceProps {
  onItemClick?: (item: typeof JOURNEY_ITEMS[0]) => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onItemClick }) => {
  return (
    <section
      id="experience"
      className="py-20 sm:py-28 bg-[#F5F4F0] relative overflow-hidden film-grain border-t border-black/10"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 sm:mb-16 border-b border-black/15 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#555555] uppercase mb-3">
              <span className="text-[#F7A928] font-bold">[ 06 ]</span>
              <span>CHRONOLOGY &amp; EXPERIMENTS</span>
            </div>
            <h2
              id="experience-heading"
              style={{ fontFamily: 'Syne' }}
              className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.9] text-black"
            >
              CREATIVE<br />
              <span className="text-black inline-flex items-center">
                JOURNEY<span className="text-[#F7A928]">.</span>
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#555555] font-normal leading-relaxed">
            An evolving body of visual explorations, narrative cuts, technical motion experiments, and digital art commissions.
          </p>
        </div>

        {/* Editorial Exhibition-Style Chronological List */}
        <div className="divide-y divide-black/15 border-y border-black/15">
          {JOURNEY_ITEMS.map((item) => (
            <div
              key={item.number}
              id={`journey-row-${item.number}`}
              onClick={() => onItemClick && onItemClick(item)}
              className="group py-7 sm:py-9 px-4 sm:px-6 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
            >
              {/* Number & Category */}
              <div className="md:col-span-2 flex items-center gap-4">
                <span className="font-mono text-sm font-bold text-[#888888] group-hover:text-[#F7A928] transition-colors">
                  {item.number}
                </span>
                <span className="font-mono text-[11px] px-2 py-0.5 rounded-xs bg-black/5 text-black border border-black/10 group-hover:bg-white/10 group-hover:text-white group-hover:border-white/20 uppercase tracking-wider">
                  {item.category}
                </span>
              </div>

              {/* Title & Description */}
              <div className="md:col-span-7 flex flex-col gap-1.5">
                <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-tight text-black group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#666666] group-hover:text-white/70 leading-relaxed transition-colors">
                  {item.description}
                </p>
              </div>

              {/* Year */}
              <div className="md:col-span-1 font-mono text-sm font-bold text-[#555555] group-hover:text-[#F7A928] transition-colors">
                {item.year}
              </div>

              {/* Interactive View Action */}
              <div className="md:col-span-2 flex items-center justify-start md:justify-end gap-2 font-mono text-xs font-bold text-black group-hover:text-[#F7A928] transition-colors">
                <span>{item.linkText || 'VIEW ↗'}</span>
                <div className="w-8 h-8 rounded-full bg-black/5 group-hover:bg-[#F7A928] group-hover:text-black flex items-center justify-center transition-transform group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Note regarding verified record */}
        <div className="mt-8 flex items-center justify-between text-xs font-mono text-[#888888]">
          <span>RECORD TYPE: VERIFIED CREATIVE REEL</span>
          <span>LOCATION: MUMBAI / GLOBAL COMMISSIONS</span>
        </div>

      </div>
    </section>
  );
};
