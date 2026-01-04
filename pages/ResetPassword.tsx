
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Eye, EyeOff, Loader2, CheckCircle2, ArrowRight, AlertCircle } from 'lucide-react';
import { authApi } from '../services/authService';

const ResetPassword: React.FC<{ onResetSuccess: () => void }> = ({ onResetSuccess }) => {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwords, setPasswords] = useState({ password: '', confirm: '' });

  const [strength, setStrength] = useState({ score: 0, label: '', color: 'bg-gray-200' });

  const checkStrength = (p: string) => {
    let s = 0;
    if (p.length >= 8) s++;
    if (/[A-Z]/.test(p)) s++;
    if (/[a-z]/.test(p)) s++;
    if (/[0-9]/.test(p)) s++;
    let l = 'Weak', c = 'bg-secondary';
    if (s === 3) { l = 'Medium'; c = 'bg-yellow-500'; }
    if (s === 4) { l = 'Strong'; c = 'bg-green-500'; }
    if (p.length === 0) { l = ''; c = 'bg-gray-200'; }
    setStrength({ score: s, label: l, color: c });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (strength.score < 4) return setError('Password must be stronger.');
    if (passwords.password !== passwords.confirm) return setError('Passwords do not match.');
    
    setLoading(true);
    setError('');
    try {
      const res = await authApi.resetPassword(token || '', passwords.password);
      if (res.success) setSuccess(true);
      else setError(res.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-background-soft flex items-center justify-center p-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-md w-full bg-white rounded-[3rem] shadow-2xl p-12 text-center space-y-8">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-500 shadow-inner"><CheckCircle2 size={48} className="animate-bounce-slow" /></div>
          <div className="space-y-4">
            <h1 className="text-3xl font-black font-heading text-primary">Password Reset</h1>
            <p className="text-gray-500 font-bold">Your password has been updated. You can now log in with your new credentials.</p>
          </div>
          <button onClick={() => { navigate('/'); onResetSuccess(); }} className="w-full bg-primary text-white py-5 rounded-2xl font-black text-xl hover:bg-primary-light transition-all flex items-center justify-center group">Continue to Login <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" /></button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-soft flex items-center justify-center p-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-md w-full bg-white rounded-[3rem] shadow-2xl p-10">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto text-secondary mb-6"><ShieldCheck size={32} /></div>
          <h1 className="text-3xl font-black font-heading text-primary">Create New Password</h1>
          <p className="text-gray-400 font-bold mt-2 text-sm">Please choose a strong password to secure your account.</p>
        </div>

        {error && <div className="mb-6 p-4 bg-secondary/5 border-l-4 border-secondary text-secondary font-bold text-sm flex items-center"><AlertCircle size={16} className="mr-2" /> {error}</div>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input 
              type={showPassword ? "text" : "password"} 
              required placeholder="New Password" 
              className="w-full pl-14 pr-14 py-4 border border-gray-200 rounded-2xl outline-none font-bold text-primary focus:ring-4 focus:ring-primary/5 transition-all"
              value={passwords.password} 
              onChange={(e) => { setPasswords(p => ({ ...p, password: e.target.value })); checkStrength(e.target.value); }} 
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary">{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}</button>
          </div>
          
          {passwords.password && (
            <div className="px-1 space-y-1">
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden flex">{[1,2,3,4].map(s => <div key={s} className={`h-full flex-1 border-r border-white last:border-0 transition-all ${strength.score >= s ? strength.color : 'bg-transparent'}`} />)}</div>
              <p className="text-[10px] font-black uppercase text-gray-400">Strength: {strength.label} (Required: Strong)</p>
            </div>
          )}

          <div className="relative">
            <ShieldCheck className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input 
              type="password" 
              required placeholder="Confirm Password" 
              className="w-full pl-14 pr-5 py-4 border border-gray-200 rounded-2xl outline-none font-bold text-primary focus:ring-4 focus:ring-primary/5 transition-all"
              value={passwords.confirm} 
              onChange={(e) => setPasswords(p => ({ ...p, confirm: e.target.value }))} 
            />
          </div>

          <button type="submit" disabled={loading || strength.score < 4 || !passwords.confirm} className="w-full bg-secondary hover:bg-secondary-hover disabled:bg-gray-300 text-white font-black text-xl py-5 rounded-2xl shadow-xl transition-all flex justify-center items-center active:scale-95">
            {loading ? <Loader2 size={28} className="animate-spin" /> : 'Reset Password'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ResetPassword;
