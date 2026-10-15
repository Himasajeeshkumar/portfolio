import { FileText, Search, Eye, ArrowRight } from 'lucide-react';

export default function ProjectIllustration({ type }) {
  if (type === 'futuretwin') {
    return (
      <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-indigo-50/80 via-purple-50/60 to-sky-50/80 relative flex flex-col justify-between p-5 overflow-hidden border-b border-slate-100 select-none">
        {/* Subtle grid and decorative rings */}
        <div className="absolute inset-0 bg-grid-light opacity-60 pointer-events-none" />
        <div className="absolute -right-8 -top-8 w-44 h-44 rounded-full bg-indigo-200/40 blur-2xl pointer-events-none" />

        {/* Top badge */}
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-white/90 border border-slate-200/80 text-[10px] font-mono text-slate-700 shadow-sm">
            <FileText className="w-3 h-3 text-indigo-600" />
            <span>PDF Parsing &bull; Groq LLM &bull; ATS Pipeline</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 font-medium">
            Live Platform
          </span>
        </div>

        {/* Center illustration: ATS Score Ring + Analysis Chips */}
        <div className="my-auto py-3 flex items-center justify-center gap-6 relative z-10">
          {/* Radial Score Ring */}
          <div className="relative w-24 h-24 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-slate-200"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-indigo-600"
                strokeDasharray="88, 100"
                strokeWidth="3.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-xl font-bold font-mono text-slate-900">88%</span>
              <span className="text-[8px] font-mono uppercase text-slate-500 tracking-wider">ATS Score</span>
            </div>
          </div>

          {/* Analysis Metrics */}
          <div className="space-y-1.5 text-left font-mono text-[10px]">
            <div className="px-2.5 py-1 rounded-lg bg-white/90 border border-slate-200 text-slate-700 flex items-center gap-2 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
              <span>Keyword Fit: High (React, Node)</span>
            </div>
            <div className="px-2.5 py-1 rounded-lg bg-white/90 border border-slate-200 text-slate-700 flex items-center gap-2 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>PDF Ingestion: Client-side pdf.js</span>
            </div>
            <div className="px-2.5 py-1 rounded-lg bg-white/90 border border-slate-200 text-slate-700 flex items-center gap-2 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>Groq LLM Latency: &lt; 450ms</span>
            </div>
          </div>
        </div>

        {/* Bottom banner note */}
        <div className="relative z-10 text-[10px] font-mono text-slate-500 flex items-center justify-between border-t border-slate-200/60 pt-2">
          <span>Architectural Vector Illustration</span>
          <span className="text-indigo-600 flex items-center gap-1 font-medium">
            futuretwin-ai-1.onrender.com <ArrowRight className="w-2.5 h-2.5" />
          </span>
        </div>
      </div>
    );
  }

  if (type === 'code-search') {
    return (
      <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-sky-50/80 via-blue-50/60 to-indigo-50/80 relative flex flex-col justify-between p-5 overflow-hidden border-b border-slate-100 select-none">
        <div className="absolute inset-0 bg-grid-light opacity-60 pointer-events-none" />
        <div className="absolute -left-8 -bottom-8 w-44 h-44 rounded-full bg-sky-200/40 blur-2xl pointer-events-none" />

        {/* Top badge */}
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-white/90 border border-slate-200/80 text-[10px] font-mono text-slate-700 shadow-sm">
            <Search className="w-3 h-3 text-sky-600" />
            <span>CodeSearchNet &bull; Sentence Transformers</span>
          </div>
          <span className="text-[10px] font-mono text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-200 font-medium">
            FAISS FlatL2
          </span>
        </div>

        {/* Center illustration: Query to Dense Vector to Nearest Snippet */}
        <div className="my-auto py-3 space-y-2 relative z-10 font-mono text-[11px]">
          {/* Query input card */}
          <div className="p-2 rounded-lg bg-white/95 border border-slate-200 flex items-center justify-between shadow-sm">
            <span className="text-slate-400 text-[10px]">Query:</span>
            <span className="text-slate-800 text-[10px] font-medium">&quot;binary search target in list&quot;</span>
            <span className="text-sky-700 text-[9px] px-1.5 py-0.5 rounded bg-sky-50 border border-sky-100 font-semibold">NL Input</span>
          </div>

          {/* Vector representation arrow */}
          <div className="flex items-center justify-center gap-2 text-slate-400 text-[9px]">
            <span>&darr;</span>
            <span className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600 shadow-xs">
              Dense Embedding (384-d vector)
            </span>
            <span>&darr;</span>
          </div>

          {/* Retrieved Snippet */}
          <div className="p-2.5 rounded-lg bg-white/95 border border-indigo-200 text-left shadow-sm">
            <div className="flex items-center justify-between text-[10px] text-indigo-700 font-semibold mb-1">
              <span>retrieved_snippet.py</span>
              <span className="text-emerald-600">Cosine Match: 0.942</span>
            </div>
            <pre className="text-slate-600 text-[9px] leading-tight font-mono">
              <code>def binary_search(arr, target): ...</code>
            </pre>
          </div>
        </div>

        {/* Bottom banner note */}
        <div className="relative z-10 text-[10px] font-mono text-slate-500 flex items-center justify-between border-t border-slate-200/60 pt-2">
          <span>Dense Vector Retrieval Pipeline</span>
          <span className="text-slate-600 font-medium">Gradio Demo UI</span>
        </div>
      </div>
    );
  }

  // Visual Sequence Decoder (CNN-LSTM Attention)
  return (
    <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-purple-50/80 via-indigo-50/60 to-pink-50/60 relative flex flex-col justify-between p-5 overflow-hidden border-b border-slate-100 select-none">
      <div className="absolute inset-0 bg-grid-light opacity-60 pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-44 h-44 rounded-full bg-purple-200/40 blur-2xl pointer-events-none" />

      {/* Top badge */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-white/90 border border-slate-200/80 text-[10px] font-mono text-slate-700 shadow-sm">
          <Eye className="w-3 h-3 text-purple-600" />
          <span>Flickr8k &bull; Bahdanau Additive Attention</span>
        </div>
        <span className="text-[10px] font-mono text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200 font-medium">
          TensorFlow
        </span>
      </div>

      {/* Center illustration: Image Grid -> Attention Heatmap -> Decoded Caption */}
      <div className="my-auto py-3 space-y-2.5 relative z-10">
        <div className="flex items-center justify-center gap-4">
          {/* Spatial Grid representation */}
          <div className="w-16 h-16 rounded-xl bg-white border border-slate-200 p-1.5 grid grid-cols-3 gap-1 shadow-sm">
            <div className="rounded bg-slate-100" />
            <div className="rounded bg-purple-200" />
            <div className="rounded bg-slate-100" />
            <div className="rounded bg-indigo-300 animate-pulse" />
            <div className="rounded bg-purple-400" />
            <div className="rounded bg-slate-100" />
            <div className="rounded bg-slate-100" />
            <div className="rounded bg-purple-100" />
            <div className="rounded bg-slate-100" />
          </div>

          <div className="text-slate-400 text-xs font-mono">&rarr;</div>

          {/* Attention context vector */}
          <div className="text-left font-mono text-[10px] space-y-1">
            <div className="text-purple-700 font-semibold">CNN Feature Map (8x8x2048)</div>
            <div className="text-slate-600">&alpha; Attention Weight Distribution</div>
            <div className="text-slate-400">LSTM Sequential Cell State</div>
          </div>
        </div>

        {/* Decoded sentence preview */}
        <div className="p-2 rounded-lg bg-white border border-purple-100 text-center font-mono text-[10px] shadow-sm">
          <span className="text-slate-500">Decoded Sequence: </span>
          <span className="text-slate-900 font-semibold italic">&quot;&lt;start&gt; a dog runs across the grass &lt;end&gt;&quot;</span>
        </div>
      </div>

      {/* Bottom banner note */}
      <div className="relative z-10 text-[10px] font-mono text-slate-500 flex items-center justify-between border-t border-slate-200/60 pt-2">
        <span>Encoder-Decoder Architecture</span>
        <span className="text-slate-600 font-medium">Team Collaboration</span>
      </div>
    </div>
  );
}
