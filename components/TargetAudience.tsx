
import React from 'react';

export const TargetAudience: React.FC = () => {
  const groups = [
    {
      title: 'For Individuals',
      items: ['Tax Preparation', 'IRS/State Resolution', 'Financial Guidance'],
      color: '#3ad29f'
    },
    {
      title: 'For Businesses',
      items: ['Corporate Filings', 'Payroll Solutions', 'Entity Formation'],
      color: '#0087c1'
    },
    {
      title: 'Tax Notice Help',
      items: ['IRS Notice Resolution', 'Back Tax Support', 'Audit Representation'],
      color: '#0c5a71'
    }
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="reveal text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Targeted Solutions</h2>
          <p className="reveal text-3xl md:text-4xl font-extrabold text-slate-900">Tailored For Your Path</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {groups.map((group, idx) => (
            <div 
              key={idx} 
              className="reveal bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100 hover:shadow-xl hover:translate-y-[-10px] transition-all duration-300 group"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="w-10 h-1 rounded-full mb-10 group-hover:w-16 transition-all duration-500" style={{ backgroundColor: group.color }}></div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">{group.title}</h3>
              <ul className="space-y-4 mb-10">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: group.color }}></div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors inline-flex items-center gap-2">
                Get Started
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
