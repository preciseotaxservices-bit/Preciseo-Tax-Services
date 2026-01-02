
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Globe2, 
  ShieldCheck, 
  LockKeyhole, 
  Coins, 
  Landmark, 
  FileSearch, 
  TrendingUp, 
  AlertTriangle, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  RefreshCcw, 
  ShieldAlert, 
  Handshake, 
  Search, 
  History, 
  ShieldX, 
  UserCheck, 
  ChevronRight, 
  FileText,
  Briefcase,
  Zap,
  Layers,
  Building,
  Target
} from 'lucide-react';

// --- Animation Variants ---
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

// --- Reusable Components ---

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
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E2759] via-[#1E1B3A] to-[#4DA6FF] flex items-center justify-center p-8">
          <div className="relative">
            <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full scale-150 animate-pulse"></div>
            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
              <div className="relative">
                 <ShieldCheck size={80} strokeWidth={1} className="text-secondary/40 animate-float" />
                 <Globe2 size={40} strokeWidth={1} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/20 animate-float-delayed" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 italic">Secure Global Reporting</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const AnimatedLine = ({ className = "", color = "" }: { className?: string; color?: string }) => (
  <motion.div 
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, ease: "easeInOut" }}
    className={`h-[1px] w-full ${color ? color : 'bg-gradient-to-r from-secondary/40 via-primary/20 to-transparent'} origin-left rounded-full ${className}`}
  />
);

