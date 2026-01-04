
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
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
import VerifyEmail from './pages/VerifyEmail';
import ResetPassword from './pages/ResetPassword';

const App: React.FC = () => {
  const [authModal, setAuthModal] = useState<{ 
    isOpen: boolean; 
    mode: 'login' | 'signup' | 'forgot-password';
    message?: string;
  }>({
    isOpen: false,
    mode: 'login'
  });

  const openAuth = (mode: 'login' | 'signup' | 'forgot-password' = 'login', message?: string) => {
    setAuthModal({ isOpen: true, mode, message });
  };

  const closeAuth = () => {
    setAuthModal(prev => ({ ...prev, isOpen: false, message: undefined }));
  };

  const handleEmailVerified = () => {
    openAuth('login', 'Your email has been verified successfully. Please login.');
  };

  const handleResetSuccess = () => {
    openAuth('login', 'Password reset successfully. Please login.');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      
      <Navbar onOpenAuth={() => openAuth('login')} />
      
      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<Home onOpenAuth={() => openAuth('signup')} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/individual-tax-filing" element={<IndividualTaxFiling />} />
          <Route path="/services/business-tax-filing" element={<BusinessTaxFiling />} />
          <Route path="/services/fbar-fatca" element={<GlobalIncomeReporting />} />
          <Route path="/services/itin-application" element={<ITINApplication />} />
          <Route path="/services/tax-planning" element={<TaxPlanning />} />
          <Route path="/services/business-formation" element={<BusinessFormation />} />
          <Route path="/services/payroll-processing" element={<PayrollProcessing />} />
          <Route path="/services/bookkeeping" element={<Bookkeeping />} />
          <Route path="/forms-links" element={<FormsLinks />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/verify/:token" element={<VerifyEmail onVerified={handleEmailVerified} />} />
          <Route path="/reset-password/:token" element={<ResetPassword onResetSuccess={handleResetSuccess} />} />
        </Routes>
      </main>

      <Footer />
      
      <WhatsAppButton />
      
      {authModal.isOpen && (
        <AuthModal 
          initialMode={authModal.mode} 
          initialMessage={authModal.message}
          onClose={closeAuth} 
        />
      )}
    </div>
  );
};

export default App;
