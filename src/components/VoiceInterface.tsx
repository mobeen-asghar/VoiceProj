import React, { useEffect, useState } from 'react';
import { Mic, MicOff, Volume2, VolumeX, Zap } from 'lucide-react';
import { useVoiceRecognition } from '../hooks/useVoiceRecognition';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';
import { useAuth } from '../contexts/AuthContext';

interface VoiceInterfaceProps {
  onCommand: (command: string) => void;
}

export const VoiceInterface: React.FC<VoiceInterfaceProps> = ({ onCommand }) => {
  const { user } = useAuth();
  const { isListening, transcript, startListening, stopListening, resetTranscript, isSupported } = useVoiceRecognition();
  const { speak, stop, isSpeaking } = useSpeechSynthesis();
  const [showTranscript, setShowTranscript] = useState(false);

  // Don't show voice interface if user has disabled it
  if (!user?.settings.voiceEnabled) {
    return (
      <div className="bg-red-400 border-3 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
        <div className="text-center">
          <div className="bg-black p-2 md:p-3 border-3 md:border-4 border-white shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] md:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] inline-block mb-3 md:mb-4 rotate-3">
            <Zap size={20} className="text-white md:w-6 md:h-6" />
          </div>
          <h2 className="text-xl md:text-2xl font-black text-black mb-2">VOICE DISABLED</h2>
          <p className="text-black font-mono text-sm md:text-base">Enable voice commands in settings to use this feature</p>
        </div>
      </div>
    );
  }

  useEffect(() => {
    if (transcript.trim()) {
      setShowTranscript(true);
      const timer = setTimeout(() => {
        onCommand(transcript);
        resetTranscript();
        setShowTranscript(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [transcript, onCommand, resetTranscript]);

  const handleToggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const handleToggleSpeaking = () => {
    if (isSpeaking) {
      stop();
    } else {
      speak("Voice interface is ready. You can now give commands like 'create task', 'show projects', or 'mark task complete'.");
    }
  };

  if (!isSupported) {
    return (
      <div className="bg-red-500 border-3 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
        <div className="text-center">
          <div className="bg-black p-2 md:p-3 border-3 md:border-4 border-white shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] md:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] inline-block mb-3 md:mb-4 -rotate-2">
            <MicOff size={20} className="text-white md:w-6 md:h-6" />
          </div>
          <h2 className="text-xl md:text-2xl font-black text-white mb-2">BROWSER NOT SUPPORTED</h2>
          <p className="text-white font-mono text-sm md:text-base">Voice recognition not available in your browser</p>
          <p className="text-white font-bold text-xs md:text-sm mt-2">Try Chrome, Edge, or Safari for best experience</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border-3 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mb-4">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="bg-purple-500 p-2 md:p-3 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-3">
            <Mic size={20} className="text-white md:w-6 md:h-6" />
          </div>
          <h2 className="text-xl md:text-2xl font-black text-black">VOICE CONTROL</h2>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleToggleListening}
            className={`p-2 md:p-3 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] md:hover:translate-x-[2px] md:hover:translate-y-[2px] ${
              isListening ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
            }`}
          >
            {isListening ? <MicOff size={16} className="md:w-5 md:h-5" /> : <Mic size={16} className="md:w-5 md:h-5" />}
          </button>
          <button
            onClick={handleToggleSpeaking}
            className={`p-2 md:p-3 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] md:hover:translate-x-[2px] md:hover:translate-y-[2px] ${
              isSpeaking ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
            }`}
          >
            {isSpeaking ? <VolumeX size={16} className="md:w-5 md:h-5" /> : <Volume2 size={16} className="md:w-5 md:h-5" />}
          </button>
        </div>
      </div>
      
      {isListening && (
        <div className="bg-yellow-400 border-3 md:border-4 border-black p-3 md:p-4 mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-1 animate-pulse">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full border-2 border-black animate-pulse"></div>
            <p className="text-black font-black text-base md:text-lg">LISTENING...</p>
          </div>
        </div>
      )}
      
      {showTranscript && transcript && (
        <div className="bg-green-400 border-3 md:border-4 border-black p-3 md:p-4 mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
          <p className="text-black font-black text-sm md:text-base">HEARD:</p>
          <p className="text-black font-mono text-sm md:text-lg bg-white border-2 border-black p-2 mt-2">"{transcript}"</p>
        </div>
      )}
      
      <div className="bg-gray-100 border-3 md:border-4 border-black p-3 md:p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
        <h3 className="text-black font-black mb-3 text-sm md:text-base">AVAILABLE COMMANDS:</h3>
        <ul className="list-none space-y-2 text-black font-mono text-xs md:text-sm">
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 border border-black flex-shrink-0"></div>
            <span>"CREATE TASK [name]"</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 border border-black flex-shrink-0"></div>
            <span>"SHOW PROJECTS"</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-500 border border-black flex-shrink-0"></div>
            <span>"MARK TASK COMPLETE"</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 border border-black flex-shrink-0"></div>
            <span>"NEW PROJECT [name]"</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 border border-black flex-shrink-0"></div>
            <span>"OPEN SETTINGS"</span>
          </li>
        </ul>
      </div>
    </div>
  );
};