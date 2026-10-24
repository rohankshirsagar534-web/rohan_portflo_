import React, { useState } from 'react';
import { ArrowUpRight, Mail, CheckCircle2, AlertCircle, Copy, ExternalLink, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Video Editing',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const projectOptions = [
    'Video Editing & Post',
    'VFX & Compositing',
    'Motion Graphics / Title Design',
    '3D Environment & Worldbuilding',
    'UI/UX & Web Experience',
    'Creative Direction / Other',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please write a brief note about your project.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    // Simulate reliable packaging and generate client mailto trigger fallback
    setTimeout(() => {
      const subject = encodeURIComponent(`Inquiry from ${formData.name}: ${formData.projectType}`);
      const body = encodeURIComponent(
        `Hi Rohan,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}\n\n---\nSent via Portfolio Contact Form`
      );

      // Open email client
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

      setStatus('success');
    }, 600);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-[#050505] text-white relative overflow-hidden film-grain-dark border-t border-white/15"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#F7A928] uppercase mb-4">
          <span className="font-bold">[ 07 ]</span>
          <span>INITIATE COLLABORATION</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Large CTA Headline & Direct Contact Channels */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h2
                id="contact-main-heading"
                className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase leading-[0.88] text-white mb-6"
              >
                LET'S<br />
                MAKE<br />
                <span
                  style={{ fontFamily: 'Georgia', fontSize: '64px' }}
                  className="text-[#F7A928]"
                >
                  SOMETHING.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-white/75 font-normal leading-relaxed max-w-lg mb-10">
                Have an idea, project or visual story in mind? Whether you need a high-impact narrative edit, invisible VFX compositing, or a complete motion identity, let's build it together.
              </p>

              {/* Direct Email Card with One-Click Copy */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mb-8 max-w-md">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-[#F7A928] uppercase font-bold tracking-wider">
                    DIRECT EMAIL
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 text-xs font-mono text-white/60 hover:text-[#F7A928] transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <CheckCircle2 size={13} className="text-[#F7A928]" />
                        <span className="text-[#F7A928]">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-display font-bold text-lg sm:text-xl text-white hover:text-[#F7A928] transition-colors break-all"
                >
                  {PERSONAL_INFO.email}
                </a>

                <div className="mt-3 flex items-center gap-2 text-xs font-mono text-white/50">
                  <span className="w-2 h-2 rounded-full bg-[#F7A928]"></span>
                  <span>Average response time: &lt; 24 hours</span>
                </div>
              </div>

              {/* Social Channels List */}
              <div className="space-y-3">
                <span className="block font-mono text-xs uppercase tracking-wider text-white/50">
                  DIGITAL PRESENCE &amp; PROFILES
                </span>
                <div className="grid grid-cols-2 gap-2 max-w-md">
                  {PERSONAL_INFO.socials.map((social) => (
                    <a
                      key={social.name}
                      id={`contact-social-${social.name.toLowerCase()}`}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#F7A928] hover:bg-white/10 transition-all flex items-center justify-between text-xs font-mono"
                    >
                      <span className="text-white font-medium group-hover:text-[#F7A928]">
                        {social.name}
                      </span>
                      <ExternalLink
                        size={14}
                        className="text-white/40 group-hover:text-[#F7A928] transition-colors"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Production Contact Form */}
          <div className="lg:col-span-6">
            <div className="p-7 sm:p-10 rounded-3xl bg-[#0e0e0e] border border-white/15 shadow-2xl relative">
              
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 font-mono text-xs">
                <span className="text-white font-bold tracking-wider uppercase">
                  PROJECT SPECIFICATION FORM
                </span>
                <span className="text-[#F7A928]">NEW INQUIRY</span>
              </div>

              {status === 'success' ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#F7A928] text-black flex items-center justify-center shadow-lg">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-display font-black text-2xl uppercase tracking-tight text-white">
                    MESSAGE INITIATED!
                  </h3>
                  <p className="text-sm text-white/70 max-w-sm leading-relaxed">
                    Your inquiry details have been packaged and your default email client should open. You can also write directly to{' '}
                    <span className="text-[#F7A928]">{PERSONAL_INFO.email}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', email: '', projectType: 'Video Editing', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xs bg-white/10 text-xs font-mono font-bold uppercase tracking-wider text-white hover:bg-white/20 transition-colors"
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-xs uppercase tracking-wider text-white/70 mb-2"
                    >
                      YOUR NAME *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-hidden focus:border-[#F7A928] focus:ring-1 focus:ring-[#F7A928] transition-all"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-xs uppercase tracking-wider text-white/70 mb-2"
                    >
                      EMAIL ADDRESS *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@studio.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-hidden focus:border-[#F7A928] focus:ring-1 focus:ring-[#F7A928] transition-all"
                    />
                  </div>

                  {/* Project Type Dropdown */}
                  <div>
                    <label
                      htmlFor="contact-project-type"
                      className="block font-mono text-xs uppercase tracking-wider text-white/70 mb-2"
                    >
                      PROJECT TYPE
                    </label>
                    <select
                      id="contact-project-type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#161616] border border-white/15 text-white text-sm focus:outline-hidden focus:border-[#F7A928] focus:ring-1 focus:ring-[#F7A928] transition-all cursor-pointer"
                    >
                      {projectOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#161616] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block font-mono text-xs uppercase tracking-wider text-white/70 mb-2"
                    >
                      MESSAGE / PROJECT BRIEF *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your timeline, deliverables, concept or visual aspirations..."
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-hidden focus:border-[#F7A928] focus:ring-1 focus:ring-[#F7A928] transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Error Notification Banner */}
                  {status === 'error' && (
                    <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-500/50 flex items-center gap-2.5 text-xs text-red-200">
                      <AlertCircle size={16} className="text-red-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 px-6 rounded-xl bg-[#F7A928] hover:bg-white text-black font-display font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-3 shadow-lg disabled:opacity-50 cursor-pointer"
                  >
                    {status === 'loading' ? (
                      <span>PREPARING MESSAGE...</span>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <ArrowUpRight size={18} />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] font-mono text-center text-white/40">
                    DIRECT DISPATCH TO ROHANKSHIRSAGAR534@GMAIL.COM
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
