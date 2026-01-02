
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FileText, 
  ExternalLink, 
  ShieldCheck, 
  CreditCard, 
  Search, 
  ArrowRight, 
  Download, 
  Globe, 
  MapPin, 
  HelpCircle,
  Sparkles,
  MousePointer2,
  Clock
} from 'lucide-react';

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const AnimatedLine = ({ className = "", color = "bg-secondary" }) => (
  <motion.div 
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, ease: "easeInOut" }}
    className={`h-[1px] origin-left rounded-full ${color} opacity-30 ${className}`}
  />
);

interface FormCardProps {
  title: string;
  url: string;
  category: string;
}

const FormCard: React.FC<FormCardProps> = ({ title, url, category }) => (
  <motion.a 
    variants={fadeIn}
    href={url} 
    target="_blank" 
    rel="noopener noreferrer"
    className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="relative z-10">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-black uppercase tracking-widest text-secondary bg-secondary/5 px-3 py-1 rounded-full">{category}</span>
        <Download size={16} className="text-gray-300 group-hover:text-secondary transition-colors" />
      </div>
      <h3 className="text-lg font-black font-heading text-primary leading-tight group-hover:text-secondary transition-colors">
        {title}
      </h3>
    </div>
    <div className="mt-6 flex items-center text-xs font-bold text-gray-400 group-hover:text-primary transition-colors relative z-10">
      Official IRS PDF <ExternalLink size={12} className="ml-1.5" />
    </div>
  </motion.a>
);

const StateCard: React.FC<{ name: string; url: string }> = ({ name, url }) => (
  <motion.a 
    variants={fadeIn}
    href={url} 
    target="_blank" 
    rel="noopener noreferrer"
    className="relative group bg-gradient-to-br from-white to-gray-50 p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center justify-center text-center overflow-hidden h-32 animate-float-slow"
  >
    <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-[0.02] transition-opacity"></div>
    <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-all duration-700 rotate-12 group-hover:rotate-0">
      <MapPin size={60} />
    </div>
    
    <span className="text-sm font-black font-heading text-primary tracking-tight z-10">{name}</span>
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileHover={{ opacity: 1, y: 0 }}
      className="text-[9px] font-bold text-secondary uppercase tracking-widest mt-2 z-10"
    >
      Track Refund
    </motion.span>
  </motion.a>
);

