
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', queries: 400, tokens: 2400 },
  { name: 'Tue', queries: 300, tokens: 1398 },
  { name: 'Wed', queries: 200, tokens: 9800 },
  { name: 'Thu', queries: 278, tokens: 3908 },
  { name: 'Fri', queries: 189, tokens: 4800 },
  { name: 'Sat', queries: 239, tokens: 3800 },
  { name: 'Sun', queries: 349, tokens: 4300 },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <header>
        <h1 className="text-3xl font-bold mb-2">Welcome back, Developer</h1>
        <p className="text-zinc-400">Your AI workspace is ready. Explore the modules in the sidebar.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Tokens Used', value: '1.2M', trend: '+12%', color: 'text-indigo-400' },
          { label: 'Avg Latency', value: '420ms', trend: '-5%', color: 'text-green-400' },
          { label: 'Success Rate', value: '99.9%', trend: '0%', color: 'text-emerald-400' },
        ].map((stat, i) => (
          <div key={i} className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
            <p className="text-sm text-zinc-500 mb-1">{stat.label}</p>
            <div className="flex items-end gap-3">
              <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
              <span className="text-xs text-zinc-600 mb-1">{stat.trend} from last week</span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 h-80">
        <h3 className="text-sm font-medium text-zinc-400 mb-6">Request Frequency</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#27272a" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 12 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 12 }} />
            <Tooltip
              contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px' }}
              itemStyle={{ color: '#8b5cf6' }}
            />
            <Bar dataKey="queries" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
          <h3 className="text-lg font-bold mb-4">Quick Start</h3>
          <div className="space-y-3">
             <button className="w-full text-left px-4 py-3 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700 transition-colors flex items-center justify-between group">
               <div>
                 <p className="font-medium text-zinc-200">Refactor React Component</p>
                 <p className="text-xs text-zinc-500">Analyze hooks and optimize performance</p>
               </div>
               <span className="text-zinc-600 group-hover:translate-x-1 transition-transform">→</span>
             </button>
             <button className="w-full text-left px-4 py-3 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700 transition-colors flex items-center justify-between group">
               <div>
                 <p className="font-medium text-zinc-200">Generate Concept Art</p>
                 <p className="text-xs text-zinc-500">Create visuals for landing pages</p>
               </div>
               <span className="text-zinc-600 group-hover:translate-x-1 transition-transform">→</span>
             </button>
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
          <h3 className="text-lg font-bold mb-4">Recent Projects</h3>
          <div className="flex items-center justify-center h-32 border-2 border-dashed border-zinc-800 rounded-xl text-zinc-600 text-sm">
            No recent projects found.
          </div>
        </div>
      </div>
    </div>
  );
};
