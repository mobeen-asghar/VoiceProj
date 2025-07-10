import { useState, useEffect } from 'react';

interface SpeechSynthesisHook {
  speak: (text: string) => void;
  stop: () => void;
  isSpeaking: boolean;
  isSupported: boolean;
}

export const useSpeechSynthesis = (): SpeechSynthesisHook => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const isSupported = 'speechSynthesis' in window;

  useEffect(() => {
    if (!isSupported) return;

    const handleSpeechEnd = () => {
      setIsSpeaking(false);
    };

    speechSynthesis.addEventListener('speechend', handleSpeechEnd);
    return () => {
      speechSynthesis.removeEventListener('speechend', handleSpeechEnd);
    };
  }, [isSupported]);

  const speak = (text: string) => {
    if (!isSupported) return;

    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 0.8;
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    
    speechSynthesis.speak(utterance);
  };

  const stop = () => {
    if (!isSupported) return;
    speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return {
    speak,
    stop,
    isSpeaking,
    isSupported
  };
};