const FormsLinks: React.FC = () => {
  const irsForms = [
    { category: 'Individual', title: 'Form 1040 – Individual Income Tax Return', url: 'https://www.irs.gov/pub/irs-pdf/f1040.pdf' },
    { category: 'Instructions', title: 'Form 1040 Instructions', url: 'https://www.irs.gov/pub/irs-pdf/i1040.pdf' },
    { category: 'Identification', title: 'Form W-9 – Request for TIN', url: 'https://www.irs.gov/pub/irs-pdf/fw9.pdf' },
    { category: 'Transcripts', title: 'Form 4506-T – Request for Transcript', url: 'https://www.irs.gov/pub/irs-pdf/f4506t.pdf' },
    { category: 'Payroll', title: 'Form W-4 – Employee Withholding', url: 'https://www.irs.gov/pub/irs-pdf/fw4.pdf' },
    { category: 'Payroll', title: 'Form W-2 – Wage and Tax Statement', url: 'https://www.irs.gov/pub/irs-pdf/fw2.pdf' },
    { category: 'Employer', title: 'Form 941 – Quarterly Federal Return', url: 'https://www.irs.gov/pub/irs-pdf/f941.pdf' },
    { category: 'Payments', title: 'Form 9465 – Installment Agreement', url: 'https://www.irs.gov/pub/irs-pdf/f9465.pdf' },
    { category: 'Amendments', title: 'Form 1040-X – Amended Return', url: 'https://www.irs.gov/pub/irs-pdf/f1040x.pdf' },
    { category: 'Legal', title: 'Form 2848 – Power of Attorney', url: 'https://www.irs.gov/pub/irs-pdf/f2848.pdf' },
    { category: 'ITIN', title: 'Form W-7 – Apply for an ITIN', url: 'https://www.irs.gov/pub/irs-pdf/fw7.pdf' },
    { category: 'Professional', title: 'Circular 230 – Practice Regulations', url: 'https://www.irs.gov/pub/irs-pdf/pcir230.pdf' },
  ];

  const states = [
    { name: 'Alabama', url: 'https://myalabamataxes.alabama.gov/_/' },
    { name: 'Alaska', url: 'https://pfd.alaska.gov/' },
    { name: 'Arizona', url: 'https://aztaxes.gov/Home/CheckRefund' },
    { name: 'Arkansas', url: 'https://atap.arkansas.gov/_/' },
    { name: 'California', url: 'https://www.ftb.ca.gov/refund/index.asp' },
    { name: 'Colorado', url: 'https://www.colorado.gov/revenueonline/_/' },
    { name: 'Connecticut', url: 'https://portal.ct.gov/drs/refunds/refund-information' },
    { name: 'Delaware', url: 'https://dorweb.revenue.delaware.gov/refund/' },
    { name: 'Florida', url: 'https://floridarevenue.com/Pages/default.aspx' },
    { name: 'Georgia', url: 'https://gtc.dor.ga.gov/_/' },
    { name: 'Hawaii', url: 'https://hitax.hawaii.gov/_/' },
    { name: 'Idaho', url: 'https://tax.idaho.gov/i-1031.cfm' },
    { name: 'Illinois', url: 'https://mytax.illinois.gov/_/' },
    { name: 'Indiana', url: 'https://www.in.gov/dor/online-services/check-the-status-of-your-refund/' },
    { name: 'Iowa', url: 'https://www.idr.iowa.gov/WhereIsMyRefund/' },
    { name: 'Kansas', url: 'https://www.kdor.ks.gov/Apps/Vat/Default.aspx' },
    { name: 'Kentucky', url: 'https://refund.ky.gov/' },
    { name: 'Louisiana', url: 'https://latap.revenue.louisiana.gov/_/' },
    { name: 'Maine', url: 'https://www.maine.gov/revenue/portal' },
    { name: 'Maryland', url: 'https://interactive.marylandtaxes.gov/Indiv/RefundStatus/Registration' },
    { name: 'Massachusetts', url: 'https://mtc.dor.state.ma.us/mtc/_/' },
    { name: 'Michigan', url: 'https://www.michigan.gov/taxes/i-help/refund' },
    { name: 'Minnesota', url: 'https://www.revenue.state.mn.us/wheres-my-refund' },
    { name: 'Mississippi', url: 'https://tap.dor.ms.gov/_/' },
    { name: 'Missouri', url: 'https://mytax.mo.gov/rptp/portal/home/check-refund-status/' },
    { name: 'Montana', url: 'https://tap.dor.mt.gov/_/' },
    { name: 'Nebraska', url: 'https://www.nebraska.gov/revenue/refund/index.cgi' },
    { name: 'Nevada', url: 'https://tax.nv.gov/' },
    { name: 'New Hampshire', url: 'https://www.revenue.nh.gov/' },
    { name: 'New Jersey', url: 'https://www1.state.nj.us/TYTR_RefundPrompt/jsp/RefundPrompt.jsp' },
    { name: 'New Mexico', url: 'https://tap.state.nm.us/tap/_/' },
    { name: 'New York', url: 'https://www.tax.ny.gov/pit/file/refund.htm' },
    { name: 'North Carolina', url: 'https://www.ncdor.gov/taxes-forms/individual-income-tax/refund-status' },
    { name: 'North Dakota', url: 'https://apps.nd.gov/tax/tap/_/' },
    { name: 'Ohio', url: 'https://tax.ohio.gov/individual/refund-status' },
    { name: 'Oklahoma', url: 'https://oktap.tax.ok.gov/oktap/Web/_/' },
    { name: 'Oregon', url: 'https://revenueonline.dor.oregon.gov/tap/_/' },
    { name: 'Pennsylvania', url: 'https://www.doreservices.pa.gov/RefundStatus/' },
    { name: 'Rhode Island', url: 'https://www.ri.gov/taxation/refund/' },
    { name: 'South Carolina', url: 'https://mytax.sctax.org/_/' },
    { name: 'South Dakota', url: 'https://dor.sd.gov/' },
    { name: 'Tennessee', url: 'https://www.tn.gov/revenue.html' },
    { name: 'Texas', url: 'https://comptroller.texas.gov/' },
    { name: 'Utah', url: 'https://tap.tax.utah.gov/taxexpress/_/' },
    { name: 'Vermont', url: 'https://myvttax.vermont.gov/_/' },
    { name: 'Virginia', url: 'https://www.individual.tax.virginia.gov/RefundStatus/refundForm.do' },
    { name: 'Washington', url: 'https://dor.wa.gov/' },
    { name: 'West Virginia', url: 'https://mytaxes.wvtax.gov/_/' },
    { name: 'Wisconsin', url: 'https://www.revenue.wi.gov/Pages/Apps/TaxReturnStatus.aspx' },
    { name: 'Wyoming', url: 'https://revenue.state.wy.us/' },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 right-[5%] w-64 h-64 border-2 border-white/5 rounded-full animate-float blur-sm"></div>
          <div className="absolute bottom-1/4 left-[5%] w-48 h-48 bg-white/5 rotate-45 rounded-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
             <FileText size={400} strokeWidth={0.5} />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-6"
          >
            <div className="inline-flex items-center bg-secondary/20 border border-secondary/30 px-5 py-2 rounded-full text-secondary text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">
              <Sparkles className="w-3 h-3 mr-2" />
              Resource Hub
            </div>
            <h1 className="text-5xl md:text-7xl font-black font-heading leading-tight tracking-tighter">
              Tax Forms, IRS Links & <span className="text-secondary italic">Refund Status Tools</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-medium max-w-2xl">
              Access essential IRS tax forms, direct payment links, and federal & state refund status tools—all in one place. Curated by IRS Enrolled Agents with 5+ years of experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. IRS FORMS GRID */}
      <section className="py-24 bg-background-soft relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="space-y-4">
                <h2 className="text-secondary font-black uppercase tracking-[0.2em] text-sm">Official Documentation</h2>
                <h2 className="text-3xl md:text-4xl font-black font-heading text-primary">Popular IRS Forms & Instructions</h2>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 font-bold text-sm bg-white px-6 py-3 rounded-2xl border border-gray-100 shadow-sm">
                <ShieldCheck className="text-secondary" />
                <span>Direct Official IRS Links</span>
              </div>
            </div>
            <AnimatedLine className="mt-8 max-w-xs" color="bg-primary" />
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {irsForms.map((form, idx) => (
              <FormCard key={idx} {...form} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. FEDERAL TOOLS SECTION */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 space-y-8"
            >
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-2xl animate-float">
                <CreditCard size={32} />
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl font-black font-heading text-primary leading-tight">IRS Direct Pay & Federal Tools</h2>
                <AnimatedLine className="w-24" />
              </div>
              <p className="text-lg text-gray-500 leading-relaxed">
                Take control of your federal tax situation with official digital tools. Pay securely, track your status, or manage your agreement directly with the IRS.
              </p>
              <div className="bg-primary/5 p-6 rounded-[2.5rem] border border-primary/10">
                <div className="flex items-start space-x-4">
                  <Clock className="text-secondary shrink-0 mt-1" />
                  <p className="text-sm font-bold text-primary/70 italic">
                    "Using official tools like Direct Pay reduces the risk of payment delays and missing records."
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="lg:col-span-8 grid md:grid-cols-2 gap-6"
            >
              {[
                { 
                  title: 'IRS Direct Pay', 
                  desc: 'Pay your federal taxes directly from your checking or savings account without any fees.',
                  link: 'https://www.irs.gov/payments/direct-pay',
                  icon: MousePointer2
                },
                { 
                  title: 'Where’s My Refund?', 
                  desc: 'Track your federal tax refund status securely. Updated every 24 hours.',
                  link: 'https://www.irs.gov/refunds',
                  icon: Search
                },
                { 
                  title: 'IRS Online Account', 
                  desc: 'Access your federal tax records, view balances, and manage payment plans online.',
                  link: 'https://www.irs.gov/payments/your-online-account',
                  icon: Globe
                },
                { 
                  title: 'Payment Plans', 
                  desc: 'Apply for an online payment agreement if you cannot pay your full tax debt immediately.',
                  link: 'https://www.irs.gov/payments/online-payment-agreement-application',
                  icon: CreditCard
                }
              ].map((tool, idx) => (
                <motion.a 
                  variants={fadeIn}
                  key={idx} 
                  href={tool.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-secondary transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="w-12 h-12 bg-background-soft rounded-2xl flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-all">
                      <tool.icon size={24} />
                    </div>
                    <h3 className="text-2xl font-black font-heading text-primary group-hover:text-secondary transition-colors">{tool.title}</h3>
                    <p className="text-gray-500 leading-relaxed font-medium">{tool.desc}</p>
                  </div>
                  <div className="mt-8 flex items-center text-primary font-black uppercase tracking-widest text-xs group-hover:translate-x-2 transition-transform relative overflow-hidden inline-block py-1">
                    Access Tool <ArrowRight size={16} className="ml-2" />
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary origin-left transition-transform duration-300"
                    />
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. FEDERAL REFUND STATUS CTA */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black font-heading leading-tight">Check Your Federal <br /> <span className="text-secondary italic">Tax Refund Status</span></h2>
              <AnimatedLine className="mx-auto w-32" />
            </div>
            <p className="text-xl text-white/70 font-medium">
              Use the official IRS tool to track your federal tax refund securely.
            </p>
            <a 
              href="https://www.irs.gov/refunds" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-secondary text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-secondary-hover transition-all shadow-2xl hover:scale-105 active:scale-95 group relative overflow-hidden"
            >
              <span className="relative z-10">Check Federal Refund Status</span>
              <ExternalLink className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl rounded-full" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 5. STATE REFUND STATUS GRID */}
      <section className="py-24 bg-background-soft relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-secondary font-black uppercase tracking-[0.2em] text-sm">Multi-State Support</h2>
            <h2 className="text-4xl md:text-5xl font-black font-heading text-primary tracking-tight">Check Your State Tax Refund Status</h2>
            <AnimatedLine className="mx-auto w-48" color="bg-primary" />
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">Click on any state below to be redirected to its official "Where's My Refund" tracking page.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
          >
            {states.map((state, idx) => (
              <StateCard key={idx} {...state} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. FINAL SUPPORT CTA */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-[4rem] p-12 lg:p-24 text-center space-y-10 relative overflow-hidden shadow-2xl group"
          >
             <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
             
             <div className="relative z-10 max-w-4xl mx-auto space-y-10">
               <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-[2.5rem] flex items-center justify-center mx-auto shadow-2xl animate-float border border-white/10">
                 <HelpCircle size={48} className="text-secondary" />
               </div>
               
               <div className="space-y-4">
                 <h2 className="text-4xl md:text-6xl font-black font-heading leading-tight text-white">Need Help with Forms or Refund Issues?</h2>
                 <AnimatedLine className="mx-auto w-40" />
                 <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mx-auto font-medium">
                   If you’re unsure which form to use, facing refund delays, or received an IRS notice, our IRS Enrolled Agents are here to help.
                 </p>
               </div>
               
               <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                 <Link to="/contact" className="bg-secondary text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-secondary-hover transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center group shadow-secondary/20">
                   Contact Our Tax Experts
                   <ArrowRight className="ml-2 w-7 h-7 group-hover:translate-x-1 transition-transform" />
                 </Link>
                 <a 
                   href="https://wa.me/919492164092" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="bg-whatsapp text-white px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
                 >
                   Chat on WhatsApp
                 </a>
               </div>
             </div>
          </motion.div>
        </div>
      </section>

      <div className="pb-16"></div>
    </div>
  );
};

export default FormsLinks;
