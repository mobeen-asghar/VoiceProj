import React from 'react';
import { Zap, Heart, Users, Target, Award, Globe, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
  onGetStarted: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBack, onGetStarted }) => {
  return (
    <div className="min-h-screen bg-orange-300">
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
              ABOUT US
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
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="bg-purple-400 border-3 md:border-4 border-black p-2 md:p-3 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-3 mb-6 md:mb-8">
                <span className="text-black font-black text-sm md:text-xl">OUR STORY</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black leading-none mb-6 md:mb-8 transform -rotate-1">
                REVOLUTIONIZING
                <span className="block text-blue-600 rotate-2">WORK WITH</span>
                <span className="block text-red-600 -rotate-1">VOICE!</span>
              </h1>
              
              <p className="text-lg md:text-2xl font-bold text-black leading-tight mb-6 md:mb-8">
                We believe the future of productivity is voice-first. No more clicking through endless menus or typing repetitive commands. Just speak naturally and watch your ideas come to life!
              </p>
            </div>
            
            <div className="bg-white border-4 md:border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-6 md:p-10 transform rotate-2">
              <div className="bg-red-500 p-4 md:p-6 border-3 md:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] inline-block mb-4 md:mb-6 -rotate-3">
                <Heart size={32} className="text-white md:w-12 md:h-12" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-black mb-3 md:mb-4">OUR MISSION</h3>
              <p className="text-lg md:text-xl font-bold text-black leading-tight">
                To make project management as natural as having a conversation. We're building the bridge between human communication and digital productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-10 md:py-20 px-4 md:px-6 bg-blue-400">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-black text-center mb-8 md:mb-16 transform rotate-1">
            WHAT DRIVES US
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white border-4 md:border-6 border-black p-6 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
              <div className="bg-green-500 p-4 md:p-6 border-3 md:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] inline-block mb-6 md:mb-8 rotate-3">
                <Users size={32} className="text-white md:w-12 md:h-12" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-black mb-4 md:mb-6">HUMAN-FIRST</h3>
              <p className="text-lg md:text-xl font-bold text-black leading-tight">
                Technology should adapt to humans, not the other way around. We design for natural human communication patterns.
              </p>
            </div>
            
            <div className="bg-white border-4 md:border-6 border-black p-6 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
              <div className="bg-purple-500 p-4 md:p-6 border-3 md:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] inline-block mb-6 md:mb-8 -rotate-2">
                <Target size={32} className="text-white md:w-12 md:h-12" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-black mb-4 md:mb-6">SIMPLICITY</h3>
              <p className="text-lg md:text-xl font-bold text-black leading-tight">
                Complex problems deserve simple solutions. We eliminate friction and focus on what matters most.
              </p>
            </div>
            
            <div className="bg-white border-4 md:border-6 border-black p-6 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
              <div className="bg-yellow-500 p-4 md:p-6 border-3 md:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] inline-block mb-6 md:mb-8 rotate-1">
                <Globe size={32} className="text-white md:w-12 md:h-12" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-black mb-4 md:mb-6">ACCESSIBILITY</h3>
              <p className="text-lg md:text-xl font-bold text-black leading-tight">
                Voice breaks down barriers. We're making productivity tools accessible to everyone, regardless of ability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-10 md:py-20 px-4 md:px-6 bg-green-400">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-black text-center mb-8 md:mb-16 transform -rotate-1">
            MEET THE REBELS
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white border-3 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-2">
              <div className="bg-red-500 w-16 h-16 md:w-20 md:h-20 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-3 md:mb-4 -rotate-3"></div>
              <h3 className="text-lg md:text-xl font-black text-black mb-2">ALEX CHEN</h3>
              <p className="text-black font-bold text-sm mb-2">CEO & FOUNDER</p>
              <p className="text-black font-mono text-xs">Former Google AI researcher with a passion for voice interfaces</p>
            </div>
            
            <div className="bg-white border-3 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
              <div className="bg-blue-500 w-16 h-16 md:w-20 md:h-20 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-3 md:mb-4 rotate-2"></div>
              <h3 className="text-lg md:text-xl font-black text-black mb-2">SARAH JOHNSON</h3>
              <p className="text-black font-bold text-sm mb-2">CTO</p>
              <p className="text-black font-mono text-xs">Voice recognition expert who built systems for millions of users</p>
            </div>
            
            <div className="bg-white border-3 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
              <div className="bg-purple-500 w-16 h-16 md:w-20 md:h-20 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-3 md:mb-4 -rotate-1"></div>
              <h3 className="text-lg md:text-xl font-black text-black mb-2">MIKE RODRIGUEZ</h3>
              <p className="text-black font-bold text-sm mb-2">HEAD OF DESIGN</p>
              <p className="text-black font-mono text-xs">UX designer obsessed with making complex things simple</p>
            </div>
            
            <div className="bg-white border-3 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
              <div className="bg-green-500 w-16 h-16 md:w-20 md:h-20 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-3 md:mb-4 rotate-3"></div>
              <h3 className="text-lg md:text-xl font-black text-black mb-2">EMMA TAYLOR</h3>
              <p className="text-black font-bold text-sm mb-2">VP OF PRODUCT</p>
              <p className="text-black font-mono text-xs">Product strategist who turns user needs into breakthrough features</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 md:py-20 px-4 md:px-6 bg-purple-500">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white text-center mb-8 md:mb-16 transform rotate-1">
            BY THE NUMBERS
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white border-3 md:border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center transform -rotate-1">
              <div className="text-3xl md:text-6xl font-black text-black mb-2 md:mb-4">50K+</div>
              <p className="text-black font-black text-sm md:text-lg">ACTIVE USERS</p>
            </div>
            
            <div className="bg-white border-3 md:border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center transform rotate-2">
              <div className="text-3xl md:text-6xl font-black text-black mb-2 md:mb-4">1M+</div>
              <p className="text-black font-black text-sm md:text-lg">TASKS CREATED</p>
            </div>
            
            <div className="bg-white border-3 md:border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center transform -rotate-2">
              <div className="text-3xl md:text-6xl font-black text-black mb-2 md:mb-4">25+</div>
              <p className="text-black font-black text-sm md:text-lg">LANGUAGES</p>
            </div>
            
            <div className="bg-white border-3 md:border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center transform rotate-1">
              <div className="text-3xl md:text-6xl font-black text-black mb-2 md:mb-4">99.9%</div>
              <p className="text-black font-black text-sm md:text-lg">UPTIME</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-10 md:py-20 px-4 md:px-6 bg-yellow-400">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-8 md:mb-16 transform -rotate-1">
            RECOGNITION
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white border-3 md:border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
              <div className="bg-yellow-600 p-3 md:p-4 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block mb-4 md:mb-6 -rotate-2">
                <Award size={24} className="text-white md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-black mb-3 md:mb-4">PRODUCT OF THE YEAR</h3>
              <p className="text-black font-bold text-sm md:text-base">TechCrunch Awards 2024</p>
            </div>
            
            <div className="bg-white border-3 md:border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
              <div className="bg-gray-500 p-3 md:p-4 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block mb-4 md:mb-6 rotate-3">
                <Award size={24} className="text-white md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-black mb-3 md:mb-4">BEST AI INNOVATION</h3>
              <p className="text-black font-bold text-sm md:text-base">AI Excellence Awards 2024</p>
            </div>
            
            <div className="bg-white border-3 md:border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-2">
              <div className="bg-orange-600 p-3 md:p-4 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block mb-4 md:mb-6 -rotate-1">
                <Award size={24} className="text-white md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-black mb-3 md:mb-4">STARTUP TO WATCH</h3>
              <p className="text-black font-bold text-sm md:text-base">Forbes 30 Under 30</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-20 px-4 md:px-6 bg-red-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 md:mb-8 transform rotate-1">
            JOIN THE VOICE REVOLUTION!
          </h2>
          
          <p className="text-lg md:text-2xl font-bold text-white mb-8 md:mb-12 bg-black border-3 md:border-4 border-white p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] md:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transform -rotate-1">
            Be part of the future where productivity meets natural human communication!
          </p>
          
          <button
            onClick={onGetStarted}
            className="bg-yellow-400 text-black font-black py-6 md:py-8 px-8 md:px-16 border-3 md:border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] md:hover:translate-x-[6px] md:hover:translate-y-[6px] transition-all text-xl md:text-3xl transform -rotate-2 flex items-center gap-3 md:gap-4 mx-auto"
          >
            START YOUR JOURNEY
            <ArrowRight size={24} className="md:w-8 md:h-8" />
          </button>
        </div>
      </section>
    </div>
  );
};