
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  BarChart3, 
  ShieldCheck, 
  Building2, 
  Users, 
  FileText, 
  Layers, 
  Target, 
  Clock, 
  Lock, 
  Zap, 
  CheckCircle2, 
  Sparkles, 
  RefreshCcw, 
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  FileSearch,
  CheckSquare,
  ShieldAlert,
  Handshake,
  LineChart,
  ClipboardCheck,
  Building,
  Scaling,
  PieChart,
  LockKeyhole,
  Search,
  Activity,
  History,
  ShieldX,
  UserCheck,
  ChevronRight,
  Rocket
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
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent/30 flex items-center justify-center p-8">
          <div className="relative">
            <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full scale-150 animate-pulse"></div>
            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
              <div className="relative">
                 <ShieldCheck size={80} strokeWidth={1} className="text-secondary/40 animate-float" />
                 <Lock size={40} strokeWidth={1} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/20 animate-float-delayed" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 italic">Secure Business Visual</p>
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

const ChecklistCard = ({ title, items, icon: Icon, color = "bg-primary" }: { title: string; items: Record<string, string[]>; icon: React.ElementType; color?: string }) => (
  <motion.div 
    variants={fadeIn}
    className="bg-white p-8 md:p-10 rounded-[3.5rem] shadow-xl border border-gray-100 h-full hover:shadow-2xl transition-all group"
  >
    <div className={`w-14 h-14 ${color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-black font-heading text-primary mb-6 leading-tight">{title}</h3>
    <div className="space-y-6">
      {Object.entries(items).map(([category, list], idx) => (
        <div key={idx} className="space-y-3">
          <p className="text-[10px] font-black uppercase tracking-widest text-secondary/60">{category}</p>
          <ul className="space-y-2">
            {list.map((item: string, i: number) => (
              <li key={i} className="flex items-start text-sm font-medium text-gray-500 leading-snug">
                <CheckCircle2 size={14} className="text-secondary mr-2 mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </motion.div>
);

const BusinessTaxFiling: React.FC = () => {
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
            <Building size={180} strokeWidth={0.5} />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 40, 0], scale: [1, 1.1, 1] }} 
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
            className="absolute bottom-[10%] left-[5%] opacity-15 text-secondary"
          >
            <LineChart size={150} strokeWidth={0.5} />
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
              Strategic Business Solutions
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading leading-[1.05] tracking-tighter">
              Professional Business <br />
              <span className="text-secondary italic">Tax Filing Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-medium max-w-2xl">
              Preciseo Tax Services Inc provides accurate, compliant, and strategic business tax filing services led by IRS Enrolled Agents with 5+ years of experience. We support startups, SMBs, and corporations across the United States.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Link to="/contact" className="bg-secondary text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-secondary-hover transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center group shadow-secondary/20">
                Start Business Tax Filing
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-white/20 transition-all flex items-center justify-center">
                Contact Our Tax Experts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. WHY BUSINESS TAX IS COMPLEX */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-secondary font-black uppercase tracking-[0.2em] text-sm">Professional Necessity</h2>
                <h2 className="text-4xl md:text-5xl font-black font-heading text-primary leading-tight">Why Business Tax Filing Requires Professional Expertise</h2>
                <AnimatedLine className="max-w-xs" color="bg-primary" />
              </div>
              <p className="text-lg text-gray-500 font-medium leading-relaxed">
                Business tax filing involves more than reporting income. Choosing the correct entity type, tracking expenses, payroll compliance, deductions, and credits are critical to avoiding IRS penalties.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Entity-Specific Logic", desc: "Complex 1065, 1120, or 1120-S requirements.", icon: Layers },
                  { title: "Data Integrity", desc: "Aligning P&L and Balance Sheets with IRS rules.", icon: Activity },
                  { title: "Regulatory Adherence", desc: "Meeting strict federal and multi-state deadlines.", icon: ShieldCheck },
                  { title: "Credit Identification", desc: "Maximizing industry-specific tax credits legally.", icon: TrendingUp }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="p-6 bg-background-soft rounded-[2rem] border border-gray-50 group hover:border-secondary transition-all">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-secondary mb-4 shadow-sm group-hover:scale-110 transition-transform">
                        <Icon size={20} />
                      </div>
                      <h4 className="text-base font-black text-primary mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-500 font-bold leading-snug">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <SafeImage 
                src="https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1000" 
                alt="Corporate Financial Strategy and Business Complexity" 
                className="rounded-[4rem] aspect-video lg:aspect-square shadow-2xl border-8 border-white card-3d"
              />
              <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-white rounded-[2rem] shadow-2xl flex items-center justify-center text-secondary animate-float">
                <Target size={48} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. TAX SAVINGS & STRATEGY SECTION */}
      <section className="py-24 bg-background-soft relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[4rem] p-12 lg:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px]"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
               <div className="space-y-8">
                  <div className="inline-flex items-center space-x-2 bg-secondary/20 px-4 py-2 rounded-full border border-secondary/30">
                    <TrendingUp size={16} className="text-secondary" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Growth Optimization</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black font-heading leading-tight">Tax Savings & Strategy for Businesses</h2>
                  <p className="text-xl text-white/70 font-medium leading-relaxed">
                    We don't just file forms; we build financial frameworks. Our strategic approach helps you retain more capital for growth while remaining bulletproof in audits.
                  </p>
                  <ul className="space-y-6">
                    {[
                      { title: "Legal Deduction Maximization", desc: "Identifying business expenses you might be overlooking." },
                      { title: "Entity Optimization", desc: "Strategic advice on whether to remain an LLC or transition to S-Corp/C-Corp." },
                      { title: "Income Recognition Timing", desc: "Strategically timing revenue and expenses to optimize tax brackets." }
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="text-secondary mr-4 mt-1 shrink-0" />
                        <div>
                          <p className="font-black text-lg">{item.title}</p>
                          <p className="text-white/50 text-sm font-bold">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
               </div>
               <div className="relative">
                  <SafeImage 
                    src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1000" 
                    alt="Wealth preservation and tax savings strategy"
                    className="rounded-[3rem] aspect-[4/5] shadow-2xl border-4 border-white/10"
                  />
                  <div className="absolute top-8 -right-8 w-32 h-32 glass rounded-3xl flex flex-col items-center justify-center text-secondary shadow-2xl animate-float-delayed">
                    <PieChart size={40} className="mb-2" />
                    <span className="text-[10px] font-black uppercase">Tax Efficiency</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. IRS RISK REDUCTION & OVERSIGHT - WITH MANDATORY VISUAL */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-secondary font-black uppercase tracking-[0.2em] text-sm">Protective Filing</h2>
            <h2 className="text-4xl md:text-5xl font-black font-heading text-primary leading-tight">IRS Risk Reduction & Oversight</h2>
            <AnimatedLine className="mx-auto max-w-[200px]" color="bg-primary" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-xl text-gray-500 font-medium leading-relaxed">
                As IRS Enrolled Agents, we provide a protective barrier between your business and the IRS. Our rigorous oversight ensures that every line item on your return is defensible and compliant, significantly reducing the likelihood of audits and notices.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Audit Prevention Oversight", desc: "Direct review by federally authorized practitioners to catch 'red flags' before filing.", icon: FileSearch },
                  { title: "Clean & Accurate Reporting", desc: "Standardized accounting practices that meet strict IRS documentation requirements.", icon: ClipboardCheck },
                  { title: "Enrolled Agent Representation", desc: "Unlimited practice rights to represent you before the IRS nationwide.", icon: UserCheck }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start p-6 bg-background-soft rounded-[2.5rem] border border-gray-50 hover:border-secondary transition-all group">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-secondary mr-6 shadow-md group-hover:scale-110 transition-transform shrink-0">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-black text-primary mb-1">{item.title}</h4>
                        <p className="text-gray-500 font-medium leading-snug">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* MANDATORY PROFESSIONAL VISUAL FOR RISK REDUCTION */}
              <SafeImage 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
                alt="IRS risk reduction and compliance oversight for businesses"
                className="rounded-[4rem] aspect-square shadow-2xl border-8 border-background-soft card-3d"
              />
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary rounded-[2.5rem] shadow-2xl flex flex-col items-center justify-center text-white border-4 border-white animate-float-delayed">
                <ShieldCheck size={48} className="text-secondary mb-1" />
                <span className="text-[10px] font-black uppercase tracking-widest">Compliance</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. BUSINESS TYPES CARDS */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-secondary font-black uppercase tracking-[0.2em] text-sm">Entity Expertise</h2>
            <h2 className="text-4xl md:text-5xl font-black font-heading">Business Tax Returns We Prepare</h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {[
              { title: "Single-Member LLC", code: "Sch C / 1040", icon: Building2, desc: "Direct pass-through reporting for individual entrepreneurs." },
              { title: "Partnership", code: "Form 1065", icon: Users, desc: "Detailed flow-through returns for multi-owner firms." },
              { title: "S-Corporation", code: "Form 1120-S", icon: Layers, desc: "Corporate returns for qualified small business entities." },
              { title: "C-Corporation", code: "Form 1120", icon: Building, desc: "Standard corporate income tax returns for large entities." }
            ].map((entity, idx) => {
              const Icon = entity.icon;
              return (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[3rem] group hover:bg-white hover:text-primary transition-all duration-500 shadow-2xl flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl group-hover:rotate-6 transition-transform">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-black font-heading mb-2">{entity.title}</h3>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary mb-4">{entity.code}</span>
                  <p className="text-white/60 text-sm group-hover:text-gray-500 font-medium mb-6">{entity.desc}</p>
                  <div className="mt-auto pt-6 border-t border-white/10 w-full group-hover:border-gray-100">
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Authorized Prep</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. WHO THIS SERVICE IS IDEAL FOR */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <SafeImage 
                  src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modern startups and growth-focused businesses"
                  className="rounded-[4rem] aspect-square shadow-2xl border-8 border-background-soft"
                />
                <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-secondary rounded-3xl flex items-center justify-center text-white shadow-2xl animate-float">
                  <Rocket size={48} />
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-secondary font-black uppercase tracking-[0.2em] text-sm">Strategic Targeting</h2>
                  <h2 className="text-4xl md:text-5xl font-black font-heading text-primary leading-tight">Who This Service Is Ideal For</h2>
                  <AnimatedLine className="max-w-xs" color="bg-primary" />
                </div>
                <p className="text-lg text-gray-500 font-medium leading-relaxed">
                  Our professional business tax filing services are designed for entities that prioritize accuracy, growth, and worry-free compliance.
                </p>
                <div className="grid gap-4">
                  {[
                    "Ambitious Startups needing foundational tax structures.",
                    "Growing Businesses with multi-state operations.",
                    "Companies with Payroll and complex benefit plans.",
                    "Shareholders needing K-1 distribution reporting.",
                    "Businesses receiving IRS Notices or under audit pressure."
                  ].map((text, i) => (
                    <div key={i} className="flex items-center space-x-3 p-4 bg-background-soft rounded-2xl border border-gray-100 hover:border-secondary transition-all">
                      <CheckCircle2 className="text-secondary shrink-0" size={20} />
                      <span className="font-bold text-primary text-sm">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* 7. DOCUMENT CHECKLISTS SECTION */}
      <section className="py-24 bg-background-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-secondary font-black uppercase tracking-[0.2em] text-sm">Filing Preparation</h2>
            <h2 className="text-4xl md:text-5xl font-black font-heading text-primary">Required Documents Checklists</h2>
            <AnimatedLine className="mx-auto max-w-[200px]" color="bg-primary" />
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <ChecklistCard 
              title="Single-Member LLC (SMLLC)"
              icon={Building2}
              items={{
                "Business Info": ["EIN or SSN", "Business Address & Ownership", "Prior Year Tax Return"],
                "Income & Expense": ["Profit & Loss Statement", "Business Bank Statements", "Mileage & Vehicle Logs", "Home Office Details"],
                "Additional": ["1099-NEC / MISC Issued", "Asset Purchase Records"]
              }}
            />
            <ChecklistCard 
              title="Partnership (Form 1065)"
              icon={Users}
              color="bg-secondary"
              items={{
                "Business Details": ["EIN", "Partnership Agreement", "Ownership Percentages"],
                "Financials": ["P&L Statement", "Balance Sheet", "Bank Reconciliation Statements", "Expense Documentation"],
                "Partner Info": ["Partner SSNs / ITINs", "Capital Contribution Logs", "Distribution Details"]
              }}
            />
            <ChecklistCard 
              title="S-Corporation (Form 1120-S)"
              icon={Layers}
              items={{
                "Corporate Details": ["EIN", "Articles of Incorporation", "Shareholder Info"],
                "Financial Records": ["P&L Statement", "Balance Sheet", "Payroll Records", "Shareholder Compensation"],
                "Tax Forms": ["W-2s for Shareholders", "1099 Forms Issued/Received", "Prior Year Returns"]
              }}
            />
            <ChecklistCard 
              title="C-Corporation (Form 1120)"
              icon={Building}
              color="bg-secondary"
              items={{
                "Corporate Info": ["EIN", "Corporate Bylaws", "Shareholder Records"],
                "Financials": ["Income Statement", "Balance Sheet", "Depreciation Schedules", "Expense Records"],
                "Compliance": ["Estimated Tax Payments", "Payroll & Benefits Records", "Prior Year Returns"]
              }}
            />
          </div>
        </div>
      </section>

      {/* 8. FILING PROCESS INFOGRAPHIC */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-secondary font-black uppercase tracking-[0.2em] text-sm">Secure Workflow</h2>
            <h2 className="text-4xl md:text-5xl font-black font-heading text-primary">Our Structured Filing Process</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-dashed border-t border-gray-200 -translate-y-12 -z-0"></div>
            {[
              { step: "01", title: "Business Review", desc: "Understanding your entity structure, payroll needs, and operation scale.", icon: Search },
              { step: "02", title: "Document Collection", desc: "Safe, encrypted upload of financials into our dedicated business vault.", icon: LockKeyhole },
              { step: "03", title: "Expert Preparation", desc: "Detailed prep and multi-layered review by licensed IRS Enrolled Agents.", icon: ClipboardCheck },
              { step: "04", title: "Filing & Support", desc: "Accurate submission to the IRS with continuous post-filing assistance.", icon: RefreshCcw }
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div key={idx} variants={fadeIn} className="relative z-10 bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:border-secondary transition-all">
                  <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-2xl group-hover:bg-secondary transition-colors">
                    <Icon size={28} />
                  </div>
                  <span className="text-secondary font-black text-[10px] uppercase tracking-widest mb-4">Step {step.step}</span>
                  <h3 className="text-xl font-black font-heading text-primary mb-4">{step.title}</h3>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. YEAR ROUND SUPPORT & COLLABORATION */}
      <section className="py-24 bg-background-soft relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
               <div className="space-y-4">
                  <h2 className="text-secondary font-black uppercase tracking-[0.2em] text-sm">Continuous Advisory</h2>
                  <h2 className="text-4xl md:text-5xl font-black font-heading text-primary leading-tight">Year-Round Business Support & <br />Planning Beyond Filing</h2>
                  <AnimatedLine className="max-w-xs" color="bg-primary" />
               </div>
               <p className="text-lg text-gray-500 font-medium leading-relaxed">
                 Business tax compliance is not a once-a-year event. We partner with you throughout the fiscal year to ensure you are never surprised by IRS developments.
               </p>
               <div className="grid gap-6">
                 {[
                   { title: "Quarterly Estimates Guidance", desc: "Helping you calculate and submit estimates to avoid compounding interest.", icon: TrendingUp },
                   { title: "IRS Notice Response Handling", desc: "Immediate, professional response to any correspondence from tax authorities.", icon: ShieldAlert },
                   { title: "Amendment Filing & Correction", desc: "Accurate filing of 1120-X or 1065-X if your business financials change.", icon: FileSearch },
                   { title: "Strategic Planning Sessions", desc: "Proactive annual reviews to prepare for the next tax cycle early.", icon: Handshake }
                 ].map((item, idx) => {
                   const Icon = item.icon;
                   return (
                    <div key={idx} className="flex items-start group">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary mr-4 shrink-0 shadow-sm group-hover:bg-secondary group-hover:text-white transition-all">
                        <Icon size={18} />
                      </div>
                      <div>
                        <h5 className="font-black text-primary text-base group-hover:text-secondary transition-colors">{item.title}</h5>
                        <p className="text-xs text-gray-400 font-bold">{item.desc}</p>
                      </div>
                    </div>
                  );
                 })}
               </div>
            </div>
            <div className="relative">
               <SafeImage 
                 src="https://images.unsplash.com/photo-1600880212340-02d956ea36d2?auto=format&fit=crop&q=80&w=1000" 
                 alt="Collaboration Between Business Owners and Tax Experts for Year-Round Planning" 
                 className="rounded-[4rem] aspect-square shadow-2xl border-8 border-white card-3d"
               />
               <div className="absolute top-10 -right-10 w-24 h-24 bg-secondary rounded-3xl flex items-center justify-center text-white shadow-2xl animate-float-delayed">
                 <Handshake size={40} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CALL TO ACTION SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-primary rounded-[4rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl group"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            <div className="relative z-10 max-w-4xl mx-auto space-y-12">
              <div className="w-24 h-24 bg-secondary rounded-[2.5rem] flex items-center justify-center mx-auto shadow-2xl animate-float">
                <Briefcase size={48} />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-black font-heading leading-tight">Ready to File Your Business <br /><span className="text-secondary italic">Taxes with Confidence?</span></h2>
                <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-medium">
                  Let experienced IRS Enrolled Agents manage your corporate compliance with absolute precision and strategic foresight.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Link to="/contact" className="bg-secondary text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-secondary-hover transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center shadow-secondary/20">
                  Start Business Tax Filing
                </Link>
                <Link to="/contact" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-2xl font-black text-xl hover:bg-white/20 transition-all flex items-center justify-center">
                  Contact Our Tax Experts
                </Link>
              </div>
              <div className="pt-8 flex justify-center items-center gap-8 flex-wrap opacity-50 grayscale">
                <div className="flex items-center gap-2"><LockKeyhole size={16} /> <span className="text-[10px] font-black uppercase tracking-widest">Enterprise Security</span></div>
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

export default BusinessTaxFiling;
