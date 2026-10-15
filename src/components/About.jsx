import { useState } from 'react';
import { GraduationCap, Award, Briefcase, Cpu, CheckCircle2, ArrowUpRight, Code2, Sparkles, User } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function About() {
  const [imageError, setImageError] = useState(false);

  const pillars = [
    {
      title: 'Applied AI & Vector Search',
      description: 'Designing semantic search engines with Sentence Transformers, FAISS nearest-neighbor indexing, and fine-tuned DistilBERT models for text classification.',
      icon: Cpu,
      color: 'text-brand-cyan',
      borderColor: 'border-brand-cyan/30',
      bgGlow: 'from-brand-cyan/10 to-transparent',
    },
    {
      title: 'Full-Stack Web Architecture',
      description: 'Building end-to-end applications with React.js, Node.js, Express.js, and REST APIs. Implementing client-side PDF manipulation, parsing, and LLM integrations.',
      icon: Code2,
      color: 'text-brand-blue',
      borderColor: 'border-brand-blue/30',
      bgGlow: 'from-brand-blue/10 to-transparent',
    },
    {
      title: 'Empirical Model Evaluation',
      description: 'Hands-on experience conducting data cleaning, tokenization pipelines, and metric evaluation tracking with TensorFlow, Keras, and Scikit-learn on CPU & cloud environments.',
      icon: Sparkles,
      color: 'text-brand-indigo',
      borderColor: 'border-brand-indigo/30',
      bgGlow: 'from-brand-indigo/10 to-transparent',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan text-xs font-mono">
            <User className="w-3.5 h-3.5" />
            <span>Identity &amp; Approach</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Bridging robust software engineering principles with practical, applied artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Profile Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand-cyan/30 via-brand-blue/20 to-brand-indigo/30 blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />

              <div className="relative rounded-2xl bg-[#0e111a] border border-white/15 p-4 shadow-2xl overflow-hidden">
                {/* Photo or Smart Fallback */}
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-[#151926] relative flex items-center justify-center">
                  {!imageError ? (
                    <img
                      src={personalData.profilePhoto}
                      alt={personalData.name}
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    /* Elegant CSS-based portrait placeholder if image is removed */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#121522] to-[#1a1f33]">
                      <div className="w-24 h-24 rounded-full bg-brand-cyan/15 border-2 border-brand-cyan/40 flex items-center justify-center text-brand-cyan font-mono font-bold text-2xl mb-4">
                        HK
                      </div>
                      <h4 className="text-base font-bold text-white">{personalData.name}</h4>
                      <p className="text-xs text-brand-cyan font-mono mt-1">{personalData.headline}</p>
                      <p className="text-[11px] text-slate-400 mt-3 font-mono">
                        Photo path: /images/hima.png
                      </p>
                    </div>
                  )}

                  {/* Corner Accent Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#090b10]/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300 font-semibold">{personalData.name}</span>
                    <span className="text-brand-cyan">CSE (AI &amp; ML)</span>
                  </div>
                </div>

                {/* Sub-card details */}
                <div className="pt-4 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Bengaluru, India</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Available 2026/27
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Story & Verified Metrics */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a Computer Science Engineering student specializing in <strong className="text-white font-semibold">Artificial Intelligence &amp; Machine Learning</strong> at <span className="text-brand-cyan font-medium">{personalData.education.university}</span> with a verified CGPA of <strong className="text-white font-semibold">{personalData.education.cgpa}</strong>.
              </p>
              <p>
                My engineering approach is focused on <strong className="text-white font-semibold">applied utility</strong>. Rather than treating AI models as isolated academic experiments, I build the full-stack software infrastructure around them—integrating semantic vector search pipelines, robust REST APIs in Node.js/Express, interactive React web interfaces, and high-throughput LLM services like Groq.
              </p>
              <p>
                Through internships at <span className="text-white font-medium">SkillOrbit</span> and <span className="text-white font-medium">Evoastra Ventures</span>, I have engineered vector code-retrieval systems using Sentence Transformers and FAISS, fine-tuned DistilBERT models achieving 75.86% classification accuracy without GPU hardware, and cleaned complex multimodal datasets for attention-based image captioning pipelines.
              </p>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#121522] border border-white/10 text-center">
                <div className="text-xl sm:text-2xl font-bold font-mono text-brand-cyan">8.35</div>
                <div className="text-[11px] text-slate-400 mt-0.5">CGPA / 10</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#121522] border border-white/10 text-center">
                <div className="text-xl sm:text-2xl font-bold font-mono text-brand-blue">2</div>
                <div className="text-[11px] text-slate-400 mt-0.5">AI Internships</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#121522] border border-white/10 text-center">
                <div className="text-xl sm:text-2xl font-bold font-mono text-brand-indigo">3</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Core Projects</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#121522] border border-white/10 text-center">
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">6</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Certifications</div>
              </div>
            </div>

            {/* Engineering Pillars */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Core Engineering Capabilities
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {pillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className={`p-4 rounded-xl bg-[#10131f] border ${pillar.borderColor} flex items-start gap-3.5`}
                    >
                      <div className={`p-2 rounded-lg bg-white/5 ${pillar.color} shrink-0`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white">{pillar.title}</h4>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
