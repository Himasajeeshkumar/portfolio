import { useState } from 'react';
import { ExternalLink, Sparkles, ChevronDown, ChevronUp, Layers, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import ProjectIllustration from './ProjectIllustration';

export default function ProjectCard({ project, isFeatured = false }) {
  const [imageError, setImageError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`group rounded-2xl bg-[#0e111a] border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl ${
        isFeatured
          ? 'border-brand-cyan/40 hover:border-brand-cyan shadow-cyan-950/20'
          : 'border-white/10 hover:border-brand-blue/40 shadow-black/40'
      }`}
    >
      <div>
        {/* Project Visual / Image / Illustration Header */}
        <div className="relative w-full overflow-hidden bg-[#0a0c14]">
          {!imageError && project.image ? (
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <img
                src={project.image}
                alt={`${project.name} preview`}
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e111a] via-transparent to-transparent opacity-80" />
            </div>
          ) : (
            <ProjectIllustration type={project.fallbackType} />
          )}

          {/* Category Chip */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-[#090b10]/90 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white font-medium">
              {project.category}
            </span>
            {project.secondaryCategory && (
              <span className="px-2 py-0.5 rounded-md bg-white/10 backdrop-blur-md text-[10px] font-mono text-slate-300">
                {project.secondaryCategory}
              </span>
            )}
          </div>

          {/* Featured pill */}
          {isFeatured && (
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-brand-cyan/20 backdrop-blur-md border border-brand-cyan/40 text-[10px] font-mono text-brand-cyan font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              <span>Featured Platform</span>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
              {project.name}
            </h3>
            <p className="text-xs font-mono text-brand-cyan/90 mt-0.5">{project.subtitle}</p>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>

          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5 group-hover:border-white/10 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Expandable Technical Highlights & Contribution */}
          {isExpanded && (
            <div className="pt-3 border-t border-white/10 space-y-3 animate-in fade-in duration-200 text-xs">
              <div>
                <h4 className="font-mono text-slate-400 uppercase tracking-wider text-[10px] font-semibold mb-1.5">
                  Verified Technical Highlights:
                </h4>
                <ul className="space-y-1.5 text-slate-300">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-slate-400 uppercase tracking-wider text-[10px] font-semibold mb-1">
                  Individual Contribution:
                </h4>
                <p className="text-slate-300 leading-relaxed bg-[#141829] p-3 rounded-lg border border-white/5">
                  {project.myContribution}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-slate-400 uppercase tracking-wider text-[10px] font-semibold mb-1">
                  Problem Solved:
                </h4>
                <p className="text-slate-300 leading-relaxed bg-[#141829] p-3 rounded-lg border border-white/5">
                  {project.problemSolved}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-5 sm:px-6 pb-5 pt-2 border-t border-white/5 flex items-center justify-between gap-3">
        {/* Toggle Detailed Breakdown */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
        >
          <span>{isExpanded ? 'Hide Details' : 'View Architecture'}</span>
          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        {/* Links: Live Demo & GitHub */}
        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all hover:scale-105 border border-white/10"
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
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-cyan hover:bg-cyan-300 text-[#090a0f] font-semibold text-xs transition-all hover:scale-105 shadow-md shadow-brand-cyan/20"
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
