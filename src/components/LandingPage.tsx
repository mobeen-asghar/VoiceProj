import React from 'react';
import { Zap, Mic, Users, Clock, Shield, Star, ArrowRight, Play } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
  onNavigate: (page: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted, onNavigate }) => {
  return (
    <div className="min-h-screen bg-yellow-300">
      {/* Header */}
      <header className="bg-white border-b-4 md:border-b-8 border-black p-4 md:p-6 shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[0px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 md:gap-4">
            <div className="bg-blue-500 p-2 md:p-4 border-3 md:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-12">
              <Zap size={24} className="text-white md:w-8 md:h-8" />
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-black tracking-tight -rotate-1">
              VOICEPROJ
            </h1>
          </div>
          
          <nav className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            <button
              onClick={() => onNavigate('features')}
              className="bg-purple-500 text-white font-black py-2 px-3 md:py-3 md:px-6 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] md:hover:translate-x-[2px] md:hover:translate-y-[2px] transition-all transform -rotate-1 text-sm md:text-base"
            >
              FEATURES
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="bg-green-500 text-white font-black py-2 px-3 md:py-3 md:px-6 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] md:hover:translate-x-[2px] md:hover:translate-y-[2px] transition-all transform rotate-1 text-sm md:text-base"
            >
              PRICING
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="bg-red-500 text-white font-black py-2 px-3 md:py-3 md:px-6 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] md:hover:translate-x-[2px] md:hover:translate-y-[2px] transition-all text-sm md:text-base"
            >
              ABOUT
            </button>
            <button
              onClick={onGetStarted}
              className="bg-orange-500 text-white font-black py-2 px-4 md:py-3 md:px-8 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] md:hover:translate-x-[2px] md:hover:translate-y-[2px] transition-all transform rotate-2 text-sm md:text-base"
            >
              GET STARTED
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-10 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
              <div className="bg-red-500 border-3 md:border-4 border-black p-2 inline-block shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-3">
                <span className="text-white font-black text-xs md:text-sm">REVOLUTIONARY</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black leading-none transform -rotate-2">
                SPEAK YOUR
                <span className="block text-blue-600 rotate-1">PROJECTS</span>
                <span className="block text-purple-600 -rotate-1">INTO LIFE!</span>
              </h1>
              
              <p className="text-lg md:text-2xl font-bold text-black leading-tight bg-white border-3 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
                The ONLY project management tool that understands your voice commands. 
                Create tasks, manage projects, and collaborate - all hands-free!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onGetStarted}
                  className="bg-green-500 text-white font-black py-4 md:py-6 px-6 md:px-12 border-3 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] md:hover:translate-x-[4px] md:hover:translate-y-[4px] transition-all text-lg md:text-2xl flex items-center justify-center gap-3 transform -rotate-1"
                >
                  <Mic size={20} className="md:w-7 md:h-7" />
                  START SPEAKING
                  <ArrowRight size={20} className="md:w-7 md:h-7" />
                </button>
                
                <button className="bg-white text-black font-black py-4 md:py-6 px-4 md:px-8 border-3 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] md:hover:translate-x-[4px] md:hover:translate-y-[4px] transition-all text-lg md:text-xl flex items-center justify-center gap-3 transform rotate-2">
                  <Play size={20} className="md:w-6 md:h-6" />
                  WATCH DEMO
                </button>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="bg-white border-4 md:border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-4 md:p-8 transform rotate-3">
                <div className="bg-blue-400 border-3 md:border-4 border-black p-4 md:p-6 mb-4 md:mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Mic size={20} className="text-black md:w-6 md:h-6" />
                    <span className="text-black font-black text-sm md:text-base">LISTENING...</span>
                  </div>
                  <p className="text-black font-mono text-sm md:text-lg">"Create task: Design new homepage"</p>
                </div>
                
                <div className="bg-green-400 border-3 md:border-4 border-black p-3 md:p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-1">
                  <p className="text-black font-black text-sm md:text-base">✓ TASK CREATED!</p>
                  <p className="text-black font-mono text-sm">Design new homepage</p>
                </div>
              </div>
              
              <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 bg-yellow-400 border-3 md:border-4 border-black p-2 md:p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-12">
                <Star size={24} className="text-black md:w-8 md:h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-10 md:py-20 px-4 md:px-6 bg-purple-400">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-black text-center mb-8 md:mb-16 transform -rotate-1">
            WHY VOICEPROJ ROCKS!
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white border-3 md:border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-2">
              <div className="bg-red-500 p-3 md:p-4 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block mb-4 md:mb-6 -rotate-3">
                <Mic size={24} className="text-white md:w-8 md:h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-black mb-3 md:mb-4">VOICE FIRST</h3>
              <p className="text-black font-bold text-base md:text-lg">
                Just speak and watch your projects come to life. No clicking, no typing - pure voice magic!
              </p>
            </div>
            
            <div className="bg-white border-3 md:border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
              <div className="bg-blue-500 p-3 md:p-4 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block mb-4 md:mb-6 rotate-2">
                <Users size={24} className="text-white md:w-8 md:h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-black mb-3 md:mb-4">TEAM READY</h3>
              <p className="text-black font-bold text-base md:text-lg">
                Collaborate with your team using voice commands. Everyone can contribute without barriers!
              </p>
            </div>
            
            <div className="bg-white border-3 md:border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
              <div className="bg-green-500 p-3 md:p-4 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block mb-4 md:mb-6 -rotate-1">
                <Clock size={24} className="text-white md:w-8 md:h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-black mb-3 md:mb-4">LIGHTNING FAST</h3>
              <p className="text-black font-bold text-base md:text-lg">
                Create tasks in seconds, not minutes. Voice is faster than any interface ever built!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-20 px-4 md:px-6 bg-red-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 md:mb-8 transform rotate-1">
            READY TO REVOLUTIONIZE YOUR WORKFLOW?
          </h2>
          
          <p className="text-lg md:text-2xl font-bold text-white mb-8 md:mb-12 bg-black border-3 md:border-4 border-white p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] md:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transform -rotate-1">
            Join thousands of teams already using voice to manage their projects!
          </p>
          
          <button
            onClick={onGetStarted}
            className="bg-yellow-400 text-black font-black py-6 md:py-8 px-8 md:px-16 border-3 md:border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] md:hover:translate-x-[6px] md:hover:translate-y-[6px] transition-all text-2xl md:text-3xl transform rotate-2"
          >
            START FOR FREE TODAY!
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t-4 md:border-t-8 border-white p-6 md:p-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="bg-white p-2 md:p-3 border-3 md:border-4 border-white shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] md:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] rotate-12">
              <Zap size={20} className="text-black md:w-6 md:h-6" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white">VOICEPROJ</h3>
          </div>
          <p className="text-white font-bold text-base md:text-lg">
            © 2025 VoiceProj. All rights reserved. Speak your way to success!
          </p>
        </div>
      </footer>
    </div>
  );
};