
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// Added RefreshCcw to imports
import { 
  IdCard, ShieldCheck, FileText, CheckCircle2, 
  Clock, ArrowRight, Sparkles, UserCheck, 
  Search, Lock, HelpCircle, Landmark, Globe,
  RefreshCcw
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
          <div className="relative z-10 flex flex-col items-center text-center space-y-4">
            <IdCard size={80} strokeWidth={1} className="text-secondary/40 animate-float" />
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 italic">ITIN Verification Visual</p>
          </div>
        </div>
      )}
    </div>
  );
};

const AnimatedLine = ({ className = "" }) => (
  <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className={`h-[1px] w-full bg-gradient-to-r from-secondary/40 via-primary/20 to-transparent origin-left rounded-full ${className}`} />
);

const ITINApplication: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden">
      {/* HERO */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-44 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div animate={{ y: [0, -30, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute top-[15%] right-[10%] opacity-20"><IdCard size={180} /></motion.div>
          <motion.div animate={{ rotate: [0, 5, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute bottom-[10%] left-[5%] opacity-15 text-secondary"><ShieldCheck size={150} /></motion.div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="max-w-3xl space-y-8">
            <div className="inline-flex items-center bg-secondary/20 border border-secondary/30 px-6 py-2 rounded-full text-secondary text-xs font-black uppercase tracking-widest shadow-xl backdrop-blur-md">
              <Sparkles className="w-4 h-4 mr-2" />
              IRS Certified Assistance
            </div>
            <h1 className="text-5xl md:text-7xl font-black font-heading leading-tight tracking-tighter">ITIN Application Made Simple & <span className="text-secondary italic">IRS-Compliant</span></h1>
            <p className="text-xl text-white/70 leading-relaxed font-medium">We assist individuals and families in obtaining or renewing ITINs accurately and securely, led by IRS Enrolled Agents with 5+ years of experience.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link to="/contact" className="bg-secondary text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-secondary-hover transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center group shadow-secondary/20">Apply for ITIN <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" /></Link>
              <Link to="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-white/20 transition-all flex items-center justify-center">Contact Our Tax Experts</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT IS AN ITIN? */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-secondary font-black uppercase tracking-widest text-sm">Identity Verification</h2>
                <h2 className="text-4xl md:text-5xl font-black font-heading text-primary">Understanding ITIN Reporting</h2>
                <AnimatedLine className="max-w-xs" />
              </div>
              <p className="text-lg text-gray-500 font-medium leading-relaxed">
                An Individual Taxpayer Identification Number (ITIN) is a tax processing number issued by the IRS for those who aren't eligible for a Social Security Number (SSN). It is essential for non-residents, dependents, and spouses of U.S. citizens to file taxes and claim benefits.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Who Needs It?", desc: "Non-resident aliens, dependents, or spouses of U.S. persons.", icon: UserCheck },
                  { title: "Purpose", desc: "For U.S. tax filing and reporting purposes only.", icon: Landmark },
                  { title: "No Work Rights", desc: "An ITIN does not authorize work in the U.S.", icon: Lock },
                  { title: "Expiry", desc: "ITINs expire if not used on a tax return for 3 years.", icon: Clock }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 bg-background-soft rounded-3xl border border-gray-100 hover:border-secondary transition-all group">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-secondary mb-4 shadow-sm group-hover:scale-110 transition-transform"><item.icon size={20} /></div>
                    <h4 className="text-base font-black text-primary mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-500 font-bold">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="relative">
              <SafeImage src="https://images.unsplash.com/photo-1589561093573-0d700889215c?auto=format&fit=crop&q=80&w=1000" alt="Official identification and documentation" className="rounded-[4rem] aspect-square shadow-2xl border-8 border-background-soft" />
              <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-white rounded-3xl shadow-2xl flex items-center justify-center text-secondary animate-float"><Landmark size={48} /></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SUPPORTED DOCUMENTS */}
      <section className="py-24 bg-background-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-secondary font-black uppercase tracking-widest text-sm">Documentation Guide</h2>
            <h2 className="text-4xl md:text-5xl font-black font-heading text-primary">Required Documents for Application</h2>
            <AnimatedLine className="mx-auto max-w-[200px]" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-gray-100 group hover:shadow-2xl transition-all">
              <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg"><Globe size={28} /></div>
              <h3 className="text-2xl font-black text-primary mb-8">Primary Documents</h3>
              <ul className="space-y-4">
                {["Valid Passport (Standalone preferred)", "National Identification Card", "Original Birth Certificate"].map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-600 font-medium"><CheckCircle2 className="text-secondary mr-3 mt-1 shrink-0" size={18} />{item}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-gray-100 group hover:shadow-2xl transition-all">
              <div className="w-14 h-14 bg-secondary text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg"><FileText size={28} /></div>
              <h3 className="text-2xl font-black text-primary mb-8">Secondary Documents</h3>
              <ul className="space-y-4">
                {["U.S. Visa (if applicable)", "I-94 Arrival/Departure Record", "Valid Driver's License", "Foreign School or Medical Records"].map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-600 font-medium"><CheckCircle2 className="text-primary mr-3 mt-1 shrink-0" size={18} />{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-secondary font-black uppercase tracking-widest text-sm">Step-by-Step Guidance</h2>
            <h2 className="text-4xl md:text-5xl font-black font-heading text-primary">Our ITIN Application Process</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Eligibility Review", desc: "We confirm if you qualify for an ITIN based on your U.S. tax needs.", icon: Search },
              { step: "02", title: "Doc Verification", desc: "Safe review of your original documents or certified copies.", icon: ShieldCheck },
              { step: "03", title: "Form W-7 Prep", desc: "Expert preparation of the W-7 form to prevent IRS rejections.", icon: FileText },
              { step: "04", title: "Issuance Follow-up", desc: "Tracking with the IRS until your ITIN is successfully issued.", icon: RefreshCcw }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeIn} initial="initial" whileInView="whileInView" className="relative z-10 bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:border-secondary transition-all">
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-2xl group-hover:bg-secondary transition-colors"><item.icon size={28} /></div>
                <span className="text-secondary font-black text-[10px] uppercase tracking-widest mb-4">Step {item.step}</span>
                <h3 className="text-xl font-black font-heading text-primary mb-4">{item.title}</h3>
                <p className="text-sm text-gray-500 font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="py-24 bg-background-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <SafeImage src="https://images.unsplash.com/photo-1506784919141-93503191002e?auto=format&fit=crop&q=80&w=1000" alt="Time and processing illustration" className="rounded-[4rem] aspect-square shadow-2xl border-8 border-white" />
              <div className="absolute top-10 -right-10 w-28 h-28 bg-secondary rounded-[2.5rem] flex items-center justify-center text-white shadow-2xl animate-float"><Clock size={48} /></div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-secondary font-black uppercase tracking-widest text-sm">Wait Time Expectations</h2>
                <h2 className="text-4xl md:text-5xl font-black font-heading text-primary leading-tight">Time to Receive Your ITIN</h2>
                <AnimatedLine className="max-w-xs" />
              </div>
              <div className="space-y-6">
                {[
                  { title: "Standard Processing", val: "7–11 Weeks", desc: "During typical off-peak IRS cycles." },
                  { title: "Peak Tax Season", val: "12–16 Weeks", desc: "January through April processing times." },
                  { title: "International Filers", val: "Additional Time", desc: "Mail times can vary for applicants outside the U.S." }
                ].map((item, i) => (
                  <div key={i} className="flex items-center p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                    <div className="flex-grow">
                      <p className="text-xs font-black uppercase tracking-widest text-secondary mb-1">{item.title}</p>
                      <p className="text-2xl font-black text-primary">{item.val}</p>
                      <p className="text-sm text-gray-400 font-bold">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="bg-primary rounded-[4rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl group">
            <div className="relative z-10 max-w-4xl mx-auto space-y-12">
              <div className="w-24 h-24 bg-secondary rounded-[2.5rem] flex items-center justify-center mx-auto shadow-2xl animate-float"><IdCard size={48} /></div>
              <h2 className="text-4xl md:text-6xl font-black font-heading leading-tight">Secure Your ITIN with <br /><span className="text-secondary italic">Professional Accuracy</span></h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Link to="/contact" className="bg-secondary text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-secondary-hover transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center shadow-secondary/20">Apply for ITIN</Link>
                <Link to="/contact" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-2xl font-black text-xl hover:bg-white/20 transition-all flex items-center justify-center">Contact Our Experts</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ITINApplication;
