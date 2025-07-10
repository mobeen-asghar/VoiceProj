import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { dataService } from '../services/dataService';
import { BarChart3, TrendingUp, Calendar, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalProjects: 0,
    totalTasks: 0,
    completedTasks: 0,
    lastActivity: null as Date | null
  });
  const [recentTasks, setRecentTasks] = useState<any[]>([]);

  useEffect(() => {
    if (user) {
      const userStats = dataService.getUserStats(user.id);
      setStats(userStats);
      
      const projects = dataService.getProjects(user.id);
      const allTasks = projects.flatMap(p => p.tasks);
      const recent = allTasks
        .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
        .slice(0, 5);
      setRecentTasks(recent);
    }
  }, [user]);

  const completionRate = stats.totalTasks > 0 ? (stats.completedTasks / stats.totalTasks) * 100 : 0;
  const pendingTasks = stats.totalTasks - stats.completedTasks;

  return (
    <div className="min-h-screen bg-blue-200 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white border-3 md:border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-6 md:mb-8 transform -rotate-1">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
            <div className="bg-blue-500 p-3 md:p-4 border-3 md:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-3">
              <BarChart3 size={24} className="text-white md:w-8 md:h-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-black text-black transform rotate-1">DASHBOARD</h1>
              <p className="text-black font-mono text-base md:text-lg">Welcome back, {user?.name}!</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="bg-white border-3 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="bg-purple-500 p-2 md:p-3 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2">
                <Calendar size={16} className="text-white md:w-6 md:h-6" />
              </div>
              <h3 className="text-sm md:text-xl font-black text-black">PROJECTS</h3>
            </div>
            <div className="text-2xl md:text-4xl font-black text-black mb-1 md:mb-2">{stats.totalProjects}</div>
            <div className="text-black font-mono text-xs md:text-sm">Total Projects</div>
          </div>

          <div className="bg-white border-3 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="bg-blue-500 p-2 md:p-3 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-2">
                <Clock size={16} className="text-white md:w-6 md:h-6" />
              </div>
              <h3 className="text-sm md:text-xl font-black text-black">TASKS</h3>
            </div>
            <div className="text-2xl md:text-4xl font-black text-black mb-1 md:mb-2">{stats.totalTasks}</div>
            <div className="text-black font-mono text-xs md:text-sm">Total Tasks</div>
          </div>

          <div className="bg-white border-3 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-2">
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="bg-green-500 p-2 md:p-3 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-1">
                <CheckCircle size={16} className="text-white md:w-6 md:h-6" />
              </div>
              <h3 className="text-sm md:text-xl font-black text-black">COMPLETED</h3>
            </div>
            <div className="text-2xl md:text-4xl font-black text-black mb-1 md:mb-2">{stats.completedTasks}</div>
            <div className="text-black font-mono text-xs md:text-sm">Finished Tasks</div>
          </div>

          <div className="bg-white border-3 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="bg-red-500 p-2 md:p-3 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-1">
                <AlertTriangle size={16} className="text-white md:w-6 md:h-6" />
              </div>
              <h3 className="text-sm md:text-xl font-black text-black">PENDING</h3>
            </div>
            <div className="text-2xl md:text-4xl font-black text-black mb-1 md:mb-2">{pendingTasks}</div>
            <div className="text-black font-mono text-xs md:text-sm">Remaining Tasks</div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          <div className="bg-white border-3 md:border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="bg-yellow-500 p-2 md:p-3 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2">
                <TrendingUp size={20} className="text-white md:w-6 md:h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-black">COMPLETION RATE</h3>
            </div>
            
            <div className="mb-4">
              <div className="w-full h-6 md:h-8 bg-gray-200 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div 
                  className="h-full bg-green-500 border-r-3 md:border-r-4 border-black transition-all duration-1000"
                  style={{ width: `${completionRate}%` }}
                />
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-black text-black mb-2">{Math.round(completionRate)}%</div>
              <div className="text-black font-mono text-sm md:text-base">Tasks Completed</div>
            </div>
          </div>

          <div className="bg-white border-3 md:border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            <h3 className="text-xl md:text-2xl font-black text-black mb-4 md:mb-6">RECENT ACTIVITY</h3>
            
            <div className="space-y-3">
              {recentTasks.length === 0 ? (
                <div className="text-center py-6 md:py-8 bg-gray-100 border-3 md:border-4 border-black">
                  <p className="text-black font-black text-sm md:text-base">NO RECENT ACTIVITY</p>
                  <p className="text-black font-mono text-xs md:text-sm">Start creating tasks to see activity here</p>
                </div>
              ) : (
                recentTasks.map((task, index) => (
                  <div key={task.id} className={`p-3 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                    task.status === 'done' ? 'bg-green-200' : 
                    task.status === 'in-progress' ? 'bg-yellow-200' : 'bg-gray-200'
                  } transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-black text-black text-sm">{task.title}</h4>
                        <p className="text-black font-mono text-xs">
                          {task.updatedAt.toLocaleDateString()}
                        </p>
                      </div>
                      <div className={`px-2 py-1 border-2 border-black font-black text-xs ${
                        task.status === 'done' ? 'bg-green-400' :
                        task.status === 'in-progress' ? 'bg-yellow-400' : 'bg-gray-300'
                      }`}>
                        {task.status.toUpperCase().replace('-', ' ')}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white border-3 md:border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
          <h3 className="text-xl md:text-2xl font-black text-black mb-4 md:mb-6">QUICK STATS</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div className="text-center p-3 md:p-4 bg-blue-100 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-xl md:text-2xl font-black text-black">
                {stats.totalTasks > 0 ? Math.round((stats.completedTasks / stats.totalTasks) * 100) : 0}%
              </div>
              <div className="text-black font-mono text-xs">Success Rate</div>
            </div>
            
            <div className="text-center p-3 md:p-4 bg-green-100 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-xl md:text-2xl font-black text-black">{stats.completedTasks}</div>
              <div className="text-black font-mono text-xs">Done Today</div>
            </div>
            
            <div className="text-center p-3 md:p-4 bg-yellow-100 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-xl md:text-2xl font-black text-black">{pendingTasks}</div>
              <div className="text-black font-mono text-xs">Remaining</div>
            </div>
            
            <div className="text-center p-3 md:p-4 bg-purple-100 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-xl md:text-2xl font-black text-black">{stats.totalProjects}</div>
              <div className="text-black font-mono text-xs">Active Projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};