
import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const individualServices = [
    { name: 'Individual Tax Filing', desc: 'Personal federal and state income tax preparation.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /> },
    { name: 'IRS & State Notice Resolution', desc: 'Expert help responding to tax notices and audits.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /> },
    { name: 'ITIN Guidance', desc: 'Application assistance for Individual Taxpayer ID Numbers.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /> },
    { name: 'Extension Filing Services', desc: 'Timely filing of federal and state tax extensions.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /> },
  ];

  const businessServices = [
    { name: 'Business Tax Filing', desc: 'Tax compliance for LLCs, S-Corps, and Partnerships.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /> },
    { name: 'Payroll Services', desc: 'Full-service payroll processing and tax reporting.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> },
    { name: 'Bookkeeping & Accounting', desc: 'Monthly financial tracking and reporting.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /> },
    { name: 'Business Formation', desc: 'Establish your legal entity and stay compliant.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /> },
  ];

  // Branded Horizontal Logo for the Header specifically to save space
  const HeaderLogo = () => (
    <div className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity transform scale-75 lg:scale-90 origin-left">
      <svg width="60" height="50" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 30V75C32 83.2843 38.7157 90 47 90H48" stroke="#3ACF9B" strokeWidth="18" strokeLinecap="round"/>
        <path d="M45 25H70C83.8071 25 95 36.1929 95 50C95 63.8071 83.8071 75 70 75H45" stroke="url(#headerLogoGradient)" strokeWidth="18" strokeLinecap="round"/>
        <path d="M32 30V55" stroke="#3ACF9B" strokeWidth="18" strokeLinecap="round"/>
        <path d="M32 30V45" stroke="white" strokeWidth="18" strokeOpacity="0.25" strokeLinecap="round"/>
        <defs>
          <linearGradient id="headerLogoGradient" x1="20" y1="20" x2="100" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3ACF9B" />
            <stop offset="100%" stopColor="#0087C1" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col -space-y-1">
        <span className="text-3xl font-semibold tracking-tight text-[#003B49]">Preciseo</span>
        <span className="text-sm font-normal text-[#003B49]">Tax Services</span>
      </div>
    </div>
  );

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 py-2 shadow-sm' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <HeaderLogo />

          <nav className="hidden lg:flex items-center gap-10">
            <a href="#" className="text-sm font-semibold text-slate-700 hover:text-[#0087c1] transition-colors">About Us</a>
            
            {/* Mega Menu Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-[#0087c1] transition-colors py-4">
                Services
                <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </button>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white border border-gray-100 rounded-[2rem] shadow-2xl opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 overflow-hidden">
                <div className="grid grid-cols-2 p-8 gap-8">
                  {/* Individual Column */}
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6 px-4">Individual Services</h4>
                    <div className="space-y-1">
                      {individualServices.map((s, idx) => (
                        <a key={idx} href="#services" className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors group/item">
                          <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover/item:text-[#3ACF9B] transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">{s.icon}</svg>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900 mb-0.5">{s.name}</p>
                            <p className="text-xs text-slate-500 line-clamp-1">{s.desc}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Business Column */}
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6 px-4">Business Services</h4>
                    <div className="space-y-1">
                      {businessServices.map((s, idx) => (
                        <a key={idx} href="#services" className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors group/item">
                          <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover/item:text-[#0087C1] transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">{s.icon}</svg>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900 mb-0.5">{s.name}</p>
                            <p className="text-xs text-slate-500 line-clamp-1">{s.desc}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-50 px-8 py-4 flex justify-center border-t border-gray-100">
                   <a href="#services" className="text-xs font-bold text-[#003B49] hover:text-[#0087C1] flex items-center gap-2 transition-colors group/all">
                      View All Services
                      <svg className="w-4 h-4 group-hover/all:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                   </a>
                </div>
              </div>
            </div>

            <a href="#" className="text-sm font-semibold text-slate-700 hover:text-[#0087c1] transition-colors">Forms & Links</a>
            <a href="#" className="text-sm font-semibold text-slate-700 hover:text-[#0087c1] transition-colors">FAQs</a>
            <a href="#" className="text-sm font-semibold text-slate-700 hover:text-[#0087c1] transition-colors">Blog</a>
            <a href="#contact" className="text-sm font-semibold text-slate-700 hover:text-[#0087c1] transition-colors">Contact Us</a>
          </nav>

          <div className="hidden lg:block">
            <button className="bg-logo-gradient text-white px-8 py-3 rounded-full font-bold text-sm hover:shadow-lg transition-all active:scale-95 shadow-md">
              Book Consultation
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-slate-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl py-8 px-6 flex flex-col gap-5">
          <a href="#" className="text-lg font-bold text-slate-700">About Us</a>
          <a href="#services" className="text-lg font-bold text-slate-700">Services</a>
          <a href="#contact" className="text-lg font-bold text-slate-700">Contact Us</a>
          <button className="w-full bg-logo-gradient text-white py-4 rounded-xl font-extrabold mt-2">Book Consultation</button>
        </div>
      )}
    </header>
  );
};
