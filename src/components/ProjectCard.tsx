import React from 'react';
import { Project } from '../types';
import { Folder, Users, Calendar, Edit, Trash2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  isSelected: boolean;
  onEdit: () => void;
  onDelete: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  onSelect, 
  isSelected, 
  onEdit, 
  onDelete 
}) => {
  const completedTasks = project.tasks.filter(task => task.status === 'done').length;
  const totalTasks = project.tasks.length;

  return (
    <div
      className={`border-3 md:border-4 border-black p-3 md:p-4 cursor-pointer transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] md:hover:translate-x-[-2px] md:hover:translate-y-[-2px] ${
        isSelected 
          ? 'bg-yellow-400 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-2 scale-105' 
          : `${project.color} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1`
      }`}
    >
      <div 
        className="flex items-center gap-2 md:gap-3 mb-3"
        onClick={() => onSelect(project)}
      >
        <Folder size={20} className="text-black md:w-6 md:h-6" />
        <h3 className="text-lg md:text-xl font-black text-black uppercase truncate">{project.name}</h3>
      </div>
      
      {project.description && (
        <p 
          className="text-black font-mono text-xs md:text-sm mb-3 leading-tight line-clamp-2"
          onClick={() => onSelect(project)}
        >
          {project.description}
        </p>
      )}
      
      <div 
        className="flex items-center justify-between mb-4"
        onClick={() => onSelect(project)}
      >
        <div className="flex items-center gap-2 md:gap-3">
          <div className="flex items-center gap-1 bg-white border-2 border-black px-2 py-1">
            <Calendar size={12} className="text-black md:w-3.5 md:h-3.5" />
            <span className="text-black font-black text-xs">
              {completedTasks}/{totalTasks}
            </span>
          </div>
          <div className="flex items-center gap-1 bg-white border-2 border-black px-2 py-1">
            <Users size={12} className="text-black md:w-3.5 md:h-3.5" />
            <span className="text-black font-black text-xs">
              {project.members.length}
            </span>
          </div>
        </div>
        
        <div className="w-16 md:w-20 h-2 md:h-3 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <div 
            className="h-full bg-green-500 border-r-2 border-black transition-all duration-500"
            style={{ width: `${totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0}%` }}
          />
        </div>
      </div>
      
      {/* Project Stats */}
      <div className="mb-4 p-2 bg-gray-100 border-2 border-black">
        <div className="grid grid-cols-3 gap-1 md:gap-2 text-center">
          <div>
            <div className="text-sm md:text-lg font-black text-black">{project.tasks.filter(t => t.status === 'todo').length}</div>
            <div className="text-xs font-mono text-black">TODO</div>
          </div>
          <div>
            <div className="text-sm md:text-lg font-black text-black">{project.tasks.filter(t => t.status === 'in-progress').length}</div>
            <div className="text-xs font-mono text-black">DOING</div>
          </div>
          <div>
            <div className="text-sm md:text-lg font-black text-black">{completedTasks}</div>
            <div className="text-xs font-mono text-black">DONE</div>
          </div>
        </div>
      </div>
      
      <div className="flex gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
          className="flex-1 bg-blue-500 text-white font-black py-2 px-2 md:px-3 border-2 md:border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] md:hover:translate-x-[2px] md:hover:translate-y-[2px] transition-all flex items-center justify-center gap-1 text-xs md:text-sm"
        >
          <Edit size={12} className="md:w-3.5 md:h-3.5" />
          EDIT
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="bg-red-500 text-white font-black py-2 px-2 md:px-3 border-2 md:border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] md:hover:translate-x-[2px] md:hover:translate-y-[2px] transition-all flex items-center justify-center"
        >
          <Trash2 size={12} className="md:w-3.5 md:h-3.5" />
        </button>
      </div>
      
      {/* Creation Date */}
      <div className="mt-3 pt-2 border-t-2 border-black">
        <span className="text-black font-mono text-xs">
          Created: {project.createdAt.toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};