
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, Phone, Loader2, CheckCircle2, Globe, ShieldCheck, AlertCircle, Eye, EyeOff, RefreshCcw, Key } from 'lucide-react';
import { UserFormData } from '../types';
import { authApi } from '../services/authService';

interface AuthModalProps {
  onClose: () => void;
  initialMode?: 'login' | 'signup' | 'forgot-password';
  initialMessage?: string;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose, initialMode = 'login', initialMessage }) => {
  const [mode, setMode] = useState<'login' | 'signup' | 'forgot-password'>(initialMode);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [systemMessage, setSystemMessage] = useState(initialMessage || '');
  
  const [formData, setFormData] = useState<UserFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    timezone: '',
    password: '',
    confirmPassword: ''
  });

  const [passwordStrength, setPasswordStrength] = useState({ score: 0, label: '', color: 'bg-gray-200' });

  const checkPasswordStrength = (pass: string) => {
    let score = 0;
    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[a-z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    let label = 'Weak';
    let color = 'bg-secondary';
    if (score === 3) { label = 'Medium'; color = 'bg-yellow-500'; }
    if (score === 4) { label = 'Strong'; color = 'bg-green-500'; }
    if (pass.length === 0) { label = ''; color = 'bg-gray-200'; }
    setPasswordStrength({ score, label, color });
  };

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleResend = async () => {
    setResendLoading(true);
    try {
      const res = await authApi.resendVerification(formData.email);
      if (res.success) setSystemMessage("Verification email resent successfully.");
      else alert(res.message);
    } finally {
      setResendLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSystemMessage('');
    
    try {
      if (mode === 'signup') {
        const res = await authApi.signup(formData);
        if (res.success) setSubmitted(true);
        else setErrors({ email: res.message });
      } else if (mode === 'login') {
        const res = await authApi.login(formData.email, formData.password || '');
        if (res.success) {
          alert(`Successfully logged in as ${formData.email}`);
          onClose();
        } else {
          if (res.message === 'UNVERIFIED') setSystemMessage('Please verify your account using the link sent to your email before logging in.');
          else setErrors({ password: res.message });
        }
      } else if (mode === 'forgot-password') {
        const res = await authApi.forgotPassword(formData.email);
        setSystemMessage(res.message);
        if (res.success) {
          await new Promise(r => setTimeout(r, 2000));
          setMode('login');
        }
      }
    } catch (err) {
      setSystemMessage("Unable to process request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') setFormData(prev => ({ ...prev, [name]: value.replace(/\D/g, '') }));
    else {
      setFormData(prev => ({ ...prev, [name]: value }));
      if (name === 'password') checkPasswordStrength(value);
    }
    if (errors[name]) setErrors(prev => { const n = { ...prev }; delete n[name]; return n; });
  };

  const isFormValid = () => {
    if (mode === 'login') return validateEmail(formData.email) && formData.password;
    if (mode === 'forgot-password') return validateEmail(formData.email);
    return (
      formData.firstName && formData.lastName && formData.phone && 
      validateEmail(formData.email) && formData.timezone && 
      passwordStrength.score >= 4 && formData.password === formData.confirmPassword
    );
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-primary/60 backdrop-blur-md" onClick={onClose} />
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative bg-white w-full max-w-xl rounded-[3rem] shadow-2xl overflow-hidden">
        <div className="p-10">
          <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-primary transition-colors p-2 hover:bg-gray-50 rounded-full"><X size={24} /></button>
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12 space-y-8">
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-500 shadow-inner"><CheckCircle2 size={56} className="animate-bounce-slow" /></div>
                <div className="space-y-4 px-4">
                  <h2 className="text-4xl font-black font-heading text-primary">Check Your Email</h2>
                  <p className="text-gray-500 font-bold text-lg leading-relaxed">
                    Please verify your account using the link sent to <span className="text-primary">{formData.email}</span>.
                  </p>
                  {systemMessage && <p className="text-sm text-green-600 font-black">{systemMessage}</p>}
                </div>
                <div className="flex flex-col gap-4">
                  <button onClick={handleResend} disabled={resendLoading} className="flex items-center justify-center text-secondary font-black hover:underline disabled:opacity-50">
                    {resendLoading ? <Loader2 size={16} className="animate-spin mr-2" /> : <RefreshCcw size={16} className="mr-2" />}
                    Resend Verification Email
                  </button>
                  <button onClick={onClose} className="bg-primary text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-primary-light transition-all shadow-2xl shadow-primary/30">Close Window</button>
                </div>
              </motion.div>
            ) : (
              <motion.div key={mode} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary/10 rounded-[1.25rem] text-secondary mb-6">
                    {mode === 'login' ? <Lock size={32} /> : mode === 'signup' ? <User size={32} /> : <Key size={32} />}
                  </div>
                  <h2 className="text-4xl font-black font-heading text-primary tracking-tight">
                    {mode === 'login' ? 'Welcome Back' : mode === 'signup' ? 'Create Account' : 'Reset Password'}
                  </h2>
                  <p className="text-gray-400 font-bold text-base mt-2">
                    {mode === 'login' ? 'Securely access your tax dashboard' : mode === 'signup' ? 'Join thousands of satisfied clients today' : 'Enter your email to receive a reset link'}
                  </p>
                </div>

                {systemMessage && (
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className={`mb-6 p-4 rounded-2xl border-l-4 ${systemMessage.includes('verified') || systemMessage.includes('Reset') ? 'bg-green-50 border-green-500 text-green-700' : 'bg-secondary/5 border-secondary text-secondary'} font-bold text-sm`}>
                    {systemMessage}
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {mode === 'signup' && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative"><User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" /><input type="text" name="firstName" required placeholder="First Name" className={`w-full pl-14 pr-5 py-4 border rounded-2xl outline-none font-bold text-primary border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5`} value={formData.firstName} onChange={handleChange} /></div>
                      <div className="relative"><User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" /><input type="text" name="lastName" required placeholder="Last Name" className={`w-full pl-14 pr-5 py-4 border rounded-2xl outline-none font-bold text-primary border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5`} value={formData.lastName} onChange={handleChange} /></div>
                    </div>
                  )}
                  {mode === 'signup' && (
                    <div className="relative"><Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" /><input type="tel" name="phone" required placeholder="Phone Number (Numbers Only)" className={`w-full pl-14 pr-5 py-4 border rounded-2xl outline-none font-bold text-primary border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5`} value={formData.phone} onChange={handleChange} /></div>
                  )}
                  <div className="relative"><Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" /><input type="email" name="email" required placeholder="Email Address" className={`w-full pl-14 pr-5 py-4 border rounded-2xl outline-none font-bold text-primary border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5`} value={formData.email} onChange={handleChange} /></div>
                  {mode === 'signup' && (
                    <div className="relative"><Globe className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" /><select name="timezone" required className={`w-full pl-14 pr-5 py-4 border rounded-2xl outline-none font-bold text-primary bg-white cursor-pointer border-gray-200 focus:border-primary`} value={formData.timezone} onChange={handleChange}><option value="">Select Time Zone</option><option value="PST">PST</option><option value="CST">CST</option><option value="MST">MST</option><option value="EST">EST</option></select></div>
                  )}
                  {mode !== 'forgot-password' && (
                    <div className="relative">
                      <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input type={showPassword ? "text" : "password"} name="password" required placeholder="Password" className={`w-full pl-14 pr-14 py-4 border rounded-2xl outline-none font-bold text-primary border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5`} value={formData.password} onChange={handleChange} />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary">{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}</button>
                    </div>
                  )}
                  {mode === 'signup' && formData.password && (
                    <div className="px-1"><div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden flex">{[1, 2, 3, 4].map(s => <div key={s} className={`h-full flex-1 border-r border-white last:border-0 transition-all ${passwordStrength.score >= s ? passwordStrength.color : 'bg-transparent'}`} />)}</div><p className="text-[10px] font-black uppercase text-gray-400 mt-1">Strength: {passwordStrength.label}</p></div>
                  )}
                  {mode === 'signup' && (
                    <div className="relative"><ShieldCheck className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" /><input type="password" name="confirmPassword" required placeholder="Confirm Password" className={`w-full pl-14 pr-5 py-4 border rounded-2xl outline-none font-bold text-primary border-gray-200 focus:border-primary`} value={formData.confirmPassword} onChange={handleChange} /></div>
                  )}
                  {mode === 'login' && (
                    <button type="button" onClick={() => setMode('forgot-password')} className="text-secondary font-black text-sm hover:underline">Forgot Password?</button>
                  )}
                  <button type="submit" disabled={loading || !isFormValid()} className="w-full bg-secondary hover:bg-secondary-hover disabled:bg-gray-300 text-white font-black text-xl py-5 rounded-2xl shadow-2xl transition-all flex justify-center items-center mt-6 active:scale-95">
                    {loading ? <Loader2 className="animate-spin h-7 w-7" /> : mode === 'login' ? 'Login' : mode === 'signup' ? 'Create Account' : 'Send Reset Link'}
                  </button>
                </form>
                <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                  <p className="text-gray-500 font-bold text-base">
                    {mode === 'login' ? "Don't have an account?" : "Ready to sign in?"}
                    <button onClick={() => { setMode(mode === 'signup' ? 'login' : 'signup'); setErrors({}); setSystemMessage(''); }} className="ml-3 text-secondary font-black hover:underline">{mode === 'signup' ? 'Back to Login' : 'Create an Account'}</button>
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthModal;
