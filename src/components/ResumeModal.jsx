import { useState } from 'react';
import { X, Download, ExternalLink, FileCode, Cpu, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { resumes } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [downloadedTrack, setDownloadedTrack] = useState(null);

  if (!isOpen) return null;

  const triggerConfetti = (trackId) => {
    setDownloadedTrack(trackId);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#00f2fe', '#4facfe', '#6366f1', '#10b981'],
      });
    } catch (e) {
      // safe fallback if canvas-confetti is not loaded
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="relative w-full max-w-3xl rounded-3xl bg-[#0c0e17] border border-white/15 p-6 sm:p-8 shadow-2xl shadow-cyan-950/40 text-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-brand-indigo/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-start justify-between pb-6 border-b border-white/10 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan text-xs font-mono mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dual-Track Career Focus</span>
            </div>
            <h2 id="resume-modal-title" className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Select & Download Resume
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Choose the resume aligned with your team&apos;s technical requirements.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="Close resume dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Resumes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6 relative z-10">
          {/* Software Engineering Resume */}
          <div className="group rounded-2xl bg-[#121522] border border-white/10 hover:border-brand-blue/50 p-5 flex flex-col justify-between transition-all hover:shadow-xl hover:shadow-brand-blue/10">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-brand-blue/15 text-brand-blue border border-brand-blue/30">
                  <FileCode className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-brand-blue font-semibold px-2 py-0.5 rounded bg-brand-blue/10">
                  Full-Stack
                </span>
              </div>

              <h3 className="text-base font-bold text-white group-hover:text-brand-blue transition-colors">
                {resumes.softwareEngineer.title}
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-0.5">{resumes.softwareEngineer.focus}</p>

              <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                {resumes.softwareEngineer.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {resumes.softwareEngineer.coreSkills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-white/10 flex items-center gap-2">
              <a
                href={resumes.softwareEngineer.file}
                download="Hima_Sajeesh_Kumar_Software_Engineer_Resume.pdf"
                onClick={() => triggerConfetti('se')}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-brand-blue hover:bg-brand-blue/90 text-[#090a0f] font-semibold text-xs tracking-wide shadow-md transition-all hover:scale-[1.02] active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>

              <a
                href={resumes.softwareEngineer.file}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                title="Preview PDF in new tab"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* AI & Machine Learning Resume */}
          <div className="group rounded-2xl bg-[#121522] border border-white/10 hover:border-brand-cyan/50 p-5 flex flex-col justify-between transition-all hover:shadow-xl hover:shadow-brand-cyan/10">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-brand-cyan font-semibold px-2 py-0.5 rounded bg-brand-cyan/10">
                  Applied AI / ML
                </span>
              </div>

              <h3 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors">
                {resumes.aimlEngineer.title}
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-0.5">{resumes.aimlEngineer.focus}</p>

              <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                {resumes.aimlEngineer.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {resumes.aimlEngineer.coreSkills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-white/10 flex items-center gap-2">
              <a
                href={resumes.aimlEngineer.file}
                download="Hima_Sajeesh_Kumar_AIML_Resume.pdf"
                onClick={() => triggerConfetti('aiml')}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-brand-cyan hover:bg-brand-cyan/90 text-[#090a0f] font-semibold text-xs tracking-wide shadow-md transition-all hover:scale-[1.02] active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>

              <a
                href={resumes.aimlEngineer.file}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                title="Preview PDF in new tab"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Verification Footer Note */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Verified against latest B.Tech (AI & ML) transcripts — CGPA: 8.35 / 10</span>
          </div>
          <span className="text-[11px] font-mono text-slate-500 hidden sm:inline-block">Bengaluru, India</span>
        </div>
      </div>
    </div>
  );
}
