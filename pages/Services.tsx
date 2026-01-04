
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, UserCheck, Building2, Globe, 
  CreditCard, Target, Layers, Calculator, BookOpen,
  ArrowRightCircle
} from 'lucide-react';
import { SERVICES } from '../constants';

const IconMap: Record<string, React.ElementType> = {
  User: UserCheck,
  Briefcase: Building2,
  Globe: Globe,
  IdCard: CreditCard,
  Target: Target,
  Layers: Layers,
  Calculator: Calculator,
  BookText: BookOpen
};

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold font-heading text-primary mb-6">Expert Financial Services</h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            From individual filings to complex corporate structuring, we offer a full suite of services designed to optimize your financial health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {SERVICES.map((service, index) => {
            const Icon = IconMap[service.iconName] || ArrowRightCircle;
            let linkPath = '/services';
            if (service.id === 'individual-filing') linkPath = '/services/individual-tax-filing';
            if (service.id === 'business-filing') linkPath = '/services/business-tax-filing';
            if (service.id === 'fbar-fbar') linkPath = '/services/fbar-fatca';
            if (service.id === 'itin-app') linkPath = '/services/itin-application';
            if (service.id === 'tax-planning') linkPath = '/services/tax-planning';
            if (service.id === 'business-formation') linkPath = '/services/business-formation';
            if (service.id === 'payroll-processing') linkPath = '/services/payroll-processing';
            if (service.id === 'bookkeeping') linkPath = '/services/bookkeeping';
            
            return (
              <div key={service.id} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-all">
                      <Icon className="w-8 h-8" />
                    </div>
                    <span className="text-gray-100 font-bold text-6xl group-hover:text-secondary/10 transition-colors">0{index + 1}</span>
                  </div>
                  <h3 className="text-3xl font-bold font-heading text-primary mb-6 group-hover:text-secondary transition-colors">{service.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {service.description} We deliver accurate results and helping our clients understand the nuances of {service.title.toLowerCase()} for better long-term success.
                  </p>
                </div>
                <Link to={linkPath} className="flex items-center text-primary font-bold hover:text-secondary transition-colors group/btn">
                  Learn More About This Service <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
