import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Settings, User, Bell, Palette, Globe, Save, ArrowLeft, Mic } from 'lucide-react';

interface SettingsPageProps {
  onBack: () => void;
}

export const SettingsPage: React.FC<SettingsPageProps> = ({ onBack }) => {
  const { user, updateUser } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    theme: user?.settings.theme || 'light',
    voiceEnabled: user?.settings.voiceEnabled || true,
    notifications: user?.settings.notifications || true,
    language: user?.settings.language || 'en'
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const handleSave = async () => {
    if (!user) return;
    
    setIsSaving(true);
    
    const updatedUser = {
      ...user,
      name: formData.name,
      email: formData.email,
      settings: {
        theme: formData.theme as 'light' | 'dark',
        voiceEnabled: formData.voiceEnabled,
        notifications: formData.notifications,
        language: formData.language
      }
    };
    
    updateUser(updatedUser);
    setSaveMessage('Settings saved successfully!');
    setIsSaving(false);
    
    setTimeout(() => setSaveMessage(''), 3000);
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-purple-200 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border-3 md:border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-6 md:mb-8 transform -rotate-1">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <button
              onClick={onBack}
              className="bg-gray-500 text-white font-black py-2 px-4 md:py-3 md:px-6 border-3 md:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] md:hover:translate-x-[3px] md:hover:translate-y-[3px] transition-all flex items-center gap-2 text-sm md:text-base"
            >
              <ArrowLeft size={20} className="md:w-6 md:h-6" />
              BACK
            </button>
            <div className="bg-purple-500 p-3 md:p-4 border-3 md:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-3">
              <Settings size={24} className="text-white md:w-8 md:h-8" />
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-black transform -rotate-1">SETTINGS</h1>
          </div>
          
          {saveMessage && (
            <div className="bg-green-500 border-3 md:border-4 border-black p-3 md:p-4 mb-4 md:mb-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
              <p className="text-white font-black text-base md:text-lg">{saveMessage}</p>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Profile Settings */}
          <div className="bg-white border-3 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="bg-blue-500 p-2 md:p-3 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2">
                <User size={20} className="text-white md:w-6 md:h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-black">PROFILE</h2>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-black font-black mb-2 md:mb-3 text-base md:text-lg">FULL NAME</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full p-3 md:p-4 border-3 md:border-4 border-black font-mono text-black focus:outline-none focus:bg-yellow-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-sm md:text-base"
                />
              </div>
              
              <div>
                <label className="block text-black font-black mb-2 md:mb-3 text-base md:text-lg">EMAIL</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full p-3 md:p-4 border-3 md:border-4 border-black font-mono text-black focus:outline-none focus:bg-yellow-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-sm md:text-base"
                />
              </div>
            </div>
          </div>
          
          {/* Appearance Settings */}
          <div className="bg-white border-3 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="bg-red-500 p-2 md:p-3 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-2">
                <Palette size={20} className="text-white md:w-6 md:h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-black">APPEARANCE</h2>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-black font-black mb-2 md:mb-3 text-base md:text-lg">THEME</label>
                <select
                  value={formData.theme}
                  onChange={(e) => handleInputChange('theme', e.target.value)}
                  className="w-full p-3 md:p-4 border-3 md:border-4 border-black font-mono text-black focus:outline-none focus:bg-yellow-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-sm md:text-base"
                >
                  <option value="light">LIGHT</option>
                  <option value="dark">DARK</option>
                </select>
              </div>
              
              <div>
                <label className="block text-black font-black mb-2 md:mb-3 text-base md:text-lg">LANGUAGE</label>
                <select
                  value={formData.language}
                  onChange={(e) => handleInputChange('language', e.target.value)}
                  className="w-full p-3 md:p-4 border-3 md:border-4 border-black font-mono text-black focus:outline-none focus:bg-yellow-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-sm md:text-base"
                >
                  <option value="en">ENGLISH</option>
                  <option value="es">ESPAÑOL</option>
                  <option value="fr">FRANÇAIS</option>
                  <option value="de">DEUTSCH</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Voice Settings */}
          <div className="bg-white border-3 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="bg-green-500 p-2 md:p-3 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2">
                <Mic size={20} className="text-white md:w-6 md:h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-black">VOICE</h2>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center justify-between p-3 md:p-4 bg-gray-100 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <label className="text-black font-black text-base md:text-lg">VOICE COMMANDS</label>
                <button
                  onClick={() => handleInputChange('voiceEnabled', !formData.voiceEnabled)}
                  className={`w-16 h-8 md:w-20 md:h-10 border-3 md:border-4 border-black relative transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                    formData.voiceEnabled ? 'bg-green-500' : 'bg-red-500'
                  }`}
                >
                  <div
                    className={`w-6 h-6 md:w-8 md:h-8 bg-white border-2 border-black absolute top-0 transition-all shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                      formData.voiceEnabled ? 'right-0 rotate-12' : 'left-0 -rotate-12'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
          
          {/* Notification Settings */}
          <div className="bg-white border-3 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="bg-yellow-500 p-2 md:p-3 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-2">
                <Bell size={20} className="text-white md:w-6 md:h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-black">NOTIFICATIONS</h2>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center justify-between p-3 md:p-4 bg-gray-100 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <label className="text-black font-black text-base md:text-lg">PUSH NOTIFICATIONS</label>
                <button
                  onClick={() => handleInputChange('notifications', !formData.notifications)}
                  className={`w-16 h-8 md:w-20 md:h-10 border-3 md:border-4 border-black relative transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                    formData.notifications ? 'bg-green-500' : 'bg-red-500'
                  }`}
                >
                  <div
                    className={`w-6 h-6 md:w-8 md:h-8 bg-white border-2 border-black absolute top-0 transition-all shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                      formData.notifications ? 'right-0 rotate-12' : 'left-0 -rotate-12'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 md:mt-12 text-center">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="bg-green-500 text-white font-black py-4 px-8 md:py-6 md:px-12 border-3 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] md:hover:translate-x-[4px] md:hover:translate-y-[4px] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 md:gap-3 mx-auto text-lg md:text-xl transform rotate-1"
          >
            <Save size={24} className="md:w-7 md:h-7" />
            {isSaving ? 'SAVING...' : 'SAVE SETTINGS'}
          </button>
        </div>
      </div>
    </div>
  );
};