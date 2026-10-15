import { useState } from 'react';
import { Sparkles, FolderGit2, Filter } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectCard from './ProjectCard';

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterCategories = ['All', 'AI/ML', 'Full Stack', 'Software Engineering'];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    return (
      project.category === activeFilter ||
      project.secondaryCategory === activeFilter
    );
  });

  return (
    <section id="projects" className="py-20 lg:py-28 relative bg-[#090a0f]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-indigo/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-cyan/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan text-xs font-mono mb-2">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Engineered Systems</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-1 max-w-xl">
              Production web applications, semantic vector search engines, and multimodal deep learning models.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-[#121522] border border-white/10">
            {filterCategories.map((cat) => {
              const isSelected = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    isSelected
                      ? 'bg-brand-cyan text-[#090a0f] font-semibold shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isFeatured={project.featured}
            />
          ))}
        </div>

        {/* Centralized Config Note */}
        <div className="mt-12 p-4 rounded-xl bg-[#0f121d] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-brand-cyan font-mono font-bold">&bull;</span>
            <span>All projects are maintained in <code className="text-slate-300 font-mono">src/data/portfolioData.js</code> for simple updates, screenshots, and live URL additions.</span>
          </div>
          <a
            href="https://github.com/Himasajeeshkumar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-cyan hover:underline font-mono text-[11px] whitespace-nowrap"
          >
            Explore all GitHub repos &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
