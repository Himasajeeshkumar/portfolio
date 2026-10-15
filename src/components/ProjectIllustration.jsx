import { Sparkles, FileText, Search, Cpu, Eye, Binary, Code2, ArrowRight } from 'lucide-react';

export default function ProjectIllustration({ type }) {
  if (type === 'futuretwin') {
    return (
      <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-[#0e1322] via-[#12162a] to-[#0a0d18] relative flex flex-col justify-between p-5 overflow-hidden border-b border-white/10 select-none">
        {/* Subtle grid and decorative rings */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute -right-8 -top-8 w-44 h-44 rounded-full bg-brand-cyan/15 blur-2xl pointer-events-none" />

        {/* Top badge */}
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
            <FileText className="w-3 h-3 text-brand-cyan" />
            <span>PDF Parsing &bull; Groq LLM &bull; ATS Pipeline</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            Live Platform
          </span>
        </div>

        {/* Center illustration: ATS Score Ring + Analysis Chips */}
        <div className="my-auto py-3 flex items-center justify-center gap-6 relative z-10">
          {/* Animated Radial Score Ring */}
          <div className="relative w-24 h-24 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-white/10"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-brand-cyan"
                strokeDasharray="88, 100"
                strokeWidth="3.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-xl font-bold font-mono text-white">88%</span>
              <span className="text-[8px] font-mono uppercase text-slate-400 tracking-wider">ATS Score</span>
            </div>
          </div>

          {/* Analysis Metrics */}
          <div className="space-y-1.5 text-left font-mono text-[10px]">
            <div className="px-2.5 py-1 rounded bg-[#161a29] border border-white/10 text-slate-300 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
              <span>Keyword Fit: High (React, Node)</span>
            </div>
            <div className="px-2.5 py-1 rounded bg-[#161a29] border border-white/10 text-slate-300 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              <span>PDF Ingestion: Client-side pdf.js</span>
            </div>
            <div className="px-2.5 py-1 rounded bg-[#161a29] border border-white/10 text-slate-300 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Groq LLM Latency: &lt; 450ms</span>
            </div>
          </div>
        </div>

        {/* Bottom banner note */}
        <div className="relative z-10 text-[10px] font-mono text-slate-400 flex items-center justify-between border-t border-white/5 pt-2">
          <span>Abstract Architecture Illustration</span>
          <span className="text-brand-cyan flex items-center gap-1">
            futuretwin-ai-1.onrender.com <ArrowRight className="w-2.5 h-2.5" />
          </span>
        </div>
      </div>
    );
  }

  if (type === 'code-search') {
    return (
      <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-[#0c0f1a] via-[#101424] to-[#090b14] relative flex flex-col justify-between p-5 overflow-hidden border-b border-white/10 select-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute -left-8 -bottom-8 w-44 h-44 rounded-full bg-brand-blue/15 blur-2xl pointer-events-none" />

        {/* Top badge */}
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
            <Search className="w-3 h-3 text-brand-blue" />
            <span>CodeSearchNet &bull; Sentence Transformers</span>
          </div>
          <span className="text-[10px] font-mono text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded border border-brand-blue/20">
            FAISS FlatL2
          </span>
        </div>

        {/* Center illustration: Query to Dense Vector to Nearest Snippet */}
        <div className="my-auto py-3 space-y-2 relative z-10 font-mono text-[11px]">
          {/* Query input card */}
          <div className="p-2 rounded-lg bg-[#141829] border border-white/10 flex items-center justify-between">
            <span className="text-slate-400 text-[10px]">Query:</span>
            <span className="text-slate-200 text-[10px]">&quot;binary search target in list&quot;</span>
            <span className="text-brand-blue text-[9px] px-1.5 py-0.5 rounded bg-brand-blue/10">NL Input</span>
          </div>

          {/* Vector representation arrow */}
          <div className="flex items-center justify-center gap-2 text-slate-500 text-[9px]">
            <span>&darr;</span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-slate-400">
              Dense Embedding (384-d vector)
            </span>
            <span>&darr;</span>
          </div>

          {/* Retrieved Snippet */}
          <div className="p-2.5 rounded-lg bg-black/40 border border-brand-blue/30 text-left">
            <div className="flex items-center justify-between text-[10px] text-brand-blue mb-1">
              <span>retrieved_snippet.py</span>
              <span className="text-emerald-400">Cosine Match: 0.942</span>
            </div>
            <pre className="text-slate-300 text-[9px] leading-tight font-mono">
              <code>def binary_search(arr, target): ...</code>
            </pre>
          </div>
        </div>

        {/* Bottom banner note */}
        <div className="relative z-10 text-[10px] font-mono text-slate-400 flex items-center justify-between border-t border-white/5 pt-2">
          <span>Dense Vector Retrieval Pipeline</span>
          <span className="text-slate-400">Gradio Demo UI</span>
        </div>
      </div>
    );
  }

  // Visual Sequence Decoder (CNN-LSTM Attention)
  return (
    <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-[#0c0e18] via-[#121528] to-[#080a12] relative flex flex-col justify-between p-5 overflow-hidden border-b border-white/10 select-none">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-44 h-44 rounded-full bg-brand-indigo/15 blur-2xl pointer-events-none" />

      {/* Top badge */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
          <Eye className="w-3 h-3 text-indigo-400" />
          <span>Flickr8k &bull; Bahdanau Additive Attention</span>
        </div>
        <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
          TensorFlow
        </span>
      </div>

      {/* Center illustration: Image Grid -> Attention Heatmap -> Decoded Caption */}
      <div className="my-auto py-3 space-y-2.5 relative z-10">
        <div className="flex items-center justify-center gap-4">
          {/* Spatial Grid representation */}
          <div className="w-16 h-16 rounded-lg bg-[#14182a] border border-white/15 p-1.5 grid grid-cols-3 gap-1">
            <div className="rounded bg-white/5" />
            <div className="rounded bg-brand-cyan/40" />
            <div className="rounded bg-white/5" />
            <div className="rounded bg-indigo-500/60 animate-pulse" />
            <div className="rounded bg-brand-cyan/80" />
            <div className="rounded bg-white/5" />
            <div className="rounded bg-white/5" />
            <div className="rounded bg-white/10" />
            <div className="rounded bg-white/5" />
          </div>

          <div className="text-slate-500 text-xs font-mono">&rarr;</div>

          {/* Attention context vector */}
          <div className="text-left font-mono text-[10px] space-y-1">
            <div className="text-indigo-400 font-semibold">CNN Feature Map (8x8x2048)</div>
            <div className="text-slate-400">&alpha; Attention Weight Distribution</div>
            <div className="text-slate-500">LSTM Sequential Cell State</div>
          </div>
        </div>

        {/* Decoded sentence preview */}
        <div className="p-2 rounded-lg bg-black/40 border border-white/10 text-center font-mono text-[10px]">
          <span className="text-slate-400">Decoded Sequence: </span>
          <span className="text-white italic">&quot;&lt;start&gt; a dog runs across the grass &lt;end&gt;&quot;</span>
        </div>
      </div>

      {/* Bottom banner note */}
      <div className="relative z-10 text-[10px] font-mono text-slate-400 flex items-center justify-between border-t border-white/5 pt-2">
        <span>Encoder-Decoder Architecture</span>
        <span className="text-slate-400">Team Collaboration</span>
      </div>
    </div>
  );
}
