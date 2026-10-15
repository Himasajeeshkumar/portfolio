import { useState } from 'react';
import { User, Cpu, Code2, Sparkles, GraduationCap, CheckCircle2 } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function About() {
  const [imageError, setImageError] = useState(false);

  const pillars = [
    {
      title: 'Applied AI & Vector Search',
      description: 'Designing semantic search engines with Sentence Transformers, FAISS nearest-neighbor indexing, and fine-tuned DistilBERT models for text classification.',
      icon: Cpu,
      color: 'text-indigo-600',
      bgGlow: 'bg-indigo-50 border-indigo-100',
    },
    {
      title: 'Full-Stack Web Architecture',
      description: 'Building end-to-end applications with React.js, Node.js, Express.js, and REST APIs. Implementing client-side PDF manipulation, parsing, and LLM integrations.',
      icon: Code2,
      color: 'text-blue-600',
      bgGlow: 'bg-blue-50 border-blue-100',
    },
    {
      title: 'Empirical Model Evaluation',
      description: 'Hands-on experience conducting data cleaning, tokenization pipelines, and metric evaluation tracking with TensorFlow, Keras, and Scikit-learn on CPU & cloud environments.',
      icon: Sparkles,
      color: 'text-purple-600',
      bgGlow: 'bg-purple-50 border-purple-100',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden bg-white border-t border-b border-slate-100">
      {/* Ambient background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-mono">
            <User className="w-3.5 h-3.5" />
            <span>Identity &amp; Approach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About Me
          </h2>
          <p className="text-base text-slate-600 max-w-2xl font-normal">
            Bridging robust software engineering principles with practical, applied artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl bg-slate-50 border border-slate-200/80 p-4 shadow-xl shadow-slate-200/50">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-white relative flex items-center justify-center border border-slate-200/60 shadow-inner">
                {!imageError ? (
                  <img
                    src={personalData.profilePhoto}
                    alt={personalData.name}
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-indigo-50 to-purple-50">
                    <div className="w-20 h-20 rounded-2xl bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-700 font-mono font-bold text-2xl mb-3">
                      HK
                    </div>
                    <h4 className="text-base font-bold text-slate-800">{personalData.name}</h4>
                    <p className="text-xs text-indigo-600 font-mono mt-0.5">{personalData.headline}</p>
                    <p className="text-[11px] text-slate-400 mt-2 font-mono">Photo path: /images/hima.png</p>
                  </div>
                )}

                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/80 flex items-center justify-between text-xs font-mono shadow-sm">
                  <span className="text-slate-800 font-semibold">{personalData.name}</span>
                  <span className="text-indigo-600 font-semibold">CSE (AI &amp; ML)</span>
                </div>
              </div>

              <div className="pt-3 px-1 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Bengaluru, India</span>
                <span className="text-emerald-600 font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available 2026/27
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Metrics */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-600 text-base leading-relaxed font-normal">
              <p>
                I am a Computer Science Engineering student specializing in <strong className="text-slate-900 font-semibold">Artificial Intelligence &amp; Machine Learning</strong> at <span className="text-indigo-600 font-medium">{personalData.education.university}</span> with a verified CGPA of <strong className="text-slate-900 font-semibold">{personalData.education.cgpa}</strong>.
              </p>
              <p>
                My engineering approach is focused on <strong className="text-slate-900 font-semibold">applied utility</strong>. Rather than treating AI models as isolated academic experiments, I build the full-stack software infrastructure around them—integrating semantic vector search pipelines, robust REST APIs in Node.js/Express, interactive React web interfaces, and high-throughput LLM services like Groq.
              </p>
              <p>
                Through internships at <span className="text-slate-900 font-semibold">SkillOrbit</span> and <span className="text-slate-900 font-semibold">Evoastra Ventures</span>, I have engineered vector code-retrieval systems using Sentence Transformers and FAISS, fine-tuned DistilBERT models achieving 75.86% classification accuracy without GPU hardware, and cleaned complex multimodal datasets for attention-based image captioning pipelines.
              </p>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center shadow-xs">
                <div className="text-2xl font-bold font-mono text-indigo-600">8.35</div>
                <div className="text-xs text-slate-500 mt-0.5">CGPA / 10</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center shadow-xs">
                <div className="text-2xl font-bold font-mono text-blue-600">2</div>
                <div className="text-xs text-slate-500 mt-0.5">AI Internships</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center shadow-xs">
                <div className="text-2xl font-bold font-mono text-purple-600">3</div>
                <div className="text-xs text-slate-500 mt-0.5">Core Projects</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center shadow-xs">
                <div className="text-2xl font-bold font-mono text-emerald-600">6</div>
                <div className="text-xs text-slate-500 mt-0.5">Certifications</div>
              </div>
            </div>

            {/* Engineering Pillars */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                Core Engineering Capabilities
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {pillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-indigo-200 transition-all flex items-start gap-4 shadow-sm hover:shadow-md"
                    >
                      <div className={`p-2.5 rounded-xl ${pillar.bgGlow} ${pillar.color} shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{pillar.title}</h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
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
