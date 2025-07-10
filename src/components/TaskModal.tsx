import React, { useState } from 'react';
import { Task } from '../types';
import { X, Save, Trash2 } from 'lucide-react';

interface TaskModalProps {
  task: Task | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: Task) => void;
  onDelete: (taskId: string) => void;
  projectId?: string;
}

export const TaskModal: React.FC<TaskModalProps> = ({ task, isOpen, onClose, onSave, onDelete, projectId }) => {
  const [formData, setFormData] = useState({
    title: task?.title || '',
    description: task?.description || '',
    priority: task?.priority || 'medium',
    status: task?.status || 'todo',
    dueDate: task?.dueDate ? new Date(task.dueDate).toISOString().split('T')[0] : ''
  });

  const handleSave = () => {
    if (!formData.title.trim()) return;
    
    const updatedTask: Task = {
      id: task?.id || Date.now().toString(),
      title: formData.title,
      description: formData.description,
      priority: formData.priority as 'low' | 'medium' | 'high',
      status: formData.status as 'todo' | 'in-progress' | 'done',
      projectId: task?.projectId || projectId || 'default',
      createdAt: task?.createdAt || new Date(),
      updatedAt: new Date(),
      dueDate: formData.dueDate ? new Date(formData.dueDate) : undefined
    };
    
    onSave(updatedTask);
    onClose();
  };

  // Reset form when modal opens/closes or task changes
  React.useEffect(() => {
    if (isOpen) {
      setFormData({
        title: task?.title || '',
        description: task?.description || '',
        priority: task?.priority || 'medium',
        status: task?.status || 'todo',
        dueDate: task?.dueDate ? new Date(task.dueDate).toISOString().split('T')[0] : ''
      });
    }
  }, [isOpen, task]);

  const handleDelete = () => {
    if (task?.id) {
      onDelete(task.id);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white border-3 md:border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-4 md:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto transform -rotate-1">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="bg-green-500 p-2 md:p-3 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-3">
              <Save size={20} className="text-white md:w-6 md:h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-black">
              {task ? 'EDIT TASK' : 'NEW TASK'}
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
            <label className="block text-black font-black mb-2 md:mb-3 text-base md:text-lg">TASK TITLE</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full p-3 md:p-4 border-3 md:border-4 border-black font-mono text-black text-base md:text-lg focus:outline-none focus:bg-yellow-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              placeholder="Task title..."
              required
            />
          </div>
          
          <div>
            <label className="block text-black font-black mb-2 md:mb-3 text-base md:text-lg">DESCRIPTION</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full p-3 md:p-4 border-3 md:border-4 border-black font-mono text-black focus:outline-none focus:bg-yellow-100 h-24 md:h-32 resize-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              placeholder="Task description..."
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex-1">
              <label className="block text-black font-black mb-2 md:mb-3 text-base md:text-lg">PRIORITY</label>
              <select
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                className="w-full p-3 md:p-4 border-3 md:border-4 border-black font-mono text-black focus:outline-none focus:bg-yellow-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <option value="low">LOW</option>
                <option value="medium">MEDIUM</option>
                <option value="high">HIGH</option>
              </select>
            </div>
            
            <div className="flex-1">
              <label className="block text-black font-black mb-2 md:mb-3 text-base md:text-lg">STATUS</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full p-3 md:p-4 border-3 md:border-4 border-black font-mono text-black focus:outline-none focus:bg-yellow-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <option value="todo">TO DO</option>
                <option value="in-progress">IN PROGRESS</option>
                <option value="done">DONE</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-black font-black mb-2 md:mb-3 text-base md:text-lg">DUE DATE</label>
            <input
              type="date"
              value={formData.dueDate}
              onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
              className="w-full p-3 md:p-4 border-3 md:border-4 border-black font-mono text-black focus:outline-none focus:bg-yellow-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            />
          </div>
          
          {/* Task Preview */}
          <div className="bg-gray-100 border-3 md:border-4 border-black p-3 md:p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
            <h3 className="text-black font-black mb-2">PREVIEW:</h3>
            <div className="bg-white border-2 border-black p-3">
              <h4 className="font-black text-black text-sm md:text-base">{formData.title || 'Task Title'}</h4>
              {formData.description && (
                <p className="text-black font-mono text-xs md:text-sm mt-1">{formData.description}</p>
              )}
              <div className="flex items-center gap-2 mt-2">
                <div className={`w-3 h-3 border-2 border-black ${
                  formData.priority === 'high' ? 'bg-red-500' :
                  formData.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                }`} />
                <span className="text-black font-bold text-xs uppercase">{formData.priority}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8">
          <button
            onClick={handleSave}
            disabled={!formData.title.trim()}
            className="flex-1 bg-green-500 text-white font-black py-3 md:py-4 px-4 md:px-6 border-3 md:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] md:hover:translate-x-[3px] md:hover:translate-y-[3px] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-lg"
          >
            <Save size={20} className="md:w-6 md:h-6" />
            {task ? 'UPDATE TASK' : 'CREATE TASK'}
          </button>
          
          {task && (
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white font-black py-3 md:py-4 px-4 md:px-6 border-3 md:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] md:hover:translate-x-[3px] md:hover:translate-y-[3px] transition-all flex items-center justify-center gap-2 text-base md:text-lg"
            >
              <Trash2 size={20} className="md:w-6 md:h-6" />
              DELETE
            </button>
          )}
        </div>
      </div>
    </div>
  );
};