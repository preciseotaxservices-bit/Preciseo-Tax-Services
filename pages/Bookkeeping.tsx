
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookText, ShieldCheck, BarChart3, PieChart, ArrowRight, 
  Sparkles, Layers, Search, RefreshCcw, Landmark, 
  Briefcase, ClipboardCheck, LayoutDashboard, History
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
          <BookText size={80} strokeWidth={1} className="text-secondary/40 animate-float" />
        </div>
      )}
    </div>
  );
};

const Bookkeeping: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden">
      {/* HERO */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-44 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div animate={{ y: [0, -30, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute top-[15%] right-[10%] opacity-20"><LayoutDashboard size={200} /></motion.div>
          <motion.div animate={{ rotate: [0, 10, 0] }} transition={{ duration: 12, repeat: Infinity }} className="absolute bottom-[10%] left-[5%] opacity-15 text-accent"><BarChart3 size={150} /></motion.div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="max-w-4xl space-y-8">
            <div className="inline-flex items-center bg-accent/20 border border-accent/30 px-6 py-2 rounded-full text-accent text-xs font-black uppercase tracking-widest shadow-xl">
              <Sparkles className="w-4 h-4 mr-2" />
              Financial Records Management
            </div>
            <h1 className="text-5xl md:text-7xl font-black font-heading leading-tight tracking-tighter">Professional Bookkeeping & <br /><span className="text-secondary italic">Record Management</span></h1>
            <p className="text-xl text-white/70 leading-relaxed font-medium">Keep your finances clean, organized, and audit-ready. Our meticulous bookkeeping services give business owners clarity and peace of mind through expert financial management.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link to="/contact" className="bg-secondary text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-secondary-hover transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center group shadow-secondary/20">Get Bookkeeping Support <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" /></Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-secondary font-black uppercase tracking-widest text-sm">Financial Clarity</h2>
                <h2 className="text-4xl md:text-5xl font-black font-heading text-primary leading-tight">Modern Bookkeeping Solutions</h2>
                <div className="h-1 w-24 bg-primary rounded-full" />
              </div>
              <p className="text-lg text-gray-500 font-medium leading-relaxed">Accurate bookkeeping is the backbone of a successful business. We provide structured, monthly workflows that ensure every transaction is captured and categorized correctly.</p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Recording", desc: "Capturing all income and expenses accurately.", icon: BookText },
                  { title: "Categorization", desc: "Organizing transactions for tax efficiency.", icon: Layers },
                  { title: "Reconciliation", desc: "Matching bank statements to your books.", icon: RefreshCcw },
                  { title: "Reporting", desc: "Generating P&L and Balance Sheet reports.", icon: BarChart3 }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 bg-background-soft rounded-3xl border border-gray-50 hover:shadow-xl transition-all group">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-secondary mb-4 shadow-sm group-hover:scale-110 transition-transform"><item.icon size={20} /></div>
                    <h4 className="text-base font-black text-primary mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-500 font-bold">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="relative">
              <SafeImage src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000" alt="Financial ledger and reports" className="rounded-[4rem] aspect-square shadow-2xl border-8 border-background-soft" />
              <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-white rounded-3xl shadow-2xl flex items-center justify-center text-secondary animate-float"><PieChart size={48} /></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-24 bg-background-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-secondary font-black uppercase tracking-widest text-sm">Strategic Advantage</h2>
            <h2 className="text-4xl md:text-5xl font-black font-heading text-primary">Benefits of Professional Bookkeeping</h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Clean Books", desc: "Maintain pristine financial records that grow with your company.", icon: Sparkles },
              { title: "Audit Readiness", desc: "Stay prepared for IRS or lender inquiries at all times.", icon: ShieldCheck },
              { title: "Tax-Ready Records", desc: "Seamlessly transition to tax season with pre-organized data.", icon: ClipboardCheck },
              { title: "Better Decisions", desc: "Use real-time data to steer your business toward profit.", icon: Briefcase }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeIn} initial="initial" whileInView="whileInView" className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 text-center group hover:border-secondary transition-all">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-secondary mb-6 shadow-md group-hover:bg-secondary group-hover:text-white transition-all"><item.icon size={28} /></div>
                <h3 className="text-xl font-black font-heading text-primary mb-4">{item.title}</h3>
                <p className="text-sm text-gray-500 font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS & SYSTEMS */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8 relative z-10">
              <h2 className="text-4xl md:text-5xl font-black font-heading leading-tight">Secure Systems & Process</h2>
              <p className="text-xl text-white/70 font-medium leading-relaxed">We leverage industry-leading cloud accounting software and encrypted portals to manage your records. Every transaction is cross-checked to ensure balance and integrity.</p>
              <div className="space-y-4">
                {["Monthly Bank Reconciliations", "Year-to-date Comparison Reports", "Secure Digital Document Vault", "Quarterly Advisory Reviews"].map((text, i) => (
                  <div key={i} className="flex items-center space-x-3 text-lg font-bold">
                    <History className="text-secondary shrink-0" size={20} />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative flex justify-center">
              <div className="relative w-full max-w-sm aspect-square glass rounded-[4rem] shadow-2xl flex flex-col items-center justify-center p-12 overflow-hidden border border-white/10">
                 <Landmark size={80} className="text-secondary mb-8 animate-float" />
                 <p className="text-2xl font-black text-center leading-tight">Banking-Level <br /> Data Security</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="w-24 h-24 bg-background-soft rounded-[2.5rem] flex items-center justify-center mx-auto shadow-xl border border-gray-100 animate-float"><Search size={48} className="text-secondary" /></div>
          <h2 className="text-4xl md:text-6xl font-black font-heading text-primary max-w-4xl mx-auto leading-tight">Get the Financial Clarity Your <br /><span className="text-secondary italic">Business Deserves</span></h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="bg-secondary text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-secondary-hover transition-all shadow-2xl hover:scale-105 active:scale-95 shadow-secondary/20">Get Bookkeeping Support</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bookkeeping;
