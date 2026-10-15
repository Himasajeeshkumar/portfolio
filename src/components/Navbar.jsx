import { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalData } from '../data/portfolioData';

export default function Navbar({ onOpenResumeModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Esc key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 py-4 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          className="group flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#0e1017]/80 backdrop-blur-md border border-white/10 hover:border-brand-cyan/40 transition-all duration-300 shadow-lg shadow-black/40"
          aria-label="Hima Sajeesh Kumar - Back to top"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-cyan/20 to-brand-indigo/30 border border-brand-cyan/40 flex items-center justify-center font-mono font-bold text-sm text-brand-cyan group-hover:scale-105 transition-transform">
            HK
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-semibold text-slate-100 tracking-tight flex items-center gap-1.5">
              Hima Sajeesh
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" title="Available for opportunities" />
            </span>
            <span className="text-[10px] font-mono text-slate-400 tracking-wider">SE &bull; AI/ML</span>
          </div>
        </a>

        {/* Desktop Navigation Dock */}
        <nav
          className={`hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full backdrop-blur-xl border transition-all duration-300 shadow-xl ${
            isScrolled
              ? 'bg-[#0b0d14]/90 border-white/15 shadow-black/60 py-2'
              : 'bg-[#0d0f17]/70 border-white/10 shadow-black/30'
          }`}
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-cyan/20 to-brand-indigo/20 border border-brand-cyan/30 -z-10" />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons: Resume Modal & Socials */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href={personalData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-xl bg-[#0e1017]/80 backdrop-blur-md border border-white/10 hover:border-brand-cyan/40 text-slate-300 hover:text-white transition-all hover:scale-105"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-xl bg-[#0e1017]/80 backdrop-blur-md border border-white/10 hover:border-brand-cyan/40 text-slate-300 hover:text-white transition-all hover:scale-105"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-brand-cyan/15 to-brand-indigo/20 hover:from-brand-cyan/25 hover:to-brand-indigo/35 text-brand-cyan border border-brand-cyan/40 text-xs font-medium tracking-wide shadow-lg shadow-brand-cyan/10 hover:shadow-brand-cyan/20 transition-all hover:scale-105 active:scale-95"
            aria-label="View Resume Options"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <span className="text-[10px] bg-brand-cyan/20 text-brand-cyan px-1.5 py-0.5 rounded-md font-mono">
              2 Paths
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-brand-cyan/15 border border-brand-cyan/40 text-brand-cyan text-xs font-medium"
            aria-label="Open Resume Options"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#0e1017]/90 backdrop-blur-md border border-white/15 text-slate-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 max-w-6xl mx-auto rounded-2xl bg-[#0b0d14]/95 backdrop-blur-2xl border border-white/15 p-5 shadow-2xl pointer-events-auto animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-brand-cyan/15 text-brand-cyan font-semibold border border-brand-cyan/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href={personalData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-brand-cyan text-[#090a0f] font-semibold text-xs"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Download Resumes</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
