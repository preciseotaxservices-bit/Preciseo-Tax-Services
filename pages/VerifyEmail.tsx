
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, Loader2, ArrowRight, ShieldCheck } from 'lucide-react';
import { authApi } from '../services/authService';

const VerifyEmail: React.FC<{ onVerified: () => void }> = ({ onVerified }) => {
  const { token } = useParams<{ token: string }>();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const verify = async () => {
      if (!token) {
        setStatus('error');
        setMessage('Missing verification token.');
        return;
      }

      const result = await authApi.verifyToken(token);
      
      // Artificial delay for UX "Searching..." feel
      await new Promise(r => setTimeout(r, 2000));

      if (result.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setMessage(result.message);
      }
    };

    verify();
  }, [token]);

  const handleLogin = () => {
    navigate('/');
    // We pass a state or call a callback to open the login modal on the home page
    onVerified();
  };

  return (
    <div className="min-h-screen bg-background-soft flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-[3rem] shadow-2xl p-12 text-center"
      >
        {status === 'loading' && (
          <div className="space-y-6">
            <Loader2 className="w-16 h-16 text-secondary animate-spin mx-auto" />
            <h1 className="text-3xl font-black font-heading text-primary">Verifying Email</h1>
            <p className="text-gray-500 font-bold">Authenticating your account token with the IRS secure registry...</p>
          </div>
        )}

        {status === 'success' && (
          <div className="space-y-8">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-500 shadow-inner">
              <CheckCircle2 size={48} className="animate-bounce-slow" />
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-black font-heading text-primary">Verified Successfully</h1>
              <p className="text-gray-500 font-bold">Your email has been verified. You can now access the Preciseo Tax portal.</p>
            </div>
            <button 
              onClick={handleLogin}
              className="w-full bg-primary text-white py-5 rounded-2xl font-black text-xl hover:bg-primary-light transition-all shadow-xl flex items-center justify-center group"
            >
              Continue to Login
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

        {status === 'error' && (
          <div className="space-y-8">
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto text-secondary">
              <XCircle size={48} />
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-black font-heading text-primary">Verification Failed</h1>
              <p className="text-gray-500 font-bold">{message || 'The verification link is invalid or has expired.'}</p>
            </div>
            <button 
              onClick={() => navigate('/')}
              className="w-full bg-white border-2 border-primary/10 text-primary py-5 rounded-2xl font-black text-xl hover:bg-gray-50 transition-all"
            >
              Back to Home
            </button>
          </div>
        )}

        <div className="mt-12 pt-8 border-t border-gray-50 flex items-center justify-center space-x-4 opacity-40">
           <ShieldCheck size={20} className="text-primary" />
           <span className="text-[10px] font-black uppercase tracking-widest text-primary">IRS Authorized Portal Security</span>
        </div>
      </motion.div>
    </div>
  );
};

export default VerifyEmail;
