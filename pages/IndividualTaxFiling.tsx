
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  ShieldCheck, 
  Target, 
  Calculator, 
  CheckCircle2, 
  Users2, 
  Clock, 
  ShieldAlert, 
  ArrowRight, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  Lock,
  Search,
  Handshake,
  UserCheck,
  Building2,
  Backpack,
  Heart,
  Globe,
  AlertTriangle,
  RefreshCcw,
  Zap,
  HelpCircle,
  FileSearch,
  CheckSquare,
  ShieldX,
  // Added Layers to fix "Cannot find name 'Layers'" error
  Layers
} from 'lucide-react';

// --- Components ---

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const AnimatedLine = ({ className = "", color = "" }) => (
  <motion.div 
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, ease: "easeInOut" }}
    className={`h-[1px] w-full ${color ? color : 'bg-gradient-to-r from-secondary/40 via-primary/20 to-transparent'} origin-left rounded-full ${className}`}
  />
);

// Robust Image Component with Fallback
const SafeImage = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => {
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!error ? (
        <img 
          src={src} 
          alt={alt} 
          onError={() => setError(true)}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent/30 flex items-center justify-center p-8">
          <div className="relative">
            <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full scale-150 animate-pulse"></div>
            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
              <div className="relative">
                 <ShieldCheck size={80} strokeWidth={1} className="text-secondary/40 animate-float" />
                 <FileText size={40} strokeWidth={1} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/20 animate-float-delayed" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 italic">Secure Visual Fallback</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ChecklistSection = ({ title, items, icon: Icon, color = "bg-primary" }) => (
  <motion.div 
    variants={fadeIn}
    className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-xl border border-gray-100 h-full hover:shadow-2xl transition-all group"
  >
    <div className={`w-14 h-14 ${color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
      <Icon size={28} />
    </div>
    <h3 className="text-2xl font-black font-heading text-primary mb-8">{title}</h3>
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start group/item">
          <CheckCircle2 size={18} className="text-secondary mr-3 mt-1 shrink-0 group-hover/item:scale-110 transition-transform" />
          <span className="text-gray-600 font-medium leading-tight">{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const IndividualTaxFiling: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-44 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Parallax Floating 3D Icons */}
          <motion.div 
            animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }} 
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} 
            className="absolute top-[15%] right-[12%] opacity-20 text-white"
          >
            <Calculator size={160} strokeWidth={0.5} />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 40, 0], rotate: [0, -8, 0] }} 
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
            className="absolute bottom-[10%] left-[8%] opacity-15 text-secondary"
          >
            <FileSearch size={140} strokeWidth={0.5} />
          </motion.div>
          <motion.div 
            animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }} 
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} 
            className="absolute top-[40%] left-[5%] opacity-10 text-accent"
          >
            <ShieldCheck size={220} strokeWidth={0.5} />
          </motion.div>
          <motion.div 
            animate={{ x: [0, 20, 0], y: [0, -20, 0] }} 
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} 
            className="absolute bottom-[25%] right-[10%] opacity-10 text-white"
          >
            <Target size={200} strokeWidth={0.5} />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-8"
          >
            <div className="inline-flex items-center bg-secondary/20 border border-secondary/30 px-6 py-2 rounded-full text-secondary text-xs font-black uppercase tracking-[0.3em] shadow-xl backdrop-blur-md">
              <Sparkles className="w-4 h-4 mr-2" />
              IRS Enrolled Agent Guidance
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading leading-[1.05] tracking-tighter">
              Individual Tax Filing <br />
              <span className="text-secondary italic">Made Simple</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-medium max-w-2xl">
              Preciseo Tax Services Inc provides professional individual tax filing services led by IRS Enrolled Agents with 5+ years of experience. We help individuals, retirees, non-residents, and families file accurately while staying fully compliant with U.S. tax laws.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Link to="/contact" className="bg-secondary text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-secondary-hover transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center group">
                Start Individual Tax Filing
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-white/20 transition-all flex items-center justify-center">
                Contact Our Tax Experts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. WHAT MAKES IT COMPLEX SECTION */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-secondary font-black uppercase tracking-[0.2em] text-sm">Educational Insight</h2>
                <h2 className="text-4xl md:text-5xl font-black font-heading text-primary leading-tight">What Makes Individual Tax Filing Complex?</h2>
                <AnimatedLine className="max-w-xs" color="bg-primary" />
              </div>
              <p className="text-lg text-gray-500 font-medium leading-relaxed">
                U.S. tax laws are dynamic and intricate. For many, a standard filing isn't enough to capture their full financial picture or ensure compliance.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Multiple Income Sources", desc: "W-2s, 1099s, rental income, and investment gains require specific reporting.", icon: Layers },
                  { title: "Credits & Deductions", desc: "Identifying qualifying tax credits can significantly reduce your tax liability.", icon: Sparkles },
                  { title: "Status Decisions", desc: "Filing status (Single, Married, Head of Household) impacts tax brackets and exemptions.", icon: Users2 },
                  { title: "International Reporting", desc: "Non-resident rules (1040-NR) and FBAR/FATCA compliance for global assets.", icon: Globe }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start p-6 bg-background-soft rounded-[2.5rem] border border-gray-50 group hover:border-secondary transition-all">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-secondary mr-6 shadow-sm shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-primary mb-1">{item.title}</h4>
                      <p className="text-gray-500 font-medium leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <SafeImage 
                src="https://images.unsplash.com/photo-1554224155-1696413575b3?auto=format&fit=crop&q=80&w=1000" 
                alt="Expert Tax Advisory Session" 
                className="rounded-[4rem] aspect-[4/5] shadow-2xl border-8 border-white card-3d"
              />
              <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-white rounded-[2rem] shadow-2xl flex items-center justify-center text-secondary animate-float">
                <ShieldCheck size={48} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. ACCURACY & COMPLIANCE APPROACH */}
      <section className="py-24 bg-background-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px]"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="w-20 h-20 bg-secondary rounded-[2.5rem] flex items-center justify-center shadow-2xl animate-float">
                  <ShieldCheck size={40} className="text-white" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-black font-heading leading-tight">How We Maximize Accuracy & Compliance</h2>
                  <AnimatedLine className="max-w-xs" />
                </div>
                <p className="text-xl text-white/70 leading-relaxed font-medium">
                  Our expert approach is built on a foundation of rigorous multi-layered review and adherence to the latest IRS standards.
                </p>
                <ul className="space-y-4">
                  {[
                    "Detailed Document Verification",
                    "Error Prevention & Cross-Checks",
                    "IRS Guideline Compliance Verification",
                    "Final Review by IRS Enrolled Agents",
                    "Nationwide Support for All U.S. States"
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-center text-lg font-bold">
                      <CheckCircle2 className="text-secondary mr-3 shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-8 bg-white/10 backdrop-blur-md rounded-[3rem] border border-white/10 space-y-4 hover:bg-white/20 transition-all">
                    <Clock size={32} className="text-secondary" />
                    <h4 className="text-2xl font-black">5+ Years</h4>
                    <p className="text-sm text-white/50 font-bold uppercase tracking-widest">Hands-on Experience</p>
                  </div>
                  <div className="p-8 bg-white/10 backdrop-blur-md rounded-[3rem] border border-white/10 space-y-4 translate-y-8 hover:bg-white/20 transition-all">
                    <Zap size={32} className="text-accent" />
                    <h4 className="text-2xl font-black">Fast E-File</h4>
                    <p className="text-sm text-white/50 font-bold uppercase tracking-widest">Rapid Processing</p>
                  </div>
                  <div className="p-8 bg-white/10 backdrop-blur-md rounded-[3rem] border border-white/10 space-y-4 hover:bg-white/20 transition-all">
                    <UserCheck size={32} className="text-white" />
                    <h4 className="text-2xl font-black">EA Review</h4>
                    <p className="text-sm text-white/50 font-bold uppercase tracking-widest">Authorized Agents</p>
                  </div>
                  <div className="p-8 bg-white/10 backdrop-blur-md rounded-[3rem] border border-white/10 space-y-4 translate-y-8 hover:bg-white/20 transition-all">
                    <Lock size={32} className="text-secondary" />
                    <h4 className="text-2xl font-black">Secure</h4>
                    <p className="text-sm text-white/50 font-bold uppercase tracking-widest">Encrypted Vault</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMMON MISTAKES WE HELP YOU AVOID */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-secondary font-black uppercase tracking-[0.2em] text-sm">Protective Filing</h2>
            <h2 className="text-4xl md:text-5xl font-black font-heading text-primary">Common Mistakes We Help You Avoid</h2>
            <AnimatedLine className="mx-auto max-w-[200px]" color="bg-primary" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Incorrect Filing Status", desc: "Choosing the wrong status can lead to overpaying taxes or IRS rejection.", icon: ShieldX },
              { title: "Missing Income Reporting", desc: "Failing to report small 1099s can trigger automated IRS notices.", icon: AlertTriangle },
              { title: "Overlooked Deductions", desc: "Many individuals miss legitimate business, education, or medical deductions.", icon: Search },
              { title: "SSN / ITIN Errors", desc: "Typos in identification numbers are the #1 cause of processing delays.", icon: AlertTriangle },
              { title: "Late Filing Penalties", desc: "Missing deadlines leads to compounding interest and failure-to-file fees.", icon: Clock },
              { title: "Insecure Data Handling", desc: "Mailing sensitive documents or using unencrypted email puts you at risk.", icon: Lock }
            ].map((mistake, idx) => (
              <motion.div key={idx} variants={fadeIn} className="p-10 rounded-[3rem] bg-background-soft border border-gray-100 hover:shadow-2xl hover:border-secondary transition-all group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary mb-6 shadow-md group-hover:scale-110 transition-transform">
                  <mistake.icon size={28} />
                </div>
                <h3 className="text-xl font-black font-heading text-primary mb-4">{mistake.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{mistake.desc}</p>
                <div className="mt-6 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-xs font-black uppercase tracking-widest text-primary flex items-center">
                    Preciseo Prevention <CheckSquare size={14} className="ml-2 text-green-500" />
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TYPES OF RETURNS CARDS */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-secondary font-black uppercase tracking-[0.2em] text-sm">Comprehensive Preparation</h2>
            <h2 className="text-4xl md:text-5xl font-black font-heading">Individual Tax Returns We Prepare</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { title: "Form 1040", subtitle: "Residents", desc: "U.S. Individual Income Tax Return for residents and citizens.", icon: FileText },
              { title: "Form 1040-NR", subtitle: "Non-Residents", desc: "Income tax return for non-resident aliens with U.S. source income.", icon: Globe },
              { title: "Form 1040-SR", subtitle: "Seniors (65+)", desc: "Simplified tax return designed specifically for seniors.", icon: Heart }
            ].map((card, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-[3.5rem] group hover:bg-white hover:text-primary transition-all duration-500 shadow-2xl flex flex-col items-center text-center h-full"
              >
                <div className="w-20 h-20 bg-secondary rounded-[2rem] flex items-center justify-center text-white mb-8 shadow-2xl group-hover:rotate-6 transition-transform">
                  <card.icon size={36} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-secondary mb-2">{card.subtitle}</span>
                <h3 className="text-3xl font-black font-heading mb-6">{card.title}</h3>
                <p className="text-white/70 group-hover:text-gray-500 font-medium leading-relaxed flex-grow">{card.desc}</p>
                <div className="mt-10 pt-8 border-t border-white/10 w-full group-hover:border-gray-100 flex justify-center">
                  <span className="text-xs font-black uppercase tracking-widest flex items-center">
                    Authorized EA Prep <ShieldCheck size={16} className="ml-2 text-secondary" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DOCUMENT CHECKLISTS */}
      <section className="py-24 bg-background-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-secondary font-black uppercase tracking-[0.2em] text-sm">Preparation Guide</h2>
            <h2 className="text-4xl md:text-5xl font-black font-heading text-primary">Required Documents & Checklists</h2>
            <AnimatedLine className="mx-auto max-w-[200px]" color="bg-primary" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <ChecklistSection 
              title="Form 1040 (Residents)" 
              icon={Building2}
              items={[
                "W-2 Wage Statements",
                "1099-NEC / MISC / INT / DIV",
                "1099-B (Investments)",
                "Rental Income Records",
                "SSN & Gov-issued ID",
                "Prior Year Tax Return",
                "Mortgage Interest (1098)",
                "Property Tax Statements",
                "Education Expenses (1098-T)",
                "Childcare & Medical Receipts"
              ]}
            />
            <ChecklistSection 
              title="Form 1040-NR (Non-Residents)" 
              icon={Globe}
              color="bg-secondary"
              items={[
                "Passport & Visa Details",
                "Form I-94 Record",
                "ITIN (if applicable)",
                "W-2 Wage Statements",
                "Form 1042-S",
                "1099 Forms (if applicable)",
                "U.S. Source Income Records",
                "Tax Treaty Details",
                "Prior Year U.S. Return"
              ]}
            />
            <ChecklistSection 
              title="Form 1040-SR (Seniors)" 
              icon={Heart}
              items={[
                "Social Security Statements",
                "Pension Income (1099-R)",
                "Interest & Dividend Income",
                "Retirement Distributions",
                "Other Income Sources",
                "Medical Expense Receipts",
                "Property Tax Details",
                "Charitable Contributions",
                "Retirement Deductions"
              ]}
            />
          </div>
        </div>
      </section>

      {/* 7. POST-FILING SUPPORT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
               <SafeImage 
                 src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000" 
                 alt="Customer Support and Guidance" 
                 className="rounded-[4rem] aspect-square shadow-2xl card-3d border-8 border-background-soft"
               />
               <div className="absolute top-10 -right-10 w-24 h-24 bg-secondary rounded-3xl flex items-center justify-center text-white shadow-2xl animate-float-delayed">
                 <RefreshCcw size={40} />
               </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
               <div className="space-y-4">
                  <h2 className="text-secondary font-black uppercase tracking-[0.2em] text-sm">Ongoing Assistance</h2>
                  <h2 className="text-4xl md:text-5xl font-black font-heading text-primary leading-tight">Year-Round Support & Post-Filing Care</h2>
                  <AnimatedLine className="max-w-xs" color="bg-primary" />
               </div>
               <p className="text-lg text-gray-500 font-medium leading-relaxed">
                 Our relationship doesn't end when the "Submit" button is pressed. We provide comprehensive support throughout the tax lifecycle.
               </p>
               <div className="grid gap-6">
                 {[
                   { title: "Refund Tracking Assistance", desc: "Helping you monitor the status of your federal and state refunds.", icon: Search },
                   { title: "IRS Notice Support", desc: "Expert response handling if the IRS contacts you about your return.", icon: ShieldAlert },
                   { title: "Amendment Filing", desc: "Accurate filing of 1040-X if your financial situation changes after filing.", icon: FileText },
                   { title: "Strategic Tax Guidance", desc: "Proactive advice on how next year's financial decisions will impact your taxes.", icon: Handshake }
                 ].map((item, idx) => (
                   <div key={idx} className="flex items-start group">
                     <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary mr-4 shrink-0 group-hover:bg-secondary group-hover:text-white transition-all">
                       <item.icon size={20} />
                     </div>
                     <div>
                       <h5 className="font-black text-primary group-hover:text-secondary transition-colors">{item.title}</h5>
                       <p className="text-sm text-gray-400 font-bold">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL SECURITY & CTA */}
      <section className="py-24 bg-background-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-primary rounded-[4rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl group"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            <div className="relative z-10 max-w-4xl mx-auto space-y-12">
              <div className="w-24 h-24 bg-secondary rounded-[2.5rem] flex items-center justify-center mx-auto shadow-2xl animate-float">
                <ShieldCheck size={48} />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-black font-heading leading-tight text-white">Ready to File Your <br /><span className="text-secondary italic">Individual Tax Return?</span></h2>
                <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-medium">
                  Let experienced IRS Enrolled Agents handle your individual tax filing with accuracy and confidence. Your privacy and compliance come first.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Link to="/contact" className="bg-secondary text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-secondary-hover transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center shadow-secondary/20">
                  Start Individual Tax Filing
                </Link>
                <Link to="/contact" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-2xl font-black text-xl hover:bg-white/20 transition-all flex items-center justify-center">
                  Contact Our Tax Experts
                </Link>
              </div>
              <div className="pt-8 flex justify-center items-center gap-8 flex-wrap opacity-50 grayscale">
                <div className="flex items-center gap-2"><Lock size={16} /> <span className="text-[10px] font-black uppercase tracking-widest">Bank-Level Security</span></div>
                <div className="flex items-center gap-2"><ShieldCheck size={16} /> <span className="text-[10px] font-black uppercase tracking-widest">IRS Authorized Portal</span></div>
                <div className="flex items-center gap-2"><FileText size={16} /> <span className="text-[10px] font-black uppercase tracking-widest">Compliant Filing</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="pb-16"></div>
    </div>
  );
};

export default IndividualTaxFiling;
