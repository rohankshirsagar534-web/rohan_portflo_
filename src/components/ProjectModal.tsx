import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowRight, ArrowLeft, ArrowUpRight, Film, CheckCircle, Sliders, Box, Sparkles, Video, Layers, Palette, PenTool, Radio, Play, Pause, Volume2, VolumeX, Upload } from 'lucide-react';
import { Project } from '../types';
import { resolveAsset } from '../utils/assets';

interface ProjectModalProps {
  project: Project | null;
  projects: Project[];
  onClose: () => void;
  onSelectProject: (p: Project) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project: initialProject,
  projects,
  onClose,
  onSelectProject,
}) => {
  const project = initialProject
    ? projects.find(
        (p) =>
          p.id === initialProject.id ||
          (initialProject.id === '3d-mecha-frame' && p.id === '3d-character-modeling')
      ) || initialProject
    : null;
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [mediaMode, setMediaMode] = useState<'video' | 'still'>('video');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [videoError, setVideoError] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // User custom video overrides (persisted in localStorage)
  const [customVideoUrls, setCustomVideoUrls] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('rohan_project_videos');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [isEditingVideo, setIsEditingVideo] = useState<boolean>(false);
  const [inputVideoUrl, setInputVideoUrl] = useState<string>('');
  const [videoAspect, setVideoAspect] = useState<'tall' | 'wide' | 'square' | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const rawActiveUrl = project ? (customVideoUrls[project.id] || project.videoUrl) : undefined;
  let activeVideoUrl = rawActiveUrl;
  if (activeVideoUrl) {
    if (
      activeVideoUrl.includes('savedly.net/f/thuvzfwu') ||
      activeVideoUrl.includes('thuvzfwu') ||
      activeVideoUrl.includes('fevicol_matrimony')
    ) {
      activeVideoUrl = '/videos/fevicol_matrimony.mp4';
    } else if (
      activeVideoUrl.includes('savedly.net/f/2tg8mu6m') ||
      activeVideoUrl.includes('2tg8mu6m') ||
      activeVideoUrl.includes('savedly.net/f/gerzn3n2') ||
      activeVideoUrl.includes('gerzn3n2') ||
      activeVideoUrl.includes('food_poster_design')
    ) {
      activeVideoUrl = '/videos/food_poster_design.mp4';
    } else if (activeVideoUrl.includes('savedly.net/f/3ta3rwsm') || activeVideoUrl.includes('3ta3rwsm') || activeVideoUrl.includes('kara_by_rohan')) {
      activeVideoUrl = '/videos/kara_by_rohan.mp4';
    } else if (activeVideoUrl.includes('savedly.net/f/awhqe998') || activeVideoUrl.includes('awhqe998') || activeVideoUrl.includes('product_rohan')) {
      activeVideoUrl = '/videos/product_rohan.mp4';
    } else if (activeVideoUrl.includes('savedly.net/f/qh3puax8') || activeVideoUrl.includes('qh3puax8') || activeVideoUrl.includes('dietcoke_christmas')) {
      activeVideoUrl = '/videos/dietcoke_christmas.mp4';
    } else if (activeVideoUrl.includes('savedly.net/f/kd46rzq7') || activeVideoUrl.includes('kd46rzq7') || activeVideoUrl.includes('typography_graphic_design')) {
      activeVideoUrl = '/videos/typography_graphic_design.mp4';
    } else if (activeVideoUrl.includes('savedly.net/f/y2dkzsgc') || activeVideoUrl.includes('y2dkzsgc') || activeVideoUrl.includes('jeep_3d_model')) {
      activeVideoUrl = '/videos/jeep_3d_model.mp4';
    } else if (
      activeVideoUrl.includes('savedly.net/f/y86c6cz9') ||
      activeVideoUrl.includes('y86c6cz9') ||
      activeVideoUrl.includes('3d_character_modeling') ||
      activeVideoUrl.includes('cr.mp4')
    ) {
      activeVideoUrl = '/videos/3d_character_modeling.mp4';
    } else if (
      activeVideoUrl.includes('savedly.net/f/umye7g83') ||
      activeVideoUrl.includes('umye7g83') ||
      activeVideoUrl.includes('nuke_vfx_compositing') ||
      activeVideoUrl.includes('rohan_showreel')
    ) {
      activeVideoUrl = '/videos/nuke_vfx_compositing.mp4';
    }
  }

  const isMediaTall =
    videoAspect === 'tall' ||
    (videoAspect !== 'wide' && (
      activeVideoUrl?.includes('food_poster_design') ||
      activeVideoUrl?.includes('2tg8mu6m') ||
      activeVideoUrl?.includes('gerzn3n2') ||
      activeVideoUrl?.includes('product_rohan') ||
      activeVideoUrl?.includes('awhqe998') ||
      activeVideoUrl?.includes('dietcoke_christmas') ||
      activeVideoUrl?.includes('qh3puax8') ||
      activeVideoUrl?.includes('kd46rzq7') ||
      activeVideoUrl?.includes('typography_graphic_design') ||
      activeVideoUrl?.includes('ay6khcyf') ||
      project?.aspectRatio === 'portrait' ||
      project?.aspectRatio === 'tall'
    ));

  const handleSaveVideoUrl = (rawUrl: string) => {
    if (!project) return;
    const cleanUrl = rawUrl.trim();
    if (!cleanUrl) return;

    let finalUrl = cleanUrl;
    if (
      cleanUrl.includes('savedly.net/f/thuvzfwu') ||
      cleanUrl.includes('thuvzfwu')
    ) {
      finalUrl = '/videos/fevicol_matrimony.mp4';
      setVideoAspect('wide');
    } else if (
      cleanUrl.includes('savedly.net/f/2tg8mu6m') ||
      cleanUrl.includes('2tg8mu6m') ||
      cleanUrl.includes('savedly.net/f/gerzn3n2') ||
      cleanUrl.includes('gerzn3n2')
    ) {
      finalUrl = '/videos/food_poster_design.mp4';
      setVideoAspect('tall');
    } else if (cleanUrl.includes('savedly.net/f/3ta3rwsm') || cleanUrl.includes('3ta3rwsm')) {
      finalUrl = '/videos/kara_by_rohan.mp4';
      setVideoAspect('wide');
    } else if (cleanUrl.includes('savedly.net/f/awhqe998') || cleanUrl.includes('awhqe998')) {
      finalUrl = '/videos/product_rohan.mp4';
      setVideoAspect('tall');
    } else if (cleanUrl.includes('savedly.net/f/qh3puax8') || cleanUrl.includes('qh3puax8')) {
      finalUrl = '/videos/dietcoke_christmas.mp4';
      setVideoAspect('tall');
    } else if (cleanUrl.includes('savedly.net/f/kd46rzq7') || cleanUrl.includes('kd46rzq7')) {
      finalUrl = '/videos/typography_graphic_design.mp4';
      setVideoAspect('tall');
    } else if (cleanUrl.includes('savedly.net/f/y2dkzsgc') || cleanUrl.includes('y2dkzsgc') || cleanUrl.includes('jeep_3d_model')) {
      finalUrl = '/videos/jeep_3d_model.mp4';
      setVideoAspect('wide');
    } else if (
      cleanUrl.includes('savedly.net/f/y86c6cz9') ||
      cleanUrl.includes('y86c6cz9') ||
      cleanUrl.includes('3d_character_modeling')
    ) {
      finalUrl = '/videos/3d_character_modeling.mp4';
      setVideoAspect('wide');
    } else if (
      cleanUrl.includes('savedly.net/f/umye7g83') ||
      cleanUrl.includes('umye7g83') ||
      cleanUrl.includes('nuke_vfx_compositing')
    ) {
      finalUrl = '/videos/nuke_vfx_compositing.mp4';
      setVideoAspect('wide');
    } else if (cleanUrl.includes('jumpshare.com/s/Ay6kHCYfGP2s3hW06wJQ')) {
      finalUrl = '/videos/ay6khcyf_video.mp4';
      setVideoAspect('tall');
    } else if (cleanUrl.includes('savedly.net')) {
      finalUrl = '/videos/food_poster_design.mp4';
      setVideoAspect('tall');
    }

    const updated = { ...customVideoUrls, [project.id]: finalUrl };
    setCustomVideoUrls(updated);
    try {
      localStorage.setItem('rohan_project_videos', JSON.stringify(updated));
    } catch {
      // ignore
    }
    setMediaMode('video');
    setVideoError(false);
    setIsEditingVideo(false);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && project) {
      const blobUrl = URL.createObjectURL(file);
      handleSaveVideoUrl(blobUrl);
    }
  };

  const handleResetVideo = () => {
    if (!project) return;
    const updated = { ...customVideoUrls };
    delete updated[project.id];
    setCustomVideoUrls(updated);
    try {
      localStorage.setItem('rohan_project_videos', JSON.stringify(updated));
    } catch {
      // ignore
    }
    setMediaMode('video');
    setVideoError(false);
    setIsEditingVideo(false);
  };

  // Toggle video play / pause safely
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // If unmuted playback fails due to autoplay policies, fallback to muted play
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
          }
        });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  // Filter projects by current category
  const categoryProjects = projects.filter((p) => p.category === project?.category);

  // Category labels and metadata
  const isShortAdFilm = project?.category === 'SHORT AD FILM';
  const isGraphicDesign = project?.category === 'GRAPHIC DESIGN';
  const categoryShortTitle = isShortAdFilm
    ? 'SHORT AD FILM'
    : isGraphicDesign
    ? 'GRAPHIC DESIGN'
    : project?.category === '3D'
    ? '3D'
    : project?.category === 'VFX'
    ? 'VFX'
    : project?.category === 'MOTION'
    ? 'MOTION'
    : 'WEB';

  const categoryPluralTitle = isShortAdFilm
    ? 'SHORT AD FILMS'
    : isGraphicDesign
    ? 'GRAPHIC DESIGN WORKS'
    : project?.category === '3D'
    ? '3D PROJECTS'
    : project?.category === 'VFX'
    ? 'VFX PROJECTS'
    : project?.category === 'MOTION'
    ? 'MOTION PROJECTS'
    : 'WEB PROJECTS';

  const categorySubtitle = isShortAdFilm
    ? 'COMMERCIAL PACING // BRAND HOOK // PRODUCT SPOTS // TVC'
    : isGraphicDesign
    ? 'CHARACTER DESIGN // PRODUCT PACKAGING // PROPS CONCEPT // EDITORIAL'
    : project?.category === '3D'
    ? 'BLENDER // CYCLES // HARD-SURFACE & PROCEDURAL'
    : project?.category === 'VFX'
    ? 'AFTER EFFECTS // NUKE // COMPOSITING'
    : project?.category === 'MOTION'
    ? 'AFTER EFFECTS // CINEMA 4D // KINETIC DYNAMICS'
    : 'REACT // TAILWIND // INTERACTIVE EXPERIENCE';

  // Category-only filter mode: default to true so clicking into a category shows ONLY that category's projects
  const [categoryOnlyMode, setCategoryOnlyMode] = useState<boolean>(true);

  // Reset states whenever project changes
  useEffect(() => {
    setMediaMode('video');
    setCategoryOnlyMode(true);
    setIsPlaying(false);
    setIsMuted(true);
    setVideoError(false);
    setVideoAspect(null);
    setIsEditingVideo(false);
    setInputVideoUrl('');
  }, [project?.id, project?.category]);

  const activeProjectList =
    categoryOnlyMode && categoryProjects.length > 0 ? categoryProjects : projects;
  const currentIndexInList = activeProjectList.findIndex((p) => p.id === project?.id);
  const safeIndex = currentIndexInList === -1 ? 0 : currentIndexInList;
  const nextProject = activeProjectList[(safeIndex + 1) % activeProjectList.length];
  const prevProject =
    activeProjectList[(safeIndex - 1 + activeProjectList.length) % activeProjectList.length];

  const handleNext = () => onSelectProject(nextProject);
  const handlePrev = () => onSelectProject(prevProject);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && project) handleNext();
      if (e.key === 'ArrowLeft' && project) handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, nextProject, prevProject]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div
      id="project-detail-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl flex justify-center p-0 sm:p-4 md:p-6 lg:p-8 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div className="relative w-full max-w-5xl bg-[#0d0d0d] text-white rounded-none sm:rounded-3xl border border-white/15 overflow-hidden shadow-2xl my-auto flex flex-col max-h-[96vh]">
        
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-30 bg-[#0d0d0d]/95 backdrop-blur-md px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3 font-mono text-xs text-white/70">
            <span className="text-[#F7A928] font-bold">PROJECT {project.number}</span>
            <span>//</span>
            <span className="uppercase text-white">{project.categoryDisplay}</span>
            <span className="hidden sm:inline text-white/40">// {project.year}</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1 font-mono text-xs text-white/50 mr-2">
              <button
                onClick={handlePrev}
                className="p-1.5 hover:text-white transition-colors"
                title="Previous Project (Left Arrow)"
              >
                <ArrowLeft size={16} />
              </button>
              <span>
                {safeIndex + 1} / {activeProjectList.length}
                {categoryOnlyMode ? ` (${categoryShortTitle})` : ''}
              </span>
              <button
                onClick={handleNext}
                className="p-1.5 hover:text-white transition-colors"
                title="Next Project (Right Arrow)"
              >
                <ArrowRight size={16} />
              </button>
            </div>

            <button
              id="close-project-modal-btn"
              onClick={onClose}
              className="p-2 rounded-full border border-white/20 text-white hover:bg-[#F7A928] hover:text-black hover:border-[#F7A928] transition-all"
              aria-label="Close project modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 md:p-10 space-y-10 film-grain-dark">
          
          {/* Header Title Section */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2 font-mono text-xs text-[#F7A928]">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded-xs bg-[#F7A928]/10 border border-[#F7A928]/30">
                  {project.category}
                </span>
                <span>{project.clientOrContext}</span>
              </div>
              {project.externalUrl && (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7A928]/15 hover:bg-[#F7A928] text-[#F7A928] hover:text-black border border-[#F7A928]/40 transition-all font-mono text-[11px] font-bold"
                >
                  <span>{project.externalUrlLabel || 'WATCH SOURCE'}</span>
                  <ArrowUpRight size={13} />
                </a>
              )}
            </div>

            <h2
              id="modal-project-title"
              className="font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white mb-4"
            >
              {project.title}
            </h2>

            <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Hero Media Preview */}
          <div className={`relative rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 group shadow-2xl transition-all duration-300 ${
            isMediaTall
              ? 'aspect-[9/16] max-w-sm mx-auto'
              : 'aspect-video w-full'
          }`}>
            {activeVideoUrl && mediaMode === 'video' ? (
              <div className="relative w-full h-full group/video bg-black flex items-center justify-center">
                <video
                  ref={videoRef}
                  id="project-hero-video"
                  key={`${project.id}-${activeVideoUrl}`}
                  src={resolveAsset(activeVideoUrl)}
                  poster={
                    activeVideoUrl.includes('food_poster_design') || activeVideoUrl.includes('2tg8mu6m') || activeVideoUrl.includes('gerzn3n2')
                      ? resolveAsset('/images/food_poster_design_poster.jpg')
                      : activeVideoUrl.includes('kara_by_rohan') || activeVideoUrl.includes('3ta3rwsm')
                      ? resolveAsset('/images/kara_poster.jpg')
                      : activeVideoUrl.includes('product_rohan') || activeVideoUrl.includes('awhqe998')
                      ? resolveAsset('/images/product_rohan_poster.jpg')
                      : resolveAsset(project.heroImage)
                  }
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  onLoadedMetadata={(e) => {
                    const v = e.currentTarget;
                    if (v.videoWidth && v.videoHeight) {
                      const r = v.videoWidth / v.videoHeight;
                      if (r < 0.8) setVideoAspect('tall');
                      else if (r > 1.3) setVideoAspect('wide');
                      else setVideoAspect('square');
                    }
                  }}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onVolumeChange={(e) => setIsMuted((e.target as HTMLVideoElement).muted)}
                  onClick={togglePlay}
                  className="w-full h-full cursor-pointer object-contain bg-black"
                />

                {/* Big Center Play / Pause Click Overlay Indicator when paused */}
                {!isPlaying && (
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label="Play video"
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#F7A928] text-black flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer z-15 group-hover/video:opacity-100"
                  >
                    <Play size={26} className="fill-black ml-1" />
                  </button>
                )}
              </div>
            ) : (
              <img
                id="project-hero-media-img"
                src={
                  activeVideoUrl?.includes('kd46rzq7') || activeVideoUrl?.includes('typography_graphic_design')
                    ? resolveAsset('/images/typography_design_poster.jpg')
                    : activeVideoUrl?.includes('dietcoke_christmas') || activeVideoUrl?.includes('qh3puax8')
                    ? resolveAsset('/images/dietcoke_christmas_poster.jpg')
                    : activeVideoUrl?.includes('food_poster_design') || activeVideoUrl?.includes('2tg8mu6m') || activeVideoUrl?.includes('gerzn3n2')
                    ? resolveAsset('/images/food_poster_design_poster.jpg')
                    : activeVideoUrl?.includes('kara_by_rohan') || activeVideoUrl?.includes('3ta3rwsm')
                    ? resolveAsset('/images/kara_poster.jpg')
                    : activeVideoUrl?.includes('product_rohan') || activeVideoUrl?.includes('awhqe998')
                    ? resolveAsset('/images/product_rohan_poster.jpg')
                    : activeVideoUrl?.includes('jeep_3d_model') || activeVideoUrl?.includes('y2dkzsgc')
                    ? resolveAsset('/images/jeep_3d_model_poster.jpg')
                    : activeVideoUrl?.includes('3d_character_modeling') || activeVideoUrl?.includes('y86c6cz9')
                    ? resolveAsset('/images/3d_character_modeling_poster.jpg')
                    : activeVideoUrl?.includes('nuke_vfx_compositing') || activeVideoUrl?.includes('umye7g83')
                    ? resolveAsset('/images/nuke_vfx_compositing_poster.jpg')
                    : resolveAsset(project.heroImage)
                }
                alt={project.title}
                referrerPolicy="no-referrer"
                className={`w-full h-full ${
                  isMediaTall ? 'object-contain bg-black' : 'object-cover'
                }`}
              />
            )}

            {/* Viewfinder Reticle & Framing Overlay */}
            <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between z-10 opacity-70 group-hover:opacity-100 transition-opacity">
              <div className="flex justify-between items-start font-mono text-[9px] text-white/70">
                <span className="bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-xs border border-white/10 uppercase">
                  {isMediaTall ? '9:16 VERTICAL' : '16:9 DCI'}
                </span>
                <span className="bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-xs text-[#F7A928] border border-[#F7A928]/30">
                  {activeVideoUrl && mediaMode === 'video' ? (isMediaTall ? '9:16 MASTER' : '1080P MASTER') : 'STILL FRAME'}
                </span>
              </div>
              <div className="flex justify-between items-end font-mono text-[9px] text-white/60">
                <span className="bg-black/60 backdrop-blur-xs px-1.5 py-0.5 rounded-xs">RATIO // {project.aspectRatio === 'tall' || project.aspectRatio === 'portrait' ? '9:16' : '16:9'}</span>
                <span className="bg-black/60 backdrop-blur-xs px-1.5 py-0.5 rounded-xs text-[#F7A928]">KODAK 500T</span>
              </div>
            </div>

            {/* Quick Unmute / Volume button when playing video */}
            {activeVideoUrl && mediaMode === 'video' && (
              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                className="absolute bottom-14 right-3 bg-black/80 hover:bg-black text-white hover:text-[#F7A928] p-2 rounded-full border border-white/20 backdrop-blur-md shadow-lg transition-all z-20 cursor-pointer"
                title={isMuted ? 'Click to Unmute Sound' : 'Click to Mute'}
              >
                {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} className="text-[#F7A928]" />}
              </button>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 pointer-events-none opacity-30"></div>

            {/* Compact top-right status & view mode controls - prevents blocking video playbar */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5 pointer-events-auto z-20">
              {activeVideoUrl && (
                <div className="flex items-center gap-1 bg-black/85 backdrop-blur-md px-1.5 py-1 rounded-full border border-white/20 shadow-lg text-[10px] font-mono">
                  <button
                    type="button"
                    onClick={() => setMediaMode('video')}
                    className={`px-2 py-0.5 rounded-full font-bold transition-all cursor-pointer ${
                      mediaMode === 'video'
                        ? 'bg-[#F7A928] text-black shadow-xs'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    VIDEO
                  </button>
                  <button
                    type="button"
                    onClick={() => setMediaMode('still')}
                    className={`px-2 py-0.5 rounded-full font-bold transition-all cursor-pointer ${
                      mediaMode === 'still'
                        ? 'bg-[#F7A928] text-black shadow-xs'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    STILL
                  </button>
                </div>
              )}
              <button
                type="button"
                onClick={() => {
                  setIsEditingVideo((prev) => !prev);
                  setInputVideoUrl(activeVideoUrl || '');
                }}
                className="bg-black/85 hover:bg-[#F7A928] hover:text-black backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-[#F7A928] transition-all font-mono text-[10px] font-bold shadow-lg flex items-center gap-1 cursor-pointer"
                title="Replace video with custom URL"
              >
                <Sliders size={11} />
                <span>REPLACE</span>
              </button>
              {project.externalUrl && (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/85 hover:bg-[#F7A928] hover:text-black backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-[#F7A928] transition-all font-mono text-[10px] font-bold shadow-lg flex items-center gap-1"
                >
                  <span>SOURCE</span>
                  <ArrowUpRight size={11} />
                </a>
              )}
            </div>

            {/* Subtle top-left compact label */}
            <div className="absolute top-3 left-3 pointer-events-none z-20">
              <div className="flex items-center gap-1.5 bg-black/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-[10px] font-mono text-white/90 shadow-lg">
                {project.title.includes('RADIO') ? (
                  <Radio size={11} className="text-[#F7A928] stroke-[2.5]" />
                ) : (
                  <Film size={11} className="text-[#F7A928]" />
                )}
                <span className="font-semibold text-white/90 tracking-wide text-[10px]">
                  {project.title.includes('RADIO') ? 'RADIO BROADCAST' : project.videoUrl ? '1080P MASTER' : '4K MASTER'}
                </span>
                <span className="text-white/30 text-[9px]">•</span>
                <span className="text-[#F7A928] font-bold">{project.year}</span>
              </div>
            </div>
          </div>

          {/* Inline Video / Media Replacer Drawer */}
          {isEditingVideo && (
            <div className="bg-zinc-950 border border-[#F7A928]/40 rounded-2xl p-4 sm:p-5 shadow-xl animate-in fade-in duration-200">
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#F7A928] uppercase">
                    REPLACE VIDEO / MEDIA SOURCE
                  </span>
                  <span className="font-mono text-[10px] text-white/50">
                    // ACCEPTS SAVEDLY, JUMPSHARE &amp; DIRECT MP4
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsEditingVideo(false)}
                  className="font-mono text-[10px] text-white/50 hover:text-white px-2 py-0.5 rounded border border-white/10 cursor-pointer"
                >
                  CLOSE
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mb-3">
                <input
                  type="text"
                  value={inputVideoUrl}
                  onChange={(e) => setInputVideoUrl(e.target.value)}
                  placeholder="Paste URL, e.g. https://savedly.net/f/3ta3rwsm"
                  className="flex-1 bg-black/80 border border-white/20 focus:border-[#F7A928] rounded-xl px-3.5 py-2 text-xs font-mono text-white placeholder:text-white/40 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => handleSaveVideoUrl(inputVideoUrl)}
                  className="px-5 py-2 rounded-xl bg-[#F7A928] hover:bg-[#F7A928]/90 text-black font-mono font-bold text-xs uppercase cursor-pointer shrink-0 transition-all"
                >
                  APPLY VIDEO
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
                <span className="text-white/50 text-[10px]">QUICK PRESETS:</span>
                <button
                  type="button"
                  onClick={() => handleSaveVideoUrl('https://savedly.net/f/thuvzfwu')}
                  className="px-2.5 py-1 rounded-lg bg-[#F7A928]/20 hover:bg-[#F7A928] text-[#F7A928] hover:text-black font-bold transition-all cursor-pointer border border-[#F7A928]/40"
                >
                  ⚡ savedly.net/f/thuvzfwu (FEVICOL MATRIMONY MP4)
                </button>
                <button
                  type="button"
                  onClick={() => handleSaveVideoUrl('https://savedly.net/f/2tg8mu6m')}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#F7A928] hover:text-black text-white/90 transition-all cursor-pointer border border-white/15"
                >
                  ⚡ savedly.net/f/2tg8mu6m (FOOD POSTER MP4)
                </button>
                <button
                  type="button"
                  onClick={() => handleSaveVideoUrl('https://savedly.net/f/3ta3rwsm')}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#F7A928] hover:text-black text-white/90 transition-all cursor-pointer border border-white/15"
                >
                  ⚡ savedly.net/f/3ta3rwsm (KARA MP4)
                </button>
                <button
                  type="button"
                  onClick={() => handleSaveVideoUrl('https://savedly.net/f/awhqe998')}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#F7A928] hover:text-black text-white/90 transition-all cursor-pointer border border-white/15"
                >
                  ⚡ savedly.net/f/awhqe998 (PRODUCT MP4)
                </button>
                <button
                  type="button"
                  onClick={() => handleSaveVideoUrl('https://savedly.net/f/qh3puax8')}
                  className="px-2.5 py-1 rounded-lg bg-[#F7A928]/20 hover:bg-[#F7A928] text-[#F7A928] hover:text-black font-bold transition-all cursor-pointer border border-[#F7A928]/40"
                >
                  ⚡ savedly.net/f/qh3puax8 (@DIETCOKE X CHRISTMAS)
                </button>
                <button
                  type="button"
                  onClick={() => handleSaveVideoUrl('https://savedly.net/f/kd46rzq7')}
                  className="px-2.5 py-1 rounded-lg bg-[#F7A928]/20 hover:bg-[#F7A928] text-[#F7A928] hover:text-black font-bold transition-all cursor-pointer border border-[#F7A928]/40"
                >
                  ⚡ savedly.net/f/kd46rzq7 (TYPOGRAPHY + GRAPHIC DESIGN)
                </button>
                <button
                  type="button"
                  onClick={() => handleSaveVideoUrl('https://savedly.net/f/y2dkzsgc')}
                  className="px-2.5 py-1 rounded-lg bg-[#F7A928]/20 hover:bg-[#F7A928] text-[#F7A928] hover:text-black font-bold transition-all cursor-pointer border border-[#F7A928]/40"
                >
                  ⚡ savedly.net/f/y2dkzsgc (JEEP 3D MODEL)
                </button>
                <button
                  type="button"
                  onClick={() => handleSaveVideoUrl('https://savedly.net/f/y86c6cz9')}
                  className="px-2.5 py-1 rounded-lg bg-[#F7A928]/20 hover:bg-[#F7A928] text-[#F7A928] hover:text-black font-bold transition-all cursor-pointer border border-[#F7A928]/40"
                >
                  ⚡ savedly.net/f/y86c6cz9 (3D CHARACTER MODELING)
                </button>
                <button
                  type="button"
                  onClick={() => handleSaveVideoUrl('https://savedly.net/f/umye7g83')}
                  className="px-2.5 py-1 rounded-lg bg-[#F7A928]/20 hover:bg-[#F7A928] text-[#F7A928] hover:text-black font-bold transition-all cursor-pointer border border-[#F7A928]/40"
                >
                  ⚡ savedly.net/f/umye7g83 (NUKE VFX COMPOSITING)
                </button>
                <button
                  type="button"
                  onClick={handleResetVideo}
                  className="ml-auto text-red-400 hover:text-red-300 text-[10px] underline cursor-pointer"
                >
                  RESET TO PROJECT DEFAULT
                </button>
              </div>
            </div>
          )}

          {/* Project Specs: Role & Software */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 rounded-2xl bg-white/5 border border-white/10">
            <div>
              <span className="block font-mono text-xs text-[#F7A928] uppercase tracking-wider mb-1">
                MY ROLE
              </span>
              <span className="font-display font-bold text-base sm:text-lg text-white">
                {project.role}
              </span>
            </div>

            <div>
              <span className="block font-mono text-xs text-[#F7A928] uppercase tracking-wider mb-1">
                TIMELINE / YEAR
              </span>
              <span className="font-display font-bold text-base sm:text-lg text-white">
                {project.year}
              </span>
            </div>

            <div>
              <span className="block font-mono text-xs text-[#F7A928] uppercase tracking-wider mb-2">
                TOOLS &amp; SOFTWARE
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.software.map((sw, sIdx) => (
                  <span
                    key={sIdx}
                    className="font-mono text-xs px-2 py-0.5 rounded-xs bg-white/10 text-white/90 border border-white/15"
                  >
                    {sw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Before & After Comparison Slider (if applicable) */}
          {project.beforeAfter && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sliders size={18} className="text-[#F7A928]" />
                  <h3 className="font-display font-bold text-lg uppercase tracking-wider text-white">
                    BEFORE / AFTER BREAKDOWN
                  </h3>
                </div>
                <span className="font-mono text-xs text-white/50">
                  DRAG SLIDER TO COMPARE
                </span>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/15 select-none bg-black">
                {/* After Image (Background) */}
                <img
                  src={resolveAsset(project.beforeAfter.imageAfter)}
                  alt={project.beforeAfter.labelAfter}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <span className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-mono text-[#F7A928] border border-white/20 z-10">
                  {project.beforeAfter.labelAfter}
                </span>

                {/* Before Image (Clipped by slider) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img
                    src={resolveAsset(project.beforeAfter.imageBefore)}
                    alt={project.beforeAfter.labelBefore}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: '100%', minWidth: '100%' }}
                  />
                  <span className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-mono text-white border border-white/20 z-10">
                    {project.beforeAfter.labelBefore}
                  </span>
                </div>

                {/* Divider Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-[#F7A928] shadow-lg pointer-events-none z-20"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#F7A928] text-black font-bold flex items-center justify-center text-xs shadow-md">
                    ⇄
                  </div>
                </div>

                {/* Range input for slider control */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                  aria-label="Comparison slider"
                />
              </div>

              <p className="text-xs font-mono text-white/60">
                {project.beforeAfter.description}
              </p>
            </div>
          )}

          {/* Creative Process Steps */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg uppercase tracking-wider text-white">
              CREATIVE PROCESS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.creativeProcess.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between gap-3"
                >
                  <span className="font-mono text-xs text-[#F7A928] font-bold">
                    STEP 0{idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Final Result Statement */}
          <div className="p-6 rounded-2xl bg-[#F7A928]/10 border border-[#F7A928]/30 flex items-start gap-4">
            <CheckCircle size={22} className="text-[#F7A928] shrink-0 mt-0.5" />
            <div>
              <span className="block font-mono text-xs text-[#F7A928] uppercase tracking-wider mb-1 font-bold">
                FINAL OUTCOME
              </span>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                {project.finalResultText}
              </p>
            </div>
          </div>

          {/* Gallery Frames */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  {isGraphicDesign ? (
                    <Palette size={18} className="text-[#F7A928]" />
                  ) : (
                    <Film size={18} className="text-[#F7A928]" />
                  )}
                  <h3 className="font-display font-bold text-lg uppercase tracking-wider text-white">
                    {isGraphicDesign
                      ? 'GRAPHIC DESIGN GALLERY // CHARACTER, PRODUCT & PROPS'
                      : 'PROJECT STILLS & PASSES'}
                  </h3>
                </div>
                {isGraphicDesign && (
                  <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono">
                    <span className="px-2 py-0.5 rounded-xs bg-[#F7A928]/20 text-[#F7A928] border border-[#F7A928]/30 font-bold">
                      CHARACTER DESIGN
                    </span>
                    <span className="px-2 py-0.5 rounded-xs bg-white/10 text-white/80 border border-white/10">
                      PRODUCT DESIGN
                    </span>
                    <span className="px-2 py-0.5 rounded-xs bg-white/10 text-white/80 border border-white/10">
                      PROPS DESIGN
                    </span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.map((imgUrl, gIdx) => {
                  const graphicBadges = [
                    'CHARACTER DESIGN',
                    'PRODUCT DESIGN',
                    'PROPS DESIGN',
                    'EDITORIAL GRAPHICS'
                  ];
                  const label = isGraphicDesign && graphicBadges[gIdx]
                    ? graphicBadges[gIdx]
                    : `FRAME 0${gIdx + 1}`;

                  return (
                    <div
                      key={gIdx}
                      className="relative rounded-xl overflow-hidden aspect-video bg-zinc-900 border border-white/10 group shadow-md"
                    >
                      <img
                        id={`project-gallery-img-${gIdx}`}
                        src={resolveAsset(imgUrl)}
                        alt={`${project.title} asset ${gIdx + 1}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 right-2 font-mono text-[10px] bg-black/80 px-2.5 py-1 rounded-xs text-[#F7A928] border border-white/10 font-bold uppercase tracking-wider backdrop-blur-xs">
                        {label}
                      </div>
                      <div className="absolute bottom-2 left-2 right-2 p-2 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between text-[11px] font-mono text-white">
                        <span>ASSET // 0{gIdx + 1}</span>
                        <span className="text-[#F7A928] font-bold">INSPECT WORK ↗</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Dedicated Graphic Design Specialized Workspace Showcase */}
          {project.designShowcase && project.designShowcase.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <PenTool size={18} className="text-[#F7A928]" />
                <h3 className="font-display font-bold text-lg uppercase tracking-wider text-white">
                  GRAPHIC DESIGN DISCIPLINES // CHARACTER &amp; PRODUCT DESIGN
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.designShowcase.map((item, dIdx) => (
                  <div
                    key={dIdx}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#F7A928]/50 transition-all flex flex-col justify-between gap-3 group"
                  >
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-black border border-white/10">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-2 left-2 font-mono text-[9px] bg-black/80 text-[#F7A928] px-2 py-0.5 rounded-xs font-bold border border-white/10">
                        {item.type}
                      </span>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] text-white/50 uppercase block">
                        {item.subtitle}
                      </span>
                      <h4 className="font-display font-bold text-sm text-white uppercase group-hover:text-[#F7A928] transition-colors mt-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-white/70 leading-relaxed mt-1.5 font-mono">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Dedicated Category-Specific Projects Showcase inside Body */}
          {categoryProjects.length > 0 && (
            <div
              id="modal-category-showcase-section"
              className="space-y-4 pt-6 border-t border-white/10"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  {isShortAdFilm ? (
                    <Film size={18} className="text-[#F7A928]" />
                  ) : project.category === '3D' ? (
                    <Box size={18} className="text-[#F7A928]" />
                  ) : isGraphicDesign ? (
                    <Palette size={18} className="text-[#F7A928]" />
                  ) : (
                    <Sparkles size={18} className="text-[#F7A928]" />
                  )}
                  <h3 className="font-display font-bold text-lg uppercase tracking-wider text-white">
                    MORE {categoryPluralTitle} ({categoryProjects.length})
                  </h3>
                </div>
                <span className="font-mono text-xs text-white/50">
                  {categorySubtitle}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
                {categoryProjects.map((p) => {
                  const isCurrent = p.id === project.id;
                  return (
                    <div
                      key={p.id}
                      id={`body-category-card-${p.id}`}
                      onClick={() => onSelectProject(p)}
                      className={`group relative rounded-2xl overflow-hidden border p-3.5 flex flex-col justify-between gap-3 transition-all duration-300 cursor-pointer ${
                        isCurrent
                          ? 'bg-[#F7A928]/15 border-[#F7A928] ring-1 ring-[#F7A928]'
                          : 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10'
                      }`}
                    >
                      <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black border border-white/10">
                        <img
                          src={resolveAsset(p.thumbnail)}
                          alt={p.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-2 left-2 font-mono text-[10px] bg-black/80 px-2 py-0.5 rounded-xs text-[#F7A928] font-bold">
                          PROJ {p.number}
                        </span>
                        {isCurrent && (
                          <span className="absolute bottom-2 right-2 font-mono text-[9px] bg-[#F7A928] text-black px-2 py-0.5 rounded-xs font-bold uppercase">
                            ACTIVE
                          </span>
                        )}
                      </div>

                      <div>
                        <div className="font-mono text-[10px] text-white/50 uppercase mb-1">
                          {p.categoryDisplay}
                        </div>
                        <h4 className="font-display font-bold text-sm text-white uppercase group-hover:text-[#F7A928] transition-colors">
                          {p.title}
                        </h4>
                        <p className="font-mono text-[11px] text-white/70 line-clamp-2 mt-1">
                          {p.description}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
                        <span>{p.software.slice(0, 2).join(' / ')}</span>
                        <span className="text-[#F7A928] font-bold text-xs group-hover:translate-x-1 transition-transform">
                          VIEW →
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Bar: Clean Navigation Controls */}
        <div
          id="modal-bottom-navigation-bar"
          className="sticky bottom-0 z-30 bg-[#0d0d0d]/95 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4 border-t border-white/10 flex items-center justify-between"
        >
          <div className="text-xs font-mono text-white/60 flex items-center gap-2">
            <span className="text-[#F7A928] font-bold">
              {categoryOnlyMode ? `NEXT ${categoryShortTitle}:` : 'NEXT ENTRY:'}
            </span>
            <span className="text-white font-bold truncate max-w-[180px] sm:max-w-md">
              {nextProject.title}
            </span>
            <span className="hidden sm:inline text-white/40">
              ({safeIndex + 1}/{activeProjectList.length}{categoryOnlyMode ? ` ${categoryShortTitle}` : ''})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="prev-project-modal-btn"
              onClick={handlePrev}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xs border border-white/20 text-white hover:bg-white/10 font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              title="Previous Project"
            >
              <ArrowLeft size={14} />
              <span className="hidden sm:inline">PREV</span>
            </button>

            <button
              id="next-project-modal-btn"
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xs bg-[#F7A928] text-black font-semibold text-xs uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
            >
              <span>{categoryOnlyMode ? `NEXT ${categoryShortTitle}` : 'NEXT PROJECT'}</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
