import { GraphicDesignReel, GraphicDesignGalleryItem, GraphicDesignProcessItem } from '../types';

/**
 * ============================================================================
 * GRAPHIC DESIGN SHOWREEL DATA SOURCE
 * ----------------------------------------------------------------------------
 * HOW TO CUSTOMIZE:
 * 1. REELS: Replace `videoUrl` and `poster` with your own 9:16 vertical video links.
 * 2. GALLERY: Replace `imageUrl` with links to your posters, banners, and thumbnails.
 * 3. BEFORE & AFTER: Replace `beforeImage` and `afterImage` for any project.
 * ============================================================================
 */

// PART 1 — GRAPHIC DESIGN REELS (Exactly 4 cards in a responsive 2x2 grid)
export const GRAPHIC_DESIGN_REELS: GraphicDesignReel[] = [
  {
    id: 'reel-01',
    number: '01',
    title: 'Product & Kinetic Brand Motion Reel',
    tagline: 'Typographic hierarchy, 3D product motion & editorial grid transitions',
    // Replaceable video URL (vertical 9:16 format supported)
    videoUrl: '/videos/product_rohan.mp4',
    poster: '/images/product_rohan_poster.jpg',
    software: ['Photoshop', 'Illustrator', 'After Effects'],
    duration: '0:11',
    year: '2025'
  },
  {
    id: 'reel-02',
    number: '02',
    title: 'Typography + Graphic Designing',
    tagline: 'Experimental kinetic typography, editorial layout architecture, poster motion & key visuals',
    videoUrl: '/videos/typography_graphic_design.mp4',
    poster: '/images/typography_design_poster.jpg',
    software: ['Typography', 'After Effects', 'Photoshop', 'Illustrator'],
    duration: '0:42',
    year: '2025'
  },
  {
    id: 'reel-03',
    number: '03',
    title: 'Cinematic Edit & Visual Narrative',
    tagline: 'High-impact cinematic cut, pacing, atmospheric sound design & color science',
    videoUrl: '/videos/cinematic_edit_reel.mp4',
    poster: '/images/cinematic_edit_poster.jpg',
    software: ['Premiere Pro', 'DaVinci Resolve', 'After Effects'],
    duration: '1:05',
    year: '2025'
  },
  {
    id: 'reel-04',
    number: '04',
    title: '@dietcoke X christmas 🌲',
    tagline: 'tried making visuals for diet coke in the christmas theme for this season :)',
    videoUrl: '/videos/dietcoke_christmas.mp4',
    poster: '/images/dietcoke_christmas_poster.jpg',
    software: ['Photoshop', 'After Effects', 'Premiere Pro'],
    duration: '0:21',
    year: '2025'
  }
];

