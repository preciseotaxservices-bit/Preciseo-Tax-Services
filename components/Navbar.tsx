
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, Menu, X, LogIn, User, Briefcase, 
  Globe, IdCard, Target, Layers, Calculator, BookText, 
  PhoneCall 
} from 'lucide-react';
import { SERVICES } from '../constants';

interface NavbarProps {
  onOpenAuth: () => void;
}

const IconMap: Record<string, React.ElementType> = {
  User, Briefcase, Globe, IdCard, Target, Layers, Calculator, BookText
};

const Navbar: React.FC<NavbarProps> = ({ onOpenAuth }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    
    handleScroll();
    handleResize();
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Forms & Links', path: '/forms-links' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const handleMouseEnter = () => {
    if (!isMobile) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsServicesOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      timeoutRef.current = window.setTimeout(() => {
        setIsServicesOpen(false);
      }, 150);
    }
  };

  const handleServicesClick = (e: React.MouseEvent) => {
    if (isMobile) {
      e.preventDefault();
      setIsServicesOpen(!isServicesOpen);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsServicesOpen(!isServicesOpen);
    } else if (e.key === 'Escape') {
      setIsServicesOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* 1. Left: Company Logo */}
          <Link to="/" className="flex items-center group shrink-0">
            <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center text-secondary font-bold text-2xl mr-3 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-xl tracking-tighter text-primary leading-none">PRECISEO</span>
              <span className="text-[10px] font-bold text-secondary tracking-[0.3em] leading-none mt-1 uppercase">Tax Services</span>
            </div>
          </Link>

          {/* 2. Center: Navigation Menu (Desktop) */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link 
              to="/about" 
              className={`px-4 py-2 text-sm font-bold transition-all rounded-lg hover:bg-gray-50 ${
                location.pathname === '/about' ? 'text-secondary bg-secondary/5' : 'text-primary'
              }`}
            >
              About Us
            </Link>

            {/* Services Mega Dropdown Container */}
            <div 
              className="relative group/nav-item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={dropdownRef}
            >
              <button 
                onClick={handleServicesClick}
                onKeyDown={handleKeyDown}
                aria-haspopup="true"
                aria-expanded={isServicesOpen}
                className={`flex items-center px-4 py-2 text-sm font-bold transition-all rounded-lg hover:bg-gray-50 outline-none focus-visible:ring-2 focus-visible:ring-secondary ${
                  isServicesOpen || location.pathname.includes('/services') ? 'text-secondary' : 'text-primary'
                }`}
              >
                Services 
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Desktop Mega Dropdown Panel */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white shadow-[0_30px_60px_-15px_rgba(46,39,89,0.3)] rounded-2xl py-8 px-8 border border-gray-100 grid grid-cols-2 gap-x-8 gap-y-4 transition-all duration-300 origin-top z-[60] ${
                isServicesOpen ? 'opacity-100 translate-y-2 pointer-events-auto scale-100' : 'opacity-0 translate-y-4 pointer-events-none scale-95'
              }`}>
                {SERVICES.map((service) => {
                  const Icon = IconMap[service.iconName];
                  let linkPath = '/services';
                  if (service.id === 'individual-filing') linkPath = '/services/individual-filing';
                  if (service.id === 'business-filing') linkPath = '/services/business-filing';
                  if (service.id === 'fbar-fbar') linkPath = '/services/global-reporting';
                  if (service.id === 'itin-app') linkPath = '/services/itin-application';
                  if (service.id === 'tax-planning') linkPath = '/services/tax-planning';
                  if (service.id === 'business-formation') linkPath = '/services/business-formation';
                  if (service.id === 'payroll-processing') linkPath = '/services/payroll-processing';
                  if (service.id === 'bookkeeping') linkPath = '/services/bookkeeping';
                  
                  return (
                    <Link 
                      key={service.id}
                      to={linkPath}
                      className="group/item flex items-start p-3 rounded-xl hover:bg-background-soft transition-all"
                    >
                      <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center text-primary group-hover/item:bg-secondary group-hover/item:text-white transition-all mr-4 shrink-0">
                        {Icon && <Icon size={20} />}
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="font-bold text-primary text-sm group-hover/item:text-secondary transition-colors">{service.title}</span>
                        <span className="text-xs text-gray-400 line-clamp-1 mt-0.5">{service.description}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`px-4 py-2 text-sm font-bold transition-all rounded-lg hover:bg-gray-50 ${
                  location.pathname === link.path ? 'text-secondary bg-secondary/5' : 'text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* 3. Right: CTA Buttons (Desktop) */}
          <div className="hidden lg:flex items-center space-x-3 shrink-0">
            <Link 
              to="/contact"
              className="bg-primary/5 hover:bg-primary/10 text-primary px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center"
            >
              <PhoneCall className="w-4 h-4 mr-2" />
              Free Consultation
            </Link>
            <button 
              onClick={onOpenAuth}
              className="bg-secondary hover:bg-secondary-hover text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-xl shadow-secondary/20 hover:-translate-y-0.5 active:scale-95"
            >
              Signup / Login
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-4">
            <button 
              onClick={onOpenAuth}
              className="bg-secondary text-white p-2.5 rounded-xl shadow-lg active:scale-90 transition-transform"
            >
              <LogIn size={20} />
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="p-2 text-primary hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 fixed inset-x-0 bottom-0 top-[76px] overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300 z-50">
          <div className="px-6 py-8 space-y-6">
            <Link 
              to="/about" 
              className="block px-4 py-4 text-xl font-black text-primary border-b border-gray-50 active:text-secondary"
            >
              About Us
            </Link>
            
            <div className="space-y-4">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex items-center justify-between px-4 py-4 text-xl font-black text-primary border-b border-gray-50 outline-none"
              >
                <span>Services</span>
                <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Mobile Services Accordion Content */}
              <div className={`grid grid-cols-1 gap-2 overflow-hidden transition-all duration-500 ${
                isServicesOpen ? 'max-h-[800px] opacity-100 mt-4' : 'max-h-0 opacity-0'
              }`}>
                {SERVICES.map(s => {
                  const Icon = IconMap[s.iconName];
                  let linkPath = '/services';
                  if (s.id === 'individual-filing') linkPath = '/services/individual-filing';
                  if (s.id === 'business-filing') linkPath = '/services/business-filing';
                  if (s.id === 'fbar-fbar') linkPath = '/services/global-reporting';
                  if (s.id === 'itin-app') linkPath = '/services/itin-application';
                  if (s.id === 'tax-planning') linkPath = '/services/tax-planning';
                  if (s.id === 'business-formation') linkPath = '/services/business-formation';
                  if (s.id === 'payroll-processing') linkPath = '/services/payroll-processing';
                  if (s.id === 'bookkeeping') linkPath = '/services/bookkeeping';

                  return (
                    <Link key={s.id} to={linkPath} className="flex items-center p-4 bg-background-soft rounded-2xl active:scale-95 transition-transform">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mr-4">
                        {Icon && <Icon size={20} />}
                      </div>
                      <span className="font-bold text-primary">{s.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-gray-100">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 px-4">Quick Navigation</p>
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className="block px-4 py-4 text-xl font-black text-primary border-b border-gray-50 last:border-0 active:text-secondary"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-8 px-4">
              <Link 
                to="/contact" 
                className="w-full bg-primary text-white py-5 rounded-2xl font-black flex justify-center items-center text-lg shadow-2xl shadow-primary/20 active:scale-95 transition-transform"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
