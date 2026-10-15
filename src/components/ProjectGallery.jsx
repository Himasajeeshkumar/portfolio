import { useState } from 'react';
import { FolderGit2, ArrowRight } from 'lucide-react';
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
    <section id="projects" className="py-20 lg:py-28 relative bg-[#fafbfc]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-100/40 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-sky-100/40 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-mono mb-2">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Engineered Systems</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-base text-slate-600 mt-1.5 max-w-xl font-normal">
              Production web applications, semantic vector search engines, and multimodal deep learning models.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
            {filterCategories.map((cat) => {
              const isSelected = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                    isSelected
                      ? 'bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-600/25'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Layout Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isFeatured={project.featured}
            />
          ))}
        </div>

        {/* Centralized Config Note */}
        <div className="mt-12 p-4 rounded-2xl bg-white border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-600" />
            <span>All projects are maintained in <code className="text-indigo-700 font-mono font-semibold">src/data/portfolioData.js</code> for instant updates and screenshots.</span>
          </div>
          <a
            href="https://github.com/Himasajeeshkumar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 font-mono text-xs font-semibold flex items-center gap-1 whitespace-nowrap"
          >
            Explore all GitHub repos <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
