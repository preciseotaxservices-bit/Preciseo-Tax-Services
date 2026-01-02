
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/Services';
import IndividualTaxFiling from './pages/IndividualTaxFiling';
import BusinessTaxFiling from './pages/BusinessTaxFiling';
import GlobalIncomeReporting from './pages/GlobalIncomeReporting';
import ITINApplication from './pages/ITINApplication';
import TaxPlanning from './pages/TaxPlanning';
import BusinessFormation from './pages/BusinessFormation';
import PayrollProcessing from './pages/PayrollProcessing';
import Bookkeeping from './pages/Bookkeeping';
import FormsLinks from './pages/FormsLinks';
import FAQs from './pages/FAQs';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onOpenAuth={() => setAuthModalOpen(true)} />
      
      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/individual-filing" element={<IndividualTaxFiling />} />
          <Route path="/services/business-filing" element={<BusinessTaxFiling />} />
          <Route path="/services/global-reporting" element={<GlobalIncomeReporting />} />
          <Route path="/services/itin-application" element={<ITINApplication />} />
          <Route path="/services/tax-planning" element={<TaxPlanning />} />
          <Route path="/services/business-formation" element={<BusinessFormation />} />
          <Route path="/services/payroll-processing" element={<PayrollProcessing />} />
          <Route path="/services/bookkeeping" element={<Bookkeeping />} />
          <Route path="/forms-links" element={<FormsLinks />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      
      {/* 24/7 WhatsApp Support Floating Button */}
      <WhatsAppButton />
      
      {isAuthModalOpen && (
        <AuthModal onClose={() => setAuthModalOpen(false)} />
      )}
    </div>
  );
};

export default App;
