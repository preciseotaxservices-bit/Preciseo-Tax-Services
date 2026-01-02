
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Plus, 
  Minus, 
  HelpCircle, 
  ShieldCheck, 
  FileText, 
  RefreshCcw, 
  AlertTriangle, 
  Lock,
  ArrowRight,
  Sparkles,
  Calculator,
  Target,
  FileCheck,
  TrendingUp,
  ShieldAlert,
  Search,
  // Added MessageSquare to solve "Cannot find name 'MessageSquare'" error
  MessageSquare
} from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div 
      className={`group bg-white rounded-3xl overflow-hidden transition-all duration-500 border-2 ${
        isOpen ? 'border-secondary shadow-2xl ring-4 ring-secondary/5 -translate-y-1' : 'border-gray-100 shadow-sm hover:border-gray-200 hover:shadow-md'
      }`}
    >
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none"
      >
        <span className={`text-xl font-black font-heading leading-tight transition-colors ${isOpen ? 'text-secondary' : 'text-primary'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 p-2 rounded-2xl transition-all duration-500 ${
          isOpen ? 'bg-secondary text-white rotate-180 scale-110' : 'bg-background-soft text-gray-400 group-hover:bg-gray-200 group-hover:text-primary'
        }`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 md:px-8 pb-8">
          <div className="h-px bg-gray-50 mb-6"></div>
          <p className="text-gray-500 text-lg leading-relaxed font-medium">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQCategory: React.FC<{ title: string; icon: React.ElementType; children: React.ReactNode; decoration?: React.ReactNode }> = ({ title, icon: Icon, children, decoration }) => (
  <div className="relative space-y-8 mb-20">
    {/* Decorative 3D Element for the Section */}
    {decoration}
    
    <div className="flex items-center space-x-4 mb-4">
      <div className="w-14 h-14 bg-white shadow-xl rounded-2xl flex items-center justify-center text-secondary border border-gray-100 animate-float">
        <Icon size={28} />
      </div>
      <h2 className="text-2xl md:text-3xl font-black font-heading text-primary uppercase tracking-tighter">{title}</h2>
    </div>
    <div className="space-y-6">
      {children}
    </div>
  </div>
);

const FAQs: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['gen-1']);

  const toggleFAQ = (id: string) => {
    setOpenIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION WITH 3D VISUALS */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-36 bg-primary text-white overflow-hidden">
        {/* 3D Background Elements Layer */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Abstract Question Mark Visual */}
          <div className="absolute top-1/2 right-[10%] -translate-y-1/2 opacity-20 hidden lg:block animate-float-slow">
            <HelpCircle size={400} strokeWidth={0.5} />
          </div>
          
          {/* Floating geometric rings */}
          <div className="absolute top-20 left-[15%] w-48 h-48 border-[1px] border-white/10 rounded-full animate-float blur-[1px]"></div>
          <div className="absolute bottom-20 right-[5%] w-72 h-72 border-[1px] border-secondary/20 rounded-full animate-float-delayed blur-[2px]"></div>
          
          {/* 3D Floating Icons */}
          <div className="absolute top-1/4 left-[5%] animate-bounce-slow">
            <Calculator size={48} className="text-accent/30 drop-shadow-2xl" />
          </div>
          <div className="absolute bottom-1/4 left-[20%] animate-float">
            <FileCheck size={40} className="text-white/20" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-8 text-center lg:text-left mx-auto lg:mx-0">
            <div className="inline-flex items-center bg-white/5 border border-white/10 px-6 py-2 rounded-full text-secondary text-xs font-black uppercase tracking-[0.3em] backdrop-blur-md">
              <Sparkles className="w-4 h-4 mr-2" />
              Information & Authority
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading leading-[1.1] tracking-tighter">
              Frequently <br /> Asked <span className="text-secondary italic">Questions</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-medium max-w-2xl">
              Get clear answers to common tax, filing, refund, and IRS-related questions. Our IRS Enrolled Agents are here to help you every step of the way.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 flex items-center space-x-3">
                <ShieldCheck size={20} className="text-secondary" />
                <span className="text-sm font-bold uppercase tracking-widest">Authorized Agents</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 flex items-center space-x-3">
                <RefreshCcw size={20} className="text-accent" />
                <span className="text-sm font-bold uppercase tracking-widest">Real-time Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FAQ GRID CONTENT WITH DECORATIVE 3D MODELS */}
      <section className="py-24 bg-background-soft relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-4 items-start">
            
            {/* COLUMN 1 */}
            <div className="space-y-4">
              {/* Category: General Questions */}
              <FAQCategory 
                title="General Questions" 
                icon={HelpCircle}
                decoration={
                  <div className="absolute -left-24 top-0 opacity-10 hidden xl:block animate-float">
                    <TrendingUp size={120} strokeWidth={1} className="text-primary" />
                  </div>
                }
              >
                <FAQItem 
                  question="What is the role of a CPA or tax professional in bookkeeping?"
                  answer="A qualified tax professional ensures your financial records are accurate, compliant, and well-organized. While bookkeeping focuses on recording transactions, our experts review, analyze, and ensure your records align with IRS requirements and long-term tax planning goals."
                  isOpen={openIds.includes('gen-1')}
                  onClick={() => toggleFAQ('gen-1')}
                />
                <FAQItem 
                  question="How can professional bookkeeping services benefit my business?"
                  answer="Professional bookkeeping helps maintain accurate financial data, improves cash flow visibility, supports tax compliance, and reduces the risk of penalties or errors during tax filing."
                  isOpen={openIds.includes('gen-2')}
                  onClick={() => toggleFAQ('gen-2')}
                />
                <FAQItem 
                  question="How often should I update my financial records and books?"
                  answer="We recommend updating records monthly at a minimum. Regular updates help avoid last-minute issues during tax season and ensure accurate financial reporting."
                  isOpen={openIds.includes('gen-3')}
                  onClick={() => toggleFAQ('gen-3')}
                />
                <FAQItem 
                  question="Can you help with both personal and business tax needs?"
                  answer="Yes. We assist individuals, self-employed professionals, and businesses with tax filing, compliance, planning, and IRS representation."
                  isOpen={openIds.includes('gen-4')}
                  onClick={() => toggleFAQ('gen-4')}
                />
                <FAQItem 
                  question="What is the cost of tax and bookkeeping services?"
                  answer="Our pricing depends on the complexity of your tax situation. We offer transparent pricing and discuss costs upfront before starting any work."
                  isOpen={openIds.includes('gen-5')}
                  onClick={() => toggleFAQ('gen-5')}
                />
              </FAQCategory>

              {/* Category: Security & Compliance */}
              <FAQCategory 
                title="Security & Compliance" 
                icon={Lock}
                decoration={
                  <div className="absolute -left-20 bottom-0 opacity-10 hidden xl:block animate-pulse-soft">
                    <ShieldCheck size={100} strokeWidth={1} className="text-secondary" />
                  </div>
                }
              >
                <FAQItem 
                  question="How do I securely upload my tax documents?"
                  answer="We use secure, encrypted systems to protect your personal and financial information at all times. Our portal is built on enterprise-grade security protocols."
                  isOpen={openIds.includes('sec-1')}
                  onClick={() => toggleFAQ('sec-1')}
                />
                <FAQItem 
                  question="Is my data kept confidential?"
                  answer="Absolutely. Client confidentiality and data security are a top priority, and all information is handled in compliance with strict IRS standards and privacy laws."
                  isOpen={openIds.includes('sec-2')}
                  onClick={() => toggleFAQ('sec-2')}
                />
              </FAQCategory>
            </div>

            {/* COLUMN 2 */}
            <div className="space-y-4">
              {/* Category: Tax Filing Questions */}
              <FAQCategory 
                title="Tax Filing Questions" 
                icon={FileText}
                decoration={
                  <div className="absolute -right-24 top-0 opacity-10 hidden xl:block animate-float-delayed">
                    <Target size={120} strokeWidth={1} className="text-accent" />
                  </div>
                }
              >
                <FAQItem 
                  question="I am a new client and would like to file my taxes. How do I get started?"
                  answer="Simply contact us through our website or WhatsApp support. We will guide you through our secure digital onboarding and document submission process."
                  isOpen={openIds.includes('file-1')}
                  onClick={() => toggleFAQ('file-1')}
                />
                <FAQItem 
                  question="I am an existing client. What is the next step to file my taxes?"
                  answer="Log into our secure portal or upload your documents directly through the secure vault. Our team will review and follow up within 24–48 hours."
                  isOpen={openIds.includes('file-2')}
                  onClick={() => toggleFAQ('file-2')}
                />
                <FAQItem 
                  question="What documents do I need to provide for tax filing?"
                  answer="Common documents include W-2s, 1099s, income statements, expense records, prior-year returns, and valid identification documents for all filers."
                  isOpen={openIds.includes('file-3')}
                  onClick={() => toggleFAQ('file-3')}
                />
                <FAQItem 
                  question="What is the deadline to file my taxes?"
                  answer="The standard IRS deadline is April 15, unless extended. We proactively help clients file for extensions when more time is needed to ensure accuracy."
                  isOpen={openIds.includes('file-4')}
                  onClick={() => toggleFAQ('file-4')}
                />
                <FAQItem 
                  question="Can I file my taxes online?"
                  answer="Yes. Our secure end-to-end digital process allows you to upload documents, sign electronically, and complete filing completely remotely."
                  isOpen={openIds.includes('file-5')}
                  onClick={() => toggleFAQ('file-5')}
                />
              </FAQCategory>

              {/* Category: Refund Questions */}
              <FAQCategory 
                title="Refund Questions" 
                icon={RefreshCcw}
                decoration={
                  <div className="absolute -right-20 top-1/2 opacity-10 hidden xl:block animate-bounce-slow">
                    <TrendingUp size={80} strokeWidth={1} className="text-whatsapp" />
                  </div>
                }
              >
                <FAQItem 
                  question="When can I expect to receive my tax refund?"
                  answer="Most IRS refunds are issued within 21 days of e-filing. However, complex reviews or banking delays can sometimes extend this timeframe."
                  isOpen={openIds.includes('ref-1')}
                  onClick={() => toggleFAQ('ref-1')}
                />
                <FAQItem 
                  question="How can I track my tax refund?"
                  answer="You can use the official IRS “Where’s My Refund?” tool with your SSN, filing status, and refund amount, or contact our team for a status update."
                  isOpen={openIds.includes('ref-2')}
                  onClick={() => toggleFAQ('ref-2')}
                />
                <FAQItem 
                  question="Why is my refund delayed?"
                  answer="Delays often result from missing documents, math errors, identity verification requests, or special IRS review cycles."
                  isOpen={openIds.includes('ref-3')}
                  onClick={() => toggleFAQ('ref-3')}
                />
              </FAQCategory>

              {/* Category: IRS Notice & Audit Questions */}
              <FAQCategory 
                title="IRS Notice & Audit" 
                icon={ShieldAlert}
                decoration={
                  <div className="absolute -right-24 bottom-10 opacity-10 hidden xl:block animate-float">
                    <AlertTriangle size={130} strokeWidth={1} className="text-secondary" />
                  </div>
                }
              >
                <FAQItem 
                  question="What should I do if I receive an IRS notice after filing?"
                  answer="Remain calm—notices are routine. Contact us immediately with a copy of the notice so our IRS Enrolled Agents can analyze and respond professionally."
                  isOpen={openIds.includes('audit-1')}
                  onClick={() => toggleFAQ('audit-1')}
                />
                <FAQItem 
                  question="Do you assist with IRS audits?"
                  answer="Yes. As IRS Enrolled Agents, we have unlimited practice rights to represent you during IRS audits, appeals, and correspondence nationwide."
                  isOpen={openIds.includes('audit-2')}
                  onClick={() => toggleFAQ('audit-2')}
                />
                <FAQItem 
                  question="Can you communicate with the IRS on my behalf?"
                  answer="Absolutely. With a signed Power of Attorney (Form 2848), we act as your official representative, handling all calls and letters directly with the IRS."
                  isOpen={openIds.includes('audit-3')}
                  onClick={() => toggleFAQ('audit-3')}
                />
              </FAQCategory>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CALL TO ACTION WITH 3D DEPTH */}
      <section className="py-24 relative overflow-hidden">
        {/* Floating background blobs */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[5rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl group">
            {/* Visual background 3D icon */}
            <div className="absolute top-0 right-0 opacity-5 rotate-12 -translate-y-20 translate-x-20 transition-transform group-hover:scale-110 duration-1000">
               <HelpCircle size={500} strokeWidth={0.5} />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto space-y-10">
              <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-[2.5rem] flex items-center justify-center mx-auto shadow-2xl animate-float border border-white/10">
                <MessageSquare size={48} className="text-secondary" />
              </div>
              
              <div className="space-y-4">
                <h2 className="text-4xl md:text-7xl font-black font-heading leading-tight text-white">Still Have <span className="text-secondary italic">Questions?</span></h2>
                <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mx-auto font-medium">
                  Our IRS Enrolled Agents are here to help you with personalized guidance and professional tax support tailored to your unique situation.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Link to="/contact" className="bg-secondary text-white px-12 py-5 rounded-3xl font-black text-xl hover:bg-secondary-hover transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center group shadow-secondary/20">
                  Contact Our Experts
                  <ArrowRight className="ml-2 w-7 h-7 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link to="/contact" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-3xl font-black text-xl hover:bg-white/20 transition-all flex items-center justify-center hover:scale-105 active:scale-95">
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SPACING FOR FLOATING BUTTON */}
      <div className="pb-20"></div>
    </div>
  );
};

export default FAQs;
