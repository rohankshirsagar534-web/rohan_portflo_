export type ProjectCategory = 
  | 'ALL'
  | 'SHORT AD FILM'
  | 'VFX'
  | 'MOTION'
  | '3D'
  | 'GRAPHIC DESIGN'
  | 'SKETCH GALLERY'
  | 'WEB';

export interface Project {
  id: string;
  number: string;
  title: string;
  category: ProjectCategory;
  categoryDisplay: string;
  year: string;
  description: string;
  role: string;
  clientOrContext: string;
  software: string[];
  thumbnail: string;
  heroImage: string;
  aspectRatio?: 'wide' | 'square' | 'portrait' | 'tall';
  featured?: boolean;
  videoUrl?: string;
  externalUrl?: string;
  externalUrlLabel?: string;
  beforeAfter?: {
    labelBefore: string;
    labelAfter: string;
    imageBefore: string;
    imageAfter: string;
    description: string;
  };
  creativeProcess: string[];
  finalResultText: string;
  gallery: string[];
  designShowcase?: {
    type: 'CHARACTER DESIGN' | 'PRODUCT DESIGN' | 'PROPS DESIGN' | 'EDITORIAL';
    title: string;
    subtitle: string;
    imageUrl: string;
    description: string;
  }[];
}

export interface AnimationWorkItem {
  id: string;
  title: string;
  type: 'video' | 'photo';
  mediaUrl: string;
  poster?: string;
  tag: string;
  aspect?: 'portrait' | 'landscape' | 'square';
  description: string;
  software?: string[];
  duration?: string;
}

export interface SkillItem {
  name: string;
  note?: string;
}

export interface SkillCategory {
  id: string;
  number: string;
  title: string;
  tagline: string;
  tools: string[];
  competencies: string[];
  highlightColor?: string;
}

export interface JourneyMilestone {
  number: string;
  title: string;
  category: string;
  description: string;
  year: string;
  linkText?: string;
  linkUrl?: string;
  deliverable?: string;
}

export interface ProcessStage {
  number: string;
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
  iconMarker: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export interface GraphicDesignReel {
  id: string;
  number: string;
  title: string;
  tagline: string;
  videoUrl: string;
  poster: string;
  software: string[];
  duration?: string;
  year?: string;
}

export interface GraphicDesignGalleryItem {
  id: string;
  title: string;
  category: 'Posters' | 'Banners' | 'Thumbnails' | 'Advertisements' | 'Branding';
  imageUrl: string;
  aspectRatio: 'poster' | 'banner' | 'thumbnail' | 'square';
  description: string;
  software: string[];
  year: string;
  client?: string;
}

export interface GraphicDesignProcessItem {
  id: string;
  title: string;
  subtitle: string;
  beforeLabel: string;
  afterLabel: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  software: string[];
}

export interface SketchItem {
  id: string;
  title: string;
  category: 'Character & Gestures' | 'Storyboard Thumbnails' | 'Environment Studies' | 'Ink & Concept';
  medium: string;
  year: string;
  imageUrl: string;
  roughSketchUrl?: string;
  description: string;
  aspect: 'portrait' | 'landscape' | 'square';
  tags: string[];
}
