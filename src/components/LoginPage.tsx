import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Zap, Eye, EyeOff, LogIn } from 'lucide-react';

interface LoginPageProps {
  onSwitchToSignup: () => void;
  onBack?: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onSwitchToSignup, onBack }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const success = await login(email, password);
      if (!success) {
        setError('Invalid email or password');
      }
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 max-w-md w-full -rotate-1">
        {onBack && (
          <button
            onClick={onBack}
            className="mb-6 bg-gray-500 text-white font-bold py-2 px-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            ← BACK TO HOME
          </button>
        )}
        
        <div className="flex items-center justify-center mb-8">
          <div className="bg-blue-500 p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-3">
            <Zap size={32} className="text-white" />
          </div>
        </div>
        
        <h1 className="text-4xl font-black text-black text-center mb-2">LOGIN</h1>
        <p className="text-black font-mono text-center mb-8">Access your voice-powered workspace</p>
        
        {error && (
          <div className="bg-red-500 border-4 border-black p-4 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-white font-bold">{error}</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-black font-bold mb-2">EMAIL</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-500 text-white font-bold py-4 px-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <LogIn size={20} />
            {isLoading ? 'LOGGING IN...' : 'LOGIN'}
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-black font-mono mb-4">Don't have an account?</p>
          <button
            onClick={onSwitchToSignup}
            className="bg-purple-500 text-white font-bold py-3 px-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            CREATE ACCOUNT
          </button>
        </div>
      </div>
    </div>
  );
};