
import React, { useState } from 'react';
import { generateCode } from '../services/geminiService';

export const CodeArchitect: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const code = await generateCode(prompt);
      setResult(code || "No response from model.");
    } catch (err) {
      setResult("Error generating code: " + (err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto h-[calc(100vh-160px)] flex flex-col gap-6">
      <div className="flex-1 flex flex-col md:flex-row gap-6 min-h-0">
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          <div className="flex-1 p-6 bg-zinc-900 border border-zinc-800 rounded-2xl flex flex-col">
            <h3 className="text-sm font-bold text-zinc-400 mb-4 uppercase tracking-widest">Specifications</h3>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe the function or component you need... e.g., 'Write a custom React hook for handling debounced API searches with TypeScript.'"
              className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none"
            />
            <button
              onClick={handleGenerate}
              disabled={loading}
              className={`mt-4 w-full py-3 rounded-xl font-bold text-sm transition-all ${
                loading ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-500 text-white'
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-zinc-400 border-t-transparent rounded-full animate-spin" />
                  Generating...
                </span>
              ) : 'Architect Solution'}
            </button>
          </div>
        </div>

        <div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-2xl flex flex-col overflow-hidden">
          <div className="h-10 border-b border-zinc-800 flex items-center px-4 justify-between bg-zinc-900/80">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            </div>
            <span className="text-[10px] text-zinc-500 font-mono">OUTPUT.TSX</span>
          </div>
          <div className="flex-1 overflow-auto p-6 font-mono text-sm">
            {result ? (
              <div className="whitespace-pre-wrap text-zinc-300">
                {result}
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-zinc-600 italic">
                Output will appear here...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
