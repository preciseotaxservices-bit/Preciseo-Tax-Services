
import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const socialIcons = [
    {
      name: 'LinkedIn',
      color: '#0087C1', // Brand Blue
      path: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      )
    },
    {
      name: 'Facebook',
      color: '#003B49', // Brand Dark Teal
      path: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      )
    },
    {
      name: 'Twitter (X)',
      color: '#3ACF9B', // Brand Green
      path: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      )
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24 items-start">
          <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
             <Logo className="mb-8 origin-center md:origin-left transform scale-90" />
             <p className="text-sm text-slate-400 leading-relaxed max-w-xs mb-8">
                Providing reliable and precise tax services with a modern, client-first approach. We empower businesses and individuals through financial clarity.
             </p>
             <div className="flex gap-4">
               {socialIcons.map((social) => (
                 <a 
                   key={social.name}
                   href="#" 
                   aria-label={social.name}
                   className="group relative w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-md"
                   style={{ color: social.color }}
                 >
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     {social.path}
                   </svg>
                   <span className="absolute inset-0 rounded-full bg-current opacity-0 group-hover:opacity-[0.05] transition-opacity"></span>
                 </a>
               ))}
             </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-8">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-slate-500 hover:text-[#0087C1] transition-colors">About Us</a></li>
              <li><a href="#services" className="text-sm text-slate-500 hover:text-[#0087C1] transition-colors">Our Services</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-[#0087C1] transition-colors">Client Portal</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-[#0087C1] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-8">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-slate-500 hover:text-[#0087C1] transition-colors">Forms & Links</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-[#0087C1] transition-colors">FAQs</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-[#0087C1] transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-sm text-slate-500 hover:text-[#0087C1] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-8">Location</h4>
            <div className="space-y-5 text-sm text-slate-500 leading-relaxed">
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-[#3ACF9B] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <p>5900 Balcones Drive, Suite 100<br/>Austin, TX 78731</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-[#0087C1] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <p className="font-bold text-slate-900">469-942-7997</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">
           <p>© 2024 Preciseo Tax Services INC. All Rights Reserved.</p>
           <div className="flex gap-10 mt-6 md:mt-0">
              <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Cookies</a>
           </div>
        </div>
      </div>
    </footer>
  );
};
