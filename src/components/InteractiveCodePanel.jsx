import { useState } from 'react';
import { Play, Copy, Check, Terminal, Sparkles, Code2, Cpu, FileCode } from 'lucide-react';

export default function InteractiveCodePanel() {
  const [activeTab, setActiveTab] = useState('semantic_search');
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState('find binary search in list');
  const [isRunning, setIsRunning] = useState(false);
  const [runOutput, setRunOutput] = useState(null);

  const snippets = {
    semantic_search: {
      filename: 'semantic_code_search.py',
      language: 'python',
      icon: Cpu,
      title: 'Dense Vector Code Retrieval',
      code: `import faiss
import numpy as np
from sentence_transformers import SentenceTransformer

# Load embedding encoder (384-dimensional dense vectors)
model = SentenceTransformer('all-MiniLM-L6-v2')

def search_code_snippets(user_query: str, index, code_corpus, k=3):
    """
    Encodes natural language query into vector space
    and executes FAISS L2 nearest-neighbor retrieval.
    """
    query_vector = model.encode([user_query])
    distances, indices = index.search(np.array(query_vector), k)
    
    results = [
        {"code": code_corpus[idx], "distance": float(dist)}
        for dist, idx in zip(distances[0], indices[0])
    ]
    return results`,
    },
    futuretwin: {
      filename: 'resumeParserService.js',
      language: 'javascript',
      icon: Code2,
      title: 'Full-Stack ATS & Groq Service',
      code: `import { Groq } from 'groq-sdk';
import pdfParse from 'pdf-parse';

export async function processResumeBuffer(pdfBuffer, targetJobDescription) {
  // 1. In-memory text extraction from uploaded PDF
  const parsedData = await pdfParse(pdfBuffer);
  const candidateText = parsedData.text;

  // 2. Structured evaluation prompt with role-specific rubrics
  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
  const response = await groq.chat.completions.create({
    model: 'llama-3.1-70b-versatile',
    messages: [
      { role: 'system', content: 'You are an ATS Scoring & Career Analysis Engine.' },
      { role: 'user', content: \`Resume: \${candidateText}\\nTarget Job: \${targetJobDescription}\` }
    ],
    response_format: { type: 'json_object' }
  });

  return JSON.parse(response.choices[0].message.content);
}`,
    },
    attention: {
      filename: 'bahdanau_attention.py',
      language: 'python',
      icon: FileCode,
      title: 'CNN-LSTM Visual Attention',
      code: `import tensorflow as tf
from tensorflow.keras import layers

class BahdanauAttention(layers.Layer):
    """
    Additive Attention mechanism for sequence decoding:
    score = v^T * tanh(W1(features) + W2(hidden_state))
    """
    def __init__(self, units):
        super(BahdanauAttention, self).__init__()
        self.W1 = layers.Dense(units)
        self.W2 = layers.Dense(units)
        self.V = layers.Dense(1)

    def call(self, features, hidden):
        # hidden_with_time_axis: (batch_size, 1, hidden_dim)
        hidden_with_time_axis = tf.expand_dims(hidden, 1)
        score = tf.nn.tanh(self.W1(features) + self.W2(hidden_with_time_axis))
        attention_weights = tf.nn.softmax(self.V(score), axis=1)
        context_vector = attention_weights * features
        context_vector = tf.reduce_sum(context_vector, axis=1)
        return context_vector, attention_weights`,
    },
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const runSimulation = () => {
    setIsRunning(true);
    setRunOutput(null);

    setTimeout(() => {
      setIsRunning(false);
      if (activeTab === 'semantic_search') {
        setRunOutput({
          type: 'search',
          query: searchQuery,
          embeddingDim: '384 float32',
          latency: '24ms (FAISS FlatL2)',
          matches: [
            {
              func: 'def binary_search(arr, target):',
              similarity: '94.2%',
              preview: 'low, high = 0, len(arr) - 1\nwhile low <= high:\n    mid = (low + high) // 2\n    if arr[mid] == target: return mid',
            },
            {
              func: 'import bisect',
              similarity: '87.6%',
              preview: 'index = bisect.bisect_left(arr, target)',
            },
          ],
        });
      } else if (activeTab === 'futuretwin') {
        setRunOutput({
          type: 'futuretwin',
          candidate: 'Verified Candidate Profile',
          atsScore: '88 / 100',
          skillMatch: 'Strong (React, Node.js, Python, REST APIs, FAISS)',
          recommendations: 'Add metrics regarding latency reduction and dataset volume.',
        });
      } else {
        setRunOutput({
          type: 'attention',
          inputImage: 'sample_flickr_042.jpg [224x224x3]',
          attentionPeaks: ['Region (x:42, y:88) -> token "dog"', 'Region (x:110, y:140) -> token "running"'],
          captionGenerated: '"A brown dog running across the grass field."',
        });
      }
    }, 700);
  };

  return (
    <div className="w-full rounded-2xl glass-panel shadow-2xl overflow-hidden border border-white/10 text-xs sm:text-sm font-mono">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0a0c12]/90 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-slate-400 font-sans text-xs hidden sm:inline-block">
            workspace/hima-portfolio
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={runSimulation}
            disabled={isRunning}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-brand-cyan/15 hover:bg-brand-cyan/25 text-brand-cyan border border-brand-cyan/30 text-xs font-sans font-medium transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
            title="Execute query simulation"
          >
            <Play className={`w-3.5 h-3.5 fill-current ${isRunning ? 'animate-spin' : ''}`} />
            <span>{isRunning ? 'Computing...' : 'Simulate Run'}</span>
          </button>

          <button
            onClick={handleCopy}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            title="Copy snippet"
            aria-label="Copy code snippet"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 px-3 pt-2 bg-[#0c0e16]/80 border-b border-white/5 overflow-x-auto scrollbar-none">
        {Object.entries(snippets).map(([key, item]) => {
          const Icon = item.icon;
          const isActive = activeTab === key;
          return (
            <button
              key={key}
              onClick={() => {
                setActiveTab(key);
                setRunOutput(null);
              }}
              className={`flex items-center gap-2 px-3 py-2 rounded-t-lg text-xs font-mono transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-[#121520] text-brand-cyan border-t-2 border-t-brand-cyan border-x border-white/10'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{item.filename}</span>
            </button>
          );
        })}
      </div>

      {/* Code Editor Window */}
      <div className="p-4 sm:p-5 bg-[#0e111a]/95 overflow-x-auto max-h-[340px] text-slate-200 leading-relaxed font-mono">
        <div className="flex gap-4">
          {/* Line Numbers */}
          <div className="select-none text-slate-600 text-right pr-2 font-mono hidden sm:block">
            {snippets[activeTab].code.split('\n').map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>

          {/* Code Text with formatted styling */}
          <pre className="text-slate-300 font-mono text-[11px] sm:text-xs overflow-x-auto">
            <code>
              {snippets[activeTab].code.split('\n').map((line, idx) => {
                // Subtle syntax color accents
                let styled = line;
                const isComment = line.trim().startsWith('#') || line.trim().startsWith('//') || line.trim().startsWith('"""');
                const isImport = line.startsWith('import ') || line.startsWith('from ');
                const isDef = line.includes('def ') || line.includes('class ') || line.includes('function ') || line.includes('async ');

                return (
                  <div key={idx} className="whitespace-pre">
                    {isComment ? (
                      <span className="text-slate-500 italic">{line}</span>
                    ) : isImport ? (
                      <span className="text-indigo-400 font-semibold">{line}</span>
                    ) : isDef ? (
                      <span className="text-brand-cyan font-medium">{line}</span>
                    ) : line.includes('return ') ? (
                      <span className="text-amber-400">{line}</span>
                    ) : (
                      <span>{line}</span>
                    )}
                  </div>
                );
              })}
            </code>
          </pre>
        </div>
      </div>

      {/* Simulation / Terminal Drawer */}
      <div className="bg-[#090b10] border-t border-white/10 p-3.5 sm:p-4 font-mono text-xs">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-slate-400">
            <Terminal className="w-3.5 h-3.5 text-brand-cyan" />
            <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-300">
              Interactive Execution Pipeline
            </span>
          </div>
          <span className="text-[10px] text-slate-500 font-sans">Deterministic Simulation</span>
        </div>

        {/* Live Search Input for semantic search tab */}
        {activeTab === 'semantic_search' && !runOutput && (
          <div className="flex flex-col sm:flex-row gap-2 mt-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="e.g. reverse linked list, quicksort algorithm..."
              className="flex-1 bg-[#121520] border border-white/10 rounded-lg px-3 py-1.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-cyan text-xs"
            />
            <button
              onClick={runSimulation}
              disabled={isRunning}
              className="px-3 py-1.5 bg-brand-cyan/20 hover:bg-brand-cyan/30 text-brand-cyan border border-brand-cyan/40 rounded-lg font-sans font-medium text-xs whitespace-nowrap"
            >
              Run Query
            </button>
          </div>
        )}

        {/* Output View */}
        {runOutput && (
          <div className="mt-2 p-3 rounded-lg bg-[#0f131d] border border-brand-cyan/20 animate-in fade-in duration-200 space-y-2">
            {runOutput.type === 'search' && (
              <>
                <div className="flex items-center justify-between text-brand-cyan">
                  <span>Query: "{runOutput.query}"</span>
                  <span className="text-slate-400 text-[10px]">Latency: {runOutput.latency}</span>
                </div>
                <div className="text-slate-400 text-[11px]">Vector: {runOutput.embeddingDim}</div>
                <div className="space-y-1.5 pt-1">
                  {runOutput.matches.map((m, i) => (
                    <div key={i} className="p-2 rounded bg-black/40 border border-white/5">
                      <div className="flex items-center justify-between text-slate-200 font-semibold">
                        <span>{m.func}</span>
                        <span className="text-emerald-400 font-mono text-[10px]">match: {m.similarity}</span>
                      </div>
                      <pre className="text-slate-400 text-[10px] mt-1 overflow-x-auto">{m.preview}</pre>
                    </div>
                  ))}
                </div>
              </>
            )}

            {runOutput.type === 'futuretwin' && (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-slate-200 font-medium">ATS Match Score</span>
                  <span className="text-emerald-400 font-bold font-mono">{runOutput.atsScore}</span>
                </div>
                <p className="text-slate-400 text-[11px]">Analysis: {runOutput.skillMatch}</p>
                <p className="text-amber-400/90 text-[11px]">Insight: {runOutput.recommendations}</p>
              </div>
            )}

            {runOutput.type === 'attention' && (
              <div className="space-y-1.5">
                <div className="text-brand-cyan font-medium">Attention Decoder Output:</div>
                <div className="text-slate-200 italic font-sans text-xs bg-black/40 p-2 rounded border border-white/5">
                  {runOutput.captionGenerated}
                </div>
                <div className="text-slate-400 text-[10px] space-y-0.5">
                  {runOutput.attentionPeaks.map((p, i) => (
                    <div key={i}>&bull; {p}</div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {!runOutput && activeTab !== 'semantic_search' && (
          <div className="text-slate-500 text-[11px] flex items-center gap-1.5 mt-1">
            <Sparkles className="w-3 h-3 text-amber-400/70" />
            <span>Click &ldquo;Simulate Run&rdquo; above to execute the model pipeline.</span>
          </div>
        )}
      </div>
    </div>
  );
}
