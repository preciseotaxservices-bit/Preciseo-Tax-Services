
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2,
  Sparkles,
  PhoneCall,
  Loader2,
  MessageCircle,
  Building2
} from 'lucide-react';
import { COMPANY_INFO } from '../constants';

// Line Animation Component
const SectionLine = ({ className = "" }) => (
  <motion.div 
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, ease: "easeInOut" }}
    className={`h-[1px] w-full bg-gradient-to-r from-secondary/40 via-primary/20 to-transparent origin-left rounded-full ${className}`}
  />
);

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: 'Individual Tax Filing',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate Server Action / API Submission
    await new Promise(resolve => setTimeout(resolve, 1800));
    
    console.log("Form submitted to server action:", formData);
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-gray-50">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Subtle Floating 3D Elements */}
          <div className="absolute top-20 left-[10%] text-primary/10 animate-float-slow">
            <MessageSquare size={120} strokeWidth={1} />
          </div>
          <div className="absolute bottom-20 right-[15%] text-secondary/10 animate-float">
            <PhoneCall size={100} strokeWidth={1} />
          </div>
          <div className="absolute top-1/2 right-[5%] text-accent/10 animate-float-delayed">
            <Mail size={80} strokeWidth={1} />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 bg-primary/5 px-4 py-2 rounded-full border border-primary/10"
            >
              <Sparkles size={16} className="text-secondary" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">Get Expert Support</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black font-heading text-primary leading-tight tracking-tighter"
            >
              Contact Our <br />
              <span className="text-secondary italic">Tax Experts</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-500 leading-relaxed font-medium"
            >
              Have questions about tax filing, IRS notices, or business services? <br className="hidden md:block" />
              Our IRS Enrolled Agents with 5+ years of experience are here to help.
            </motion.p>

            <SectionLine className="mt-8 max-w-sm" />
          </div>
        </div>
      </section>

      {/* MAIN SECTION: FORM + INFO */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* LEFT: CONTACT FORM */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_30px_100px_rgba(46,39,89,0.08)] border border-gray-100 relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16 space-y-6"
                  >
                    <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-500 mb-8">
                      <CheckCircle2 size={64} className="animate-bounce-slow" />
                    </div>
                    <h3 className="text-3xl font-black text-primary font-heading">Thank you!</h3>
                    <p className="text-xl text-gray-500 font-medium">Our team will contact you shortly.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-secondary font-bold hover:underline mt-8"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Full Name *</label>
                        <input 
                          type="text" 
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all font-medium text-primary"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Phone Number *</label>
                          <input 
                            type="tel" 
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (000) 000-0000"
                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all font-medium text-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Email Address *</label>
                          <input 
                            type="email" 
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all font-medium text-primary"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Services *</label>
                        <div className="relative">
                          <select 
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all font-medium text-primary appearance-none cursor-pointer"
                          >
                            <option>Individual Tax Filing</option>
                            <option>Business Tax Filing</option>
                            <option>FBAR & FATCA / Global Income Reporting</option>
                            <option>ITIN Application</option>
                            <option>Tax Planning</option>
                            <option>Business Formation</option>
                            <option>Payroll Processing</option>
                            <option>Bookkeeping</option>
                            <option>IRS Notice / Audit Assistance</option>
                            <option>Other</option>
                          </select>
                          <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                            <ShieldCheck size={20} />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Message *</label>
                        <textarea 
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="How can our tax experts assist you?"
                          className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all font-medium text-primary resize-none"
                        ></textarea>
                      </div>

                      <button 
                        type="submit"
                        disabled={loading}
                        className="w-full bg-secondary text-white py-5 rounded-2xl font-black text-xl hover:bg-secondary-hover transition-all shadow-xl hover:-translate-y-1 active:scale-[0.98] flex items-center justify-center group disabled:opacity-70"
                      >
                        {loading ? (
                          <Loader2 size={24} className="animate-spin" />
                        ) : (
                          <>
                            Submit Request
                            <Send size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* RIGHT: CONTACT INFO */}
            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="text-3xl font-black font-heading text-primary">Our Contact Information</h2>
                  <SectionLine className="max-w-xs" />
                </div>

                <div className="grid gap-8">
                  <div className="flex items-start group">
                    <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                      <Building2 size={28} />
                    </div>
                    <div className="ml-6">
                      <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Company Name</p>
                      <p className="text-xl font-black text-primary">{COMPANY_INFO.name}</p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                      <MapPin size={28} />
                    </div>
                    <div className="ml-6">
                      <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Austin Headquarters</p>
                      <p className="text-xl font-bold text-gray-600 leading-tight">
                        5900 Balcones Drive #28223 <br />
                        Austin, TX 78731
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-14 h-14 bg-secondary/5 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shrink-0">
                      <Mail size={28} />
                    </div>
                    <div className="ml-6">
                      <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Email Address</p>
                      <p className="text-xl font-black text-primary">{COMPANY_INFO.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                      <Phone size={28} />
                    </div>
                    <div className="ml-6">
                      <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Phone Support</p>
                      <p className="text-xl font-black text-primary">{COMPANY_INFO.phone}</p>
                    </div>
                  </div>

                  <a 
                    href="https://wa.me/919492164092" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-start group"
                  >
                    <div className="w-14 h-14 bg-whatsapp/10 rounded-2xl flex items-center justify-center text-whatsapp group-hover:bg-whatsapp group-hover:text-white transition-all shrink-0">
                      <MessageCircle size={28} />
                    </div>
                    <div className="ml-6">
                      <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">WhatsApp Support</p>
                      <p className="text-xl font-black text-primary flex items-center">
                        24/7 Chat Available 
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </p>
                    </div>
                  </a>
                </div>
              </motion.div>

              {/* 3D Visual Trust Accent */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-primary p-10 rounded-[3rem] text-white relative overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                <div className="relative z-10 flex items-center">
                  <div className="w-16 h-16 bg-white/10 rounded-[1.5rem] flex items-center justify-center mr-6">
                    <ShieldCheck size={36} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black font-heading leading-tight">Secure Communication</h4>
                    <p className="text-white/60 font-medium">End-to-end encrypted messaging.</p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* MAP INTEGRATION */}
      <section className="py-24 bg-background-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-center text-center space-y-4">
            <h2 className="text-4xl font-black font-heading text-primary">Austin Office Location</h2>
            <SectionLine className="max-w-[200px]" />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="h-[500px] w-full bg-white rounded-[4rem] overflow-hidden shadow-2xl border border-gray-100 relative group"
          >
            <iframe
              title="Preciseo Tax Services Inc location map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.725791340156!2d-97.754359!3d30.3444743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cb9af003a89f%3A0x7d6c5188f6c6e001!2s5900%20Balcones%20Dr%20%2328223%2C%20Austin%2C%20TX%2078731!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
            ></iframe>
            {/* Overlay for interactive feel */}
            <div className="absolute inset-0 pointer-events-none border-[12px] border-white/20 rounded-[4rem]"></div>
          </motion.div>
        </div>
      </section>

      <div className="pb-16"></div>
    </div>
  );
};

export default Contact;
