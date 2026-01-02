
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, BadgeCheck, Globe2, Clock3, 
  KeyRound, BarChart3, PieChart, Coins, 
  ShieldCheck, Settings, ClipboardCheck, 
  Layers, Crown, Focus, Scale, LockKeyhole, 
  TrendingUp, Headphones, UserCheck, Building2, 
  Landmark, Compass, BookOpen, Wallet, HardDrive, History
} from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 lg:pt-32">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-24 h-24 bg-accent/10 rounded-3xl animate-float-delayed blur-sm"></div>
          <div className="absolute top-1/2 right-20 w-32 h-32 bg-secondary/10 rounded-full animate-float blur-md"></div>
          <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-primary/5 rounded-lg animate-float-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
              <div className="inline-flex items-center bg-primary/5 border border-primary/10 px-4 py-2 rounded-full text-primary font-bold text-sm tracking-wide">
                <Crown className="w-4 h-4 mr-2 text-secondary" />
                IRS ENROLLED AGENT • 5+ YEARS EXPERIENCE
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold font-heading text-primary leading-[1.1] tracking-tight">
                IRS Enrolled Agents with <span className="text-secondary">5+ Years</span> of Experience in U.S. Tax Filing
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Preciseo Tax Services Inc is a federally authorized Enrolled Agent firm providing accurate, compliant, and secure tax filing services for individuals and businesses across the United States.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-center space-x-2 text-primary font-bold">
                  <BadgeCheck className="w-5 h-5 text-secondary" />
                  <span>IRS Enrolled Agent</span>
                </div>
                <div className="flex items-center space-x-2 text-primary font-bold">
                  <History className="w-5 h-5 text-secondary" />
                  <span>5+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2 text-primary font-bold">
                  <Globe2 className="w-5 h-5 text-secondary" />
                  <span>Nationwide Representation</span>
                </div>
                <div className="flex items-center space-x-2 text-primary font-bold">
                  <ShieldCheck className="w-5 h-5 text-secondary" />
                  <span>Secure & Compliant Filing</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/contact" className="bg-secondary text-white px-8 py-5 rounded-xl font-bold text-lg hover:bg-secondary-hover transition-all shadow-xl shadow-secondary/20 flex items-center justify-center group relative overflow-hidden">
                  <span className="relative z-10">Get Free Tax Consultation</span>
                  <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/forms-links" className="bg-white text-primary border-2 border-primary/10 px-8 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center">
                  Start Your Tax Filing
                </Link>
              </div>
            </div>

            <div className="relative animate-in fade-in zoom-in duration-1000 delay-200 lg:pl-10">
              <div className="relative w-full aspect-square flex items-center justify-center">
                <div className="relative w-4/5 aspect-[4/5] bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden transform rotate-3 card-3d">
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200" 
                    alt="Financial Landscape" 
                    className="w-full h-full object-cover grayscale opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
                  
                  <div className="absolute bottom-12 left-10 right-10 text-white">
                    <div className="w-12 h-1 bg-secondary mb-4"></div>
                    <h3 className="text-2xl font-bold font-heading mb-2">Federally Authorized</h3>
                    <p className="text-white/70">Representation rights before the IRS nationwide.</p>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 w-24 h-24 glass rounded-3xl shadow-xl flex items-center justify-center text-secondary animate-float z-20">
                  <BarChart3 size={40} className="drop-shadow-lg" />
                </div>
                <div className="absolute top-1/2 -left-8 w-20 h-20 glass rounded-3xl shadow-xl flex items-center justify-center text-accent animate-float-delayed z-20">
                  <PieChart size={32} className="drop-shadow-lg" />
                </div>
                <div className="absolute -bottom-8 right-1/4 w-28 h-28 glass rounded-[2rem] shadow-2xl flex flex-col items-center justify-center text-primary animate-float-slow z-20 border border-gray-100">
                  <Coins size={36} className="text-secondary mb-2" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SIGNAL BAR */}
      <section className="bg-background-soft border-y border-gray-100 py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center space-y-2 group">
              <div className="p-3 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                <BadgeCheck className="w-8 h-8 text-secondary" />
              </div>
              <span className="font-bold text-primary">IRS Enrolled Agent</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 group">
              <div className="p-3 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                <KeyRound className="w-8 h-8 text-secondary" />
              </div>
              <span className="font-bold text-primary">Secure & Compliant</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 group">
              <div className="p-3 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                <Clock3 className="w-8 h-8 text-secondary" />
              </div>
              <span className="font-bold text-primary">5+ Years Experience</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 group">
              <div className="p-3 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                <Globe2 className="w-8 h-8 text-secondary" />
              </div>
              <span className="font-bold text-primary">Nationwide Rights</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
               <div className="absolute -z-10 -top-8 -left-8 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
               <div className="relative rounded-[3rem] overflow-hidden shadow-2xl card-3d">
                 <img 
                   src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000" 
                   alt="Professional Tax Consultation" 
                   className="w-full h-full object-cover aspect-[4/3]"
                 />
                 <div className="absolute top-6 right-6 glass p-4 rounded-2xl flex items-center space-x-3 text-primary font-bold shadow-xl">
                   <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                   <span>Authorized EA Firm</span>
                 </div>
               </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-secondary font-bold uppercase tracking-[0.2em] text-sm">Federally Authorized Tax Practitioners</h2>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading text-primary leading-tight">
                Your Trusted Partner for U.S. Tax & Financial Services
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Preciseo Tax Services Inc, we specialize in delivering accurate, compliant, and stress-free tax solutions for individuals and businesses. Our mission is to simplify the U.S. tax process while ensuring long-term financial stability.
              </p>
              <div className="pt-4 flex items-center space-x-6">
                <Link to="/about" className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-light transition-all shadow-lg">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="py-24 bg-background-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[4rem] p-12 lg:p-20 shadow-xl border border-gray-100 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
             
             <div className="lg:w-1/2 space-y-8 relative z-10">
               <div className="w-20 h-20 bg-primary rounded-[2rem] flex items-center justify-center text-white shadow-2xl animate-float">
                  <Layers size={40} />
               </div>
               <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary leading-tight">Experience That Protects Your Finances</h2>
               <p className="text-xl text-gray-600 leading-relaxed">
                 With over 5 years of U.S. tax experience, Preciseo Tax Services Inc has successfully assisted individuals and businesses with complex filings and proactive strategies.
               </p>
               <Link to="/contact" className="inline-flex items-center text-secondary font-bold text-lg group">
                 Book an Expert Session <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
               </Link>
             </div>

             <div className="lg:w-1/2 relative">
               <div className="relative w-full aspect-square flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-primary/5 rounded-[4rem] absolute animate-pulse"></div>
                  <div className="relative z-10 space-y-4">
                     <div className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-50 animate-float translate-x-4">
                        <div className="flex items-center space-x-4">
                           <Settings className="text-secondary w-10 h-10" />
                           <span className="font-bold text-primary">Systematic Audit Check</span>
                        </div>
                     </div>
                     <div className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 animate-float-delayed -translate-x-8">
                        <div className="flex items-center space-x-4">
                           <ClipboardCheck className="text-accent w-10 h-10" />
                           <span className="font-bold text-primary">Compliance Verified</span>
                        </div>
                     </div>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE PRECISEO */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-secondary font-bold uppercase tracking-[0.2em] text-sm">Authority & Accuracy</h2>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary">Why Thousands Trust Preciseo Tax Services</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all card-3d">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                <Focus className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-primary mb-4">Accuracy-Driven Filing</h3>
              <p className="text-gray-500 text-lg leading-relaxed">Every return is reviewed with multi-layered precision to ensure maximum tax benefits.</p>
            </div>

            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all card-3d">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                <Scale className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-primary mb-4">IRS Regulation Expertise</h3>
              <p className="text-gray-500 text-lg leading-relaxed">Always compliant with U.S. tax laws. We monitor legislative changes daily.</p>
            </div>

            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all card-3d">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
                <LockKeyhole className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-primary mb-4">Confidential & Secure</h3>
              <p className="text-gray-500 text-lg leading-relaxed">Your data is fully protected with banking-level encryption protocols.</p>
            </div>

            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all card-3d">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-primary mb-4">Transparent Pricing</h3>
              <p className="text-gray-500 text-lg leading-relaxed">No hidden fees, no surprises. Straightforward flat-rate pricing.</p>
            </div>

            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all card-3d">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
                <Headphones className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-primary mb-4">Year-Round Support</h3>
              <p className="text-gray-500 text-lg leading-relaxed">We’re here beyond tax season for bookkeeping and payroll needs.</p>
            </div>
            
            <div className="bg-primary text-white p-10 rounded-[3rem] shadow-2xl flex flex-col justify-center text-center">
              <Crown className="w-12 h-12 text-secondary mx-auto mb-6" />
              <h3 className="text-2xl font-bold font-heading mb-4">IRS Authorized</h3>
              <p className="opacity-80">Full representation rights nationwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16 space-y-4">
            <h2 className="text-secondary font-bold uppercase tracking-[0.2em] text-sm">Our Expertise</h2>
            <h2 className="text-4xl md:text-5xl font-bold font-heading">Comprehensive U.S. Tax Services</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Individual Tax Filing", icon: UserCheck },
              { title: "Business & Corporate Tax", icon: Building2 },
              { title: "IRS Representation", icon: Landmark },
              { title: "Tax Planning", icon: Compass },
              { title: "Bookkeeping", icon: BookOpen },
              { title: "Payroll Management", icon: Wallet },
              { title: "ITIN Applications", icon: HardDrive },
              { title: "Tax Amendments", icon: History }
            ].map((service, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group flex flex-col justify-between h-full">
                <div>
                  <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-all">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-4">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
