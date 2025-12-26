
import React, { useState } from 'react';
import { generateImage } from '../services/geminiService';

export const CreativeStudio: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const url = await generateImage(prompt);
      setImageUrl(url);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center space-y-6">
        <div className="max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl font-bold">Image Synthesis</h2>
          <p className="text-zinc-400 text-sm">Describe a visual concept and let the Gemini 2.5 Image model bring it to life.</p>
        </div>

        <div className="relative group max-w-2xl mx-auto">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="A futuristic synthwave city at sunset, 8k resolution, cinematic lighting..."
            className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl py-4 pl-6 pr-32 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
          />
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="absolute right-2 top-2 bottom-2 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-zinc-800 disabled:text-zinc-600 font-bold text-sm transition-all"
          >
            {loading ? 'Synthesizing...' : 'Generate'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="aspect-square bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden flex items-center justify-center group relative">
          {imageUrl ? (
            <>
              <img src={imageUrl} alt="Generated" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <a
                  href={imageUrl}
                  download="lumina-gen.png"
                  className="px-6 py-2 bg-white text-black font-bold rounded-full text-sm hover:scale-105 transition-transform"
                >
                  Download Asset
                </a>
              </div>
            </>
          ) : (
            <div className="text-zinc-600 text-sm flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              Waiting for prompt...
            </div>
          )}
          {loading && (
            <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md flex flex-col items-center justify-center gap-4">
              <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
              <p className="text-indigo-400 font-bold animate-pulse">Running Diffusion Inference...</p>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
            <h4 className="font-bold mb-2">Technical Specs</h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li className="flex justify-between"><span>Model:</span> <span className="text-zinc-200">Gemini 2.5 Flash Image</span></li>
              <li className="flex justify-between"><span>Format:</span> <span className="text-zinc-200">1024x1024 PNG</span></li>
              <li className="flex justify-between"><span>Aspect Ratio:</span> <span className="text-zinc-200">1:1</span></li>
              <li className="flex justify-between"><span>Inference Time:</span> <span className="text-zinc-200">~4.2s</span></li>
            </ul>
          </div>

          <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
            <h4 className="font-bold mb-2">Prompt Tips</h4>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Use descriptive adjectives and specify styles like "isometric", "watercolor", or "digital painting". Mention lighting conditions for better atmospheric results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
