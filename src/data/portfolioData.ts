import { Project, SkillCategory, JourneyMilestone, ProcessStage, AnimationWorkItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Rohan Kshirsagar',
  monogram: 'RK',
  role: 'VFX Artist, Video Editor & Visual Designer',
  shortRole: 'VFX ARTIST / EDITOR / DESIGNER',
  email: 'rohankshirsagar534@gmail.com',
  availableForWork: true,
  availabilityText: 'AVAILABLE FOR WORK',
  location: 'Mumbai / Remote Worldwide',
  bio: "I'm Rohan Kshirsagar, a multidisciplinary visual creator focused on filmmaking, editing, VFX, motion graphics, design, 3D and digital experiences. Combining modern editorial structure with cinematic rhythm, I turn raw concepts into captivating visual pieces.",
  heroSubtext: "VFX artist, video editor and visual designer creating cinematic visuals, motion graphics, digital experiences and experimental artwork.",
  socials: [
    { name: 'Email', url: 'mailto:rohankshirsagar534@gmail.com', label: 'rohankshirsagar534@gmail.com' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rohan-kshirsagar-64793b332/', label: 'linkedin.com/in/rohan-kshirsagar-64793b332' },
    { name: 'Instagram', url: 'https://instagram.com/rohan.visuals', label: '@rohan.visuals' },
    { name: 'GitHub', url: 'https://github.com/rohankshirsagar534-web', label: 'github.com/rohankshirsagar534-web' }
  ],
  stats: [
    { value: '05+', label: 'CREATIVE DISCIPLINES', detail: 'From editing to VFX, 3D & interface craft' },
    { value: '20+', label: 'VISUAL PROJECTS', detail: 'Completed edits, animations & digital pieces' },
    { value: '02+', label: 'YEARS OF CRAFT', detail: 'Focused practical experience and visual R&D' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'short-ad-film-apex',
    number: '01',
    title: 'SHORT AD FILM // APEX SPEED',
    category: 'SHORT AD FILM',
    categoryDisplay: 'Short Ad Film / Performance Footwear TVC',
    year: '2025',
    description: 'High-octane 30-second commercial spot combining kinetic camera tracking, whip-pan match cuts, heart-thumping sub-bass sound design, and razor-sharp editorial rhythm for a performance footwear launch.',
    role: 'Commercial Director & Lead Editor',
    clientOrContext: 'Apex Performance Footwear TVC & Digital Ad Campaign',
    software: ['Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Logic Pro'],
    thumbnail: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://cdn.jumpshare.com/preview/vw64keW9QzxrsAm74YyQs_Dthi5alxYlZnuvPy3tAEq_LRC3taoj7CFbgo0TT8e7HRm7REAjDOWkANdLVaXv2DS7jRJUAAIR48_-gQIBfyYGDPk1EGnE7-h4JX7jDLp9Jg6PfL_cIPtxNMFz_CBQaW6yjbN-I2pg_cnoHs_AmgI.mp4',
    aspectRatio: 'square',
    featured: true,
    creativeProcess: [
      'Engineered a 3-second rapid visual hook opening with macro lace-tightening Foley to stop user scrolling.',
      'Authored custom velocity curves syncing sprint footfalls to punchy sub-bass 808 transients.',
      'Conducted a DaVinci Resolve color grade emphasizing high-contrast warm asphalt tones and vibrant neon orange shoe accents.'
    ],
    beforeAfter: {
      labelBefore: 'Raw Flat LOG Footage',
      labelAfter: 'Final Commercial Color Grade',
      imageBefore: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?q=80&w=1200&auto=format&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=1200&auto=format&fit=crop',
      description: 'Color science transformation from desaturated flat sensor curve to high-impact broadcast commercial master.'
    },
    finalResultText: 'High-performing commercial ad film delivering a 3.2x lift in digital campaign click-through and full completion rate.',
    gallery: [
      'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'graphic-designing',
    number: '02',
    title: 'GRAPHIC DESIGNING',
    category: 'GRAPHIC DESIGN',
    categoryDisplay: 'Graphic Design / Characters, Products & Props',
    year: '2024',
    description: 'Comprehensive graphic design suite spanning character design sheets, bespoke product packaging identities, and functional props design schematics with Swiss typographic discipline.',
    role: 'Graphic Designer, Character Concept Artist & Visual Stylist',
    clientOrContext: 'Commercial Brand, Entertainment & Character Design Commissions',
    software: ['Photoshop', 'Illustrator', 'Procreate', 'InDesign'],
    thumbnail: '/images/food_poster_design_poster.jpg',
    heroImage: '/images/food_poster_design_poster.jpg',
    videoUrl: '/videos/food_poster_design.mp4',
    externalUrl: 'https://savedly.net/f/2tg8mu6m',
    externalUrlLabel: 'SAVEDLY REEL',
    aspectRatio: 'tall',
    featured: true,
    creativeProcess: [
      'Developed expressive character silhouette studies and multi-angle turnarounds in Procreate and Photoshop.',
      'Constructed modular 3D product packaging die-lines and bespoke typographic logo lockups in Illustrator.',
      'Designed technical sci-fi prop sheets with exploded isometric callouts, materials notes, and functional HUD decals.'
    ],
    beforeAfter: {
      labelBefore: 'Initial Rough Thumbnail Sketch',
      labelAfter: 'Final Vector & Rendered Artwork',
      imageBefore: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop',
      imageAfter: '/images/food_poster_design_poster.jpg',
      description: 'Progressive transformation from gestural thumbnailing to print-ready vector layout with tactile screenprint textures.'
    },
    finalResultText: 'A unified graphic design body of work covering character concept sheets, retail product packaging, and production-ready entertainment prop sheets.',
    gallery: [
      '/images/food_poster_design_poster.jpg',
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1200&auto=format&fit=crop'
    ],
    designShowcase: [
      {
        type: 'CHARACTER DESIGN',
        title: 'Cyber Ronin Character Sheet',
        subtitle: 'Turnarounds & Costume Detailing',
        imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
        description: 'Complete visual development for an episodic protagonist, balancing angular cyberpunk armor plates with traditional flowing textiles.'
      },
      {
        type: 'PRODUCT DESIGN',
        title: 'Minimalist Modular Packaging',
        subtitle: 'Structural Box & Bottle Label System',
        imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop',
        description: 'Sustainable luxury cosmetics packaging system with custom typographic lockups, tactile emboss zones, and spot-UV foil varnish.'
      }
    ]
  },
  {
    id: 'vfx-experiment',
    number: '03',
    title: 'VFX COMPOSITING // NUKE ROTO & TRACKING',
    category: 'VFX',
    categoryDisplay: 'VFX / Nuke Compositing, Roto & Planar Tracking',
    year: '2025',
    description: 'Professional node-based visual effects compositing in The Foundry Nuke. Planar motion tracking, FrameHold clean plates, multi-layer rotoscoping, edge blur feathering, and grain-matched write outputs.',
    role: 'Nuke Compositor, Roto & Planar Tracking Artist',
    clientOrContext: 'VFX Production Pipeline & Feature Compositing Reel',
    software: ['Nuke', 'Mocha Pro', 'After Effects', 'Silhouette', 'Premiere Pro'],
    thumbnail: '/images/nuke_vfx_compositing_poster.jpg',
    heroImage: '/images/nuke_vfx_compositing_poster.jpg',
    videoUrl: '/videos/nuke_vfx_compositing.mp4',
    externalUrl: 'https://savedly.net/f/umye7g83',
    externalUrlLabel: 'WATCH SAVEDLY REEL',
    aspectRatio: 'wide',
    featured: true,
    creativeProcess: [
      'Constructed a multi-branch node graph in Nuke with dual FrameHold clean plates and planar tracker coordinates.',
      'Executed precision multi-layer rotoscoping and edge blur passes with custom alpha masks for seamless integration.',
      'Assembled multi-merge composites with realistic motion blur, grain synthesis, and high-bitrate write outputs.'
    ],
    beforeAfter: {
      labelBefore: 'Nuke Node Graph & Roto/Track Pipes',
      labelAfter: 'Final Composited Master',
      imageBefore: '/images/nuke_node_graph.png',
      imageAfter: '/images/nuke_vfx_compositing_poster.jpg',
      description: 'The Foundry Nuke node network connecting FrameHold clean plates, RotoPaint channels, Tracker transforms, and final output writes.'
    },
    finalResultText: 'Industry-standard VFX compositing shot featuring seamless roto, clean plate patching, robust planar tracking, and photorealistic optical integration.',
    gallery: [
      '/images/nuke_vfx_compositing_poster.jpg',
      '/images/nuke_node_graph.png',
      '/images/nuke_vfx_compositing_frame14.jpg'
    ]
  },
  {
    id: '3d-world',
    number: '04',
    title: '3D WORLD',
    category: '3D',
    categoryDisplay: '3D / Blender / Environment',
    year: '2024',
    description: 'Atmospheric hard-surface and organic environment design rendered in Blender Cycles, focusing on volumetric lighting, procedural PBR textures, and cinematic depth-of-field.',
    role: '3D Environment Artist',
    clientOrContext: 'Worldbuilding Exploration',
    software: ['Blender 4.0', 'Substance Painter', 'Photoshop'],
    thumbnail: '/assets/diorama_poster.jpg',
    heroImage: '/assets/diorama_poster.jpg',
    videoUrl: '/assets/diorama_render.mp4',
    aspectRatio: 'square',
    creativeProcess: [
      'Blocked out primary architectural silhouettes using brutalist monolithic forms.',
      'Scattered micro-debris and procedural weathering using geometry nodes.',
      'Crafted custom gobos to simulate harsh sunlight filtering through high-altitude haze.'
    ],
    finalResultText: 'Full 360-degree virtual environment capable of camera navigation and high-resolution still frame extraction for keyframe art.',
    gallery: [
      'https://i.ibb.co/x8szFNJL/Chat-GPT-Image-Sep-16-2026-11-26-26-PM.png',
      'https://i.ibb.co/nMjZD2kk/Screenshot-2026-05-01-220655.png'
    ]
  },
  {
    id: '3d-character-modeling',
    number: '05',
    title: '3D CHARACTER MODELING',
    category: '3D',
    categoryDisplay: '3D Character / Topology & Turntable',
    year: '2025',
    description: 'Stylized 3D character modeling study featuring clean subdivision surface quad topology, anatomical edge loops, deformation-ready joint geometry, and a 360-degree turntable viewport presentation.',
    role: '3D Character Modeler & Topology Artist',
    clientOrContext: 'Character Concept & 3D Modeling Study',
    software: ['Blender 4.2', 'ZBrush', 'Substance 3D Painter', 'Cycles'],
    thumbnail: '/images/3d_character_modeling_poster.jpg',
    heroImage: '/images/3d_character_modeling_poster.jpg',
    videoUrl: '/videos/3d_character_modeling.mp4',
    externalUrl: 'https://savedly.net/f/y86c6cz9',
    externalUrlLabel: 'WATCH SAVEDLY VIDEO',
    aspectRatio: 'wide',
    featured: true,
    creativeProcess: [
      'Sculpted base character proportions, gestural anatomy silhouettes, and head planes in Blender and ZBrush.',
      'Retopologized clean full-body quad topology with circular edge loops around joints and facial features for deformation readiness.',
      'Captured high-bitrate 360-degree viewport turntable presentation verifying silhouette stability, edge flow, and lighting response.'
    ],
    beforeAfter: {
      labelBefore: 'Topology & Wireframe Pass',
      labelAfter: '360° Turntable Render',
      imageBefore: '/images/3d_character_wireframe_before.jpg',
      imageAfter: '/images/3d_character_modeling_poster.jpg',
      description: 'Subdivision surface quad topology inspection transitioning to full 360-degree viewport character turnaround render.'
    },
    finalResultText: 'Complete production-ready 3D character model featuring clean quad topology, anatomical proportions, and 360-degree turntable presentation.',
    gallery: [
      '/images/3d_character_modeling_poster.jpg',
      '/images/3d_character_wireframe_before.jpg',
      '/images/3d_character_modeling_frame6.jpg',
      '/images/3d_character_modeling_frame10.jpg'
    ]
  },
  {
    id: '3d-procedural-monolith',
    number: '06',
    title: '3D PROCEDURAL SCULPTURE',
    category: '3D',
    categoryDisplay: '3D Generative Simulation & Lighting',
    year: '2025',
    description: 'Mathematical kinetic crystal sculpture built entirely through procedural geometry nodes, glass dispersion caustics, and volumetric light shafts rendered in Blender Cycles.',
    role: 'Technical 3D & Shader Artist',
    clientOrContext: 'Generative Art & Experimental LookDev',
    software: ['Blender 4.2', 'Geometry Nodes', 'Cycles', 'After Effects'],
    thumbnail: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'square',
    featured: true,
    creativeProcess: [
      'Constructed procedural vector fields to drive fractal surface displacement in real-time.',
      'Implemented spectral Cauchy dispersion shader reproducing authentic glass prism chromatic aberration.',
      'Animated camera orbital trajectory with custom focal blur mimicking a 50mm anamorphic prime lens.'
    ],
    beforeAfter: {
      labelBefore: 'Node Wireframe Matrix',
      labelAfter: 'Refractive Glass Caustics',
      imageBefore: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
      description: 'Mathematical node network generating dynamic surface tessellation and spectral light dispersion.'
    },
    finalResultText: 'Looping procedural 3D sculpture showcasing advanced node workflows and physically based optical simulation.',
    gallery: [
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: '3d-automotive-concept',
    number: '07',
    title: '3D JEEP MODEL // OFF-ROAD RIG',
    category: '3D',
    categoryDisplay: '3D Hard-Surface / Jeep 4x4 Model',
    year: '2024',
    description: 'High-poly 3D Jeep off-road vehicle modeling study featuring complex quad topology, heavy-duty suspension mechanics, beadlock wheels, and real-time viewport lookdev turntable.',
    role: '3D Vehicle Modeler & Rigging Artist',
    clientOrContext: 'Off-Road Automotive & Hard-Surface 3D Study',
    software: ['Blender', 'Maya', 'Substance 3D Painter', 'Unreal Engine 5'],
    thumbnail: '/images/jeep_3d_model_poster.jpg',
    heroImage: '/images/jeep_3d_model_poster.jpg',
    videoUrl: '/videos/jeep_3d_model.mp4',
    aspectRatio: 'wide',
    externalUrl: 'https://savedly.net/f/y2dkzsgc',
    externalUrlLabel: 'WATCH SAVEDLY VIDEO',
    creativeProcess: [
      'Constructed clean SubD quad mesh topology for the Jeep body panels, roll cage, hood latches, and front grille.',
      'Accurately modeled mechanical chassis components including heavy-duty live axles, coilover shocks, and deep-tread off-road tires.',
      'Captured real-time viewport turntable presentation showcasing edge flow, wireframe bevels, and material lookdev.'
    ],
    beforeAfter: {
      labelBefore: 'SubD Wireframe Topology',
      labelAfter: 'Lookdev Turntable Render',
      imageBefore: '/images/jeep_3d_model_poster.jpg',
      imageAfter: '/images/jeep_3d_model_poster.jpg',
      description: 'Curvature flow and topology inspection demonstrating clean reflection lines and zero pinching across vehicle panels.'
    },
    finalResultText: 'A detailed hard-surface 3D vehicle project highlighting structural realism, precision edge bevels, and turntable viewport presentation.',
    gallery: [
      '/images/jeep_3d_model_poster.jpg',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'digital-experience',
    number: '08',
    title: 'DIGITAL EXPERIENCE',
    category: 'WEB',
    categoryDisplay: 'UI/UX / Web Design',
    year: '2025',
    description: 'Immersive interactive visual web experience combining brutalist micro-interactions, responsive grid fluidity, and dark editorial aesthetic for digital creators.',
    role: 'UI/UX & Creative Frontend Designer',
    clientOrContext: 'Creative Studio Web Presence',
    software: ['Figma', 'React', 'Tailwind CSS', 'Motion'],
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'wide',
    creativeProcess: [
      'Conducted user flow mapping focusing on seamless discovery of visual showreel clips.',
      'Designed a high-contrast black/off-white color system with cinematic warm orange accents.',
      'Engineered sub-60fps fluid transitions with zero layout shift.'
    ],
    finalResultText: 'A high-performance responsive interface built to showcase high-bitrate media smoothly across all mobile and desktop viewports.',
    gallery: [
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'short-ad-film-lumina',
    number: '09',
    title: 'SHORT AD FILM // FEVICOL MATRIMONY',
    category: 'SHORT AD FILM',
    categoryDisplay: 'Short Ad Film / Fevicol Matrimony TVC',
    year: '2025',
    description: 'Iconic, culturally resonant comedic commercial spot for Fevicol Matrimony, crafted with precision comedic timing, seamless editorial rhythm, dynamic audio mixing, and unforgettable visual storytelling.',
    role: 'Commercial Film Editor & Sound Designer',
    clientOrContext: 'Fevicol Matrimony Commercial Broadcast & Digital Campaign',
    software: ['Premiere Pro', 'DaVinci Resolve', 'Logic Pro', 'Audition'],
    thumbnail: '/videos/fevicol_matrimony_thumb.jpg',
    heroImage: '/videos/fevicol_matrimony_poster.jpg',
    videoUrl: '/videos/fevicol_matrimony.mp4',
    externalUrl: 'https://savedly.net/f/thuvzfwu',
    externalUrlLabel: 'WATCH ON SAVEDLY',
    aspectRatio: 'wide',
    featured: true,
    creativeProcess: [
      'Engineered comedic pauses and rhythmic beat timing to land every dialogue punchline with maximum audience impact.',
      'Sculpted organic Foley sound design and nuanced acoustic atmospheres to elevate authentic cultural realism.',
      'Conducted a DaVinci Resolve broadcast color pass preserving rich Indian festive attire hues and balanced skin tones.'
    ],
    beforeAfter: {
      labelBefore: 'Raw Studio Assembly',
      labelAfter: 'Final Master Commercial Grade',
      imageBefore: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?q=80&w=1200&auto=format&fit=crop',
      imageAfter: '/videos/fevicol_matrimony_poster.jpg',
      description: 'Broadcast commercial color grade with rich film contrast, warm highlight roll-off, and vibrant costume separation.'
    },
    finalResultText: 'A high-impact, award-winning comedic ad film that drives instantaneous brand recall across national broadcast and digital streaming.',
    gallery: [
      '/videos/fevicol_matrimony_poster.jpg',
      '/videos/fevicol_matrimony_thumb.jpg'
    ]
  },
  {
    id: 'short-ad-film-pulse',
    number: '10',
    title: 'RADIO SHOW // LIVE BROADCAST & AUDIO PRODUCTION',
    category: 'SHORT AD FILM',
    categoryDisplay: 'Radio Show / Audio & Live Visual Broadcast',
    year: '2025',
    description: 'Dynamic, high-energy live radio show broadcast featuring precision audio mixing, host vocal processing, rhythmic stingers, commercial station sound design, and live-streamed video capture.',
    role: 'Lead Sound Designer, Broadcast Audio Engineer & Video Editor',
    clientOrContext: 'Radio Show Live Broadcast & Production',
    software: ['Pro Tools', 'Adobe Audition', 'DaVinci Resolve', 'Premiere Pro'],
    thumbnail: '/videos/ay6khcyf_thumb.jpg',
    heroImage: '/videos/ay6khcyf_poster.jpg',
    videoUrl: '/videos/ay6khcyf_video.mp4',
    externalUrl: 'https://jumpshare.com/s/Ay6kHCYfGP2s3hW06wJQ',
    externalUrlLabel: 'WATCH ON JUMPSHARE',
    aspectRatio: 'portrait',
    featured: true,
    creativeProcess: [
      'Mastered real-time radio broadcast loudness and dynamic multiband compression for broadcast vocal clarity.',
      'Designed custom station sound IDs, sonic sweepers, and seamless segue transitions between segments.',
      'Edited and color-graded vertical video footage for digital multi-platform distribution and station reels.'
    ],
    beforeAfter: {
      labelBefore: 'Raw Studio Mic Feeds',
      labelAfter: 'Broadcast Master Radio Mix',
      imageBefore: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop',
      imageAfter: '/videos/ay6khcyf_poster.jpg',
      description: 'Dynamic range control, station acoustic room treatment, vocal de-essing, and broadcast color grade.'
    },
    finalResultText: 'Delivered a signature radio broadcast production with pristine audio clarity, energetic flow, and high-impact visual promotion.',
    gallery: [
      '/videos/ay6khcyf_poster.jpg',
      '/videos/ay6khcyf_thumb.jpg'
    ]
  },
  {
    id: 'short-ad-film-kinetic',
    number: '11',
    title: 'SHORT AD FILM // KINETIC ENERGY SPOT',
    category: 'SHORT AD FILM',
    categoryDisplay: 'Short Ad Film / Beverage Commercial',
    year: '2024',
    description: 'High-energy 15-second digital ad crafted for rapid audience retention, featuring ice-droplet macro slow motion, dynamic speed ramping, neon kinetic typography, and sub-bass drop impact.',
    role: 'Commercial Video Editor & Colorist',
    clientOrContext: 'Kinetic Fuel Zero-Sugar Energy Commercial',
    software: ['Premiere Pro', 'DaVinci Resolve', 'Logic Pro', 'Audition'],
    thumbnail: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://cdn.jumpshare.com/preview/vw64keW9QzxrsAm74YyQs_Dthi5alxYlZnuvPy3tAEq_LRC3taoj7CFbgo0TT8e7HRm7REAjDOWkANdLVaXv2DS7jRJUAAIR48_-gQIBfyYGDPk1EGnE7-h4JX7jDLp9Jg6PfL_cIPtxNMFz_CBQaW6yjbN-I2pg_cnoHs_AmgI.mp4',
    aspectRatio: 'tall',
    creativeProcess: [
      'Crafted a high-retention 15-second storyboard maximizing immediate can crack Foley and sparkling carbonation.',
      'Speed ramped phantom 1000fps ice pour shots with rhythmic whip-pan camera transitions.',
      'Color graded vibrant citrus yellows and electric limes with saturated punch and clean whites.'
    ],
    beforeAfter: {
      labelBefore: 'Raw Flat B-Roll Plate',
      labelAfter: 'Final Dynamic Commercial Master',
      imageBefore: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200&auto=format&fit=crop',
      description: 'Raw high-speed plate transformed into an electrifying, thirst-inducing beverage commercial.'
    },
    finalResultText: 'Commercial cut that drove a 2.8x increase in average watch completion rate across all major digital platforms.',
    gallery: [
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1546548970-71785318a17b?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'graphic-product-packaging',
    number: '12',
    title: 'PRODUCT DESIGN // AURA BOTANICALS',
    category: 'GRAPHIC DESIGN',
    categoryDisplay: 'Graphic Design / Product & Packaging',
    year: '2024',
    description: 'Holistic product design and packaging system for an organic skincare line, featuring Swiss grid label typography, matte foil stamped boxes, and tactile amber glass vessels.',
    role: 'Packaging Graphic Designer & Identity Stylist',
    clientOrContext: 'Direct-to-Consumer Botanical Skincare Brand',
    software: ['Illustrator', 'Photoshop', 'Dimension', 'InDesign'],
    thumbnail: '/images/product_rohan_poster.jpg',
    heroImage: '/images/product_rohan_poster.jpg',
    videoUrl: '/videos/product_rohan.mp4',
    externalUrl: 'https://savedly.net/f/awhqe998',
    externalUrlLabel: 'SAVEDLY SOURCE',
    aspectRatio: 'tall',
    featured: true,
    creativeProcess: [
      'Established a minimalist Swiss typographic system balancing high-contrast serif headers with micro-grotesque ingredients.',
      'Engineered pre-press die-line schematics with custom embossed seal lines and zero-waste folding flaps.',
      'Created photo-realistic 3D staging renders for e-commerce launch catalogs and social advertisement banners.'
    ],
    beforeAfter: {
      labelBefore: 'Flat Technical Die-Line',
      labelAfter: 'Finished Product Package',
      imageBefore: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop',
      description: 'Precision alignment between 2D vector die-cut measurements and tangible 3D shelf presence.'
    },
    finalResultText: 'Packaging design that achieved national retail shelf placement and a 40% uptick in customer unboxing shares.',
    gallery: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'graphic-props-schematics',
    number: '13',
    title: '@DIETCOKE X CHRISTMAS 🌲',
    category: 'GRAPHIC DESIGN',
    categoryDisplay: 'Graphic Design / Holiday Visuals',
    year: '2025',
    description: 'tried making visuals for diet coke in the christmas theme for this season :) #dietcoke #explore #fyp #graphic #christmas explorepage fypシ cokepaglu',
    role: 'Visual & Motion Graphic Designer',
    clientOrContext: '@dietcoke X Christmas Seasonal Exploration',
    software: ['Photoshop', 'After Effects', 'Illustrator', 'Premiere Pro'],
    thumbnail: '/images/dietcoke_christmas_poster.jpg',
    heroImage: '/images/dietcoke_christmas_poster.jpg',
    videoUrl: '/videos/dietcoke_christmas.mp4',
    externalUrl: 'https://savedly.net/f/qh3puax8',
    aspectRatio: 'tall',
    creativeProcess: [
      'Visual development exploring Diet Coke branding reimagined with frosty pine needles, iced condensation, and holiday lighting.',
      'Composed vertical 9:16 social reel format with dynamic camera motion, rhythmic cuts, and atmospheric holiday soundtrack.',
      'Crafted typography and seasonal iconography optimized for Instagram explore feed engagement.'
    ],
    beforeAfter: {
      labelBefore: 'Raw Can Mockup',
      labelAfter: 'Final Christmas Visual',
      imageBefore: '/images/dietcoke_christmas_frame4.jpg',
      imageAfter: '/images/dietcoke_christmas_poster.jpg',
      description: 'Holiday visual styling transforming commercial packshot into a cinematic winter celebration.'
    },
    finalResultText: 'High-engagement viral social visual exploration celebrating Diet Coke in festive Christmas aesthetics.',
    gallery: [
      '/images/dietcoke_christmas_poster.jpg',
      '/images/dietcoke_christmas_frame4.jpg'
    ]
  },
  {
    id: 'sketch-gallery-character-concept',
    number: '14',
    title: 'SKETCH VAULT // DYNAMIC GESTURE & CHARACTER ART',
    category: 'SKETCH GALLERY',
    categoryDisplay: 'Sketch Gallery / Gestural Studies & Concept Ink',
    year: '2025',
    description: 'Raw exploratory sketchbook studies, gestural anatomy figures, pencil weight explorations, and stylized character silhouettes bridging traditional sketching with digital refinement.',
    role: 'Concept Artist & Traditional Sketcher',
    clientOrContext: 'Personal Sketchbook & Visual Development R&D',
    software: ['Graphite 2B', 'Charcoal', 'Micron Fine-liners', 'Procreate'],
    thumbnail: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'square',
    featured: true,
    creativeProcess: [
      'Authored rapid 90-second gestural studies examining line of action, spinal compression, and natural silhouette tension.',
      'Layered soft 4B graphite shading over raw mechanical pencil construction lines for depth and tactile texture.',
      'Developed ink cross-hatching passes defining directional light sources and character anatomy planes.'
    ],
    beforeAfter: {
      labelBefore: 'Raw Blue Pencil Gesture',
      labelAfter: 'Finished Ink & Charcoal Plate',
      imageBefore: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
      description: 'Progression from exploratory loose posture armature to tight, inked character silhouette.'
    },
    finalResultText: 'Comprehensive traditional sketchbook archive serving as the anatomical bedrock for 2D animation and 3D character modeling.',
    gallery: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'sketch-gallery-storyboards',
    number: '15',
    title: 'SKETCH VAULT // TVC STORYBOARD & CAMERA THUMBNAILS',
    category: 'SKETCH GALLERY',
    categoryDisplay: 'Sketch Gallery / Commercial Storyboard & Camera Blocking',
    year: '2025',
    description: 'Rapid thumbnail sketch sequences capturing camera blocking, dramatic chiaroscuro framing, lens focal length choices, and kinetic action cuts for commercials and motion pieces.',
    role: 'Storyboard Artist & Visual Storyteller',
    clientOrContext: 'Commercial Pre-Production & Visual Direction Bible',
    software: ['Indian Ink', 'Copic Warm Gray Markers', 'Photoshop'],
    thumbnail: 'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'wide',
    featured: true,
    creativeProcess: [
      'Blocked out 16:9 thumbnail ratios investigating rule-of-thirds dynamism and foreground silhouette depth.',
      'Applied dual-tone gray marker values to test visual readability in under 0.5 seconds of viewer gaze.',
      'Mapped velocity arrows and camera motion pans directly onto sketch frames to guide editorial cutting timing.'
    ],
    beforeAfter: {
      labelBefore: 'Initial Rough Thumbnail Sketch',
      labelAfter: 'Value-Toned Storyboard Panel',
      imageBefore: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?q=80&w=1200&auto=format&fit=crop',
      description: 'Rapid thumbnail blocking developed into comprehensive pre-visualization storyboard frames.'
    },
    finalResultText: 'Production-ready storyboard sheets that accelerated live-action commercial shooting efficiency and VFX plate alignment.',
    gallery: [
      'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'short-ad-film',
    number: '01',
    title: 'SHORT AD FILM',
    tagline: 'High-impact commercial spots, brand ad films, rapid visual hooks & broadcast TVC mastering.',
    tools: ['Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Logic Pro'],
    competencies: ['Commercial Narrative Assembly', 'High-Retention Hook Pacing', 'Commercial Color Science', 'Dynamic Sound Design', 'Multi-Aspect Delivery (16:9 / 9:16)']
  },
  {
    id: 'vfx',
    number: '02',
    title: 'VFX',
    tagline: 'Node-based Nuke compositing, rotoscoping, planar tracking, clean-plating & CGI integration.',
    tools: ['Nuke', 'Mocha Pro', 'Compositing', 'Roto Tracking', 'Clean Plates'],
    competencies: ['Nuke Node Compositing', 'Planar & Point Tracking', 'Multi-Layer Rotoscoping', 'Object Removal & Clean Plates', 'Grain Matching & Integration']
  },
  {
    id: 'design',
    number: '03',
    title: 'DESIGN',
    tagline: 'Brutalist & Swiss typography, editorial layouts, poster design & brand identity.',
    tools: ['Photoshop', 'Illustrator', 'Graphic Design', 'Poster Design', 'Branding'],
    competencies: ['Editorial Art Direction', 'Typography Systems', 'Poster Aesthetics', 'Print & Digital Layouts', 'Visual Identity']
  },
  {
    id: '3d',
    number: '04',
    title: '3D',
    tagline: 'Hard-surface modeling, procedural lighting, materials & camera animation.',
    tools: ['Blender', 'Maya', '3D Modeling', 'Texturing', 'Lighting'],
    competencies: ['Atmospheric Lighting', 'PBR Material Craft', 'Camera Movement', 'Geometry Nodes', 'Render Optimization']
  },
  {
    id: 'motion',
    number: '05',
    title: 'MOTION',
    tagline: 'Kinetic typography, brand packages, opening titles & dynamic 2D animation.',
    tools: ['Motion Graphics', 'Title Animation', '2D Animation', 'Kinetic Typography'],
    competencies: ['Keyframe Dynamics', 'Title Sequences', 'Audio-reactive Motion', 'Micro-interactions', 'Brand Reveal Systems']
  },
  {
    id: 'digital',
    number: '06',
    title: 'DIGITAL',
    tagline: 'Design systems, modern responsive interfaces, interactive prototypes & web craft.',
    tools: ['UI/UX', 'Web Design', 'HTML', 'CSS', 'JavaScript'],
    competencies: ['Responsive Grids', 'Design Systems', 'Modern Web Standards', 'Motion UI Interaction', 'Mobile Optimization']
  }
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    number: '01',
    phase: 'IDEATE',
    title: 'CONCEPT & STORY',
    description: 'Deconstructing the core idea, story beats, emotional tone, and target visual direction before touching software.',
    deliverables: ['Creative Brief', 'Narrative Arc', 'References & Vision Board'],
    iconMarker: 'REC'
  },
  {
    number: '02',
    phase: 'DESIGN',
    title: 'BOARDS & SYSTEMS',
    description: 'Developing moodboards, color palettes, typographic hierarchies, styleframes, and rough storyboard animatics.',
    deliverables: ['Styleframes', 'Grid Hierarchy', 'Typographic Specs', 'Audio Reference'],
    iconMarker: 'GRID'
  },
  {
    number: '03',
    phase: 'CREATE',
    title: 'PRODUCTION & EXECUTION',
    description: 'The core craft phase: timeline assembly, 3D modeling, camera tracking, VFX keying, and motion animation.',
    deliverables: ['Timeline Rough Cut', 'VFX Composites', 'Motion Elements', '3D Asset Passes'],
    iconMarker: 'RENDER'
  },
  {
    number: '04',
    phase: 'POLISH',
    title: 'COLOR & SOUND FINISH',
    description: 'Finalizing the piece with meticulous color timing, audio mastering, optical grain matching, and multi-format exports.',
    deliverables: ['Final Color Grade', 'Master Audio Mix', 'ProRes Master', 'Web & Social Deliveries'],
    iconMarker: 'MASTER'
  }
];

export const JOURNEY_ITEMS: JourneyMilestone[] = [
  {
    number: '01',
    title: 'Independent Filmmaking & Video Direction',
    category: 'Creative Project',
    description: 'Spearheaded complete visual post-production for independent short projects, overseeing editorial pacing, custom sound design, and color grading.',
    year: '2025',
    linkText: 'VIEW CASE STUDY ↗',
    deliverable: 'Shortfilm & Narrative Edit'
  },
  {
    number: '02',
    title: 'Motion Design & Title Identity Series',
    category: 'Design Commission',
    description: 'Explored experimental kinetic type treatments and audio-reactive title sequences blending Swiss modernist grid aesthetics with raw cinematic textures.',
    year: '2024',
    linkText: 'EXPLORE REEL ↗',
    deliverable: 'Animation & Title Sequences'
  },
  {
    number: '03',
    title: 'VFX Compositing & Clean Plate R&D',
    category: 'Freelance & Research',
    description: 'Executed planar camera tracking, green screen extractions, match-moving, and procedural particle integration across live-action test footage.',
    year: '2024',
    linkText: 'INSPECT BREAKDOWN ↗',
    deliverable: 'Compositing Passes'
  },
  {
    number: '04',
    title: '3D Worldbuilding & Visual Systems Experiment',
    category: 'Personal Experiment',
    description: 'Authored monolithic architectural environments in Blender, focusing on volumetric sunlight physics, photoreal surface micro-imperfections, and camera optics.',
    year: '2023',
    linkText: 'SEE ARTWORK ↗',
    deliverable: '3D Environments'
  }
];

export const ANIMATION_2D_GALLERY: AnimationWorkItem[] = [
  {
    id: 'anim-2d-01',
    title: 'Character Walk & Fluid Motion Loop',
    type: 'video',
    mediaUrl: 'https://cdn.jumpshare.com/preview/vw64keW9QzxrsAm74YyQs_Dthi5alxYlZnuvPy3tAEq_LRC3taoj7CFbgo0TT8e7HRm7REAjDOWkANdLVaXv2DS7jRJUAAIR48_-gQIBfyYGDPk1EGnE7-h4JX7jDLp9Jg6PfL_cIPtxNMFz_CBQaW6yjbN-I2pg_cnoHs_AmgI.mp4',
    poster: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    tag: 'Character Rigging',
    aspect: 'portrait',
    description: 'Frame-by-frame stylized 2D character cycle with secondary cloth simulation, expressive bounce easing, and hand-drawn line textures.',
    software: ['After Effects', 'Illustrator', 'RoughAnimator'],
    duration: '0:15'
  },
  {
    id: 'anim-2d-02',
    title: 'Cyberpunk Neon Street Keyframe & Concept Plate',
    type: 'photo',
    mediaUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop',
    tag: 'Background Art',
    aspect: 'landscape',
    description: 'Digital 2D layout illustration and environmental atmosphere plate painted for a dystopian neon anime short series.',
    software: ['Photoshop', 'Procreate'],
    duration: 'Still Artwork'
  },
  {
    id: 'anim-2d-03',
    title: 'Dynamic Kinetic Action & Impact Frame Blast',
    type: 'video',
    mediaUrl: '/assets/diorama_render.mp4',
    poster: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop',
    tag: 'Action FX',
    aspect: 'square',
    description: 'High-speed 2D impact sequence featuring smearing lines, anime lightning sparks, smoke puff deformation, and camera shake punch.',
    software: ['After Effects', 'Photoshop', 'Clip Studio Paint'],
    duration: '0:10'
  },
  {
    id: 'anim-2d-04',
    title: 'Expressive Character Facial Morph & Emotion Transitions',
    type: 'photo',
    mediaUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop',
    tag: 'Model Sheet',
    aspect: 'landscape',
    description: 'Full 2D character model turnaround with 8-angle facial expression studies, eye shape phonemes, and silhouette turnaround sheet.',
    software: ['Illustrator', 'Clip Studio Paint'],
    duration: 'Character Sheet'
  },
  {
    id: 'anim-2d-05',
    title: 'Morphing Shape Geometry & Kinetic Transition Sequence',
    type: 'video',
    mediaUrl: 'https://cdn.jumpshare.com/preview/JdAHGJn1Rjzh88X44h_7xLUFW4CcPtg1RoZRrOLHqhVIBXN9NcZ6VLN0JVA9HBLi1YUr8RM0srv1S8ZPaLb41JuZRTL0DnifoHfOG-h_t4uTRh6ItsRHy1rNBUrOBb5BQtkEVLt8vPsSAXmho7zmOm6yjbN-I2pg_cnoHs_AmgI.mp4',
    poster: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1200&auto=format&fit=crop',
    tag: 'Motion Graphics',
    aspect: 'landscape',
    description: 'Hypnotic geometric 2D vector morphing experiment combining strict mathematical spacing, elastic easing, and color theory palettes.',
    software: ['After Effects', 'Illustrator'],
    duration: '0:20'
  },
  {
    id: 'anim-2d-06',
    title: 'Atmospheric Isometric Cityscape & Cel-Shaded Storyboard',
    type: 'photo',
    mediaUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    tag: 'Isometric Art',
    aspect: 'landscape',
    description: 'Isometric retro-futuristic city block blueprint featuring layered parallax buildings, color-blocked rooftop lighting, and signage.',
    software: ['Illustrator', 'Photoshop'],
    duration: 'Production Art'
  },
  {
    id: 'anim-2d-07',
    title: 'Fluid Organic Liquid Splashes & Smoke Physics Loop',
    type: 'video',
    mediaUrl: '/videos/ay6khcyf_video.mp4',
    poster: '/videos/ay6khcyf_poster.jpg',
    tag: 'Liquid Physics',
    aspect: 'portrait',
    description: 'Tradition-inspired cel animation study on liquid surface tension, teardrop droplet splash dynamics, and viscous fluid gravity.',
    software: ['TVPaint', 'After Effects'],
    duration: '0:12'
  },
  {
    id: 'anim-2d-08',
    title: 'Mecha Cockpit HUD & 2D Vector UI Overlay Sequence',
    type: 'photo',
    mediaUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    tag: 'FUI / HUD',
    aspect: 'landscape',
    description: 'Futuristic vector heads-up display graphics, targeting reticles, radar telemetry sweeps, and warning iconography for animation overlay.',
    software: ['Illustrator', 'After Effects'],
    duration: 'Vector HUD'
  },
  {
    id: 'anim-2d-09',
    title: 'Explosive Combat Sakuga Action Reel Cut',
    type: 'video',
    mediaUrl: 'https://cdn.jumpshare.com/preview/vw64keW9QzxrsAm74YyQs_Dthi5alxYlZnuvPy3tAEq_LRC3taoj7CFbgo0TT8e7HRm7REAjDOWkANdLVaXv2DS7jRJUAAIR48_-gQIBfyYGDPk1EGnE7-h4JX7jDLp9Jg6PfL_cIPtxNMFz_CBQaW6yjbN-I2pg_cnoHs_AmgI.mp4',
    poster: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200&auto=format&fit=crop',
    tag: 'Sakuga Reel',
    aspect: 'portrait',
    description: 'High-octane sakuga anime cut featuring sword slashes, smear arcs, camera perspective warping, and high frame-rate particle explosions.',
    software: ['Clip Studio Paint', 'Premiere Pro'],
    duration: '0:15'
  },
  {
    id: 'anim-2d-10',
    title: 'Fantasy Hero Visual Development & Color Keyframes',
    type: 'photo',
    mediaUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
    tag: 'Color Script',
    aspect: 'landscape',
    description: 'Color script and lighting moodboard for animated sequence transitioning from dawn golden hour to storm moonlight.',
    software: ['Photoshop', 'Procreate'],
    duration: 'Lighting Key'
  },
  {
    id: 'anim-2d-11',
    title: 'Retro Arcade Pixel & Cel Fusion Loop',
    type: 'video',
    mediaUrl: '/assets/diorama_render.mp4',
    poster: '/assets/diorama_poster.jpg',
    tag: 'Experimental',
    aspect: 'square',
    description: 'Charming blend of hand-drawn 2D vector animation with vintage CRT scanline distortion and 16-bit color dithering.',
    software: ['After Effects', 'Aseprite'],
    duration: '0:08'
  },
  {
    id: 'anim-2d-12',
    title: 'Mechanical Props & Weapon Turnaround Blueprints',
    type: 'photo',
    mediaUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    tag: 'Prop Turnaround',
    aspect: 'landscape',
    description: 'Detailed animation prop schematics detailing mechanical breakaways, reload mechanisms, and energy core glow channels.',
    software: ['Illustrator', 'Photoshop'],
    duration: 'Prop Sheet'
  }
];

