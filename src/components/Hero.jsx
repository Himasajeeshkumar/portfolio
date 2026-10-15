import { useState, useRef, useEffect } from 'react';
import { ArrowDown, FileText, Mail, Sparkles, Check, ExternalLink, Code2, Cpu, GraduationCap } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './SocialIcons';
import MagneticButton from './MagneticButton';

export default function Hero({ onOpenResumeModal }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [imageError, setImageError] = useState(false);
  const heroRef = useRef(null);
  const photoCardRef = useRef(null);
  const chip1Ref = useRef(null);
  const chip2Ref = useRef(null);
  const spotlightRef = useRef(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || prefersReducedMotion) return;

    let animId;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };

    const handlePointerMove = (e) => {
      const rect = hero.getBoundingClientRect();
      // Normalized coordinates from -1 to 1 relative to hero center
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = ((e.clientY - rect.top) / rect.height) * 2 - 1;

      target.x = Math.max(-1, Math.min(1, normX));
      target.y = Math.max(-1, Math.min(1, normY));

      // Pointer-following spotlight update directly on hero background
      if (spotlightRef.current) {
        const spotX = e.clientX - rect.left;
        const spotY = e.clientY - rect.top;
        spotlightRef.current.style.transform = `translate3d(${spotX}px, ${spotY}px, 0) translate(-50%, -50%)`;
      }
    };

    const render = () => {
      // Lerp smooth parallax interpolation
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;

      // Parallax on Photo Card (Layer 1: subtle shift & slight tilt)
      if (photoCardRef.current) {
        const moveX = current.x * 12;
        const moveY = current.y * 12;
        const rotY = current.x * 6;
        const rotX = -current.y * 6;
        photoCardRef.current.style.transform = `perspective(1000px) translate3d(${moveX}px, ${moveY}px, 0) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      }

      // Parallax on Floating Tech Chip 1 (Layer 2: shifts in opposite direction for depth)
      if (chip1Ref.current) {
        const moveX = -current.x * 18;
        const moveY = -current.y * 18;
        chip1Ref.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      }

      // Parallax on Floating Tech Chip 2 (Layer 3: amplified offset)
      if (chip2Ref.current) {
        const moveX = current.x * 22;
        const moveY = current.y * 22;
        chip2Ref.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      }

      animId = requestAnimationFrame(render);
    };

    hero.addEventListener('pointermove', handlePointerMove, { passive: true });
    animId = requestAnimationFrame(render);

    return () => {
      hero.removeEventListener('pointermove', handlePointerMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-grid-light"
    >
      {/* Dynamic Pointer-Following Spotlight (Lavender & Sky-Blue) */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute top-0 left-0 w-[550px] h-[550px] rounded-full -z-10 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(199, 210, 254, 0.45) 0%, rgba(224, 231, 255, 0.25) 40%, transparent 70%)',
          filter: 'blur(40px)',
          transform: 'translate3d(50%, 40%, 0) translate(-50%, -50%)',
        }}
      />

      {/* Floating Ambient Pastel Gradient Blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-purple-100/60 blur-3xl -z-20 animate-float-slow pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[420px] h-[420px] rounded-full bg-sky-100/70 blur-3xl -z-20 animate-float-reverse pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Magnetic Action Controls */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-indigo-100 text-xs font-mono shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-slate-600">
                Available for <strong className="text-indigo-600 font-semibold">Internships &amp; Roles</strong> (2026/27)
              </span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                Hi, I&apos;m <br />
                <span className="text-gradient-accent">
                  {personalData.name}
                </span>
              </h1>
              
              <div className="flex items-center gap-2 text-lg sm:text-xl font-mono text-indigo-700 font-semibold">
                <span className="text-slate-400">&gt;</span>
                <span>{personalData.headline}</span>
              </div>
            </div>

            {/* Introduction Tagline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              &ldquo;{personalData.tagline}&rdquo;
            </p>

            {/* Verified Quick Credential Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-3 py-1.5 rounded-lg bg-white/80 border border-slate-200/80 font-mono text-slate-700 shadow-sm flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
                B.Tech AI &amp; ML @ JAIN
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-indigo-50/80 border border-indigo-200 font-mono text-indigo-700 font-semibold shadow-sm">
                CGPA 8.35 / 10
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white/80 border border-slate-200/80 font-mono text-slate-700 shadow-sm">
                Full-Stack + Applied AI
              </span>
            </div>

            {/* Magnetic CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <MagneticButton
                href="#projects"
                cursorText="Explore"
                className="px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm tracking-wide shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 gap-2 active:scale-95"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton
                onClick={onOpenResumeModal}
                cursorText="Resumes"
                className="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 hover:text-indigo-600 border border-slate-200 hover:border-indigo-300 font-semibold text-sm shadow-md shadow-slate-200/50 gap-2 active:scale-95"
              >
                <FileText className="w-4 h-4 text-indigo-600" />
                <span>Download Resume</span>
              </MagneticButton>
            </div>

            {/* Social & Contact Strip */}
            <div className="flex items-center gap-3 pt-3 border-t border-slate-200/60 text-slate-600 text-xs">
              <span className="font-mono text-slate-400 uppercase tracking-wider text-[11px]">Connect:</span>
              
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-slate-900 transition-colors font-medium"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <span className="text-slate-300">&bull;</span>

              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors font-medium"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <span className="text-slate-300">&bull;</span>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors font-medium"
                aria-label="Copy Email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Mail className="w-4 h-4" />}
                <span>{copiedEmail ? 'Copied!' : 'Email'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Cursor-Reactive Parallax Photo & Floating Graphic Elements */}
          <div className="lg:col-span-5 flex justify-center relative select-none">
            {/* Ambient Behind-Card Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200/40 via-purple-200/40 to-sky-200/40 rounded-3xl blur-2xl -z-10" />

            {/* Main Portrait Card with 3D Parallax Tilt */}
            <div
              ref={photoCardRef}
              className="relative w-full max-w-sm rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/80 p-4 shadow-2xl shadow-indigo-950/10 transition-transform duration-100 ease-out"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 relative flex items-center justify-center border border-slate-100">
                {!imageError ? (
                  <img
                    src={personalData.profilePhoto}
                    alt={personalData.name}
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  /* Elegant Light Theme Placeholder */
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-indigo-50 to-purple-50">
                    <div className="w-24 h-24 rounded-2xl bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-700 font-mono font-bold text-3xl mb-3 shadow-inner">
                      HK
                    </div>
                    <h3 className="text-base font-bold text-slate-800">{personalData.name}</h3>
                    <p className="text-xs text-indigo-600 font-mono mt-0.5">{personalData.headline}</p>
                    <p className="text-[11px] text-slate-400 mt-2 font-mono">B.Tech AI &amp; ML &bull; JAIN</p>
                  </div>
                )}

                {/* Overlaid Bottom Identity Pill */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/60 flex items-center justify-between text-xs font-mono shadow-sm">
                  <span className="text-slate-800 font-semibold">{personalData.name}</span>
                  <span className="text-indigo-600 font-semibold">CSE (AI &amp; ML)</span>
                </div>
              </div>

              {/* Sub-Card Verified Info */}
              <div className="pt-3 px-1 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Bengaluru, India</span>
                <span className="text-emerald-600 font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available 2026/27
                </span>
              </div>
            </div>

            {/* Floating Tech Chip 1 (Top Right, Parallax Layer 2) */}
            <div
              ref={chip1Ref}
              className="absolute -top-5 -right-4 hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl shadow-indigo-950/5 text-xs font-mono text-slate-700 pointer-events-none transition-transform duration-100 ease-out"
            >
              <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">
                <Code2 className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-900">Full-Stack Architecture</div>
                <div className="text-[10px] text-slate-400 font-sans">React &bull; Node.js &bull; Express</div>
              </div>
            </div>

            {/* Floating Tech Chip 2 (Bottom Left, Parallax Layer 3) */}
            <div
              ref={chip2Ref}
              className="absolute -bottom-5 -left-4 hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl shadow-indigo-950/5 text-xs font-mono text-slate-700 pointer-events-none transition-transform duration-100 ease-out"
            >
              <div className="p-1.5 rounded-lg bg-purple-50 text-purple-600">
                <Cpu className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-900">Applied Vector Search</div>
                <div className="text-[10px] text-slate-400 font-sans">Sentence Transformers &bull; FAISS</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
