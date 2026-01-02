
import React, { useState } from 'react';
import { X, Mail, Lock, User, Phone, MessageSquare, Loader2 } from 'lucide-react';
import { UserFormData } from '../types';

interface AuthModalProps {
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<UserFormData>({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate Server Action / MongoDB Save
    console.log("Submitting to Server Action:", formData);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert(`Success! ${isLogin ? 'Log in' : 'Registration'} simulated for ${formData.email}. Data would be saved to MongoDB.`);
    setLoading(false);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="p-8">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
          
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold font-heading text-primary">{isLogin ? 'Welcome Back' : 'Get Started'}</h2>
            <p className="text-gray-500 mt-2">
              {isLogin ? 'Securely access your tax documents' : 'Create an account to start your filing'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-3 top-3.5 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Full Name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
            )}

            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-gray-400 h-5 w-5" />
              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {!isLogin && (
              <div className="relative">
                <Phone className="absolute left-3 top-3.5 text-gray-400 h-5 w-5" />
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone Number"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            )}

            {!isLogin && (
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                <textarea
                  name="message"
                  placeholder="Brief Message / Tax Inquiry"
                  rows={2}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
            )}

            {isLogin && (
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 text-gray-400 h-5 w-5" />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-secondary hover:bg-secondary-hover text-white font-bold py-3 rounded-xl transition-all shadow-lg hover:shadow-secondary/20 flex justify-center items-center"
            >
              {loading ? (
                <Loader2 className="animate-spin h-5 w-5" />
              ) : (
                isLogin ? 'Sign In' : 'Create Account'
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-gray-500 text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 text-secondary font-bold hover:underline"
              >
                {isLogin ? 'Sign Up' : 'Log In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