const GlobalIncomeReporting: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden">
      {/* 1. SERVICE HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-44 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div 
            animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }} 
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} 
            className="absolute top-[15%] right-[8%] opacity-20"
          >
            <Globe2 size={200} strokeWidth={0.5} />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 40, 0], scale: [1, 1.1, 1] }} 
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
            className="absolute bottom-[10%] left-[5%] opacity-15 text-accent"
          >
            <Coins size={150} strokeWidth={0.5} />
          </motion.div>
          <motion.div 
            animate={{ rotate: [0, 10, 0], x: [0, 20, 0] }} 
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} 
            className="absolute top-[40%] right-[12%] opacity-10"
          >
            <ShieldCheck size={220} strokeWidth={0.5} />
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
              International Compliance Hub
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading leading-[1.05] tracking-tighter">
              FBAR, FATCA & Global <br />
              <span className="text-secondary italic">Income Reporting</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-medium max-w-2xl">
              Stay compliant worldwide with Preciseo Tax Services Inc. Led by IRS Enrolled Agents with 5+ years of experience, we help U.S. taxpayers report global assets accurately and avoid severe financial penalties.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Link to="/contact" className="bg-secondary text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-secondary-hover transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center group shadow-secondary/20">
                Get FBAR & FATCA Assistance
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-white/20 transition-all flex items-center justify-center">
                Contact Our Tax Experts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. WHAT IS FBAR & FATCA? */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              variants={fadeIn} 
              initial="initial" 
              whileInView="whileInView" 
              viewport={{ once: true }}
              className="relative"
            >
              <SafeImage 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
                alt="Understanding FBAR & FATCA Reporting" 
                className="rounded-[4rem] aspect-video lg:aspect-square shadow-2xl border-8 border-background-soft card-3d"
              />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary rounded-[2.5rem] shadow-2xl flex items-center justify-center text-secondary animate-float">
                <Landmark size={48} />
              </div>
            </motion.div>

            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-secondary font-black uppercase tracking-[0.2em] text-sm">Global Transparency</h2>
                <h2 className="text-4xl md:text-5xl font-black font-heading text-primary leading-tight">Understanding FBAR & FATCA Reporting</h2>
                <AnimatedLine className="max-w-xs" color="bg-primary" />
              </div>
              <p className="text-lg text-gray-500 font-medium leading-relaxed">
                U.S. taxpayers with foreign financial assets may be required to report them under FBAR (FinCEN Form 114) and FATCA (Form 8938). These laws are designed to prevent offshore tax evasion and ensure transparency of global income.
              </p>
              <div className="p-8 bg-background-soft rounded-[2.5rem] border-l-8 border-secondary">
                 <div className="flex items-start space-x-4">
                    <ShieldAlert className="text-secondary shrink-0 mt-1" size={24} />
                    <p className="font-bold text-primary leading-relaxed">
                       Failure to file correctly can result in significant penalties—reaching up to $10,000 per violation or more—even if no tax is owed.
                    </p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. WHO NEEDS TO FILE? */}
      <section className="py-24 bg-background-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-secondary font-black uppercase tracking-[0.2em] text-sm">Filing Eligibility</h2>
            <h2 className="text-4xl md:text-5xl font-black font-heading text-primary leading-tight">Who Is Required to Report Foreign Assets?</h2>
            <AnimatedLine className="mx-auto max-w-[200px]" color="bg-primary" />
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: "U.S. Citizens Abroad", desc: "Citizens residing in foreign countries with local financial accounts.", icon: Globe2 },
              { title: "Green Card Holders", desc: "Permanent residents with existing accounts in their home countries.", icon: UserCheck },
              { title: "Dual-Status Taxpayers", desc: "Individuals transitioning residency status during the tax year.", icon: RefreshCcw },
              { title: "Foreign Bank Holders", desc: "Anyone with signing authority over accounts exceeding $10k thresholds.", icon: Landmark },
              { title: "Overseas Investors", desc: "Investors holding foreign stocks, bonds, or private equity interests.", icon: TrendingUp },
              { title: "Foreign Ownership", desc: "Businesses with foreign accounts or ownership structures.", icon: Building }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeIn} className="p-10 rounded-[3rem] bg-white border border-gray-100 hover:shadow-2xl hover:border-secondary transition-all group">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-secondary mb-6 shadow-md group-hover:scale-110 transition-transform">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-black font-heading text-primary mb-4">{item.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. FBAR REPORTING DETAIL */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-secondary font-black uppercase tracking-[0.2em] text-sm">FinCEN Form 114</h2>
                <h2 className="text-4xl md:text-5xl font-black font-heading text-primary leading-tight">FBAR – Reporting Foreign Bank Accounts</h2>
                <AnimatedLine className="max-w-xs" color="bg-primary" />
              </div>
              <p className="text-lg text-gray-500 font-medium leading-relaxed">
                FBAR is required when the total value of foreign financial accounts exceeds $10,000 at any time during the year. This includes bank accounts, investment accounts, and certain foreign financial instruments.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "FinCEN Submission", desc: "Filed electronically via the BSA E-Filing System." },
                  { title: "Separate Deadline", desc: "Generally due by April 15, with an automatic extension to Oct 15." },
                  { title: "Account Types", desc: "Includes checking, savings, and securities accounts." },
                  { title: "Severe Penalties", desc: "Non-willful penalties can exceed $10,000 per violation." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3 p-4 bg-background-soft rounded-2xl border border-gray-100">
                    <CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-black text-primary text-sm leading-tight">{item.title}</p>
                      <p className="text-gray-500 text-xs font-bold leading-tight">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <SafeImage 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
                alt="Secure FBAR compliance visuals" 
                className="rounded-[4rem] aspect-square shadow-2xl border-8 border-background-soft card-3d"
              />
              <div className="absolute top-10 -right-10 w-32 h-32 bg-primary rounded-3xl flex flex-col items-center justify-center text-white shadow-2xl animate-float-delayed border-4 border-white">
                <LockKeyhole size={48} className="text-secondary mb-1" />
                <span className="text-[10px] font-black uppercase tracking-widest">Secure</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. FATCA REPORTING DETAIL */}
      <section className="py-24 bg-background-soft relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              <SafeImage 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
                alt="Global asset reporting and FATCA visuals" 
                className="rounded-[4rem] aspect-square shadow-2xl border-8 border-white card-3d"
              />
              <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-secondary rounded-[2.5rem] flex items-center justify-center text-white shadow-2xl animate-float">
                <FileSearch size={48} />
              </div>
            </motion.div>

            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-secondary font-black uppercase tracking-[0.2em] text-sm">IRS Form 8938</h2>
                <h2 className="text-4xl md:text-5xl font-black font-heading text-primary leading-tight">FATCA – Reporting Foreign Financial Assets</h2>
                <AnimatedLine className="max-w-xs" color="bg-primary" />
              </div>
              <p className="text-lg text-gray-500 font-medium leading-relaxed">
                FATCA reporting is required for taxpayers holding specified foreign financial assets above certain thresholds. FATCA is filed with your income tax return and often overlaps with FBAR—but the rules are distinct.
              </p>
              <div className="space-y-4">
                {[
                  "Thresholds vary by filing status (Single vs Married) and residency.",
                  "Includes foreign stocks, bonds, and interests in foreign entities.",
                  "Requires detailed identification of foreign pensions and trusts.",
                  "Integrated with Form 1040 for seamless federal compliance."
                ].map((text, i) => (
                  <div key={i} className="flex items-center space-x-3 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <Zap size={20} className="text-secondary shrink-0" />
                    <span className="font-bold text-primary text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. GLOBAL INCOME REPORTING */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5">
           <Globe2 size={600} strokeWidth={0.5} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="space-y-10">
               <div className="space-y-4">
                  <h2 className="text-secondary font-black uppercase tracking-[0.2em] text-sm">Worldwide Coverage</h2>
                  <h2 className="text-4xl md:text-5xl font-black font-heading leading-tight">Worldwide Income Reporting Requirements</h2>
                  <AnimatedLine className="max-w-xs" />
               </div>
               <p className="text-xl text-white/70 font-medium leading-relaxed">
                 U.S. taxpayers must report worldwide income, regardless of where it is earned. This includes foreign salaries, business income, rental income, interest, and dividends.
               </p>
               <div className="grid gap-6">
                 {[
                   { title: "Foreign Tax Credits", desc: "Expert calculation to ensure you don't pay tax twice on the same income.", icon: Target },
                   { title: "Income Identification", desc: "Comprehensive review of overseas bank statements and pay records.", icon: Search },
                   { title: "Double Taxation Relief", desc: "Leveraging international tax treaties to maximize legal exclusions.", icon: ShieldCheck }
                 ].map((item, idx) => (
                   <div key={idx} className="flex items-start group">
                     <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-secondary mr-6 shrink-0 shadow-xl group-hover:bg-secondary group-hover:text-white transition-all">
                       <item.icon size={24} />
                     </div>
                     <div>
                       <h5 className="font-black text-white text-lg">{item.title}</h5>
                       <p className="text-white/50 text-sm font-bold leading-relaxed">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
               <SafeImage 
                 src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200" 
                 alt="Worldwide income reporting and global data flow" 
                 className="rounded-[4rem] aspect-square shadow-2xl border-8 border-white/10 card-3d"
               />
               <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-3xl flex items-center justify-center text-primary shadow-2xl animate-float">
                 <TrendingUp size={50} />
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. COMMON MISTAKES WE HELP YOU AVOID */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-secondary font-black uppercase tracking-[0.2em] text-sm">Penalty Prevention</h2>
            <h2 className="text-4xl md:text-5xl font-black font-heading text-primary leading-tight">Avoid Costly FBAR & FATCA Mistakes</h2>
            <AnimatedLine className="mx-auto max-w-[200px]" color="bg-primary" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Missing Foreign Accounts", desc: "Accidentally omitting low-balance or dormant accounts that trigger thresholds.", icon: ShieldX },
              { title: "Incorrect Asset Valuation", desc: "Using incorrect exchange rates or failing to identify the 'max value' during the year.", icon: AlertTriangle },
              { title: "Late or Non-Filing", desc: "Missing strict electronic filing deadlines resulting in automatic penalty flags.", icon: History },
              { title: "Conflicting Reporting", desc: "Providing inconsistent data between FBAR, FATCA, and the standard 1040 return.", icon: FileSearch },
              { title: "Misunderstanding Thresholds", desc: "Miscalculating the aggregate value of accounts causing failure-to-file.", icon: Target },
              { title: "Secure Data Risks", desc: "Submitting sensitive foreign financial info through unencrypted or risky channels.", icon: LockKeyhole }
            ].map((mistake, idx) => (
              <motion.div key={idx} variants={fadeIn} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="p-10 rounded-[3rem] bg-background-soft border border-gray-100 hover:shadow-2xl hover:border-secondary transition-all group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary mb-6 shadow-md group-hover:scale-110 transition-transform">
                  <mistake.icon size={28} />
                </div>
                <h3 className="text-xl font-black font-heading text-primary mb-4">{mistake.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{mistake.desc}</p>
                <div className="mt-8 pt-4 border-t border-gray-200 flex items-center text-[10px] font-black uppercase tracking-widest text-primary">
                  <ShieldCheck size={14} className="mr-2 text-green-500" />
                  Preciseo Verified Protection
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE PRECISEO? */}
      <section className="py-24 bg-background-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
               <div className="space-y-4">
                  <h2 className="text-secondary font-black uppercase tracking-[0.2em] text-sm">Our Advantage</h2>
                  <h2 className="text-4xl md:text-5xl font-black font-heading text-primary leading-tight">Why Trust Preciseo with International Compliance?</h2>
                  <AnimatedLine className="max-w-xs" color="bg-primary" />
               </div>
               <div className="grid gap-6">
                 {[
                   { title: "IRS Enrolled Agent Expertise", desc: "Federally authorized to represent you in all 50 states and before international IRS offices.", icon: UserCheck },
                   { title: "5+ Years International Tax", desc: "Specialized knowledge in complex cross-border reporting and global earnings.", icon: History },
                   { title: "Accurate & Confidential", desc: "Rigorous attention to detail combined with bank-level data encryption.", icon: LockKeyhole },
                   { title: "Penalty Risk Reduction", desc: "Proactive identification of compliance gaps before they become IRS issues.", icon: Zap },
                   { title: "IRS Notice Support", desc: "Comprehensive handling of all federal correspondence and disclosure support.", icon: ShieldAlert }
                 ].map((item, idx) => (
                   <div key={idx} className="flex items-start group">
                     <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary mr-5 shrink-0 shadow-sm group-hover:bg-secondary group-hover:text-white transition-all">
                       <item.icon size={20} />
                     </div>
                     <div>
                       <h5 className="font-black text-primary text-base group-hover:text-secondary transition-colors">{item.title}</h5>
                       <p className="text-xs text-gray-400 font-bold">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
            <div className="relative">
               <SafeImage 
                 src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1200" 
                 alt="Professional international tax compliance team" 
                 className="rounded-[4rem] aspect-square shadow-2xl border-8 border-white card-3d"
               />
               <div className="absolute top-10 -right-10 w-24 h-24 bg-secondary rounded-3xl flex items-center justify-center text-white shadow-2xl animate-float-delayed">
                 <Briefcase size={40} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. OUR FBAR & FATCA PROCESS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-secondary font-black uppercase tracking-[0.2em] text-sm">Secure Workflow</h2>
            <h2 className="text-4xl md:text-5xl font-black font-heading text-primary leading-tight">Our Secure & Structured Reporting Process</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-dashed border-t border-gray-200 -translate-y-12 -z-0"></div>
            {[
              { step: "01", title: "Foreign Asset Review", desc: "We identify all reportable accounts and assets globally.", icon: Search },
              { step: "02", title: "Documentation Collection", desc: "Secure submission of bank records via our encrypted portal.", icon: LockKeyhole },
              { step: "03", title: "Expert Preparation", desc: "Returns reviewed by licensed IRS Enrolled Agents for accuracy.", icon: UserCheck },
              { step: "04", title: "Filing & Support", desc: "Timely electronic submission with ongoing post-filing assistance.", icon: RefreshCcw }
            ].map((step, idx) => (
              <motion.div key={idx} variants={fadeIn} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="relative z-10 bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:border-secondary transition-all">
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-2xl group-hover:bg-secondary transition-colors">
                  <step.icon size={28} />
                </div>
                <span className="text-secondary font-black text-[10px] uppercase tracking-widest mb-4">Step {step.step}</span>
                <h3 className="text-xl font-black font-heading text-primary mb-4">{step.title}</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CALL TO ACTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-[4rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl group"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            <div className="relative z-10 max-w-4xl mx-auto space-y-12">
              <div className="w-24 h-24 bg-secondary rounded-[2.5rem] flex items-center justify-center mx-auto shadow-2xl animate-float">
                <Globe2 size={48} />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-black font-heading leading-tight">Need Help with FBAR, FATCA, or <br /><span className="text-secondary italic">Global Income Reporting?</span></h2>
                <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-medium">
                  Let experienced IRS Enrolled Agents manage your international compliance with absolute precision and strategic foresight.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Link to="/contact" className="bg-secondary text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-secondary-hover transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center shadow-secondary/20">
                  Get FBAR & FATCA Assistance
                </Link>
                <Link to="/contact" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-2xl font-black text-xl hover:bg-white/20 transition-all flex items-center justify-center">
                  Contact Our Tax Experts
                </Link>
              </div>
              <div className="pt-8 flex justify-center items-center gap-8 flex-wrap opacity-50 grayscale">
                <div className="flex items-center gap-2"><LockKeyhole size={16} /> <span className="text-[10px] font-black uppercase tracking-widest">Global Security</span></div>
                <div className="flex items-center gap-2"><ShieldCheck size={16} /> <span className="text-[10px] font-black uppercase tracking-widest">IRS Enrolled Agent Review</span></div>
                <div className="flex items-center gap-2"><FileText size={16} /> <span className="text-[10px] font-black uppercase tracking-widest">Compliance Guaranteed</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="pb-16"></div>
    </div>
  );
};

export default GlobalIncomeReporting;
