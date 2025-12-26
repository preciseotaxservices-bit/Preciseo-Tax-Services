
import React, { useState, useRef } from 'react';
import { analyzeVision } from '../services/geminiService';

export const VisionLab: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState('');
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState('Describe this image in detail and identify key objects.');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedImage) return;
    setLoading(true);
    try {
      const base64 = selectedImage.split(',')[1];
      const mimeType = selectedImage.split(';')[0].split(':')[1];
      const result = await analyzeVision(prompt, base64, mimeType);
      setAnalysis(result || "Analysis failed.");
    } catch (err) {
      setAnalysis("Error: " + (err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      <div className="flex flex-col gap-6">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col gap-6">
          <h2 className="text-xl font-bold">Input Visuals</h2>

          <div
            onClick={() => fileInputRef.current?.click()}
            className="aspect-video border-2 border-dashed border-zinc-800 rounded-2xl flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-zinc-700 hover:bg-zinc-800/30 transition-all overflow-hidden relative"
          >
            {selectedImage ? (
              <img src={selectedImage} alt="Preview" className="w-full h-full object-contain" />
            ) : (
              <>
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                </div>
                <p className="text-sm text-zinc-500 font-medium">Click to upload image</p>
              </>
            )}
            <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
          </div>

          <div className="space-y-4">
            <label className="text-xs font-bold text-zinc-500 uppercase">Analysis Objective</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none h-24"
              placeholder="What should I look for?"
            />
          </div>

          <button
            onClick={handleAnalyze}
            disabled={loading || !selectedImage}
            className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-zinc-800 disabled:text-zinc-600 font-bold text-sm transition-all"
          >
            {loading ? 'Processing Visual Data...' : 'Run Vision Inference'}
          </button>
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col min-h-[400px]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Analysis Output</h2>
          {analysis && (
            <button
              onClick={() => setAnalysis('')}
              className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              Clear
            </button>
          )}
        </div>

        <div className="flex-1 bg-zinc-950 border border-zinc-800 rounded-2xl p-6 overflow-y-auto">
          {loading ? (
            <div className="h-full flex flex-col items-center justify-center gap-4 text-zinc-500">
               <div className="flex gap-1">
                 <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                 <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                 <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" />
               </div>
               <p className="text-xs font-mono">NEURAL_ENGINE_RUNNING</p>
            </div>
          ) : analysis ? (
            <div className="prose prose-invert prose-sm max-w-none">
              <p className="text-zinc-300 leading-relaxed whitespace-pre-wrap">{analysis}</p>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-zinc-600 text-sm italic">
              Ready for image input...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
