import React, { useState } from 'react';
import { Plus, Zap, Moon, Sun, Settings, LogOut, User, BarChart3, Folder, Search, Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
  onNewTask: () => void;
  onNewProject: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenSettings: () => void;
  onOpenDashboard?: () => void;
  onOpenProjects?: () => void;
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onNewTask, 
  onNewProject, 
  isDarkMode, 
  onToggleDarkMode,
  onOpenSettings,
  onOpenDashboard,
  onOpenProjects,
  onOpenSearch
}) => {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white border-b-3 md:border-b-4 border-black p-4 md:p-6 shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[0px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="bg-blue-500 p-2 md:p-4 border-3 md:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-3">
              <Zap size={20} className="text-white md:w-8 md:h-8" />
            </div>
            <h1 className="text-2xl md:text-5xl font-black text-black tracking-tight transform -rotate-1">
              VOICEPROJ
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            {onOpenDashboard && (
              <button
                onClick={onOpenDashboard}
                className="bg-blue-500 text-white font-black py-2 px-3 xl:py-3 xl:px-4 border-3 xl:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] xl:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] xl:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] xl:hover:translate-x-[3px] xl:hover:translate-y-[3px] transition-all"
                title="Dashboard"
              >
                <BarChart3 size={18} className="xl:w-5 xl:h-5" />
              </button>
            )}
            
            {onOpenProjects && (
              <button
                onClick={onOpenProjects}
                className="bg-orange-500 text-white font-black py-2 px-3 xl:py-3 xl:px-4 border-3 xl:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] xl:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] xl:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] xl:hover:translate-x-[3px] xl:hover:translate-y-[3px] transition-all"
                title="Projects"
              >
                <Folder size={18} className="xl:w-5 xl:h-5" />
              </button>
            )}
            
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                className="bg-yellow-500 text-white font-black py-2 px-3 xl:py-3 xl:px-4 border-3 xl:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] xl:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] xl:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] xl:hover:translate-x-[3px] xl:hover:translate-y-[3px] transition-all"
                title="Search"
              >
                <Search size={18} className="xl:w-5 xl:h-5" />
              </button>
            )}
            
            <div className="flex items-center gap-1 xl:gap-2 bg-yellow-300 border-3 xl:border-4 border-black p-2 xl:p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] xl:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
              <div className="bg-black p-1 border-2 border-white">
                <User size={14} className="text-white xl:w-4 xl:h-4" />
              </div>
              <span className="text-black font-black text-xs xl:text-sm truncate max-w-20 xl:max-w-none">{user?.name}</span>
            </div>
            
            <button
              onClick={onOpenSettings}
              className="bg-gray-500 text-white font-black p-2 xl:p-3 border-3 xl:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] xl:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] xl:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] xl:hover:translate-x-[3px] xl:hover:translate-y-[3px] transition-all"
              title="Settings"
            >
              <Settings size={20} className="xl:w-6 xl:h-6" />
            </button>
            
            <button
              onClick={logout}
              className="bg-red-500 text-white font-black p-2 xl:p-3 border-3 xl:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] xl:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] xl:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] xl:hover:translate-x-[3px] xl:hover:translate-y-[3px] transition-all"
              title="Logout"
            >
              <LogOut size={20} className="xl:w-6 xl:h-6" />
            </button>
            
            <button
              onClick={onToggleDarkMode}
              className={`p-2 xl:p-3 border-3 xl:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] xl:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] xl:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] xl:hover:translate-x-[3px] xl:hover:translate-y-[3px] transition-all ${
                isDarkMode ? 'bg-yellow-400' : 'bg-gray-800'
              }`}
              title="Toggle Theme"
            >
              {isDarkMode ? (
                <Sun size={20} className="text-black xl:w-6 xl:h-6" />
              ) : (
                <Moon size={20} className="text-white xl:w-6 xl:h-6" />
              )}
            </button>
            
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden bg-black text-white font-black p-3 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b-4 border-black shadow-[0px_8px_0px_0px_rgba(0,0,0,1)] p-4">
          <div className="space-y-3">
            {/* User Info */}
            <div className="flex items-center gap-2 bg-yellow-300 border-3 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="bg-black p-1 border-2 border-white">
                <User size={16} className="text-white" />
              </div>
              <span className="text-black font-black text-sm">{user?.name}</span>
            </div>
            
            {/* Navigation */}
            <div className="grid grid-cols-2 gap-3">
              {onOpenDashboard && (
                <button
                  onClick={() => {
                    onOpenDashboard();
                    setMobileMenuOpen(false);
                  }}
                  className="bg-blue-500 text-white font-black py-3 px-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2"
                >
                  <BarChart3 size={20} />
                  DASHBOARD
                </button>
              )}
              
              {onOpenProjects && (
                <button
                  onClick={() => {
                    onOpenProjects();
                    setMobileMenuOpen(false);
                  }}
                  className="bg-orange-500 text-white font-black py-3 px-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2"
                >
                  <Folder size={20} />
                  PROJECTS
                </button>
              )}
              
              {onOpenSearch && (
                <button
                  onClick={() => {
                    onOpenSearch();
                    setMobileMenuOpen(false);
                  }}
                  className="bg-yellow-500 text-white font-black py-3 px-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2"
                >
                  <Search size={20} />
                  SEARCH
                </button>
              )}
            </div>

            {/* Settings & Actions */}
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => {
                  onOpenSettings();
                  setMobileMenuOpen(false);
                }}
                className="bg-gray-500 text-white font-black py-3 px-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2"
              >
                <Settings size={20} />
                SETTINGS
              </button>
              
              <button
                onClick={onToggleDarkMode}
                className={`font-black py-3 px-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 ${
                  isDarkMode ? 'bg-yellow-400 text-black' : 'bg-gray-800 text-white'
                }`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                THEME
              </button>
              
              <button
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
                className="bg-red-500 text-white font-black py-3 px-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2"
              >
                <LogOut size={20} />
                LOGOUT
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};