
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// Added CheckCircle2 to imports
import { 
  Calculator, ShieldCheck, Clock, Layers, ArrowRight, 
  Sparkles, FileText, Calendar, Wallet, Users, 
  ShieldAlert, RefreshCcw, Zap, Landmark,
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E2759] to-[#E84545] flex items-center justify-center p-8">
          <Calculator size={80} strokeWidth={1} className="text-white/40 animate-float" />
        </div>
      )}
    </div>
  );
};

const PayrollProcessing: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden">
      {/* HERO */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-44 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div animate={{ rotate: [0, 5, 0], scale: [1, 1.05, 1] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-[10%] right-[10%] opacity-20"><Calculator size={200} /></motion.div>
          <motion.div animate={{ x: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-[10%] left-[5%] opacity-15 text-accent"><Calendar size={150} /></motion.div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="max-w-4xl space-y-8 text-center lg:text-left mx-auto lg:mx-0">
            <div className="inline-flex items-center bg-secondary/20 border border-secondary/30 px-6 py-2 rounded-full text-secondary text-xs font-black uppercase tracking-widest shadow-xl backdrop-blur-md">
              <Sparkles className="w-4 h-4 mr-2" />
              Automated Compliance Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-black font-heading leading-tight tracking-tighter">Payroll Processing & <br /><span className="text-secondary italic">Compliance Services</span></h1>
            <p className="text-xl text-white/70 leading-relaxed font-medium">Remove the complexity of salary processing and tax withholdings. Our expert systems ensure timely payments and 100% compliant filings for businesses of all sizes.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link to="/contact" className="bg-secondary text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-secondary-hover transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center group shadow-secondary/20">Setup Payroll Services <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" /></Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-secondary font-black uppercase tracking-widest text-sm">Operational Excellence</h2>
                <h2 className="text-4xl md:text-5xl font-black font-heading text-primary leading-tight">What Our Payroll Suite Includes</h2>
                <div className="h-1 w-24 bg-primary rounded-full" />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Payroll Setup", desc: "Onboarding employees and configuring pay cycles.", icon: Settings },
                  { title: "Salary Processing", desc: "Automated direct deposits and payment runs.", icon: Wallet },
                  { title: "Tax Withholding", desc: "Accurate federal and state withholding logic.", icon: Landmark },
                  { title: "Annual Reporting", desc: "Consolidated W-2 and W-3 preparation.", icon: FileText }
                ].map((item, idx) => {
                  const Icon = item.icon || Zap;
                  return (
                    <div key={idx} className="p-6 bg-background-soft rounded-3xl border border-gray-50 hover:shadow-xl transition-all">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-secondary mb-4 shadow-sm"><Icon size={20} /></div>
                      <h4 className="text-base font-black text-primary mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-500 font-bold">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="relative">
              <SafeImage src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=1000" alt="Corporate payroll and financial planning" className="rounded-[4rem] aspect-square shadow-2xl border-8 border-background-soft" />
              <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-white rounded-3xl shadow-2xl flex items-center justify-center text-secondary animate-float"><Users size={48} /></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FORMS WE HANDLE */}
      <section className="py-24 bg-background-soft relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-secondary font-black uppercase tracking-widest text-sm">Regulatory Expertise</h2>
            <h2 className="text-4xl md:text-5xl font-black font-heading text-primary">Payroll Forms We Manage</h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { title: "Form 941 / 944", items: ["Quarterly Federal Returns", "Employer's Tax Liability", "Adjustment Filings"], icon: FileText },
              { title: "Form 940", items: ["Annual Unemployment Tax", "FUTA Compliance", "Multi-State Credit logic"], icon: ShieldCheck },
              { title: "W-2 & W-3", items: ["Employee Wage Reporting", "Social Security Records", "Year-end Submissions"], icon: Layers }
            ].map((card, idx) => (
              <motion.div key={idx} variants={fadeIn} initial="initial" whileInView="whileInView" className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-gray-100 h-full group hover:shadow-2xl transition-all">
                <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:rotate-6 transition-transform"><card.icon size={28} /></div>
                <h3 className="text-2xl font-black text-primary mb-8">{card.title}</h3>
                <ul className="space-y-4">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-600 font-medium"><CheckCircle2 className="text-secondary mr-3 mt-1 shrink-0" size={18} />{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE MATTERS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-black font-heading leading-tight">Why Payroll Compliance Matters</h2>
                <p className="text-xl text-white/70 font-medium leading-relaxed">The IRS imposes some of the strictest penalties for payroll errors. From missed deadlines to incorrect withholdings, even a small mistake can lead to significant financial liability.</p>
                <div className="flex items-start p-6 bg-white/5 rounded-3xl border border-white/10">
                  <ShieldAlert className="text-secondary mr-4 mt-1 shrink-0" size={32} />
                  <p className="text-lg font-bold">"Avoid failure-to-deposit penalties and interest with our proactive monitoring systems."</p>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="w-full max-w-sm aspect-square glass rounded-[4rem] shadow-2xl flex flex-col items-center justify-center p-12 overflow-hidden border border-white/10">
                   <Clock size={80} className="text-secondary mb-8 animate-pulse" />
                   <p className="text-2xl font-black text-center leading-tight">Real-time <br /> Compliance Sync</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="w-24 h-24 bg-background-soft rounded-[2.5rem] flex items-center justify-center mx-auto shadow-xl animate-float"><RefreshCcw size={48} className="text-secondary" /></div>
          <h2 className="text-4xl md:text-6xl font-black font-heading text-primary max-w-4xl mx-auto leading-tight">Ready to Automate Your <br /><span className="text-secondary italic">Business Payroll?</span></h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="bg-secondary text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-secondary-hover transition-all shadow-2xl hover:scale-105 active:scale-95 shadow-secondary/20">Setup Payroll Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

import { Settings } from 'lucide-react';
export default PayrollProcessing;
