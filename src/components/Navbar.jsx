import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalData } from '../data/portfolioData';
import MagneticButton from './MagneticButton';

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
      setIsScrolled(window.scrollY > 30);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 220;

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
          className="group flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/80 hover:border-indigo-300 transition-all duration-300 shadow-md shadow-slate-200/40"
          aria-label="Hima Sajeesh Kumar - Back to top"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-mono font-bold text-xs text-white shadow-sm group-hover:scale-105 transition-transform">
            HK
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
              Hima Sajeesh
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" title="Available for opportunities" />
            </span>
            <span className="text-[10px] font-mono text-slate-500 tracking-wider">SE &bull; AI/ML</span>
          </div>
        </a>

        {/* Desktop Navigation Dock */}
        <nav
          className={`hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full backdrop-blur-2xl border transition-all duration-300 shadow-sm ${
            isScrolled
              ? 'bg-white/95 border-slate-200/90 shadow-md shadow-slate-200/50 py-2'
              : 'bg-white/80 border-slate-200/70'
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
                className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-indigo-700 font-bold bg-indigo-50/90 border border-indigo-100 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls: Socials & Magnetic Resume Button */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href={personalData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 hover:border-slate-400 text-slate-600 hover:text-slate-900 transition-all hover:scale-105 shadow-sm"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 hover:border-indigo-300 text-slate-600 hover:text-indigo-600 transition-all hover:scale-105 shadow-sm"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <MagneticButton
            onClick={onOpenResumeModal}
            cursorText="Resumes"
            className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold tracking-wide shadow-md shadow-indigo-600/25 transition-all hover:scale-105 active:scale-95"
            ariaLabel="View Resume Options"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <span className="text-[10px] bg-white/20 text-white px-1.5 py-0.5 rounded-md font-mono">
              2 Paths
            </span>
          </MagneticButton>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold shadow-xs"
            aria-label="Open Resume Options"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 shadow-sm"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 max-w-6xl mx-auto rounded-3xl bg-white/95 backdrop-blur-2xl border border-slate-200 p-5 shadow-2xl pointer-events-auto animate-in fade-in slide-in-from-top-2 duration-200">
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
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-700 border border-indigo-100'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <a
                  href={personalData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:text-indigo-600"
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
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-md shadow-indigo-600/20"
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
