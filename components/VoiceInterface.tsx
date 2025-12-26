
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { getGeminiClient } from '../services/geminiService';
import { Modality } from '@google/genai';

export const VoiceInterface: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [status, setStatus] = useState<'idle' | 'connecting' | 'active'>('idle');
  const [transcript, setTranscript] = useState<string[]>([]);

  const sessionRef = useRef<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const nextStartTimeRef = useRef<number>(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());

  const decode = useCallback((base64: string) => {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }, []);

  const decodeAudioData = useCallback(async (data: Uint8Array, ctx: AudioContext, sampleRate: number, numChannels: number) => {
    const dataInt16 = new Int16Array(data.buffer);
    const frameCount = dataInt16.length / numChannels;
    const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
    for (let channel = 0; channel < numChannels; channel++) {
      const channelData = buffer.getChannelData(channel);
      for (let i = 0; i < frameCount; i++) {
        channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
      }
    }
    return buffer;
  }, []);

  const encode = (bytes: Uint8Array) => {
    let binary = '';
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };

  const handleStop = useCallback(() => {
    if (sessionRef.current) {
      sessionRef.current.close();
      sessionRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setIsActive(false);
    setStatus('idle');
  }, []);

  const handleStart = async () => {
    setStatus('connecting');
    const ai = getGeminiClient();

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const inputAudioContext = new AudioContext({ sampleRate: 16000 });
      const outputAudioContext = new AudioContext({ sampleRate: 24000 });
      audioContextRef.current = outputAudioContext;

      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-09-2025',
        callbacks: {
          onopen: () => {
            setStatus('active');
            setIsActive(true);
            const source = inputAudioContext.createMediaStreamSource(stream);
            const scriptProcessor = inputAudioContext.createScriptProcessor(4096, 1, 1);
            scriptProcessor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const l = inputData.length;
              const int16 = new Int16Array(l);
              for (let i = 0; i < l; i++) {
                int16[i] = inputData[i] * 32768;
              }
              const pcmBlob = {
                data: encode(new Uint8Array(int16.buffer)),
                mimeType: 'audio/pcm;rate=16000',
              };
              sessionPromise.then(session => session.sendRealtimeInput({ media: pcmBlob }));
            };
            source.connect(scriptProcessor);
            scriptProcessor.connect(inputAudioContext.destination);
          },
          onmessage: async (message) => {
            if (message.serverContent?.outputTranscription) {
              setTranscript(prev => [...prev.slice(-10), `Assistant: ${message.serverContent.outputTranscription.text}`]);
            }
            if (message.serverContent?.inputTranscription) {
              setTranscript(prev => [...prev.slice(-10), `User: ${message.serverContent.inputTranscription.text}`]);
            }

            const base64Audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (base64Audio) {
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outputAudioContext.currentTime);
              const audioBuffer = await decodeAudioData(decode(base64Audio), outputAudioContext, 24000, 1);
              const source = outputAudioContext.createBufferSource();
              source.buffer = audioBuffer;
              source.connect(outputAudioContext.destination);
              source.addEventListener('ended', () => sourcesRef.current.delete(source));
              source.start(nextStartTimeRef.current);
              nextStartTimeRef.current += audioBuffer.duration;
              sourcesRef.current.add(source);
            }

            if (message.serverContent?.interrupted) {
              sourcesRef.current.forEach(s => s.stop());
              sourcesRef.current.clear();
              nextStartTimeRef.current = 0;
            }
          },
          onerror: (e) => console.error("Session error:", e),
          onclose: () => handleStop(),
        },
        config: {
          responseModalities: [Modality.AUDIO],
          outputAudioTranscription: {},
          inputAudioTranscription: {},
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } },
          },
        },
      });

      sessionRef.current = await sessionPromise;
    } catch (err) {
      console.error(err);
      setStatus('idle');
    }
  };

  return (
    <div className="max-w-3xl mx-auto h-full flex flex-col items-center justify-center gap-12 py-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold">Native Voice AI</h2>
        <p className="text-zinc-500">Real-time conversational intelligence via Gemini Live API</p>
      </div>

      <div className="relative flex items-center justify-center w-full max-w-md">
         {/* Visual Waveform Effect */}
         <div className={`absolute inset-0 bg-indigo-500/20 rounded-full blur-3xl transition-opacity duration-1000 ${isActive ? 'opacity-100 animate-pulse' : 'opacity-0'}`} />

         <button
           onClick={isActive ? handleStop : handleStart}
           className={`relative w-48 h-48 rounded-full border-4 flex flex-col items-center justify-center transition-all duration-500 transform ${
             isActive
               ? 'bg-zinc-900 border-indigo-500 scale-105 shadow-[0_0_50px_-12px_rgba(99,102,241,0.5)]'
               : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'
           }`}
         >
           <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-3 ${isActive ? 'bg-indigo-600' : 'bg-zinc-800'}`}>
             {isActive ? (
               <div className="w-5 h-5 bg-white rounded-sm" />
             ) : (
               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
             )}
           </div>
           <span className="text-sm font-bold tracking-widest uppercase">
             {status === 'idle' ? 'Connect' : status === 'connecting' ? 'Handshake...' : 'Listening'}
           </span>
         </button>
      </div>

      <div className="w-full bg-zinc-900 border border-zinc-800 rounded-3xl p-6 h-64 overflow-y-auto">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Real-time Transcription</h3>
        </div>
        <div className="space-y-3">
          {transcript.length > 0 ? transcript.map((line, i) => (
            <p key={i} className={`text-sm ${line.startsWith('User') ? 'text-zinc-400' : 'text-indigo-400 font-medium'}`}>
              {line}
            </p>
          )) : (
            <p className="text-zinc-600 text-sm italic">Session transcript will appear here...</p>
          )}
        </div>
      </div>
    </div>
  );
};
