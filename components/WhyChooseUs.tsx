
import React from 'react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-1/2 relative group">
             <div className="reveal relative aspect-[4/5] lg:aspect-square bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800" 
                  alt="Professional hand signing business paperwork" 
                  className="w-full h-full object-cover grayscale-[10%]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#003B49]/10"></div>
             </div>
             {/* Decorative brand elements */}
             <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-[#3ACF9B] opacity-40"></div>
             <div className="absolute bottom-20 right-10 w-8 h-8 rounded-full bg-[#0087C1] opacity-20"></div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="reveal text-sm font-bold text-[#3ACF9B] uppercase tracking-[0.2em] mb-4">The Preciseo Advantage</h2>
            <h3 className="reveal text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-10">
              Why Individuals & Businesses Trust Our Expertise
            </h3>
            
            <div className="space-y-12">
              <div className="reveal flex gap-6" style={{ transitionDelay: '0.1s' }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-xl border border-gray-100 flex items-center justify-center text-[#3ACF9B] bg-slate-50">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">IRS Enrolled Agent</h4>
                  <p className="text-slate-500 leading-relaxed text-sm">Authorized to represent taxpayers before all levels of the IRS, providing peace of mind and professional advocacy.</p>
                </div>
              </div>

              <div className="reveal flex gap-6" style={{ transitionDelay: '0.2s' }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-xl border border-gray-100 flex items-center justify-center text-[#0087C1] bg-slate-50">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">5+ Years of Proven Experience</h4>
                  <p className="text-slate-500 leading-relaxed text-sm">A history of navigating the evolving tax landscape with accuracy and integrity for diverse client needs.</p>
                </div>
              </div>

              <div className="reveal flex gap-6" style={{ transitionDelay: '0.3s' }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-xl border border-gray-100 flex items-center justify-center text-[#003B49] bg-slate-50">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Digital-First Approach</h4>
                  <p className="text-slate-500 leading-relaxed text-sm">We leverage modern tools to ensure your tax data is handled securely, efficiently, and always accessible.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
