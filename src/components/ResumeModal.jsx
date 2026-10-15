import { useState, useEffect } from 'react';
import { X, Download, ExternalLink, FileCode, Cpu, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { resumes } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const triggerConfetti = (trackId) => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#4f46e5', '#7c3aed', '#2563eb', '#059669'],
      });
    } catch (e) {
      // safe fallback
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl shadow-slate-900/20 text-slate-900 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-indigo-100/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-purple-100/60 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-start justify-between pb-6 border-b border-slate-100 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-mono mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dual-Track Career Focus</span>
            </div>
            <h2 id="resume-modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Select &amp; Download Resume
            </h2>
            <p className="text-sm text-slate-500 mt-1 font-normal">
              Choose the verified resume aligned with your team&apos;s technical requirements.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
            aria-label="Close resume dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Resumes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6 relative z-10">
          {/* Software Engineering Resume */}
          <div className="group rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-indigo-300 p-5 flex flex-col justify-between transition-all hover:shadow-lg hover:shadow-indigo-950/5">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-blue-100/70 text-blue-700 border border-blue-200/60">
                  <FileCode className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-700 font-bold px-2 py-0.5 rounded bg-blue-50 border border-blue-100">
                  Full-Stack
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {resumes.softwareEngineer.title}
              </h3>
              <p className="text-xs font-mono text-slate-500 mt-0.5">{resumes.softwareEngineer.focus}</p>

              <p className="text-xs text-slate-600 mt-3 leading-relaxed font-normal">
                {resumes.softwareEngineer.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {resumes.softwareEngineer.coreSkills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] px-2 py-0.5 rounded-md bg-white text-slate-700 border border-slate-200/80 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-200/70 flex items-center gap-2">
              <a
                href={resumes.softwareEngineer.file}
                download="Hima_Sajeesh_Kumar_Software_Engineer_Resume.pdf"
                onClick={() => triggerConfetti('se')}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs tracking-wide shadow-md shadow-indigo-600/20 transition-all hover:scale-[1.02] active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>

              <a
                href={resumes.softwareEngineer.file}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors shadow-2xs"
                title="Preview PDF in new tab"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* AI & Machine Learning Resume */}
          <div className="group rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-purple-300 p-5 flex flex-col justify-between transition-all hover:shadow-lg hover:shadow-purple-950/5">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-purple-100/70 text-purple-700 border border-purple-200/60">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-purple-700 font-bold px-2 py-0.5 rounded bg-purple-50 border border-purple-100">
                  Applied AI / ML
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                {resumes.aimlEngineer.title}
              </h3>
              <p className="text-xs font-mono text-slate-500 mt-0.5">{resumes.aimlEngineer.focus}</p>

              <p className="text-xs text-slate-600 mt-3 leading-relaxed font-normal">
                {resumes.aimlEngineer.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {resumes.aimlEngineer.coreSkills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] px-2 py-0.5 rounded-md bg-white text-slate-700 border border-slate-200/80 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-200/70 flex items-center gap-2">
              <a
                href={resumes.aimlEngineer.file}
                download="Hima_Sajeesh_Kumar_AIML_Resume.pdf"
                onClick={() => triggerConfetti('aiml')}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs tracking-wide shadow-md shadow-purple-600/20 transition-all hover:scale-[1.02] active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>

              <a
                href={resumes.aimlEngineer.file}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors shadow-2xs"
                title="Preview PDF in new tab"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Verification Footer Note */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Verified against latest B.Tech (AI &amp; ML) transcripts — CGPA: 8.35 / 10</span>
          </div>
          <span className="text-[11px] font-mono text-slate-400 hidden sm:inline-block">Bengaluru, India</span>
        </div>
      </div>
    </div>
  );
}
