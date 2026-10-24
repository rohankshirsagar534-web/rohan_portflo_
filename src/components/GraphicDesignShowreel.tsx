import React, { useState, useRef } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  X, 
  Maximize2, 
  Sliders
} from 'lucide-react';
import { 
  GRAPHIC_DESIGN_REELS, 
  GRAPHIC_DESIGN_GALLERY, 
  GRAPHIC_DESIGN_PROCESS 
} from '../data/graphicDesignData';
import { 
  GraphicDesignGalleryItem
} from '../types';
import { resolveAsset } from '../utils/assets';

export const GraphicDesignShowreel: React.FC = () => {
  // --- PART 1: REELS STATE ---
  const [playingReelId, setPlayingReelId] = useState<string | null>(null);
  const [mutedReels, setMutedReels] = useState<Record<string, boolean>>({
    'reel-01': true,
    'reel-02': true,
    'reel-03': true,
    'reel-04': true,
  });
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const toggleReelPlayback = (reelId: string) => {
    const video = videoRefs.current[reelId];
    if (!video) return;

    if (playingReelId === reelId && !video.paused) {
      video.pause();
      setPlayingReelId(null);
    } else {
      // Pause any other playing reel
      Object.keys(videoRefs.current).forEach((id) => {
        const v = videoRefs.current[id];
        if (id !== reelId && v && !v.paused) {
          v.pause();
        }
      });
      video.play().then(() => {
        setPlayingReelId(reelId);
      }).catch(() => {
        // Fallback for auto-play block if unmuted
        video.muted = true;
        setMutedReels(prev => ({ ...prev, [reelId]: true }));
        video.play();
        setPlayingReelId(reelId);
      });
    }
  };

  const toggleMute = (e: React.MouseEvent, reelId: string) => {
    e.stopPropagation();
    const video = videoRefs.current[reelId];
    if (!video) return;
    video.muted = !video.muted;
    setMutedReels(prev => ({ ...prev, [reelId]: video.muted }));
  };

  // --- PART 2: GALLERY STATE ---
  const [selectedGalleryCat, setSelectedGalleryCat] = useState<string>('ALL');
  const [activeGalleryPreview, setActiveGalleryPreview] = useState<GraphicDesignGalleryItem | null>(null);

  const galleryCategories = ['ALL', 'POSTERS', 'BANNERS', 'THUMBNAILS', 'ADVERTISEMENTS', 'BRANDING'];

  const filteredGallery = selectedGalleryCat === 'ALL'
    ? GRAPHIC_DESIGN_GALLERY
    : GRAPHIC_DESIGN_GALLERY.filter(item => 
        item.category.toUpperCase() === selectedGalleryCat.toUpperCase()
      );

  // --- PART 3: BEFORE & AFTER STATE ---
  const [activeProcessIndex, setActiveProcessIndex] = useState<number>(0);
  const [sliderPos, setSliderPos] = useState<number>(50);
  const activeProcess = GRAPHIC_DESIGN_PROCESS[activeProcessIndex] || GRAPHIC_DESIGN_PROCESS[0];

  return (
    <div id="graphic-design-showreel" className="mt-20 pt-16 border-t border-black/15">
      {/* =========================================================================
          MAIN SECTION HEADER: GRAPHIC DESIGN SHOWREEL
         ========================================================================= */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-black/15 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#555555] uppercase mb-3">
            <span className="text-[#F7A928] font-bold">[ 03.B ]</span>
            <span>SHOWCASE ARCHIVE</span>
          </div>
          <h2
            style={{ fontFamily: 'Times New Roman' }}
            className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.9] text-black"
          >
            GRAPHIC DESIGN<br />
            <span className="text-black inline-flex items-center">
              SHOWREEL<span className="text-[#F7A928]">.</span>
            </span>
          </h2>
        </div>

        <div className="flex flex-col md:items-end gap-2 text-xs font-mono text-[#555555]">
          <span className="font-bold text-black uppercase flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-[#F7A928] animate-pulse" />
            4 REELS // POSTERS // THUMBNAILS // BEFORE &amp; AFTER
          </span>
          <span>CURATED EDITORIAL DESIGN SYSTEM</span>
        </div>
      </div>

      {/* =========================================================================
          PART 1 — GRAPHIC DESIGN REELS (Exactly 4 cards in a 2x2 responsive grid)
         ========================================================================= */}
      <div className="mb-24">
        {/* Subheader */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-8 border-b border-black/10 gap-3">
          <div className="flex items-center gap-3">
            <div
              style={{ width: '45px', height: '49px', fontSize: '32px' }}
              className="w-8 h-8 rounded-lg bg-black text-[#F7A928] flex items-center justify-center font-mono text-xs font-bold"
            >
              01
            </div>
            <div>
              <h3
                style={{ fontSize: '27px', lineHeight: '39px' }}
                className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-black"
              >
                VERTICAL REELS SHOWCASE
              </h3>
              <p className="text-xs font-mono text-[#666666]">
                9:16 High-Impact Motion Design, Typography &amp; Social Key Visuals
              </p>
            </div>
          </div>
          <span className="font-mono text-[11px] font-bold px-3 py-1 rounded-full bg-black text-[#F7A928] self-start sm:self-auto uppercase">
            CLICK TO PLAY WITH AUDIO
          </span>
        </div>

        {/* 2x2 Grid of 9:16 Vertical Video Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {GRAPHIC_DESIGN_REELS.map((reel) => {
            const isPlaying = playingReelId === reel.id;
            const isMuted = mutedReels[reel.id] ?? true;

            return (
              <div
                key={reel.id}
                id={`graphic-reel-${reel.id}`}
                className="group relative bg-[#0D0D0D] text-white rounded-3xl sm:rounded-[32px] border border-black/20 overflow-hidden shadow-xl hover:border-[#F7A928]/60 transition-all duration-300 flex flex-col justify-between"
              >
                {/* 9:16 Vertical Media Container */}
                <div 
                  className="relative aspect-[9/16] w-full overflow-hidden bg-black cursor-pointer select-none"
                  onClick={() => toggleReelPlayback(reel.id)}
                >
                  {/* HTML5 Video with replaceable videoUrl */}
                  <video
                    ref={(el) => { videoRefs.current[reel.id] = el; }}
                    src={reel.videoUrl.includes('kd46rzq7') || reel.videoUrl.includes('typography_graphic_design') ? resolveAsset('/videos/typography_graphic_design.mp4') : resolveAsset(reel.videoUrl)}
                    poster={reel.videoUrl.includes('kd46rzq7') || reel.videoUrl.includes('typography_graphic_design') ? resolveAsset('/images/typography_design_poster.jpg') : resolveAsset(reel.poster)}
                    loop
                    playsInline
                    controls={isPlaying}
                    muted={isMuted}
                    preload="metadata"
                    className="w-full h-full object-cover"
                    onPlay={() => setPlayingReelId(reel.id)}
                    onPause={() => {
                      if (playingReelId === reel.id) setPlayingReelId(null);
                    }}
                  >
                    <source 
                      src={reel.videoUrl.includes('kd46rzq7') || reel.videoUrl.includes('typography_graphic_design') ? resolveAsset('/videos/typography_graphic_design.mp4') : resolveAsset(reel.videoUrl)} 
                      type="video/mp4" 
                    />
                  </video>

                  {/* Gradient vignettes */}
                  <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
                    isPlaying 
                      ? 'bg-gradient-to-t from-black/80 via-transparent to-black/60 opacity-60' 
                      : 'bg-gradient-to-t from-black/90 via-black/30 to-black/70 opacity-90'
                  }`} />

                  {/* Top Bar Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-xs bg-black/80 backdrop-blur-md text-[#F7A928] border border-white/10 uppercase">
                      REEL // {reel.number}
                    </span>
                    <div className="flex items-center gap-2 pointer-events-auto">
                      {isPlaying && (
                        <button
                          type="button"
                          onClick={(e) => toggleMute(e, reel.id)}
                          className="w-8 h-8 rounded-full bg-black/80 backdrop-blur-md text-white hover:text-[#F7A928] border border-white/10 flex items-center justify-center transition-colors cursor-pointer"
                          title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                        >
                          {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                        </button>
                      )}
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-xs bg-white/10 backdrop-blur-md text-white/90 border border-white/10">
                        {reel.duration || '9:16'}
                      </span>
                    </div>
                  </div>

                  {/* Play Button Overlay (when paused) */}
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                      <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#F7A928] text-black flex items-center justify-center shadow-2xl group-hover:scale-110 active:scale-95 transition-all duration-300">
                        <Play size={26} className="fill-black ml-1" />
                      </div>
                    </div>
                  )}

                  {/* Bottom Overlay Title & Subtext inside video */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 pointer-events-none">
                    <div className="font-mono text-[10px] text-[#F7A928] uppercase tracking-wider mb-1">
                      {reel.year || '2025'} // EDITABLE REEL
                    </div>
                    <h4 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-white leading-tight">
                      {reel.title}
                    </h4>
                    <p className="text-white/70 text-xs mt-1 line-clamp-2 font-sans">
                      {reel.tagline}
                    </p>
                  </div>
                </div>

                {/* Card Lower Controls & Software Tags */}
                <div className="p-5 sm:p-6 bg-[#121212] flex flex-col justify-between gap-3 border-t border-white/10">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {reel.software.map((sw, sIdx) => (
                        <span
                          key={sIdx}
                          className="font-mono text-[10px] uppercase px-2.5 py-1 rounded-xs bg-white/5 text-white/80 border border-white/10"
                        >
                          {sw}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleReelPlayback(reel.id)}
                      className="font-mono text-xs font-bold px-3 py-1.5 rounded-full bg-[#F7A928] text-black hover:bg-white transition-colors cursor-pointer flex items-center gap-1.5 shrink-0"
                    >
                      {isPlaying ? (
                        <>
                          <Pause size={12} className="fill-black" />
                          <span>PAUSE</span>
                        </>
                      ) : (
                        <>
                          <Play size={12} className="fill-black" />
                          <span>PLAY REEL</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Additional Context & Typography / Graphic Design Metadata */}
                  <div className="flex items-center justify-between text-[11px] font-mono pt-2 border-t border-white/10">
                    <span className="text-[#F7A928] font-bold uppercase tracking-wider truncate max-w-[200px] sm:max-w-[240px]">
                      {reel.title}
                    </span>
                    <span className="text-white/40 uppercase shrink-0">
                      {reel.duration || '9:16'} // 1080P
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          PART 2 — GRAPHIC DESIGN GALLERY ("SELECTED GRAPHIC WORK")
         ========================================================================= */}
      <div className="mb-24">
        {/* Subheader & Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-6 mb-8 border-b border-black/10 gap-6">
          <div className="flex items-center gap-3">
            <div
              style={{ width: '44px', height: '53px', fontSize: '28px' }}
              className="w-8 h-8 rounded-lg bg-black text-[#F7A928] flex items-center justify-center font-mono text-xs font-bold"
            >
              02
            </div>
            <div>
              <h3
                style={{ fontFamily: 'Verdana', fontSize: '46px' }}
                className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-black"
              >
                SELECTED GRAPHIC WORK
              </h3>
              <p className="text-xs font-mono text-[#666666]">
                Posters, Banners, YouTube Thumbnails, Advertisements &amp; Visual Systems
              </p>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none shrink-0">
            {galleryCategories.map((cat) => {
              const isActive = selectedGalleryCat === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedGalleryCat(cat)}
                  className={`text-xs font-mono font-bold px-3.5 py-1.5 rounded-full transition-all uppercase tracking-wider cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-black text-[#F7A928] shadow-sm'
                      : 'bg-white border border-black/15 text-black hover:bg-black/5'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Image Gallery preserving natural aspect ratios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item) => {
            // Determine aspect ratio class based on item
            let aspectClass = 'aspect-[3/4]'; // Default poster (portrait)
            if (item.aspectRatio === 'banner' || item.aspectRatio === 'thumbnail') {
              aspectClass = 'aspect-video';
            } else if (item.aspectRatio === 'square') {
              aspectClass = 'aspect-square';
            }

            return (
              <div
                key={item.id}
                id={`gallery-item-${item.id}`}
                onClick={() => setActiveGalleryPreview(item)}
                className="group relative bg-white rounded-2xl sm:rounded-3xl border border-black/10 overflow-hidden shadow-sm hover:shadow-xl hover:border-black transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className={`relative ${aspectClass} w-full overflow-hidden bg-black`}>
                  <img
                    src={resolveAsset(item.imageUrl)}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  
                  {/* Subtle Dark Vignette & Hover Action */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-40 group-hover:opacity-75 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#F7A928] text-black flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
                      <Maximize2 size={18} />
                    </div>
                  </div>

                  {/* Badges on Image */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                    <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-xs bg-black/80 backdrop-blur-md text-[#F7A928] uppercase border border-white/10">
                      {item.category}
                    </span>
                    <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-xs bg-white/90 text-black uppercase">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 gap-2">
                  <div>
                    <h4 className="font-display font-bold text-base uppercase text-black group-hover:text-[#F7A928] transition-colors leading-tight line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-[#555555] text-xs mt-1 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-1 pt-2 border-t border-black/10">
                    {item.software.map((sw, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded-xs bg-black/5 text-[#555555]"
                      >
                        {sw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          PART 3 — BEFORE & AFTER ("BEHIND THE PROCESS")
         ========================================================================= */}
      <div className="mb-12">
        {/* Subheader & Project Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-6 mb-8 border-b border-black/10 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-black text-[#F7A928] flex items-center justify-center font-mono text-xs font-bold">
              03
            </div>
            <div>
              <h3
                style={{ fontSize: '40px', lineHeight: '66px' }}
                className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-black"
              >
                BEHIND THE PROCESS
              </h3>
              <p className="text-xs font-mono text-[#666666]">
                Interactive Split Comparison — Drag Slider to Reveal the Raw Assets vs Master Grade
              </p>
            </div>
          </div>

          {/* Project Switcher Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none shrink-0">
            {GRAPHIC_DESIGN_PROCESS.map((p, idx) => {
              const isActive = activeProcessIndex === idx;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => {
                    setActiveProcessIndex(idx);
                    setSliderPos(50);
                  }}
                  className={`px-3.5 py-1.5 rounded-full font-mono text-xs font-bold transition-all uppercase cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-black text-[#F7A928] shadow-sm'
                      : 'bg-white border border-black/15 text-black hover:bg-black/5'
                  }`}
                >
                  <Sliders size={12} className={isActive ? 'text-[#F7A928]' : 'text-black/50'} />
                  <span>PROJECT {idx + 1}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Comparison Stage */}
        <div className="bg-[#0D0D0D] text-white rounded-3xl sm:rounded-[36px] border border-black/20 p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F7A928]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Stage Info Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4 relative z-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#F7A928] uppercase tracking-wider mb-1">
                <span>PROJECT // 0{activeProcessIndex + 1}</span>
                <span>•</span>
                <span>{activeProcess.subtitle}</span>
              </div>
              <h4
                style={{ fontFamily: 'Times New Roman' }}
                className="font-display font-black text-2xl sm:text-3xl uppercase text-white"
              >
                {activeProcess.title}
              </h4>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="font-mono text-xs text-white/60">
                DRAG OR SWIPE SLIDER
              </span>
              <div className="w-2 h-2 rounded-full bg-[#F7A928] animate-ping" />
            </div>
          </div>

          {/* Interactive Split-Screen Slider Box */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl overflow-hidden border border-white/15 select-none bg-black shadow-2xl">
            {/* 1. After Image (Background layer) */}
            <img
              src={resolveAsset(activeProcess.afterImage)}
              alt={activeProcess.afterLabel}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Labeled Badge for AFTER */}
            <span className="absolute bottom-4 right-4 bg-black/85 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-bold text-[#F7A928] border border-[#F7A928]/30 z-10">
              {activeProcess.afterLabel}
            </span>

            {/* 2. Before Image (Clipped overlay by sliderPos %) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={resolveAsset(activeProcess.beforeImage)}
                alt={activeProcess.beforeLabel}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', minWidth: '100%' }}
              />
              {/* Labeled Badge for BEFORE */}
              <span className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-bold text-white border border-white/20 z-10">
                {activeProcess.beforeLabel}
              </span>
            </div>

            {/* 3. Golden Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#F7A928] shadow-[0_0_15px_rgba(247,169,40,0.8)] pointer-events-none z-20"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#F7A928] text-black font-bold flex items-center justify-center text-sm shadow-xl border-2 border-black">
                ⇄
              </div>
            </div>

            {/* 4. Invisible Range Input for frictionless dragging */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              aria-label="Before and after comparison slider"
            />
          </div>

          {/* Explanation Footer & Software Used */}
          <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4 pt-6 border-t border-white/10 relative z-10">
            <p className="text-white/80 text-xs sm:text-sm font-sans max-w-3xl leading-relaxed">
              {activeProcess.description}
            </p>

            <div className="flex flex-wrap items-center gap-1.5 shrink-0">
              {activeProcess.software.map((sw, idx) => (
                <span
                  key={idx}
                  className="font-mono text-[10px] uppercase px-2.5 py-1 rounded-xs bg-white/10 text-white font-bold border border-white/10"
                >
                  {sw}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          FULLSCREEN PREVIEW MODAL FOR GALLERY PIECES
         ========================================================================= */}
      {activeGalleryPreview && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveGalleryPreview(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#121212] rounded-3xl border border-white/15 overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161616]">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-[#F7A928] font-bold">SELECTED GRAPHIC WORK</span>
                <span className="text-white/30">//</span>
                <span className="text-white/80 uppercase font-bold">{activeGalleryPreview.category}</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveGalleryPreview(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Close Preview"
              >
                <X size={16} />
              </button>
            </div>

            {/* Media Screen */}
            <div className="relative w-full overflow-hidden bg-black flex items-center justify-center p-2 max-h-[65vh]">
              <img
                src={resolveAsset(activeGalleryPreview.imageUrl)}
                alt={activeGalleryPreview.title}
                className="max-h-[60vh] max-w-full object-contain rounded-lg"
              />
            </div>

            {/* Info Footer */}
            <div className="p-6 bg-[#161616] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#F7A928] mb-1">
                  <span>{activeGalleryPreview.year}</span>
                  {activeGalleryPreview.client && (
                    <>
                      <span>•</span>
                      <span>{activeGalleryPreview.client}</span>
                    </>
                  )}
                </div>
                <h3 className="font-display font-bold text-xl uppercase text-white">
                  {activeGalleryPreview.title}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm mt-1 max-w-2xl font-sans">
                  {activeGalleryPreview.description}
                </p>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                {activeGalleryPreview.software.map((sw, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-[10px] uppercase px-2 py-1 rounded-xs bg-white/10 text-white font-bold"
                  >
                    {sw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
