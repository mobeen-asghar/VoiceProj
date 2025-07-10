import React from 'react';
import { Zap, Mic, Users, Clock, Shield, Star, ArrowRight, CheckCircle, Headphones, Brain, Rocket, Globe, Lock } from 'lucide-react';

interface FeaturesPageProps {
  onBack: () => void;
  onGetStarted: () => void;
}

export const FeaturesPage: React.FC<FeaturesPageProps> = ({ onBack, onGetStarted }) => {
  return (
    <div className="min-h-screen bg-green-300">
      {/* Header */}
      <header className="bg-white border-b-4 md:border-b-8 border-black p-4 md:p-6 shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[0px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="bg-red-500 text-white font-black py-2 px-4 md:py-3 md:px-6 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] md:hover:translate-x-[2px] md:hover:translate-y-[2px] transition-all transform -rotate-1 flex items-center gap-2 text-sm md:text-base"
          >
            ← BACK
          </button>
          
          <div className="flex items-center gap-2 md:gap-4">
            <div className="bg-blue-500 p-2 md:p-4 border-3 md:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-12">
              <Zap size={24} className="text-white md:w-8 md:h-8" />
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-black tracking-tight -rotate-1">
              FEATURES
            </h1>
          </div>
          
          <button
            onClick={onGetStarted}
            className="bg-orange-500 text-white font-black py-2 px-4 md:py-3 md:px-8 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] md:hover:translate-x-[2px] md:hover:translate-y-[2px] transition-all transform rotate-2 text-sm md:text-base"
          >
            GET STARTED
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-10 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-yellow-400 border-3 md:border-4 border-black p-2 md:p-3 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-3 mb-6 md:mb-8">
            <span className="text-black font-black text-sm md:text-xl">GAME CHANGING FEATURES</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-black leading-none mb-6 md:mb-8 transform -rotate-1">
            VOICE-POWERED
            <span className="block text-purple-600 rotate-2">PRODUCTIVITY</span>
          </h1>
          
          <p className="text-xl md:text-3xl font-bold text-black bg-white border-3 md:border-4 border-black p-4 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-1 max-w-4xl mx-auto">
            Every feature designed to make project management as natural as having a conversation!
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-10 md:py-20 px-4 md:px-6 bg-blue-400">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-black text-center mb-8 md:mb-16 transform rotate-1">
            CORE SUPERPOWERS
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white border-4 md:border-6 border-black p-6 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
              <div className="bg-red-500 p-4 md:p-6 border-3 md:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] inline-block mb-6 md:mb-8 rotate-3">
                <Mic size={32} className="text-white md:w-12 md:h-12" />
              </div>
              <h3 className="text-2xl md:text-4xl font-black text-black mb-4 md:mb-6">NATURAL VOICE COMMANDS</h3>
              <p className="text-lg md:text-xl font-bold text-black mb-4 md:mb-6 leading-tight">
                Just speak naturally! "Create a task for designing the homepage" or "Show me all high priority tasks" - it just works!
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-600 md:w-6 md:h-6" />
                  <span className="font-black text-black text-sm md:text-base">Natural language processing</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-600 md:w-6 md:h-6" />
                  <span className="font-black text-black text-sm md:text-base">Multi-language support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-600 md:w-6 md:h-6" />
                  <span className="font-black text-black text-sm md:text-base">Offline voice recognition</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-4 md:border-6 border-black p-6 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
              <div className="bg-purple-500 p-4 md:p-6 border-3 md:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] inline-block mb-6 md:mb-8 -rotate-2">
                <Brain size={32} className="text-white md:w-12 md:h-12" />
              </div>
              <h3 className="text-2xl md:text-4xl font-black text-black mb-4 md:mb-6">SMART AI ASSISTANT</h3>
              <p className="text-lg md:text-xl font-bold text-black mb-4 md:mb-6 leading-tight">
                Our AI understands context, suggests improvements, and learns from your workflow patterns!
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-600 md:w-6 md:h-6" />
                  <span className="font-black text-black text-sm md:text-base">Context-aware suggestions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-600 md:w-6 md:h-6" />
                  <span className="font-black text-black text-sm md:text-base">Workflow optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-600 md:w-6 md:h-6" />
                  <span className="font-black text-black text-sm md:text-base">Predictive task creation</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-4 md:border-6 border-black p-6 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-2">
              <div className="bg-green-500 p-4 md:p-6 border-3 md:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] inline-block mb-6 md:mb-8 rotate-1">
                <Users size={32} className="text-white md:w-12 md:h-12" />
              </div>
              <h3 className="text-2xl md:text-4xl font-black text-black mb-4 md:mb-6">TEAM COLLABORATION</h3>
              <p className="text-lg md:text-xl font-bold text-black mb-4 md:mb-6 leading-tight">
                Voice-powered team meetings, instant updates, and seamless collaboration across time zones!
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-600 md:w-6 md:h-6" />
                  <span className="font-black text-black text-sm md:text-base">Voice team meetings</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-600 md:w-6 md:h-6" />
                  <span className="font-black text-black text-sm md:text-base">Real-time voice updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-600 md:w-6 md:h-6" />
                  <span className="font-black text-black text-sm md:text-base">Cross-platform sync</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-4 md:border-6 border-black p-6 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
              <div className="bg-yellow-500 p-4 md:p-6 border-3 md:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] inline-block mb-6 md:mb-8 -rotate-3">
                <Rocket size={32} className="text-white md:w-12 md:h-12" />
              </div>
              <h3 className="text-2xl md:text-4xl font-black text-black mb-4 md:mb-6">LIGHTNING SPEED</h3>
              <p className="text-lg md:text-xl font-bold text-black mb-4 md:mb-6 leading-tight">
                Create tasks 10x faster than traditional tools. Voice is the fastest interface ever invented!
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-600 md:w-6 md:h-6" />
                  <span className="font-black text-black text-sm md:text-base">Instant task creation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-600 md:w-6 md:h-6" />
                  <span className="font-black text-black text-sm md:text-base">Bulk operations via voice</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-600 md:w-6 md:h-6" />
                  <span className="font-black text-black text-sm md:text-base">Zero-click navigation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-10 md:py-20 px-4 md:px-6 bg-purple-500">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white text-center mb-8 md:mb-16 transform -rotate-1">
            ADVANCED FEATURES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white border-3 md:border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
              <div className="bg-blue-500 p-3 md:p-4 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block mb-4 md:mb-6 -rotate-2">
                <Globe size={24} className="text-white md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-black mb-3 md:mb-4">GLOBAL ACCESS</h3>
              <p className="text-black font-bold text-sm md:text-base">
                Access your projects from anywhere in the world with cloud sync and offline capabilities.
              </p>
            </div>
            
            <div className="bg-white border-3 md:border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
              <div className="bg-red-500 p-3 md:p-4 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block mb-4 md:mb-6 rotate-3">
                <Lock size={24} className="text-white md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-black mb-3 md:mb-4">ENTERPRISE SECURITY</h3>
              <p className="text-black font-bold text-sm md:text-base">
                Bank-level encryption, SSO integration, and compliance with all major security standards.
              </p>
            </div>
            
            <div className="bg-white border-3 md:border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-2">
              <div className="bg-green-500 p-3 md:p-4 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block mb-4 md:mb-6 -rotate-1">
                <Headphones size={24} className="text-white md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-black mb-3 md:mb-4">24/7 VOICE SUPPORT</h3>
              <p className="text-black font-bold text-sm md:text-base">
                Get help instantly with our voice-powered support system. Just ask and we'll help!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-20 px-4 md:px-6 bg-red-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 md:mb-8 transform rotate-1">
            READY TO EXPERIENCE THE FUTURE?
          </h2>
          
          <button
            onClick={onGetStarted}
            className="bg-yellow-400 text-black font-black py-6 md:py-8 px-8 md:px-16 border-3 md:border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] md:hover:translate-x-[6px] md:hover:translate-y-[6px] transition-all text-xl md:text-3xl transform -rotate-2 flex items-center gap-3 md:gap-4 mx-auto"
          >
            <Mic size={24} className="md:w-8 md:h-8" />
            START SPEAKING NOW!
            <ArrowRight size={24} className="md:w-8 md:h-8" />
          </button>
        </div>
      </section>
    </div>
  );
};