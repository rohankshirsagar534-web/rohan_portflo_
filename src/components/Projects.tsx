import React, { useState } from 'react';
import { ArrowUpRight, Filter, Play, Radio, Sparkles, Film } from 'lucide-react';
import { PROJECTS, ANIMATION_2D_GALLERY } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { Marquee } from './Marquee';
import { Animation2DGallery } from './Animation2DGallery';
import { GraphicDesignShowreel } from './GraphicDesignShowreel';
import { SketchGallery } from './SketchGallery';
import { resolveAsset } from '../utils/assets';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORIES: ProjectCategory[] = [
  'ALL',
  'SHORT AD FILM',
  'VFX',
  'MOTION',
  '3D',
  'GRAPHIC DESIGN',
  'SKETCH GALLERY',
  'WEB',
];

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('ALL');
  const [adFilmSubView, setAdFilmSubView] = useState<'all' | 'ad_film' | '2d_animation'>('all');

  const filteredProjects =
    selectedCategory === 'ALL'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const isShortAdFilmActive = selectedCategory === 'SHORT AD FILM';

  return (
    <section
      id="work"
      className="py-20 sm:py-28 bg-[#F5F4F0] relative overflow-hidden film-grain"
    >
      {/* Marquee Banner */}
      <div className="mb-14 sm:mb-20">
        <Marquee
          items={['SHORT AD FILM', 'VFX', 'MOTION', '3D', 'SKETCH GALLERY', 'GRAPHIC DESIGN', 'WEB', 'SHORT AD FILM', 'VFX']}
          theme="light"
          speed="fast"
          fontSize="text-4xl sm:text-6xl md:text-8xl"
          className="border-black/15 bg-black/5"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Editorial Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-black/15 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#555555] uppercase mb-3">
              <span className="text-[#F7A928] font-bold">[ 03 ]</span>
              <span>INDEXED ARCHIVE</span>
            </div>
            <h2
              id="selected-work-heading"
              style={{
                fontFamily: 'Georgia',
                fontSize: '103px',
                lineHeight: '87.4px',
                backgroundColor: '#e6ab47',
              }}
              className="font-black tracking-tight uppercase text-black"
            >
              SELECTED<br />
              <span className="text-black inline-flex items-center">
                WORK<span className="text-[#F7A928]">.</span>
              </span>
            </h2>
          </div>

          <div className="flex flex-col md:items-end gap-2 text-xs font-mono text-[#555555]">
            <span className="font-bold text-black uppercase">
              SHOWING: {filteredProjects.length} / {PROJECTS.length} ENTRIES
            </span>
            <span>ALL ASSETS DIGITALLY CURATED &amp; VERIFIED</span>
          </div>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto pb-4 mb-8 scrollbar-none py-1">
          <div className="flex items-center gap-2 text-sm sm:text-base font-mono font-bold text-black uppercase mr-2 sm:mr-3 shrink-0">
            <Filter size={18} className="text-[#F7A928]" />
            <span>FILTER:</span>
          </div>
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            const count = cat === 'ALL' ? PROJECTS.length : PROJECTS.filter((p) => p.category === cat).length;
            const displayLabel = cat;
            return (
              <button
                key={cat}
                id={`filter-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  if (cat === 'SHORT AD FILM') {
                    setAdFilmSubView('all');
                  }
                }}
                className={`text-sm sm:text-base font-mono font-bold px-5 py-2.5 sm:px-6 sm:py-3 rounded-full transition-all duration-200 shrink-0 uppercase tracking-wider cursor-pointer ${
                  isActive
                    ? 'bg-black text-[#F7A928] shadow-md ring-1 ring-black'
                    : 'bg-white border border-black/15 text-black hover:border-black hover:bg-black/5'
                }`}
              >
                <span>{displayLabel}</span>
                <span className={`ml-2 text-xs sm:text-sm ${isActive ? 'text-[#F7A928]/90 font-bold' : 'text-black/50 font-semibold'}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Dedicated Sub-Navigation when SHORT AD FILM is selected: keeps 2D Animation completely separate from Ad Films & Radio Show */}
        {isShortAdFilmActive && (
          <div className="mb-10 bg-white border border-black/15 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm animate-in fade-in duration-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0d0d0d] text-[#F7A928] flex items-center justify-center shrink-0">
                <Film size={18} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] font-bold tracking-widest text-[#F7A928] uppercase bg-black px-2 py-0.5 rounded-xs">
                    SHORT AD FILM SECTION
                  </span>
                  <span className="text-xs font-mono text-[#777777]">
                    SEPARATE SPACES
                  </span>
                </div>
                <h4 className="font-display font-black text-lg sm:text-xl uppercase text-black">
                  EXPLORE FILM &amp; 2D ANIMATION ARCHIVES
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-1.5 bg-black/5 p-1 rounded-full border border-black/10 shrink-0 self-stretch sm:self-auto overflow-x-auto">
              <button
                type="button"
                id="subfilter-btn-all"
                onClick={() => setAdFilmSubView('all')}
                className={`px-3 sm:px-4 py-1.5 rounded-full font-mono text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  adFilmSubView === 'all'
                    ? 'bg-black text-[#F7A928] shadow-xs'
                    : 'text-black/70 hover:text-black hover:bg-black/5'
                }`}
              >
                SHOW ALL (FILMS &amp; 2D)
              </button>

              <button
                type="button"
                id="subfilter-btn-ad-film"
                onClick={() => setAdFilmSubView('ad_film')}
                className={`px-3 sm:px-4 py-1.5 rounded-full font-mono text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  adFilmSubView === 'ad_film'
                    ? 'bg-black text-[#F7A928] shadow-xs'
                    : 'text-black/70 hover:text-black hover:bg-black/5'
                }`}
              >
                COMMERCIALS &amp; RADIO ({filteredProjects.length})
              </button>

              <button
                type="button"
                id="subfilter-btn-2d-animation"
                onClick={() => setAdFilmSubView('2d_animation')}
                className={`px-3 sm:px-4 py-1.5 rounded-full font-mono text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  adFilmSubView === '2d_animation'
                    ? 'bg-[#F7A928] text-black shadow-xs font-black'
                    : 'text-black/80 hover:text-black hover:bg-[#F7A928]/20'
                }`}
              >
                <Sparkles size={13} className={adFilmSubView === '2d_animation' ? 'fill-black' : 'text-[#F7A928]'} />
                <span>2D ANIMATION VAULT ({ANIMATION_2D_GALLERY.length})</span>
              </button>
            </div>
          </div>
        )}

        {/* 1. Commercials & Radio Show Grid (Hidden if user explicitly selects ONLY 2D Animation) */}
        {(!isShortAdFilmActive || adFilmSubView !== '2d_animation') && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
            {filteredProjects.map((project, index) => {
              // Assign asymmetrical column spans to maintain visual dynamic variety
              let colSpan = 'md:col-span-6';
              if (project.aspectRatio === 'wide') {
                colSpan = 'md:col-span-12 lg:col-span-8';
              } else if (project.aspectRatio === 'square') {
                colSpan = 'md:col-span-6 lg:col-span-4';
              } else if (project.aspectRatio === 'tall') {
                colSpan = 'md:col-span-6 lg:col-span-4';
              }

              return (
                <div
                  key={project.id}
                  id={`project-card-${project.id}`}
                  onClick={() => onSelectProject(project)}
                  className={`${colSpan} group relative bg-white rounded-3xl sm:rounded-[28px] border border-black/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between`}
                >
                  {/* Image Container with Film Grain & Zoom & Video Preview */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-black">
                    {project.videoUrl ? (
                      <video
                        src={resolveAsset(project.videoUrl)}
                        poster={resolveAsset(project.thumbnail)}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        onMouseEnter={(e) => {
                          const v = e.currentTarget;
                          v.play().catch(() => {});
                        }}
                        onMouseLeave={(e) => {
                          const v = e.currentTarget;
                          v.pause();
                          v.currentTime = 0;
                        }}
                        className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-[1.03] group-hover:grayscale-0 transition-all duration-700 ease-out"
                      />
                    ) : (
                      <img
                        src={resolveAsset(project.thumbnail)}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-xs bg-black/70 backdrop-blur-xs text-[#F7A928] border border-white/10">
                        {project.number}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {project.videoUrl && (
                          <span className="flex items-center gap-1 font-mono text-[10px] px-2 py-0.5 rounded-xs bg-[#F7A928] text-black font-bold uppercase tracking-wider">
                            {project.title.includes('RADIO') ? (
                              <>
                                <Radio size={10} className="stroke-[2.5]" />
                                RADIO
                              </>
                            ) : (
                              <>
                                <Play size={10} className="fill-black" />
                                FILM
                              </>
                            )}
                          </span>
                        )}
                        <span className="font-mono text-[11px] px-2.5 py-1 rounded-xs bg-white/90 text-black font-semibold uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Image Overlay Details */}
                    <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                      <div className="font-mono text-[10px] text-[#F7A928] uppercase tracking-wider mb-1">
                        {project.categoryDisplay}
                      </div>
                      <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white group-hover:text-[#F7A928] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Lower Details & Interactive Action */}
                  <div className="p-5 sm:p-6 flex flex-col justify-between gap-4">
                    <p className="text-xs sm:text-sm text-[#555555] line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-black/10">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {project.software.slice(0, 3).map((sw, sIdx) => (
                          <span
                            key={sIdx}
                            className="font-mono text-[10px] uppercase px-2 py-0.5 rounded-xs bg-black/5 text-[#444444]"
                          >
                            {sw}
                          </span>
                        ))}
                      </div>

                      {/* Circular Action Button */}
                      <div className="w-10 h-10 rounded-full bg-black text-white group-hover:bg-[#F7A928] group-hover:text-black flex items-center justify-center transition-all duration-300 group-hover:rotate-45 shrink-0 shadow-xs">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* 2. Distinct, Separated 2D Animation Space (Rendered when SHORT AD FILM is selected and user views ALL or 2D ANIMATION) */}
        {isShortAdFilmActive && (adFilmSubView === 'all' || adFilmSubView === '2d_animation') && (
          <Animation2DGallery />
        )}

        {/* 3. Dedicated Graphic Design Showreel: 4 9:16 Video Reels (2x2 grid), Selected Graphic Work Gallery, and Behind The Process Slider */}
        {(selectedCategory === 'ALL' || selectedCategory === 'GRAPHIC DESIGN') && (
          <GraphicDesignShowreel />
        )}

        {/* 4. Dedicated Sketch Gallery & Analog Vault: Raw Gesture, TVC Storyboards, Inks & Lighting Studies */}
        {(selectedCategory === 'ALL' || selectedCategory === 'SKETCH GALLERY') && (
          <SketchGallery />
        )}
      </div>
    </section>
  );
};
