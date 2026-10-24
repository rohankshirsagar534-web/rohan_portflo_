import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const disciplines = ['VFX', 'EDITING', 'DESIGN', 'MOTION', '3D'];
  const links = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'WORK', href: '#work' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#000000] text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden film-grain-dark"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Main 3-Column Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/15 items-start">
          
          {/* LEFT: RK Monogram & Name */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#F7A928] text-black font-display font-black text-lg flex items-center justify-center rounded-xs">
                {PERSONAL_INFO.monogram}
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl uppercase tracking-wider text-white">
                  {PERSONAL_INFO.name}
                </span>
                <span className="font-mono text-xs text-[#888888] tracking-widest uppercase">
                  {PERSONAL_INFO.shortRole}
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-white/60 max-w-sm leading-relaxed mt-2">
              Visual storyteller exploring the convergence of cinematic video editing, visual effects compositing, and modern digital interfaces.
            </p>
          </div>

          {/* CENTER: Disciplines */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="font-mono text-xs text-[#F7A928] uppercase font-bold tracking-widest">
              DISCIPLINES
            </span>
            <ul className="flex flex-col gap-2 font-display font-bold text-sm tracking-wider uppercase text-white/80">
              {disciplines.map((d) => (
                <li key={d} className="hover:text-[#F7A928] transition-colors cursor-default">
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Quick Links & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between gap-6">
            <div>
              <span className="font-mono text-xs text-[#F7A928] uppercase font-bold tracking-widest block mb-3">
                NAVIGATION
              </span>
              <ul className="flex flex-col gap-2 font-mono text-xs tracking-wider uppercase text-white/70">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="hover:text-white hover:underline underline-offset-4 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Back to top circular trigger */}
            <div className="pt-2">
              <button
                id="footer-back-to-top-btn"
                type="button"
                onClick={scrollToTop}
                className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/20 text-xs font-mono text-white hover:border-[#F7A928] hover:bg-[#F7A928] hover:text-black transition-all cursor-pointer"
                aria-label="Back to top of page"
              >
                <span>BACK TO TOP</span>
                <ArrowUp
                  size={14}
                  className="transition-transform group-hover:-translate-y-0.5"
                />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Craft signature */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#777777]">
          <div>
            &copy; 2026 {PERSONAL_INFO.name}. ALL RIGHTS RESERVED.
          </div>

          <div className="text-white/80 font-medium tracking-wider uppercase text-[11px]">
            DESIGNED &amp; CRAFTED BY ROHAN KSHIRSAGAR
          </div>
        </div>

      </div>
    </footer>
  );
};
