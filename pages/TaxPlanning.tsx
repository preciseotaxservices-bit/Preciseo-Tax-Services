
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// Added Clock and CheckCircle2 to imports
import { 
  Target, ShieldCheck, TrendingUp, PieChart, 
  ArrowRight, Sparkles, LineChart, Zap, 
  Search, ShieldAlert, Coins, Rocket, Briefcase, Map,
  Clock, CheckCircle2
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E2759] to-[#4DA6FF] flex items-center justify-center p-8 text-center">
          <Target size={80} strokeWidth={1} className="text-secondary/40 animate-float" />
        </div>
      )}
    </div>
  );
};

const TaxPlanning: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden">
      {/* HERO */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-44 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-[10%] right-[15%] opacity-20"><LineChart size={200} /></motion.div>
          <motion.div animate={{ y: [0, 30, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-[20%] left-[10%] opacity-15 text-accent"><Coins size={150} /></motion.div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="max-w-3xl space-y-8 text-center lg:text-left mx-auto lg:mx-0">
            <div className="inline-flex items-center bg-accent/20 border border-accent/30 px-6 py-2 rounded-full text-accent text-xs font-black uppercase tracking-widest shadow-xl">
              <Sparkles className="w-4 h-4 mr-2" />
              Wealth Preservation Hub
            </div>
            <h1 className="text-5xl md:text-7xl font-black font-heading leading-tight tracking-tighter">Strategic Tax Planning – <span className="text-secondary italic">Save More, Stay Compliant</span></h1>
            <p className="text-xl text-white/70 leading-relaxed font-medium">Don't just react to tax season—shape it. Our proactive strategies help you minimize liability and maximize long-term savings through expert IRS Enrolled Agent oversight.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link to="/contact" className="bg-secondary text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-secondary-hover transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center group shadow-secondary/20">Schedule Planning Session <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" /></Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT IS TAX PLANNING? */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-secondary font-black uppercase tracking-widest text-sm">Strategic Foundation</h2>
                <h2 className="text-4xl md:text-5xl font-black font-heading text-primary leading-tight">Proactive vs. Reactive Tax Filing</h2>
                <div className="h-1 w-24 bg-primary rounded-full" />
              </div>
              <p className="text-lg text-gray-500 font-medium leading-relaxed">Tax planning is the art of organizing your financial affairs to minimize tax liability legally. While traditional filing looks backward at what happened, planning looks forward to what is possible.</p>
              <div className="space-y-4">
                {[
                  { title: "Long-term Wealth Growth", desc: "Retaining more capital for investment and retirement." },
                  { title: "Risk Mitigation", desc: "Ensuring every deduction is defensible and audit-proof." },
                  { title: "Cash Flow Management", desc: "Avoiding surprise tax bills with quarterly estimates and planning." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start p-6 bg-background-soft rounded-3xl border border-gray-50 hover:border-secondary transition-all">
                    <ShieldCheck className="text-secondary mr-4 mt-1 shrink-0" size={24} />
                    <div><h4 className="font-black text-primary text-lg">{item.title}</h4><p className="text-gray-500 text-sm font-medium">{item.desc}</p></div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="relative">
              <SafeImage src="https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1000" alt="Strategic financial analysis" className="rounded-[4rem] aspect-square shadow-2xl border-8 border-background-soft" />
              <div className="absolute -top-10 -right-10 w-32 h-32 glass rounded-full shadow-2xl flex flex-col items-center justify-center text-primary animate-float-delayed">
                <PieChart size={40} className="text-secondary" />
                <span className="text-[10px] font-black uppercase mt-1">Optimization</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW WE HELP */}
      <section className="py-24 bg-background-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-secondary font-black uppercase tracking-widest text-sm">Our Methodology</h2>
            <h2 className="text-4xl md:text-5xl font-black font-heading text-primary">How We Help You Save Taxes</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Income Structuring", desc: "Analyzing how you receive income to maximize lower tax brackets.", icon: TrendingUp },
              { title: "Deduction Optimization", desc: "Finding legitimate business and personal expenses to lower AGI.", icon: Search },
              { title: "Timing Strategies", desc: "Deciding when to recognize income or expenses for the best tax outcome.", icon: Clock },
              { title: "Entity Selection", desc: "Choosing the most efficient structure (LLC, S-Corp, C-Corp) for your business.", icon: Briefcase }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeIn} initial="initial" whileInView="whileInView" className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:border-secondary transition-all">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-secondary mb-6 shadow-md group-hover:bg-secondary group-hover:text-white transition-all"><item.icon size={28} /></div>
                <h3 className="text-xl font-black font-heading text-primary mb-4">{item.title}</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO BENEFITS MOST */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8 relative z-10">
              <h2 className="text-4xl md:text-5xl font-black font-heading leading-tight">Who Benefits Most?</h2>
              <div className="grid gap-4">
                {["High-Income Individuals needing bracket optimization.", "Business Owners seeking to retain more revenue.", "Freelancers with complex expense structures.", "Real Estate Investors managing passive income rules.", "Expats navigating international tax treaties."].map((text, i) => (
                  <div key={i} className="flex items-center space-x-3 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                    <CheckCircle2 className="text-secondary shrink-0" size={20} />
                    <span className="font-bold text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative flex justify-center">
              <div className="relative w-full max-w-sm aspect-square glass rounded-[4rem] shadow-2xl flex flex-col items-center justify-center p-12 overflow-hidden border border-white/10 animate-float">
                <Map size={80} className="text-secondary mb-8" />
                <p className="text-2xl font-black text-center">Your Tax <br /> Savings Roadmap</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="w-24 h-24 bg-background-soft rounded-[2.5rem] flex items-center justify-center mx-auto shadow-xl border border-gray-100 animate-float"><Rocket size={48} className="text-secondary" /></div>
          <h2 className="text-4xl md:text-6xl font-black font-heading text-primary max-w-4xl mx-auto leading-tight">Build a Smarter Financial Future Starting <span className="text-secondary italic">Today</span></h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="bg-secondary text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-secondary-hover transition-all shadow-2xl hover:scale-105 active:scale-95 shadow-secondary/20">Schedule Tax Planning Session</Link>
            <Link to="/contact" className="bg-primary text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-primary-light transition-all flex items-center justify-center">Contact Our Experts</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaxPlanning;
