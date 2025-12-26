
import React from 'react';
import { AppView } from '../types';
import { ICONS } from '../constants';

interface SidebarProps {
  activeView: AppView;
  onViewChange: (view: AppView) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeView, onViewChange }) => {
  const navItems = [
    { view: AppView.DASHBOARD, label: 'Overview', icon: ICONS.Home },
    { view: AppView.CODE, label: 'Code Architect', icon: ICONS.Code },
    { view: AppView.STUDIO, label: 'Creative Studio', icon: ICONS.Image },
    { view: AppView.VISION, label: 'Vision Lab', icon: ICONS.Eye },
    { view: AppView.VOICE, label: 'Live Interaction', icon: ICONS.Mic },
  ];

  return (
    <aside className="w-64 border-r border-zinc-800 bg-zinc-950 flex flex-col flex-shrink-0">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
          </div>
          <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
            LUMINA
          </span>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1 mt-4">
        {navItems.map((item) => (
          <button
            key={item.view}
            onClick={() => onViewChange(item.view)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
              activeView === item.view
                ? 'bg-zinc-900 text-white shadow-sm ring-1 ring-zinc-800'
                : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900/50'
            }`}
          >
            <item.icon className={`w-5 h-5 ${activeView === item.view ? 'text-indigo-400' : 'group-hover:text-zinc-300'}`} />
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-zinc-800">
        <button
          onClick={() => onViewChange(AppView.SETTINGS)}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
            activeView === AppView.SETTINGS ? 'bg-zinc-900 text-white' : 'text-zinc-500 hover:text-zinc-200'
          }`}
        >
          <ICONS.Settings className="w-5 h-5" />
          <span className="text-sm font-medium">Settings</span>
        </button>
      </div>
    </aside>
  );
};
