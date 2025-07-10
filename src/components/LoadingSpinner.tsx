import React from 'react';
import { Zap } from 'lucide-react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
        <div className="bg-blue-500 p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-3 inline-block mb-4 animate-pulse">
          <Zap size={32} className="text-white" />
        </div>
        <h2 className="text-2xl font-black text-black mb-2">LOADING...</h2>
        <p className="text-black font-mono">Please wait while we load your data</p>
      </div>
    </div>
  );
};