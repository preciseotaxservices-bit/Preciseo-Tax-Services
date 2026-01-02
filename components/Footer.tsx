
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, Facebook, Linkedin, 
  Instagram, Twitter, MessageCircle, ChevronRight 
} from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F8F9FC] text-primary pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP SECTION: Main Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          
          {/* LEFT: Company Overview */}
          <div className="md:col-span-5 space-y-8">
            <Link to="/" className="flex items-center group">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-secondary font-bold text-xl mr-3 shadow-lg group-hover:scale-110 transition-transform">P</div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-xl tracking-tighter text-primary leading-none">PRECISEO</span>
                <span className="text-[9px] font-bold text-secondary tracking-[0.3em] leading-none mt-1 uppercase">Tax Services</span>
              </div>
            </Link>
            
            <p className="text-gray-500 leading-relaxed text-lg max-w-md">
              Preciseo Tax Services Inc is a trusted U.S. tax firm providing accurate, compliant, and professional tax solutions. Led by IRS Enrolled Agents with 5+ years of experience, we serve individuals and businesses nationwide.
            </p>

            <div className="space-y-4">
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center text-primary font-bold hover:text-secondary transition-colors group">
                <div className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <Mail size={18} className="text-secondary" />
                </div>
                {COMPANY_INFO.email}
              </a>
              
              <div className="flex space-x-3 pt-2">
                {[
                  { icon: Facebook, color: 'hover:bg-[#1877F2]' },
                  { icon: Linkedin, color: 'hover:bg-[#0A66C2]' },
                  { icon: Twitter, color: 'hover:bg-[#000000]' },
                  { icon: Instagram, color: 'hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]' }
                ].map((social, idx) => (
                  <a 
                    key={idx} 
                    href="#" 
                    className={`w-10 h-10 bg-white shadow-sm border border-gray-50 rounded-full flex items-center justify-center text-primary hover:text-white transition-all ${social.color}`}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* MIDDLE: Office Location with LIVE MAP */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-xl font-black font-heading text-primary relative inline-block">
              Austin Office
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-secondary rounded-full"></span>
            </h3>
            <div className="flex items-start">
              <MapPin className="w-6 h-6 mr-4 text-secondary shrink-0 mt-1" />
              <div className="text-gray-500 text-lg leading-relaxed">
                5900 Balcones Drive #28223<br />
                Austin, TX 78731<br />
                United States
              </div>
            </div>
            <div className="pt-4">
              {/* LIVE GOOGLE MAP VIEW */}
              <div className="h-48 w-full bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 relative group">
                <iframe
                  title="Preciseo Tax Services Inc location map"
                  aria-label="Preciseo Tax Services Inc location map"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.725791340156!2d-97.754359!3d30.3444743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cb9af003a89f%3A0x7d6c5188f6c6e001!2s5900%20Balcones%20Dr%20%2328223%2C%20Austin%2C%20TX%2078731!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                ></iframe>
                {/* Visual Overlay for Fallback/Premium Look */}
                <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-2xl"></div>
              </div>
              <p className="mt-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest text-center">
                View our Austin office location
              </p>
            </div>
          </div>

          {/* RIGHT: Contact & Support */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-xl font-black font-heading text-primary relative inline-block">
              Contact & Support
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-secondary rounded-full"></span>
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white shadow-sm border border-gray-50 rounded-2xl flex items-center justify-center mr-4">
                  <Phone size={24} className="text-secondary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Call Our Office</p>
                  <p className="text-xl font-black text-primary">{COMPANY_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-white shadow-sm border border-gray-50 rounded-2xl flex items-center justify-center mr-4">
                  <MessageCircle size={24} className="text-[#25D366]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">WhatsApp Support</p>
                  <p className="text-lg font-bold text-primary">24/7 Chat Support Available</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link 
                to="/contact" 
                className="group w-full bg-primary text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center shadow-2xl shadow-primary/20 hover:-translate-y-1 transition-all"
              >
                Book a Consultation
                <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Column Links */}
        <div className="pt-16 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            
            {/* Column 1 - Company */}
            <div className="space-y-6">
              <h4 className="text-sm font-black uppercase tracking-widest text-primary">Company</h4>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-gray-500 hover:text-secondary transition-colors font-semibold">About Us</Link></li>
                <li><Link to="/faqs" className="text-gray-500 hover:text-secondary transition-colors font-semibold">FAQs</Link></li>
                <li><Link to="/blogs" className="text-gray-500 hover:text-secondary transition-colors font-semibold">Blogs</Link></li>
                <li><Link to="/contact" className="text-gray-500 hover:text-secondary transition-colors font-semibold">Contact Us</Link></li>
              </ul>
            </div>

            {/* Column 2 - Services */}
            <div className="space-y-6">
              <h4 className="text-sm font-black uppercase tracking-widest text-primary">Services</h4>
              <ul className="space-y-4">
                <li><Link to="/services" className="text-gray-500 hover:text-secondary transition-colors font-semibold">Individual Tax Filing</Link></li>
                <li><Link to="/services" className="text-gray-500 hover:text-secondary transition-colors font-semibold">ITIN Application</Link></li>
                <li><Link to="/services" className="text-gray-500 hover:text-secondary transition-colors font-semibold">FBAR & FATCA</Link></li>
                <li><Link to="/services" className="text-gray-500 hover:text-secondary transition-colors font-semibold">Tax Planning</Link></li>
              </ul>
            </div>

            {/* Column 3 - Services */}
            <div className="space-y-6">
              <h4 className="text-sm font-black uppercase tracking-widest text-primary">Services</h4>
              <ul className="space-y-4">
                <li><Link to="/services" className="text-gray-500 hover:text-secondary transition-colors font-semibold">Business Tax Filing</Link></li>
                <li><Link to="/services" className="text-gray-500 hover:text-secondary transition-colors font-semibold">Business Formation</Link></li>
                <li><Link to="/services" className="text-gray-500 hover:text-secondary transition-colors font-semibold">Payroll Processing</Link></li>
                <li><Link to="/services" className="text-gray-500 hover:text-secondary transition-colors font-semibold">Bookkeeping</Link></li>
              </ul>
            </div>

            {/* Column 4 - Other Links */}
            <div className="space-y-6">
              <h4 className="text-sm font-black uppercase tracking-widest text-primary">Other Links</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-500 hover:text-secondary transition-colors font-semibold">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-500 hover:text-secondary transition-colors font-semibold">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-500 hover:text-secondary transition-colors font-semibold">Terms of Use</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* COPYRIGHT BOTTOM */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 font-bold tracking-tight">
          <p>© {new Date().getFullYear()} Preciseo Tax Services Inc. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0 uppercase tracking-widest text-[10px]">
            <span className="text-primary/40">Proudly Based in Austin, TX</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
