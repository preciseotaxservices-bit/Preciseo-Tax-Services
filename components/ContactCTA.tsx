
import React from 'react';

export const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="py-24 lg:py-40 relative bg-white overflow-hidden">
      {/* Background soft gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square bg-logo-gradient opacity-[0.03] blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="reveal text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-8">
          Ready to Professionalize <br/> Your <span className="text-gradient">Tax Management?</span>
        </h2>
        <p className="reveal text-lg lg:text-xl text-slate-500 mb-12 leading-relaxed" style={{ transitionDelay: '0.1s' }}>
          Stop stressing over compliance. Let our experts handle the details while you focus on what matters most to you or your business.
        </p>
        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-6" style={{ transitionDelay: '0.2s' }}>
          <button className="w-full sm:w-auto px-12 py-5 bg-logo-gradient text-white font-bold rounded-full hover:shadow-2xl transition-all hover:scale-105 active:scale-95">
            Schedule a Consultation
          </button>
          <div className="text-slate-400 text-sm font-medium">
             Call Us: <span className="text-slate-900">469-942-7997</span>
          </div>
        </div>
      </div>
    </section>
  );
};
