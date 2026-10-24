import React, { useState } from 'react';
import { 
  PenTool, 
  Layers, 
  Maximize2, 
  X, 
  Sparkles, 
  Eye, 
  Tag, 
  BookOpen, 
  SlidersHorizontal 
} from 'lucide-react';
import { SKETCH_GALLERY_ITEMS } from '../data/sketchData';
import { SketchItem } from '../types';

export const SketchGallery: React.FC = () => {
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('ALL');
  const [activeSketchModal, setActiveSketchModal] = useState<SketchItem | null>(null);
  const [showUnderdrawing, setShowUnderdrawing] = useState<boolean>(false);

  const subCategories = [
    'ALL',
    'Character & Gestures',
    'Storyboard Thumbnails',
    'Environment Studies',
    'Ink & Concept'
  ];

  const filteredSketches = selectedSubCategory === 'ALL'
    ? SKETCH_GALLERY_ITEMS
    : SKETCH_GALLERY_ITEMS.filter((item) => item.category === selectedSubCategory);

  return (
    <div className="mt-20 pt-16 border-t-2 border-black/15 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-black/15 mb-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#555555] uppercase mb-3">
            <span className="text-[#F7A928] font-bold">[ VAULT ]</span>
            <span>EXPLORATORY ARCHIVE</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-black text-[#F7A928] flex items-center justify-center shrink-0 shadow-sm">
              <PenTool size={22} />
            </div>
            <div>
              <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-black">
                SKETCH GALLERY &amp; ANALOG VAULT
              </h3>
              <p className="text-sm font-mono text-[#555555] mt-1">
                Raw graphite gestures, camera storyboard framing, and ink explorations before the timeline.
              </p>
            </div>
          </div>
        </div>

        {/* Sub-Filter Pills within Sketch Vault */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {subCategories.map((cat) => {
            const isActive = selectedSubCategory === cat;
            const count = cat === 'ALL' 
              ? SKETCH_GALLERY_ITEMS.length 
              : SKETCH_GALLERY_ITEMS.filter((i) => i.category === cat).length;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedSubCategory(cat)}
                className={`text-xs sm:text-sm font-mono font-bold px-4 py-2 rounded-full transition-all duration-200 shrink-0 uppercase tracking-wider cursor-pointer ${
                  isActive
                    ? 'bg-black text-[#F7A928] shadow-xs'
                    : 'bg-white border border-black/15 text-black hover:border-black hover:bg-black/5'
                }`}
              >
                <span>{cat}</span>
                <span className={`ml-1.5 text-xs ${isActive ? 'text-[#F7A928]/90' : 'text-black/50'}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sketch Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {filteredSketches.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              setActiveSketchModal(item);
              setShowUnderdrawing(false);
            }}
            className="group bg-white border border-black/15 rounded-2xl overflow-hidden hover:border-black hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
          >
            {/* Sketch Image Frame */}
            <div className={`relative w-full overflow-hidden bg-[#111111] ${
              item.aspect === 'portrait' ? 'aspect-[3/4]' : item.aspect === 'landscape' ? 'aspect-[16/10]' : 'aspect-square'
            }`}>
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Texture Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              {/* Corner Tag */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono font-bold text-[#F7A928] uppercase border border-white/10">
                <Tag size={10} />
                <span>{item.category}</span>
              </div>

              {/* Inspect Hover Pill */}
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="flex items-center gap-1.5 bg-[#F7A928] text-black text-xs font-mono font-bold px-3 py-1.5 rounded-full shadow-md">
                  <Eye size={12} />
                  <span>INSPECT</span>
                </span>
              </div>

              {item.roughSketchUrl && (
                <div className="absolute top-3 right-3 bg-black/80 text-white/90 text-[10px] font-mono px-2 py-0.5 rounded-xs border border-white/10">
                  UNDERDRAWING AVAIL
                </div>
              )}
            </div>

            {/* Card Content Details */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#666666] mb-1.5">
                  <span className="font-semibold text-black">{item.year}</span>
                  <span className="truncate max-w-[150px]">{item.medium}</span>
                </div>
                <h4 className="font-display font-black text-base sm:text-lg text-black uppercase leading-tight line-clamp-2 group-hover:text-[#F7A928] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs font-mono text-[#555555] mt-2 line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-black/10 flex flex-wrap gap-1.5">
                {item.tags.slice(0, 3).map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono uppercase px-2 py-0.5 bg-black/5 text-[#555555] rounded-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal for Sketch Inspection */}
      {activeSketchModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveSketchModal(null)}
        >
          <div 
            className="bg-[#181818] border border-white/15 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto text-white shadow-2xl flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10 sticky top-0 bg-[#181818]/95 backdrop-blur-md z-10">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-[#F7A928] text-black font-mono font-bold text-xs uppercase">
                  {activeSketchModal.category}
                </span>
                <span className="font-mono text-xs text-[#999999]">
                  {activeSketchModal.year} STUDY
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveSketchModal(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Image Display with Underdrawing Switcher */}
            <div className="p-5 sm:p-8 flex flex-col items-center">
              <div className="relative max-h-[58vh] rounded-xl overflow-hidden bg-black border border-white/10 shadow-2xl">
                <img
                  src={showUnderdrawing && activeSketchModal.roughSketchUrl ? activeSketchModal.roughSketchUrl : activeSketchModal.imageUrl}
                  alt={activeSketchModal.title}
                  className="max-h-[58vh] w-auto object-contain rounded-xl"
                />

                {activeSketchModal.roughSketchUrl && (
                  <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/80 backdrop-blur-md p-1.5 rounded-full border border-white/20">
                    <button
                      type="button"
                      onClick={() => setShowUnderdrawing(false)}
                      className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-colors cursor-pointer ${
                        !showUnderdrawing ? 'bg-[#F7A928] text-black' : 'text-white/70 hover:text-white'
                      }`}
                    >
                      FINISHED INK
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowUnderdrawing(true)}
                      className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-colors cursor-pointer ${
                        showUnderdrawing ? 'bg-[#F7A928] text-black' : 'text-white/70 hover:text-white'
                      }`}
                    >
                      ROUGH PENCIL
                    </button>
                  </div>
                )}
              </div>

              {/* Text Meta Info */}
              <div className="w-full mt-6 space-y-3">
                <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
                  {activeSketchModal.title}
                </h3>
                <div className="text-sm font-mono text-[#F7A928] font-bold">
                  MEDIUM: {activeSketchModal.medium}
                </div>
                <p className="text-sm font-mono text-[#cccccc] leading-relaxed">
                  {activeSketchModal.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
                  {activeSketchModal.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono bg-white/10 px-3 py-1 rounded-full text-[#cccccc]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
