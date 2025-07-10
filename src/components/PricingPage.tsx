import React from 'react';
import { Zap, Check, Star, Crown, Rocket, ArrowRight } from 'lucide-react';

interface PricingPageProps {
  onBack: () => void;
  onGetStarted: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onBack, onGetStarted }) => {
  return (
    <div className="min-h-screen bg-pink-300">
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
              PRICING
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
          <div className="bg-green-400 border-3 md:border-4 border-black p-2 md:p-3 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-3 mb-6 md:mb-8">
            <span className="text-black font-black text-sm md:text-xl">SIMPLE & TRANSPARENT</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-black leading-none mb-6 md:mb-8 transform -rotate-1">
            PRICING THAT
            <span className="block text-green-600 rotate-2">MAKES SENSE</span>
          </h1>
          
          <p className="text-xl md:text-3xl font-bold text-black bg-white border-3 md:border-4 border-black p-4 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-1 max-w-4xl mx-auto">
            No hidden fees, no surprises. Just powerful voice-driven productivity at prices that work for everyone!
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-10 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Free Plan */}
            <div className="bg-white border-4 md:border-6 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform -rotate-2 relative">
              <div className="p-6 md:p-10">
                <div className="bg-blue-500 p-3 md:p-4 border-3 md:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] inline-block mb-4 md:mb-6 rotate-3">
                  <Star size={24} className="text-white md:w-8 md:h-8" />
                </div>
                
                <h3 className="text-2xl md:text-4xl font-black text-black mb-3 md:mb-4">STARTER</h3>
                <div className="mb-6 md:mb-8">
                  <span className="text-4xl md:text-6xl font-black text-black">FREE</span>
                  <span className="text-lg md:text-2xl font-bold text-black">/forever</span>
                </div>
                
                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  <div className="flex items-center gap-3">
                    <Check size={20} className="text-green-600 md:w-6 md:h-6" />
                    <span className="font-black text-black text-sm md:text-base">5 Projects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check size={20} className="text-green-600 md:w-6 md:h-6" />
                    <span className="font-black text-black text-sm md:text-base">50 Tasks per month</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check size={20} className="text-green-600 md:w-6 md:h-6" />
                    <span className="font-black text-black text-sm md:text-base">Basic voice commands</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check size={20} className="text-green-600 md:w-6 md:h-6" />
                    <span className="font-black text-black text-sm md:text-base">Mobile app access</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check size={20} className="text-green-600 md:w-6 md:h-6" />
                    <span className="font-black text-black text-sm md:text-base">Community support</span>
                  </div>
                </div>
                
                <button
                  onClick={onGetStarted}
                  className="w-full bg-blue-500 text-white font-black py-3 md:py-4 px-4 md:px-6 border-3 md:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] md:hover:translate-x-[3px] md:hover:translate-y-[3px] transition-all text-lg md:text-xl"
                >
                  START FREE
                </button>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white border-4 md:border-6 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-1 relative">
              <div className="absolute -top-3 md:-top-4 -right-3 md:-right-4 bg-yellow-400 border-3 md:border-4 border-black p-2 md:p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-12">
                <span className="text-black font-black text-xs md:text-sm">POPULAR!</span>
              </div>
              
              <div className="p-6 md:p-10">
                <div className="bg-purple-500 p-3 md:p-4 border-3 md:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] inline-block mb-4 md:mb-6 -rotate-2">
                  <Rocket size={24} className="text-white md:w-8 md:h-8" />
                </div>
                
                <h3 className="text-2xl md:text-4xl font-black text-black mb-3 md:mb-4">PRO</h3>
                <div className="mb-6 md:mb-8">
                  <span className="text-4xl md:text-6xl font-black text-black">$19</span>
                  <span className="text-lg md:text-2xl font-bold text-black">/month</span>
                </div>
                
                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  <div className="flex items-center gap-3">
                    <Check size={20} className="text-green-600 md:w-6 md:h-6" />
                    <span className="font-black text-black text-sm md:text-base">Unlimited projects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check size={20} className="text-green-600 md:w-6 md:h-6" />
                    <span className="font-black text-black text-sm md:text-base">Unlimited tasks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check size={20} className="text-green-600 md:w-6 md:h-6" />
                    <span className="font-black text-black text-sm md:text-base">Advanced voice AI</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check size={20} className="text-green-600 md:w-6 md:h-6" />
                    <span className="font-black text-black text-sm md:text-base">Team collaboration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check size={20} className="text-green-600 md:w-6 md:h-6" />
                    <span className="font-black text-black text-sm md:text-base">Priority support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check size={20} className="text-green-600 md:w-6 md:h-6" />
                    <span className="font-black text-black text-sm md:text-base">Custom integrations</span>
                  </div>
                </div>
                
                <button
                  onClick={onGetStarted}
                  className="w-full bg-purple-500 text-white font-black py-3 md:py-4 px-4 md:px-6 border-3 md:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] md:hover:translate-x-[3px] md:hover:translate-y-[3px] transition-all text-lg md:text-xl"
                >
                  GO PRO
                </button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white border-4 md:border-6 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 relative">
              <div className="p-6 md:p-10">
                <div className="bg-red-500 p-3 md:p-4 border-3 md:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] inline-block mb-4 md:mb-6 rotate-1">
                  <Crown size={24} className="text-white md:w-8 md:h-8" />
                </div>
                
                <h3 className="text-2xl md:text-4xl font-black text-black mb-3 md:mb-4">ENTERPRISE</h3>
                <div className="mb-6 md:mb-8">
                  <span className="text-4xl md:text-6xl font-black text-black">$99</span>
                  <span className="text-lg md:text-2xl font-bold text-black">/month</span>
                </div>
                
                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  <div className="flex items-center gap-3">
                    <Check size={20} className="text-green-600 md:w-6 md:h-6" />
                    <span className="font-black text-black text-sm md:text-base">Everything in Pro</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check size={20} className="text-green-600 md:w-6 md:h-6" />
                    <span className="font-black text-black text-sm md:text-base">Advanced security</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check size={20} className="text-green-600 md:w-6 md:h-6" />
                    <span className="font-black text-black text-sm md:text-base">SSO integration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check size={20} className="text-green-600 md:w-6 md:h-6" />
                    <span className="font-black text-black text-sm md:text-base">Dedicated support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check size={20} className="text-green-600 md:w-6 md:h-6" />
                    <span className="font-black text-black text-sm md:text-base">Custom deployment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check size={20} className="text-green-600 md:w-6 md:h-6" />
                    <span className="font-black text-black text-sm md:text-base">SLA guarantee</span>
                  </div>
                </div>
                
                <button className="w-full bg-red-500 text-white font-black py-3 md:py-4 px-4 md:px-6 border-3 md:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] md:hover:translate-x-[3px] md:hover:translate-y-[3px] transition-all text-lg md:text-xl">
                  CONTACT SALES
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 md:py-20 px-4 md:px-6 bg-yellow-400">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-black text-center mb-8 md:mb-16 transform rotate-1">
            FREQUENTLY ASKED
          </h2>
          
          <div className="space-y-6 md:space-y-8">
            <div className="bg-white border-3 md:border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
              <h3 className="text-xl md:text-2xl font-black text-black mb-3 md:mb-4">Can I change plans anytime?</h3>
              <p className="text-black font-bold text-base md:text-lg">
                Absolutely! Upgrade or downgrade your plan at any time. No contracts, no commitments.
              </p>
            </div>
            
            <div className="bg-white border-3 md:border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-2">
              <h3 className="text-xl md:text-2xl font-black text-black mb-3 md:mb-4">Is there a free trial for Pro?</h3>
              <p className="text-black font-bold text-base md:text-lg">
                Yes! Start with our free plan and upgrade to Pro anytime. We also offer a 14-day Pro trial.
              </p>
            </div>
            
            <div className="bg-white border-3 md:border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
              <h3 className="text-xl md:text-2xl font-black text-black mb-3 md:mb-4">What languages are supported?</h3>
              <p className="text-black font-bold text-base md:text-lg">
                We support 25+ languages including English, Spanish, French, German, Japanese, and more!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-20 px-4 md:px-6 bg-green-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 md:mb-8 transform -rotate-1">
            START YOUR VOICE REVOLUTION TODAY!
          </h2>
          
          <button
            onClick={onGetStarted}
            className="bg-yellow-400 text-black font-black py-6 md:py-8 px-8 md:px-16 border-3 md:border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] md:hover:translate-x-[6px] md:hover:translate-y-[6px] transition-all text-xl md:text-3xl transform rotate-2 flex items-center gap-3 md:gap-4 mx-auto"
          >
            BEGIN FREE TRIAL
            <ArrowRight size={24} className="md:w-8 md:h-8" />
          </button>
        </div>
      </section>
    </div>
  );
};