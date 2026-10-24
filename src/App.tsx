import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { CreativeProcess } from './components/CreativeProcess';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CustomCursor } from './components/CustomCursor';
import { PROJECTS, JOURNEY_ITEMS } from './data/portfolioData';
import { Project, JourneyMilestone } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // IntersectionObserver to sync active section for navbar
  useEffect(() => {
    const sectionIds = ['home', 'about', 'work', 'skills', 'process', 'experience', 'contact'];
    
    const handleScrollObserver = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollObserver, { passive: true });
    handleScrollObserver();

    return () => window.removeEventListener('scroll', handleScrollObserver);
  }, []);

  const handleJourneyClick = (item: JourneyMilestone) => {
    // Match corresponding project or open first project
    const match = PROJECTS.find((p) =>
      p.title.toLowerCase().includes(item.category.toLowerCase()) ||
      p.categoryDisplay.toLowerCase().includes(item.deliverable?.toLowerCase() || '')
    ) || PROJECTS[0];
    
    setSelectedProject(match);
  };

  return (
    <div className="relative min-h-screen bg-[#F5F4F0] text-[#050505] selection:bg-[#F7A928] selection:text-black">
      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* Main Sticky Navbar */}
      <Navbar activeSection={activeSection} />

      <main id="main-content">
        {/* 01: Hero Section */}
        <Hero
          onExploreClick={() => {
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 02: About Section (Dramatic Black) */}
        <About />

        {/* 03: Selected Work / Portfolio (Interactive Filters & Cards) */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 04: Skills & Tooling (Interactive Rows & Categories) */}
        <Skills />

        {/* 05: Creative Process (From Idea To Image) */}
        <CreativeProcess />

        {/* 06: Experience / Creative Journey */}
        <Experience onItemClick={handleJourneyClick} />

        {/* 07: Contact CTA & Specification Form */}
        <Contact />
      </main>

      {/* 08: Minimal Black Footer */}
      <Footer />

      {/* Fullscreen Interactive Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        projects={PROJECTS}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
      />
    </div>
  );
}

