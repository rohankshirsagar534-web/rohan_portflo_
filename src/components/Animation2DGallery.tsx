import React, { useState, useRef } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Film, 
  Image as ImageIcon, 
  Layers, 
  X,
  Maximize2
} from 'lucide-react';
import { ANIMATION_2D_GALLERY } from '../data/portfolioData';
import { AnimationWorkItem } from '../types';

export const Animation2DGallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'video' | 'photo'>('all');
  const [activeItem, setActiveItem] = useState<AnimationWorkItem | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  const videoCount = ANIMATION_2D_GALLERY.filter((i) => i.type === 'video').length;
  const photoCount = ANIMATION_2D_GALLERY.filter((i) => i.type === 'photo').length;

  const items = filter === 'all' 
    ? ANIMATION_2D_GALLERY 
    : ANIMATION_2D_GALLERY.filter((i) => i.type === filter);

  const handleTogglePlayModal = () => {
    if (!modalVideoRef.current) return;
    if (modalVideoRef.current.paused) {
      modalVideoRef.current.play();
    } else {
      modalVideoRef.current.pause();
    }
  };

  const handleToggleMuteModal = () => {
    if (!modalVideoRef.current) return;
    modalVideoRef.current.muted = !modalVideoRef.current.muted;
    setIsMuted(modalVideoRef.current.muted);
  };

  return (
    <div id="animation-2d-gallery-vault" className="mt-14 mb-8 bg-[#0d0d0d] text-white rounded-3xl p-6 sm:p-8 md:p-10 border border-white/15 shadow-2xl relative overflow-hidden">
      {/* Decorative background grid and glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F7A928]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />

      {/* Header bar of the dedicated vault */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between pb-6 mb-8 border-b border-white/10 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#F7A928] uppercase mb-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#F7A928] animate-pulse" />
            <span>EXCLUSIVE ARCHIVE // DEDICATED VAULT</span>
          </div>
          <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white flex items-center gap-3">
            <span>2D ANIMATION</span>
            <span className="text-[#F7A928] font-mono text-xl sm:text-2xl font-bold px-2.5 py-0.5 rounded-xs border border-[#F7A928]/30 bg-[#F7A928]/10">
              STUDIO
            </span>
          </h3>
          <p className="text-white/70 text-xs sm:text-sm font-mono mt-2 max-w-2xl leading-relaxed">
            Independent showcase reserved strictly for 2D character rigging, hand-drawn loops, sakuga action cuts, and cel-shaded production art.
          </p>
        </div>

        {/* Media Type Filter Tabs */}
        <div className="flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/10 shrink-0 self-start lg:self-end">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              filter === 'all'
                ? 'bg-[#F7A928] text-black shadow-xs'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            <Layers size={13} />
            <span>ALL ({ANIMATION_2D_GALLERY.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setFilter('video')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              filter === 'video'
                ? 'bg-[#F7A928] text-black shadow-xs'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            <Film size={13} />
            <span>VIDEOS ({videoCount})</span>
          </button>

          <button
            type="button"
            onClick={() => setFilter('photo')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              filter === 'photo'
                ? 'bg-[#F7A928] text-black shadow-xs'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            <ImageIcon size={13} />
            <span>PHOTOS ({photoCount})</span>
          </button>
        </div>
      </div>

      {/* Grid of 2D Animation items */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {items.map((item, idx) => {
          const isVideo = item.type === 'video';

          return (
            <div
              key={item.id}
              id={`anim-2d-item-${item.id}`}
              className="group relative bg-[#141414] rounded-2xl border border-white/10 overflow-hidden hover:border-[#F7A928]/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Media Wrapper */}
              <div 
                className="relative aspect-video w-full overflow-hidden bg-black cursor-pointer"
                onClick={() => setActiveItem(item)}
              >
                {isVideo ? (
                  <div className="w-full h-full relative">
                    <img
                      src={item.poster || item.mediaUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-11 h-11 rounded-full bg-[#F7A928] text-black flex items-center justify-center shadow-lg group-hover:scale-110 active:scale-95 transition-all">
                        <Play size={18} className="fill-black ml-0.5" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full relative">
                    <img
                      src={item.mediaUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
                        <Maximize2 size={16} />
                      </div>
                    </div>
                  </div>
                )}

                {/* Top Badges */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none z-10">
                  <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded-xs bg-black/80 backdrop-blur-md text-[#F7A928] border border-white/10 uppercase">
                    2D #{String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className={`font-mono text-[9px] font-bold px-2 py-0.5 rounded-xs uppercase tracking-wider ${
                    isVideo ? 'bg-[#F7A928] text-black' : 'bg-white/90 text-black'
                  }`}>
                    {isVideo ? 'VIDEO' : 'PHOTO'}
                  </span>
                </div>

                {/* Bottom Duration / Category Tag */}
                <div className="absolute bottom-2 right-2 font-mono text-[9px] bg-black/80 backdrop-blur-md text-white/80 px-2 py-0.5 rounded-xs border border-white/10">
                  {item.duration || item.tag}
                </div>
              </div>

              {/* Text Info */}
              <div className="p-4 flex flex-col justify-between flex-1 gap-2.5">
                <div>
                  <div className="font-mono text-[10px] text-[#F7A928] uppercase tracking-wider mb-1">
                    {item.tag}
                  </div>
                  <h4 className="font-display font-bold text-sm uppercase text-white group-hover:text-[#F7A928] transition-colors leading-tight line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-white/60 text-xs mt-1.5 line-clamp-2 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                {item.software && (
                  <div className="flex flex-wrap items-center gap-1 pt-2 border-t border-white/5">
                    {item.software.map((sw, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded-xs bg-white/5 text-white/60"
                      >
                        {sw}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Fullscreen Inspect Modal for any 2D piece */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveItem(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-[#121212] rounded-3xl border border-white/15 overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161616]">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-[#F7A928] font-bold">2D ANIMATION ARCHIVE</span>
                <span className="text-white/30">//</span>
                <span className="text-white/80 uppercase font-bold">{activeItem.tag}</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Close Viewer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Media Screen */}
            <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
              {activeItem.type === 'video' ? (
                <video
                  ref={modalVideoRef}
                  src={activeItem.mediaUrl}
                  poster={activeItem.poster}
                  controls
                  autoPlay
                  loop
                  playsInline
                  className="w-full h-full object-contain"
                >
                  <source src={activeItem.mediaUrl} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={activeItem.mediaUrl}
                  alt={activeItem.title}
                  className="w-full h-full object-contain"
                />
              )}
            </div>

            {/* Info Footer */}
            <div className="p-6 bg-[#161616] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
              <div>
                <h3 className="font-display font-bold text-xl uppercase text-white">
                  {activeItem.title}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm mt-1 max-w-2xl font-sans">
                  {activeItem.description}
                </p>
              </div>

              {activeItem.software && (
                <div className="flex items-center gap-1.5 shrink-0">
                  {activeItem.software.map((sw, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-[10px] uppercase px-2 py-1 rounded-xs bg-white/10 text-white font-bold"
                    >
                      {sw}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
