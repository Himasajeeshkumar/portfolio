import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2, Building2, BookOpen } from 'lucide-react';
import { experience, personalData, certifications } from '../data/portfolioData';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 lg:py-28 relative bg-[#090b10]">
      {/* Glow elements */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-cyan/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career &amp; Academic Timeline</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Experience &amp; Education
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl">
            Applied technical internships, academic degree milestones, and professional machine learning certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Work Experience Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-lg font-bold text-white flex items-center gap-2.5 pb-2 border-b border-white/10 font-mono">
              <Building2 className="w-4 h-4 text-brand-cyan" />
              <span>Applied AI &amp; Software Internships</span>
            </h3>

            <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-brand-cyan before:via-brand-blue before:to-brand-indigo/20">
              {experience.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Node Dot */}
                  <div className="absolute -left-[27px] sm:-left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#0e111a] border-2 border-brand-cyan group-hover:scale-125 transition-transform shadow-[0_0_10px_#00f2fe]" />

                  {/* Experience Card */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#0f121d] border border-white/10 hover:border-brand-cyan/40 transition-all duration-300 shadow-xl space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-brand-cyan transition-colors">
                        {exp.role}
                      </h4>
                      <span className="text-xs font-mono text-brand-cyan bg-brand-cyan/10 px-2.5 py-0.5 rounded-full border border-brand-cyan/25 self-start sm:self-auto">
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                      <span className="text-slate-200 font-semibold">{exp.company}</span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {exp.location}
                      </span>
                      <span>&bull;</span>
                      <span className="text-emerald-400">{exp.type}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Detailed verified achievements */}
                    <ul className="space-y-2 pt-2 border-t border-white/5 text-xs text-slate-300">
                      {exp.achievements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Certifications */}
          <div className="lg:col-span-5 space-y-8">
            {/* Education Card */}
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2.5 pb-2 border-b border-white/10 font-mono mb-6">
                <GraduationCap className="w-4 h-4 text-brand-blue" />
                <span>Academic Degree</span>
              </h3>

              <div className="p-5 sm:p-6 rounded-2xl bg-[#0f121d] border border-brand-blue/30 shadow-xl space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-brand-blue font-semibold px-2 py-0.5 rounded bg-brand-blue/10">
                      Undergraduate
                    </span>
                    <h4 className="text-base font-bold text-white mt-1">
                      {personalData.education.degree}
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    CGPA 8.35
                  </span>
                </div>

                <div className="text-xs text-slate-300 leading-relaxed font-sans">
                  <p className="font-semibold text-slate-200">{personalData.education.university}</p>
                  <p className="text-slate-400 font-mono mt-0.5">Timeline: 2023 – Expected 2027</p>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <h5 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Relevant Core Coursework:
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {personalData.education.coursework.map((course) => (
                      <span
                        key={course}
                        className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2.5 pb-2 border-b border-white/10 font-mono mb-4">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Verified Certifications</span>
              </h3>

              <div className="grid grid-cols-1 gap-2.5">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-[#0f121d] border border-white/5 hover:border-white/20 transition-all flex items-center justify-between gap-3 text-xs"
                  >
                    <div>
                      <h5 className="font-semibold text-slate-100">{cert.title}</h5>
                      <span className="text-[11px] font-mono text-slate-400">{cert.issuer}</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-brand-cyan border border-white/5 shrink-0">
                      {cert.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
