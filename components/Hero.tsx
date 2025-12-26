
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Shapes */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-logo-gradient opacity-[0.03] rounded-full blur-[100px] pointer-events-none floating"></div>
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#3ad29f] opacity-[0.02] rounded-full blur-[120px] pointer-events-none floating" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="lg:flex items-center gap-20">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="reveal inline-block px-4 py-1.5 rounded-full bg-logo-gradient-soft border border-[#3ad29f22] text-[#0087c1] text-xs font-bold uppercase tracking-widest mb-8">
              Reliable • Precise • Professional
            </div>
            <h1 className="reveal text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
              Professional & Reliable Tax Services <span className="text-gradient">You Can Trust.</span>
            </h1>
            <p className="reveal text-lg lg:text-xl text-slate-500 max-w-2xl leading-relaxed mb-12" style={{ transitionDelay: '0.1s' }}>
              Navigating complex financial landscapes with absolute precision. We handle your tax strategy so you can focus on building your legacy.
            </p>
            <div className="reveal flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start" style={{ transitionDelay: '0.2s' }}>
              <a href="#contact" className="w-full sm:w-auto px-10 py-4 bg-logo-gradient text-white font-bold rounded-full hover:shadow-lg hover:translate-y-[-2px] transition-all active:scale-95 text-center">
                Get a Free Consultation
              </a>
              <a href="#contact" className="w-full sm:w-auto px-10 py-4 bg-white border border-gray-200 text-slate-700 font-bold rounded-full hover:border-slate-300 transition-all text-center">
                Contact Us
              </a>
            </div>
          </div>

          <div className="hidden lg:block lg:w-1/2 relative">
             <div className="reveal relative rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100/50">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Minimal professional tax documents and calculator" 
                  className="w-full h-[500px] object-cover grayscale-[20%] contrast-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#003B49]/20 to-transparent"></div>
             </div>
             {/* Floating UI stats for texture */}
             <div className="reveal absolute -bottom-6 -left-10 p-6 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 floating">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Tax Accuracy</div>
                <div className="text-3xl font-bold text-slate-900">100%</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
