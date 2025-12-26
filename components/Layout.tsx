
import React from 'react';
import { AppView } from '../types';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  activeView: AppView;
  onViewChange: (view: AppView) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeView, onViewChange }) => {
  return (
    <div className="flex h-screen bg-zinc-950 overflow-hidden">
      <Sidebar activeView={activeView} onViewChange={onViewChange} />
      <main className="flex-1 flex flex-col min-w-0 bg-zinc-950">
        <header className="h-14 border-b border-zinc-800 flex items-center justify-between px-6 bg-zinc-950/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <h1 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
              {activeView.replace('_', ' ')}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-zinc-900 border border-zinc-800">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-medium text-zinc-400 uppercase tracking-tighter">Gemini v3.0</span>
            </div>
            <button className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-zinc-700 transition-colors">
              <span className="text-xs font-bold text-zinc-300">JD</span>
            </button>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
          {children}
        </div>
      </main>
    </div>
  );
};
