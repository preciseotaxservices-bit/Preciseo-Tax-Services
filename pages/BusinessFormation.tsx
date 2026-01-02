
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// Added CheckCircle2 to imports
import { 
  Building2, ShieldCheck, Layers, ArrowRight, 
  Sparkles, Zap, Search, LayoutGrid, FileText, 
  Landmark, UserCheck, Briefcase, PlusCircle, Building,
  CheckCircle2
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const SafeImage = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => {
  const [error, setError] = useState(false);
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!error ? (
        <img src={src} alt={alt} onError={() => setError(true)} loading="lazy" className="w-full h-full object-cover" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent/30 flex items-center justify-center p-8">
          <Building size={80} strokeWidth={1} className="text-secondary/40 animate-float" />
        </div>
      )}
    </div>
  );
};

const BusinessFormation: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden">
      {/* HERO */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-44 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div animate={{ y: [0, -40, 0] }} transition={{ duration: 9, repeat: Infinity }} className="absolute top-[15%] right-[10%] opacity-20"><LayoutGrid size={180} /></motion.div>
          <motion.div animate={{ rotate: [0, 10, 0] }} transition={{ duration: 12, repeat: Infinity }} className="absolute bottom-[10%] left-[5%] opacity-15 text-secondary"><Building2 size={150} /></motion.div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="max-w-4xl space-y-8 text-center lg:text-left mx-auto lg:mx-0">
            <div className="inline-flex items-center bg-secondary/20 border border-secondary/30 px-6 py-2 rounded-full text-secondary text-xs font-black uppercase tracking-widest shadow-xl backdrop-blur-md">
              <Sparkles className="w-4 h-4 mr-2" />
              Entrepreneurship Launchpad
            </div>
            <h1 className="text-5xl md:text-7xl font-black font-heading leading-tight tracking-tighter">Business Formation & <br /><span className="text-secondary italic">Startup Support</span></h1>
            <p className="text-xl text-white/70 leading-relaxed font-medium">Turn your vision into a compliant, structured, and tax-efficient legal entity. From LLCs to Corporations, we provide the foundational support your business needs to scale safely.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link to="/contact" className="bg-secondary text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-secondary-hover transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center group shadow-secondary/20">Start Your Business Today <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" /></Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SUPPORTED TYPES */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-secondary font-black uppercase tracking-widest text-sm">Entity Architecture</h2>
            <h2 className="text-4xl md:text-5xl font-black font-heading text-primary">Business Structures We Support</h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "LLC", desc: "Flexible protection with pass-through tax treatment.", icon: Building2 },
              { title: "Corporation", desc: "Structured entity ideal for high growth and investment.", icon: Building },
              { title: "S-Corporation", desc: "Tax-efficient status for small business corporations.", icon: Layers },
              { title: "Partnership", desc: "Multi-owner structure with collaborative logic.", icon: Briefcase }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeIn} initial="initial" whileInView="whileInView" className="bg-background-soft p-10 rounded-[3rem] border border-gray-100 hover:shadow-2xl hover:border-secondary transition-all group flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary mb-6 shadow-md group-hover:rotate-6 transition-transform"><item.icon size={28} /></div>
                <h3 className="text-2xl font-black font-heading text-primary mb-2">{item.title}</h3>
                <p className="text-gray-500 font-medium text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE PROVIDE */}
      <section className="py-24 bg-background-soft relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-secondary font-black uppercase tracking-widest text-sm">Turnkey Solutions</h2>
                <h2 className="text-4xl md:text-5xl font-black font-heading text-primary leading-tight">Comprehensive Formation Package</h2>
                <div className="h-1 w-24 bg-primary rounded-full" />
              </div>
              <p className="text-lg text-gray-500 font-medium leading-relaxed">We handle the paperwork so you can focus on building your brand. Our formation services include everything needed to open doors and bank accounts.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["EIN Generation (Tax ID)", "Articles of Incorporation", "Operating Agreements", "Corporate Bylaws", "Initial Meeting Minutes", "Ownership Certificates"].map((text, i) => (
                  <div key={i} className="flex items-center space-x-3 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                    <CheckCircle2 className="text-secondary shrink-0" size={18} />
                    <span className="font-bold text-primary text-xs uppercase tracking-tight">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="relative">
              <SafeImage src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=1000" alt="Professional business blueprint" className="rounded-[4rem] aspect-[4/5] shadow-2xl border-8 border-white" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary rounded-[2.5rem] flex flex-col items-center justify-center text-white shadow-2xl animate-float border-4 border-background-soft">
                <FileText size={40} className="text-secondary mb-1" />
                <span className="text-[10px] font-black uppercase">Bank Ready</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-20 space-y-4">
            <h2 className="text-secondary font-black uppercase tracking-widest text-sm">Efficient Workflow</h2>
            <h2 className="text-4xl md:text-5xl font-black font-heading text-primary">Your Journey to Launch</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Entity Guidance", desc: "Determining the best legal structure for your specific goals.", icon: UserCheck },
              { step: "02", title: "Registration & EIN", desc: "Official state filing and federal tax ID generation.", icon: Landmark },
              { step: "03", title: "Doc Preparation", desc: "Drafting bylaws and agreements for operational legal protection.", icon: FileText },
              { step: "04", title: "Compliance Handover", desc: "Providing all docs for bank opening and initial compliance.", icon: ShieldCheck }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="w-20 h-20 bg-background-soft rounded-full flex items-center justify-center text-primary mb-6 shadow-sm group-hover:bg-secondary group-hover:text-white transition-all"><item.icon size={32} /></div>
                <span className="text-secondary font-black text-xs uppercase mb-2">Phase {item.step}</span>
                <h4 className="text-xl font-black text-primary mb-3">{item.title}</h4>
                <p className="text-sm text-gray-500 font-medium leading-relaxed px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="bg-primary rounded-[4rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl group">
            <div className="relative z-10 max-w-4xl mx-auto space-y-12">
              <div className="w-24 h-24 bg-secondary rounded-[2.5rem] flex items-center justify-center mx-auto shadow-2xl animate-float"><PlusCircle size={48} /></div>
              <h2 className="text-4xl md:text-6xl font-black font-heading leading-tight">Ready to Build Your <br /><span className="text-secondary italic">Business Empire?</span></h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Link to="/contact" className="bg-secondary text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-secondary-hover transition-all shadow-2xl hover:scale-105 active:scale-95 shadow-secondary/20">Start Your Business Today</Link>
                <Link to="/contact" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-2xl font-black text-xl hover:bg-white/20 transition-all flex items-center justify-center">Consult Formation Expert</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BusinessFormation;