// PART 2 — SELECTED GRAPHIC WORK GALLERY (Preserves natural aspect ratios)
export const GRAPHIC_DESIGN_GALLERY: GraphicDesignGalleryItem[] = [
  {
    id: 'work-poster-01',
    title: 'Brutalist Soundwave Music Festival Poster',
    category: 'Posters',
    imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'poster',
    description: 'Experimental A1 print series featuring distorted typography, Swiss grid alignment, and duotone spot color separations.',
    software: ['Photoshop', 'Illustrator'],
    year: '2025',
    client: 'Subterranean Audio Festival'
  },
  {
    id: 'work-banner-01',
    title: 'Cyberpunk Esports Championship Hero Banner',
    category: 'Banners',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'banner',
    description: 'Ultra-wide tournament display banner with custom 3D metallic typography, atmospheric fog, and vibrant neon accents.',
    software: ['Photoshop', 'Blender', 'Cinema 4D'],
    year: '2025',
    client: 'Apex Arena Major'
  },
  {
    id: 'work-thumb-01',
    title: 'Cinematic Documentary YouTube Thumbnail',
    category: 'Thumbnails',
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'thumbnail',
    description: 'Designed for high click-through rate with dramatic split-light grading, focal subject rim glow, and punchy typography.',
    software: ['Photoshop', 'Lightroom'],
    year: '2025',
    client: 'Visual Essay Channel (250K+ Subs)'
  },
  {
    id: 'work-ad-01',
    title: '@dietcoke X christmas 🌲',
    category: 'Advertisements',
    imageUrl: '/images/dietcoke_christmas_poster.jpg',
    aspectRatio: 'square',
    description: 'tried making visuals for diet coke in the christmas theme for this season :) #dietcoke #explore #fyp #graphic #christmas explorepage fypシ cokepaglu',
    software: ['Photoshop', 'After Effects', 'Illustrator'],
    year: '2025',
    client: '@dietcoke Holiday Visual Exploration'
  },
  {
    id: 'work-poster-02',
    title: 'Retro-Futuristic Sci-Fi Film Teaser One-Sheet',
    category: 'Posters',
    imageUrl: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'poster',
    description: 'Screenprint aesthetic movie poster utilizing analog halftones, paper fold textures, and custom display lettering.',
    software: ['Illustrator', 'Photoshop'],
    year: '2025',
    client: 'Orbit Independent Cinema'
  },
  {
    id: 'work-thumb-02',
    title: 'VFX Breakdown Masterclass Thumbnail',
    category: 'Thumbnails',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'thumbnail',
    description: 'Color-graded visual thumbnail with dynamic energy streaks, custom interface HUD elements, and high visual hierarchy.',
    software: ['Photoshop', 'After Effects'],
    year: '2025',
    client: 'Creator Academy'
  },
  {
    id: 'work-brand-01',
    title: 'Visual Identity & Modular Asset Suite',
    category: 'Branding',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'square',
    description: 'Comprehensive design system including typographic badges, vector iconography, and dynamic packaging mockups.',
    software: ['Illustrator', 'Photoshop', 'Figma'],
    year: '2024',
    client: 'Vanguard Media Group'
  },
  {
    id: 'work-banner-02',
    title: 'Editorial Podcast Season Header Billboard',
    category: 'Banners',
    imageUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'banner',
    description: 'Panoramic Spotify and YouTube banner with textured film grain, warm orange accent gradients, and custom logotype.',
    software: ['Photoshop', 'Illustrator'],
    year: '2025',
    client: 'The Creative Frequency'
  }
];

// PART 3 — BEHIND THE PROCESS (Before & After Comparison Projects)
export const GRAPHIC_DESIGN_PROCESS: GraphicDesignProcessItem[] = [
  {
    id: 'process-01',
    title: 'Cyberpunk Kinetic Poster Grade',
    subtitle: 'From Raw 3D Clay Render to Finished Atmospheric Artwork',
    beforeLabel: 'RAW CLAY / 3D WIREFRAME',
    afterLabel: 'FINAL COLOR & POST COMPOSITE',
    beforeImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1400&auto=format&fit=crop',
    description: 'Step-by-step transformation taking flat geometries into a rich cinematic key visual through multi-pass lighting, custom LUT color grading, depth hazing, and 35mm film grain overlay.',
    software: ['Cinema 4D', 'Photoshop', 'Camera Raw']
  },
  {
    id: 'process-02',
    title: 'Viral Video Keyframe Composite',
    subtitle: 'Flat Studio Cutout to High-CTR Cinematic Storytelling',
    beforeLabel: 'UNEDITED FLAT PLATE',
    afterLabel: 'RETOUCHED & COMPOSITED MASTER',
    beforeImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1400&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1400&auto=format&fit=crop',
    description: 'Isolating the subject with custom pen tool masking, adding directional rim highlights in orange/cyan, painting environmental light wrap, and injecting volumetric smoke passes.',
    software: ['Photoshop', 'Lightroom']
  },
  {
    id: 'process-03',
    title: 'Album Art Typographic System',
    subtitle: 'Initial Vector Layout to Textured Screenprinted Vinyl Cover',
    beforeLabel: 'ROUGH VECTOR PROTOTYPE',
    afterLabel: 'FINAL TEXTURED VINYL SLEEVE',
    beforeImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1400&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1400&auto=format&fit=crop',
    description: 'Refining kerning and negative space balance, adding risograph ink bleed emulation, custom distressed textures, and holographic foil accents for physical print run.',
    software: ['Illustrator', 'Photoshop']
  }
];
