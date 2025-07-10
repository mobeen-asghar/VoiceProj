import React, { useState, useEffect } from 'react';
import { Search, X, FileText, Folder } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { dataService } from '../services/dataService';
import { Task, Project } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTask?: (task: Task) => void;
  onSelectProject?: (project: Project) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ 
  isOpen, 
  onClose, 
  onSelectTask, 
  onSelectProject 
}) => {
  const { user } = useAuth();
  const [query, setQuery] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setTasks([]);
      setProjects([]);
      return;
    }
  }, [isOpen]);

  useEffect(() => {
    if (!user || !query.trim()) {
      setTasks([]);
      setProjects([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const timeoutId = setTimeout(() => {
      const foundTasks = dataService.searchTasks(user.id, query);
      const foundProjects = dataService.searchProjects(user.id, query);
      
      setTasks(foundTasks);
      setProjects(foundProjects);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, user]);

  const handleTaskSelect = (task: Task) => {
    onSelectTask?.(task);
    onClose();
  };

  const handleProjectSelect = (project: Project) => {
    onSelectProject?.(project);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-start justify-center z-50 p-4 pt-10 md:pt-20">
      <div className="bg-white border-3 md:border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-4 md:p-6 max-w-2xl w-full max-h-[85vh] overflow-hidden transform -rotate-1">
        <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
          <div className="bg-blue-500 p-2 md:p-3 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-3">
            <Search size={20} className="text-white md:w-6 md:h-6" />
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-black flex-1">SEARCH</h2>
          <button
            onClick={onClose}
            className="p-2 md:p-3 border-3 md:border-4 border-black bg-red-500 text-white font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] md:hover:translate-x-[2px] md:hover:translate-y-[2px] transition-all"
          >
            <X size={20} className="md:w-6 md:h-6" />
          </button>
        </div>

        <div className="mb-4 md:mb-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tasks and projects..."
            className="w-full p-3 md:p-4 border-3 md:border-4 border-black font-mono text-black text-base md:text-lg focus:outline-none focus:bg-yellow-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            autoFocus
          />
        </div>

        <div className="overflow-y-auto max-h-80 md:max-h-96">
          {isSearching && (
            <div className="text-center py-6 md:py-8">
              <div className="bg-blue-500 p-3 md:p-4 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block animate-pulse">
                <Search size={24} className="text-white md:w-8 md:h-8" />
              </div>
              <p className="text-black font-black text-base md:text-lg mt-4">SEARCHING...</p>
            </div>
          )}

          {!isSearching && query && (tasks.length === 0 && projects.length === 0) && (
            <div className="text-center py-8 md:py-12 bg-gray-100 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="bg-red-500 p-3 md:p-4 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block mb-4">
                <Search size={24} className="text-white md:w-8 md:h-8" />
              </div>
              <p className="text-black font-black text-lg md:text-xl mb-2">NO RESULTS FOUND</p>
              <p className="text-black font-mono text-sm md:text-base">Try different keywords</p>
            </div>
          )}

          {projects.length > 0 && (
            <div className="mb-4 md:mb-6">
              <h3 className="text-lg md:text-xl font-black text-black mb-3 md:mb-4 flex items-center gap-2">
                <Folder size={18} className="md:w-5 md:h-5" />
                PROJECTS ({projects.length})
              </h3>
              <div className="space-y-2">
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => handleProjectSelect(project)}
                    className={`w-full text-left p-3 md:p-4 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] md:hover:translate-x-[-2px] md:hover:translate-y-[-2px] transition-all ${project.color} transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
                  >
                    <div className="flex items-center gap-2 md:gap-3">
                      <Folder size={18} className="text-black md:w-5 md:h-5 flex-shrink-0" />
                      <div className="min-w-0 flex-1">
                        <h4 className="font-black text-black text-sm md:text-base truncate">{project.name}</h4>
                        {project.description && (
                          <p className="text-black font-mono text-xs md:text-sm line-clamp-1">{project.description}</p>
                        )}
                        <p className="text-black font-bold text-xs">
                          {project.tasks.length} tasks • Created {project.createdAt.toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {tasks.length > 0 && (
            <div>
              <h3 className="text-lg md:text-xl font-black text-black mb-3 md:mb-4 flex items-center gap-2">
                <FileText size={18} className="md:w-5 md:h-5" />
                TASKS ({tasks.length})
              </h3>
              <div className="space-y-2">
                {tasks.map((task, index) => (
                  <button
                    key={task.id}
                    onClick={() => handleTaskSelect(task)}
                    className={`w-full text-left p-3 md:p-4 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] md:hover:translate-x-[-2px] md:hover:translate-y-[-2px] transition-all ${
                      task.status === 'done' ? 'bg-green-200' :
                      task.status === 'in-progress' ? 'bg-yellow-200' : 'bg-white'
                    } transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
                  >
                    <div className="flex items-start gap-2 md:gap-3">
                      <FileText size={18} className="text-black mt-1 flex-shrink-0 md:w-5 md:h-5" />
                      <div className="flex-1 min-w-0">
                        <h4 className={`font-black text-black text-sm md:text-base ${task.status === 'done' ? 'line-through' : ''} truncate`}>
                          {task.title}
                        </h4>
                        {task.description && (
                          <p className={`text-black font-mono text-xs md:text-sm ${task.status === 'done' ? 'line-through' : ''} line-clamp-2`}>
                            {task.description}
                          </p>
                        )}
                        <div className="flex items-center justify-between gap-2 mt-2">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 md:w-3 md:h-3 border-2 border-black ${
                              task.priority === 'high' ? 'bg-red-500' :
                              task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                            }`} />
                            <span className="text-black font-bold text-xs uppercase">{task.priority}</span>
                          </div>
                          <div className={`px-1 md:px-2 py-1 border-2 border-black font-black text-xs ${
                            task.status === 'done' ? 'bg-green-400' :
                            task.status === 'in-progress' ? 'bg-yellow-400' : 'bg-gray-300'
                          }`}>
                            {task.status.toUpperCase().replace('-', ' ')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};