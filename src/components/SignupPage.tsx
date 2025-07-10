import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Zap, Eye, EyeOff, UserPlus } from 'lucide-react';

interface SignupPageProps {
  onSwitchToLogin: () => void;
  onBack?: () => void;
}

export const SignupPage: React.FC<SignupPageProps> = ({ onSwitchToLogin, onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);

    try {
      const success = await signup(formData.email, formData.password, formData.name);
      if (!success) {
        setError('Signup failed');
      }
    } catch (err: any) {
      setError(err.message || 'Signup failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 max-w-md w-full rotate-1">
        {onBack && (
          <button
            onClick={onBack}
            className="mb-6 bg-gray-500 text-white font-bold py-2 px-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            ← BACK TO HOME
          </button>
        )}
        
        <div className="flex items-center justify-center mb-8">
          <div className="bg-purple-500 p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-3">
            <Zap size={32} className="text-white" />
          </div>
        </div>
        
        <h1 className="text-4xl font-black text-black text-center mb-2">SIGN UP</h1>
        <p className="text-black font-mono text-center mb-8">Join the voice revolution</p>
        
        {error && (
          <div className="bg-red-500 border-4 border-black p-4 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-white font-bold">{error}</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-black font-bold mb-2">FULL NAME</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full p-4 border-4 border-black font-mono text-black focus:outline-none focus:bg-yellow-100"
              placeholder="John Doe"
              required
            />
          </div>
          
          <div>
            <label className="block text-black font-bold mb-2">EMAIL</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full p-4 border-4 border-black font-mono text-black focus:outline-none focus:bg-yellow-100"
              placeholder="your@email.com"
              required
            />
          </div>
          
          <div>
            <label className="block text-black font-bold mb-2">PASSWORD</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="w-full p-4 border-4 border-black font-mono text-black focus:outline-none focus:bg-yellow-100 pr-12"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-200 transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-black font-bold mb-2">CONFIRM PASSWORD</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              className="w-full p-4 border-4 border-black font-mono text-black focus:outline-none focus:bg-yellow-100"
              placeholder="••••••••"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-500 text-white font-bold py-4 px-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <UserPlus size={20} />
            {isLoading ? 'CREATING ACCOUNT...' : 'CREATE ACCOUNT'}
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-black font-mono mb-4">Already have an account?</p>
          <button
            onClick={onSwitchToLogin}
            className="bg-blue-500 text-white font-bold py-3 px-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};