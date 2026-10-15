import { useState, useRef, useEffect } from 'react';
import { ExternalLink, Sparkles, ChevronDown, ChevronUp, CheckCircle2, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import ProjectIllustration from './ProjectIllustration';

export default function ProjectCard({ project, isFeatured = false }) {
  const [imageError, setImageError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || prefersReducedMotion) return;

    const handlePointerMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const normX = (x / rect.width) * 2 - 1;
      const normY = (y / rect.height) * 2 - 1;

      // Restrained 3D tilt angles (clamped to max 7 deg)
      const rotateX = -normY * 7;
      const rotateY = normX * 7;

      card.style.transition = 'transform 0.1s ease-out';
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;

      // Set CSS variables for cursor-following radial highlight sheen
      card.style.setProperty('--sheen-x', `${x}px`);
      card.style.setProperty('--sheen-y', `${y}px`);
      card.style.setProperty('--sheen-opacity', '1');
    };

    const handlePointerLeave = () => {
      card.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.9, 0.3, 1)';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      card.style.setProperty('--sheen-opacity', '0');
    };

    card.addEventListener('pointermove', handlePointerMove);
    card.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      card.removeEventListener('pointermove', handlePointerMove);
      card.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      data-cursor-text={isFeatured ? "Live App" : "Project"}
      className={`group relative rounded-3xl bg-white border flex flex-col justify-between overflow-hidden transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-indigo-950/10 ${
        isFeatured
          ? 'border-indigo-300 ring-1 ring-indigo-200'
          : 'border-slate-200/90 hover:border-indigo-200'
      }`}
    >
      {/* Pointer-Following Radial Highlight Sheen */}
      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle 240px at var(--sheen-x, 50%) var(--sheen-y, 50%), rgba(99, 102, 241, 0.12), transparent 70%)',
          opacity: 'var(--sheen-opacity, 0)',
        }}
      />

      <div>
        {/* Visual Preview Header (Image or Fallback Illustration) */}
        <div className="relative w-full overflow-hidden bg-slate-50 border-b border-slate-100">
          {!imageError && project.image ? (
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <img
                src={project.image}
                alt={`${project.name} preview`}
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent opacity-60" />
            </div>
          ) : (
            <ProjectIllustration type={project.fallbackType} />
          )}

          {/* Category Chip */}
          <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 z-10">
            <span className="px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200/80 text-[11px] font-mono text-slate-800 font-semibold shadow-sm">
              {project.category}
            </span>
            {project.secondaryCategory && (
              <span className="px-2 py-0.5 rounded-lg bg-indigo-50/90 backdrop-blur-md text-[10px] font-mono text-indigo-700 font-medium border border-indigo-100">
                {project.secondaryCategory}
              </span>
            )}
          </div>

          {/* Featured Ribbon */}
          {isFeatured && (
            <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-lg bg-indigo-600 backdrop-blur-md text-[10px] font-mono text-white font-semibold flex items-center gap-1.5 shadow-md shadow-indigo-600/30 z-10">
              <Sparkles className="w-3 h-3 text-indigo-200" />
              <span>Live Platform</span>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
              {project.name}
            </h3>
            <p className="text-xs font-mono text-indigo-600 font-medium mt-0.5">{project.subtitle}</p>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            {project.description}
          </p>

          {/* Technology tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 border border-slate-200/70 group-hover:border-indigo-200 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Expandable Technical Highlights & Contribution */}
          {isExpanded && (
            <div className="pt-4 border-t border-slate-100 space-y-3.5 text-xs animate-in fade-in duration-200">
              <div>
                <h4 className="font-mono text-slate-500 uppercase tracking-wider text-[10px] font-bold mb-1.5">
                  Verified Technical Highlights:
                </h4>
                <ul className="space-y-1.5 text-slate-700">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-slate-500 uppercase tracking-wider text-[10px] font-bold mb-1">
                  Individual Contribution:
                </h4>
                <p className="text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200/60 font-sans">
                  {project.myContribution}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-slate-500 uppercase tracking-wider text-[10px] font-bold mb-1">
                  Problem Solved:
                </h4>
                <p className="text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200/60 font-sans">
                  {project.problemSolved}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-mono text-slate-500 hover:text-indigo-600 flex items-center gap-1 transition-colors font-medium"
        >
          <span>{isExpanded ? 'Hide Architecture' : 'View Architecture'}</span>
          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-all border border-slate-200/80 shadow-sm"
              title="View GitHub Repository"
              aria-label={`View ${project.name} source code on GitHub`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-all shadow-md shadow-indigo-600/25 active:scale-95"
              aria-label={`Open live demo of ${project.name}`}
            >
              <span>Live Platform</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
