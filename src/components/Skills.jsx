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

// Dynamic icon mapping
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

  const filterOptions = ['All', 'Programming Languages', 'AI / Machine Learning & Data', 'Web & Backend Development', 'Tools & Platforms'];

  const filteredCategories =
    activeFilter === 'All'
      ? skillCategories
      : skillCategories.filter((cat) => cat.category === activeFilter);

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-[#090b10]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-cyan/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan text-xs font-mono mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Verified Technical Skills
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-1 max-w-xl">
              Languages, machine learning frameworks, full-stack technologies, and development tools verified across projects and internships.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-[#121522] border border-white/10">
            {filterOptions.map((filter) => {
              const isSelected = activeFilter === filter;
              const shortLabel = filter === 'All' ? 'All' : filter.split(' ')[0];
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    isSelected
                      ? 'bg-brand-cyan text-[#090a0f] font-semibold shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="hidden sm:inline">{filter}</span>
                  <span className="sm:hidden">{shortLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Categories Stack */}
        <div className="space-y-10">
          {filteredCategories.map((group) => (
            <div key={group.category} className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <h3 className="text-sm sm:text-base font-bold text-slate-200 font-mono flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                  {group.category}
                </h3>
                <span className="text-xs text-slate-500 hidden sm:inline-block">
                  {group.description}
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {group.skills.map((skill) => {
                  const Icon = iconMap[skill.icon] || Code2;
                  return (
                    <div
                      key={skill.name}
                      className="group p-4 rounded-xl bg-[#10131f]/90 hover:bg-[#141827] border border-white/5 hover:border-brand-cyan/40 transition-all duration-300 shadow-lg hover:shadow-cyan-950/20 hover:-translate-y-0.5"
                    >
                      <div className="flex items-start justify-between">
                        <div className="p-2 rounded-lg bg-white/5 text-brand-cyan group-hover:scale-110 group-hover:bg-brand-cyan/15 transition-all">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                          {skill.level}
                        </span>
                      </div>

                      <h4 className="text-sm font-semibold text-slate-100 mt-3 group-hover:text-brand-cyan transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-[11px] font-mono text-slate-400 mt-0.5">{skill.tag}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Verification Callout */}
        <div className="mt-12 p-4 rounded-xl bg-[#0f121d] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-mono font-bold">&check;</span>
            <span>No fabricated skill meters or arbitrary percentage bars. All competencies represent demonstrable hands-on implementations.</span>
          </div>
          <span className="font-mono text-slate-500 text-[11px]">B.Tech AI &amp; ML Syllabus &bull; 2026</span>
        </div>
      </div>
    </section>
  );
}
