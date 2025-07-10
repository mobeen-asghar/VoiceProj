import React, { useState } from 'react';
import { Project } from '../types';
import { X, Save, Palette } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (project: Project) => void;
}

const PROJECT_COLORS = [
  'bg-red-400',
  'bg-blue-400',
  'bg-green-400',
  'bg-yellow-400',
  'bg-purple-400',
  'bg-pink-400',
  'bg-indigo-400',
  'bg-orange-400'
];

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: project?.name || '',
    description: project?.description || '',
    color: project?.color || 'bg-blue-400'
  });

  const handleSave = () => {
    if (!formData.name.trim()) return;
    
    const updatedProject: Project = {
      id: project?.id || Date.now().toString(),
      name: formData.name,
      description: formData.description,
      color: formData.color,
      tasks: project?.tasks || [],
      members: project?.members || [],
      createdAt: project?.createdAt || new Date()
    };
    
    onSave(updatedProject);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white border-3 md:border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-4 md:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto transform rotate-1">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="bg-purple-500 p-2 md:p-3 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-3">
              <Palette size={20} className="text-white md:w-6 md:h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-black">
              {project ? 'EDIT PROJECT' : 'NEW PROJECT'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 md:p-3 border-3 md:border-4 border-black bg-red-500 text-white font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] md:hover:translate-x-[2px] md:hover:translate-y-[2px] transition-all"
          >
            <X size={20} className="md:w-6 md:h-6" />
          </button>
        </div>
        
        <div className="space-y-4 md:space-y-6">
          <div>
            <label className="block text-black font-black mb-2 md:mb-3 text-base md:text-lg">PROJECT NAME</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 md:p-4 border-3 md:border-4 border-black font-mono text-black text-base md:text-lg focus:outline-none focus:bg-yellow-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              placeholder="Project name..."
              required
            />
          </div>
          
          <div>
            <label className="block text-black font-black mb-2 md:mb-3 text-base md:text-lg">DESCRIPTION</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full p-3 md:p-4 border-3 md:border-4 border-black font-mono text-black focus:outline-none focus:bg-yellow-100 h-24 md:h-32 resize-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              placeholder="Project description..."
            />
          </div>
          
          <div>
            <label className="block text-black font-black mb-2 md:mb-3 text-base md:text-lg flex items-center gap-2">
              <Palette size={20} className="md:w-6 md:h-6" />
              COLOR
            </label>
            <div className="grid grid-cols-4 gap-2 md:gap-3">
              {PROJECT_COLORS.map((color) => (
                <button
                  key={color}
                  onClick={() => setFormData({ ...formData, color })}
                  className={`w-12 h-12 md:w-16 md:h-16 border-3 md:border-4 border-black ${color} ${
                    formData.color === color ? 'shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] scale-110' : 'shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                  } hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-all`}
                >
                  {formData.color === color && (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-3 h-3 md:w-4 md:h-4 bg-black border-2 border-white"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {/* Project Preview */}
          <div className="bg-gray-100 border-3 md:border-4 border-black p-3 md:p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            <h3 className="text-black font-black mb-2">PREVIEW:</h3>
            <div className={`${formData.color} border-3 md:border-4 border-black p-3 md:p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
              <h4 className="font-black text-black text-base md:text-lg">{formData.name || 'Project Name'}</h4>
              {formData.description && (
                <p className="text-black font-mono text-xs md:text-sm mt-2">{formData.description}</p>
              )}
              <div className="flex items-center gap-2 mt-3">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-black border border-white"></div>
                <span className="text-black font-bold text-xs">0/0 TASKS</span>
              </div>
            </div>
          </div>
        </div>
        
        <button
          onClick={handleSave}
          disabled={!formData.name.trim()}
          className="w-full bg-green-500 text-white font-black py-3 md:py-4 px-4 md:px-6 border-3 md:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] md:hover:translate-x-[3px] md:hover:translate-y-[3px] transition-all mt-6 md:mt-8 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-lg"
        >
          <Save size={20} className="md:w-6 md:h-6" />
          {project ? 'UPDATE PROJECT' : 'CREATE PROJECT'}
        </button>
      </div>
    </div>
  );
};