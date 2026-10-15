import { useState } from 'react';
import { ArrowDown, FileText, Mail, Sparkles, Terminal, Code2, Database } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalData } from '../data/portfolioData';
import InteractiveCodePanel from './InteractiveCodePanel';

export default function Hero({ onOpenResumeModal }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] bg-gradient-to-tr from-brand-cyan/15 via-brand-indigo/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-10 left-10 w-96 h-96 bg-brand-violet/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & Action CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Opportunity Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#121522] border border-brand-cyan/30 text-xs font-mono shadow-lg shadow-black/40">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-slate-300">
                Available for <span className="text-brand-cyan font-medium">Internships &amp; Roles</span> (2026/27)
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Hi, I&apos;m <br />
                <span className="text-gradient-dual drop-shadow-sm">
                  {personalData.name}
                </span>
              </h1>
              <div className="flex items-center gap-2 text-base sm:text-lg font-mono text-slate-300 font-medium">
                <span className="text-brand-cyan">&gt;</span>
                <span className="tracking-wide">{personalData.headline}</span>
              </div>
            </div>

            {/* Editable Draft Tagline */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-normal">
              &ldquo;{personalData.tagline}&rdquo;
            </p>

            {/* Key Verified Highlights Pill Grid */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono">
                B.Tech AI &amp; ML @ JAIN
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-brand-cyan">
                CGPA 8.35 / 10
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono">
                Full-Stack + Vector Search
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue hover:from-cyan-400 hover:to-blue-500 text-[#090a0f] font-bold text-sm tracking-wide shadow-lg shadow-brand-cyan/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="px-5 py-3 rounded-xl bg-[#121522] hover:bg-[#181d2f] text-slate-100 hover:text-brand-cyan border border-white/15 hover:border-brand-cyan/40 font-semibold text-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg"
              >
                <FileText className="w-4 h-4 text-brand-cyan" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social & Contact Strip */}
            <div className="flex items-center gap-3 pt-3 border-t border-white/10 text-slate-400 text-xs">
              <span className="font-mono text-slate-500 uppercase tracking-wider text-[11px]">Connect:</span>
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <span className="text-white/20">&bull;</span>

              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-brand-blue transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <span className="text-white/20">&bull;</span>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 hover:text-brand-cyan transition-colors"
                aria-label="Copy Email address"
              >
                <Mail className="w-4 h-4" />
                <span>{copiedEmail ? 'Email Copied!' : 'Email'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Flagship Interactive Code Panel */}
          <div className="lg:col-span-6 relative">
            <InteractiveCodePanel />

            {/* Subtle decorative floating badges */}
            <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0e1019]/90 border border-brand-cyan/30 text-[11px] font-mono text-brand-cyan shadow-xl backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              <span>all-MiniLM-L6-v2 &bull; FAISS FlatL2</span>
            </div>

            <div className="absolute -top-4 -right-2 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0e1019]/90 border border-brand-indigo/30 text-[11px] font-mono text-indigo-300 shadow-xl backdrop-blur-md">
              <Code2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>React &bull; Node.js &bull; Express</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
