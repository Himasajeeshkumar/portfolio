import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { experience, personalData, certifications } from '../data/portfolioData';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 lg:py-28 relative bg-white border-t border-b border-slate-100">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-50/70 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career &amp; Academic Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Experience &amp; Education
          </h2>
          <p className="text-base text-slate-600 max-w-xl font-normal">
            Applied technical internships, academic degree milestones, and professional machine learning certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Work Experience Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2.5 pb-2 border-b border-slate-200 font-mono">
              <Building2 className="w-4 h-4 text-indigo-600" />
              <span>Applied AI &amp; Software Internships</span>
            </h3>

            <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-indigo-600 before:via-blue-500 before:to-purple-300">
              {experience.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Node Dot */}
                  <div className="absolute -left-[27px] sm:-left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-indigo-600 group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(99,102,241,0.6)]" />

                  {/* Experience Card */}
                  <div className="p-6 rounded-2xl bg-[#fafbfc] border border-slate-200/80 hover:border-indigo-300 transition-all duration-300 shadow-sm hover:shadow-md space-y-3.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {exp.role}
                      </h4>
                      <span className="text-xs font-mono text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200/60 self-start sm:self-auto font-medium">
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                      <span className="text-slate-800 font-semibold">{exp.company}</span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {exp.location}
                      </span>
                      <span>&bull;</span>
                      <span className="text-emerald-700 font-semibold">{exp.type}</span>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {exp.description}
                    </p>

                    {/* Detailed verified achievements */}
                    <ul className="space-y-2 pt-2 border-t border-slate-200/60 text-xs text-slate-600">
                      {exp.achievements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white text-slate-600 border border-slate-200 shadow-2xs"
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
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2.5 pb-2 border-b border-slate-200 font-mono mb-6">
                <GraduationCap className="w-4 h-4 text-indigo-600" />
                <span>Academic Degree</span>
              </h3>

              <div className="p-6 rounded-2xl bg-[#fafbfc] border border-slate-200/80 shadow-sm space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-700 font-bold px-2 py-0.5 rounded bg-indigo-50 border border-indigo-100">
                      Undergraduate
                    </span>
                    <h4 className="text-base font-bold text-slate-900 mt-1.5">
                      {personalData.education.degree}
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 font-bold">
                    CGPA 8.35
                  </span>
                </div>

                <div className="text-xs text-slate-600 leading-relaxed font-sans">
                  <p className="font-semibold text-slate-800 text-sm">{personalData.education.university}</p>
                  <p className="text-slate-500 font-mono mt-0.5">Timeline: 2023 – Expected 2027</p>
                </div>

                <div className="pt-3 border-t border-slate-200/60">
                  <h5 className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-2 font-bold">
                    Relevant Core Coursework:
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {personalData.education.coursework.map((course) => (
                      <span
                        key={course}
                        className="text-[10px] px-2.5 py-1 rounded-md bg-white text-slate-700 border border-slate-200 shadow-2xs font-medium"
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
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2.5 pb-2 border-b border-slate-200 font-mono mb-4">
                <Award className="w-4 h-4 text-emerald-600" />
                <span>Verified Certifications</span>
              </h3>

              <div className="grid grid-cols-1 gap-2.5">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-[#fafbfc] border border-slate-200/80 hover:border-indigo-200 transition-all flex items-center justify-between gap-3 text-xs shadow-2xs hover:shadow-xs"
                  >
                    <div>
                      <h5 className="font-semibold text-slate-800">{cert.title}</h5>
                      <span className="text-[11px] font-mono text-slate-500">{cert.issuer}</span>
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-100 font-medium shrink-0">
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
