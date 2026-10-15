import { useState } from 'react';
import {
  Code2,
  Cpu,
  Layers,
  Database,
  Server,
  Network,
  Boxes,
  Binary,
  Eye,
  Sparkles,
  Terminal,
  Component,
  Zap,
  Layout,
  Flame,
  Palette,
  GitBranch,
  Laptop,
  BookOpen,
  MonitorPlay,
  Package,
  Braces,
  FileCode,
  Search,
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap = {
  Code2,
  FileCode,
  Database,
  Braces,
  Cpu,
  Network,
  Search,
  Layers,
  Boxes,
  Binary,
  Eye,
  Sparkles,
  Terminal,
  Component,
  Server,
  Zap,
  Layout,
  Flame,
  Palette,
  GitBranch,
  Laptop,
  BookOpen,
  MonitorPlay,
  Package,
};

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterOptions = [
    'All',
    'Programming Languages',
    'AI / Machine Learning & Data',
    'Web & Backend Development',
    'Tools & Platforms',
  ];

  const filteredCategories =
    activeFilter === 'All'
      ? skillCategories
      : skillCategories.filter((cat) => cat.category === activeFilter);

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-[#fafbfc]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-50/60 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-mono mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Verified Technical Skills
            </h2>
            <p className="text-base text-slate-600 mt-1.5 max-w-xl font-normal">
              Languages, machine learning frameworks, full-stack technologies, and development tools verified across projects and internships.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
            {filterOptions.map((filter) => {
              const isSelected = activeFilter === filter;
              const shortLabel = filter === 'All' ? 'All' : filter.split(' ')[0];
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    isSelected
                      ? 'bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-600/20'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <span className="hidden sm:inline">{filter}</span>
                  <span className="sm:hidden">{shortLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Categories Constellation Stack */}
        <div className="space-y-12">
          {filteredCategories.map((group) => (
            <div key={group.category} className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/70">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-mono flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
                  {group.category}
                </h3>
                <span className="text-xs text-slate-500 hidden sm:inline-block">
                  {group.description}
                </span>
              </div>

              {/* Skills Interactive Cluster Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {group.skills.map((skill) => {
                  const Icon = iconMap[skill.icon] || Code2;
                  return (
                    <div
                      key={skill.name}
                      data-cursor-text={skill.name}
                      className="group p-4 rounded-2xl bg-white hover:bg-slate-50/80 border border-slate-200/80 hover:border-indigo-300 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 flex flex-col justify-between"
                    >
                      <div className="flex items-start justify-between">
                        <div className="p-2.5 rounded-xl bg-indigo-50/80 text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-xs">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200/60 font-medium">
                          {skill.level}
                        </span>
                      </div>

                      <div className="mt-4">
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-[11px] font-mono text-slate-500 mt-0.5">{skill.tag}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Verification Callout */}
        <div className="mt-12 p-4 rounded-2xl bg-white border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="text-emerald-600 font-mono font-bold">&check;</span>
            <span>No fabricated skill meters or arbitrary percentage bars. All competencies represent demonstrable hands-on implementations.</span>
          </div>
          <span className="font-mono text-slate-500 text-[11px]">B.Tech AI &amp; ML Syllabus &bull; 2026</span>
        </div>
      </div>
    </section>
  );
}
