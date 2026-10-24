import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', href: '#home', number: '01' },
    { label: 'ABOUT', href: '#about', number: '02' },
    { label: 'WORK', href: '#work', number: '03' },
    { label: 'SKILLS', href: '#skills', number: '04' },
    { label: 'EXPERIENCE', href: '#experience', number: '05' },
    { label: 'CONTACT', href: '#contact', number: '06' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F5F4F0]/90 backdrop-blur-md border-b border-black/10 py-3.5 shadow-xs'
            : 'bg-transparent border-b border-black/5 py-5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between font-bold text-[20px]">
          {/* Monogram / Logo */}
          <a
            id="nav-logo-link"
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2.5 focus:outline-hidden"
            aria-label="Rohan Kshirsagar Portfolio Home"
          >
            <div className="w-11 h-11 bg-black text-[#F7A928] font-display font-extrabold text-[29px] leading-[35.5px] flex items-center justify-center rounded-xs transition-transform duration-200 group-hover:scale-105 group-hover:bg-[#F7A928] group-hover:text-black">
              {PERSONAL_INFO.monogram}
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-[23px] leading-tight tracking-wider uppercase text-black">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[16px] tracking-widest text-[#555555] uppercase">
                PORTFOLIO
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              const customClass =
                item.label === 'ABOUT'
                  ? 'text-[21px] font-bold leading-[17px]'
                  : item.label === 'HOME'
                  ? 'text-[20px] font-bold leading-[19px]'
                  : item.label === 'WORK'
                  ? 'text-[20px] font-bold leading-[18px]'
                  : 'text-[20px] font-bold';

              return (
                <a
                  key={item.label}
                  id={`nav-link-${item.label.toLowerCase()}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`tracking-wider transition-colors duration-200 py-1 relative ${customClass} ${
                    isActive ? 'text-black' : 'text-[#555555] hover:text-black'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#F7A928]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Availability Badge & Mobile Menu Trigger */}
          <div className="flex items-center gap-4">
            <a
              id="nav-availability-cta"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-black/15 bg-white/80 text-[14px] leading-[22.5px] font-semibold tracking-wider uppercase text-black hover:border-black hover:bg-black hover:text-white transition-all duration-200"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F7A928] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F7A928]"></span>
              </span>
              <span>{PERSONAL_INFO.availabilityText}</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xs border border-black/15 bg-white/90 text-black hover:bg-black hover:text-[#F7A928] transition-colors focus:outline-hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Editorial Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-fullscreen-menu"
          className="fixed inset-0 z-40 bg-[#050505] text-[#F5F4F0] flex flex-col justify-between p-6 sm:p-10 film-grain-dark animate-in fade-in duration-200"
        >
          {/* Top Bar inside mobile menu */}
          <div className="flex items-center justify-between pt-2 pb-6 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-[#F7A928] text-black font-display font-extrabold text-base flex items-center justify-center rounded-xs">
                {PERSONAL_INFO.monogram}
              </div>
              <span className="font-bold text-xs tracking-wider uppercase text-white">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <button
              id="mobile-menu-close-btn"
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* Navigation Items List */}
          <nav className="flex flex-col gap-2 my-auto py-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                id={`mobile-nav-link-${item.label.toLowerCase()}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="group flex items-center justify-between py-3 border-b border-white/10 hover:border-[#F7A928] transition-colors"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-xs font-mono text-[#F7A928]">
                    {item.number}
                  </span>
                  <span className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-white group-hover:text-[#F7A928] group-hover:translate-x-2 transition-all duration-200">
                    {item.label}
                  </span>
                </div>
                <ArrowUpRight
                  size={24}
                  className="text-white/40 group-hover:text-[#F7A928] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </a>
            ))}
          </nav>

          {/* Bottom metadata */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#999999]">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#F7A928]"></span>
              <span className="text-white font-medium">{PERSONAL_INFO.availabilityText}</span>
            </div>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-white hover:text-[#F7A928] transition-colors underline underline-offset-4"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>
        </div>
      )}
    </>
  );
};
