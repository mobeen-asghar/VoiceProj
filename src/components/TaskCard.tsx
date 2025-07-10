import React from 'react';
import { Task } from '../types';
import { CheckCircle, Circle, Clock, AlertTriangle, Trash2, Edit } from 'lucide-react';

interface TaskCardProps {
  task: Task;
  onToggleComplete: (taskId: string) => void;
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onToggleComplete, onEdit, onDelete }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'done': return <CheckCircle size={18} className="text-green-600 md:w-5 md:h-5" />;
      case 'in-progress': return <Clock size={18} className="text-yellow-600 md:w-5 md:h-5" />;
      default: return <Circle size={18} className="text-gray-600 md:w-5 md:h-5" />;
    }
  };

  const isCompleted = task.status === 'done';

  return (
    <div
      className={`border-3 md:border-4 border-black p-3 md:p-4 transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] md:hover:translate-x-[-2px] md:hover:translate-y-[-2px] ${
        isCompleted 
          ? 'bg-green-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] opacity-90 transform rotate-1' 
          : 'bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1'
      }`}
    >
      <div className="flex items-start gap-2 md:gap-3">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleComplete(task.id);
          }}
          className="mt-1 hover:scale-110 transition-transform flex-shrink-0"
        >
          {getStatusIcon(task.status)}
        </button>
        
        <div 
          className="flex-1 cursor-pointer min-w-0"
          onClick={() => onEdit(task)}
        >
          <h4 className={`font-black text-black mb-2 text-sm md:text-base ${isCompleted ? 'line-through' : ''}`}>
            {task.title}
          </h4>
          
          {task.description && (
            <p className={`text-black font-mono text-xs md:text-sm mb-3 leading-tight line-clamp-2 ${isCompleted ? 'line-through' : ''}`}>
              {task.description}
            </p>
          )}
          
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 md:w-4 md:h-4 border-2 border-black ${getPriorityColor(task.priority)} shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`} />
              <span className="text-black font-black text-xs uppercase bg-gray-200 border-2 border-black px-1 md:px-2 py-1">
                {task.priority}
              </span>
            </div>
            
            {task.dueDate && (
              <div className="flex items-center gap-1 bg-red-100 border-2 border-black px-1 md:px-2 py-1">
                <AlertTriangle size={10} className="text-red-600 md:w-3 md:h-3" />
                <span className="text-black font-bold text-xs">
                  {new Date(task.dueDate).toLocaleDateString()}
                </span>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex flex-col gap-1 md:gap-2 flex-shrink-0">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit(task);
            }}
            className="bg-blue-500 text-white font-bold p-1.5 md:p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] md:hover:translate-x-[2px] md:hover:translate-y-[2px] transition-all"
          >
            <Edit size={12} className="md:w-4 md:h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(task.id);
            }}
            className="bg-red-500 text-white font-bold p-1.5 md:p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] md:hover:translate-x-[2px] md:hover:translate-y-[2px] transition-all"
          >
            <Trash2 size={12} className="md:w-4 md:h-4" />
          </button>
        </div>
      </div>
      
      {/* Task Status Bar */}
      <div className="mt-3 pt-3 border-t-2 border-black">
        <div className="flex items-center justify-between text-xs">
          <span className="text-black font-mono truncate">
            Created: {task.createdAt.toLocaleDateString()}
          </span>
          <div className={`px-1 md:px-2 py-1 border-2 border-black font-black text-xs flex-shrink-0 ${
            task.status === 'done' ? 'bg-green-400' :
            task.status === 'in-progress' ? 'bg-yellow-400' : 'bg-gray-300'
          }`}>
            {task.status.toUpperCase().replace('-', ' ')}
          </div>
        </div>
      </div>
    </div>
  );
};