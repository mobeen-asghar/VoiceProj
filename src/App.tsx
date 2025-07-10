import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Dashboard } from './components/Dashboard';
import { SearchModal } from './components/SearchModal';
import { LandingPage } from './components/LandingPage';
import { FeaturesPage } from './components/FeaturesPage';
import { PricingPage } from './components/PricingPage';
import { AboutPage } from './components/AboutPage';
import { LoginPage } from './components/LoginPage';
import { SignupPage } from './components/SignupPage';
import { SettingsPage } from './components/SettingsPage';
import { Header } from './components/Header';
import { VoiceInterface } from './components/VoiceInterface';
import { ProjectCard } from './components/ProjectCard';
import { TaskCard } from './components/TaskCard';
import { TaskModal } from './components/TaskModal';
import { ProjectModal } from './components/ProjectModal';
import { Project, Task } from './types';
import { Folder, Plus, CheckCircle } from 'lucide-react';
import { useSpeechSynthesis } from './hooks/useSpeechSynthesis';
import { dataService } from './services/dataService';

const MainApp: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [taskModalOpen, setTaskModalOpen] = useState(false);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'projects' | 'settings'>('dashboard');
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [showApp, setShowApp] = useState(false);
  const { speak } = useSpeechSynthesis();

  // Load projects when user changes
  useEffect(() => {
    if (user) {
      const userProjects = dataService.getProjects(user.id);
      setProjects(userProjects);
      setIsDarkMode(user.settings.theme === 'dark');
      
      if (userProjects.length > 0 && !selectedProject) {
        setSelectedProject(userProjects[0]);
      }
    }
  }, [user, selectedProject]);

  // Save projects whenever they change
  useEffect(() => {
    if (user && projects.length > 0) {
      dataService.saveProjects(user.id, projects);
    }
  }, [projects, user]);

  const handleVoiceCommand = (command: string) => {
    if (!user) return;
    
    const lowerCommand = command.toLowerCase();
    
    if (lowerCommand.includes('create task') || lowerCommand.includes('new task')) {
      const taskName = lowerCommand.replace(/create task|new task/g, '').trim();
      if (taskName && selectedProject) {
        const newTask = dataService.createTask(user.id, {
          title: taskName,
          description: '',
          status: 'todo',
          priority: 'medium',
          projectId: selectedProject.id
        });
        
        // Update local state
        setProjects(prev => prev.map(p => 
          p.id === selectedProject.id 
            ? { ...p, tasks: [...p.tasks, newTask] }
            : p
        ));
        
        speak(`Created task: ${taskName}`);
      } else {
        setTaskModalOpen(true);
        speak('Opening task creation form');
      }
    } else if (lowerCommand.includes('show projects') || lowerCommand.includes('list projects')) {
      speak(`You have ${projects.length} projects: ${projects.map(p => p.name).join(', ')}`);
    } else if (lowerCommand.includes('new project') || lowerCommand.includes('create project')) {
      const projectName = lowerCommand.replace(/new project|create project/g, '').trim();
      if (projectName) {
        const newProject = dataService.createProject(user.id, {
          name: projectName,
          description: '',
          color: 'bg-blue-400',
          tasks: [],
          members: []
        });
        
        setProjects(prev => [...prev, newProject]);
        speak(`Created project: ${projectName}`);
      } else {
        setProjectModalOpen(true);
        speak('Opening project creation form');
      }
    } else if (lowerCommand.includes('complete task') || lowerCommand.includes('mark task complete')) {
      const currentTasks = selectedProject?.tasks.filter(t => t.status !== 'done') || [];
      if (currentTasks.length > 0) {
        handleToggleTaskComplete(currentTasks[0].id);
        speak(`Marked task "${currentTasks[0].title}" as complete`);
      } else {
        speak('No tasks to complete');
      }
    } else if (lowerCommand.includes('open settings') || lowerCommand.includes('show settings')) {
      setCurrentPage('settings');
      speak('Opening settings page');
    } else if (lowerCommand.includes('search') || lowerCommand.includes('find')) {
      setSearchModalOpen(true);
      speak('Opening search');
    } else if (lowerCommand.includes('show dashboard') || lowerCommand.includes('dashboard')) {
      setCurrentPage('dashboard');
      speak('Opening dashboard');
    } else {
      speak('Command not recognized. Try saying create task, new project, show projects, search, or open settings');
    }
  };

  const handleSaveTask = (task: Task) => {
    if (!user) return;
    
    if (editingTask) {
      // Update existing task
      const updatedTask = dataService.updateTask(user.id, task.id, task);
      if (updatedTask) {
        setProjects(prev => prev.map(project => ({
          ...project,
          tasks: project.tasks.map(t => t.id === task.id ? updatedTask : t)
        })));
        
        // Update selected project if it contains this task
        if (selectedProject && selectedProject.tasks.some(t => t.id === task.id)) {
          setSelectedProject(prev => prev ? {
            ...prev,
            tasks: prev.tasks.map(t => t.id === task.id ? updatedTask : t)
          } : null);
        }
      }
    } else {
      // Create new task
      const newTask = dataService.createTask(user.id, {
        title: task.title,
        description: task.description,
        status: task.status,
        priority: task.priority,
        projectId: task.projectId,
        dueDate: task.dueDate
      });
      
      setProjects(prev => prev.map(project => 
        project.id === task.projectId
          ? { ...project, tasks: [...project.tasks, newTask] }
          : project
      ));
      
      // Update selected project if it's the target project
      if (selectedProject && selectedProject.id === task.projectId) {
        setSelectedProject(prev => prev ? {
          ...prev,
          tasks: [...prev.tasks, newTask]
        } : null);
      }
    }
    
    setEditingTask(null);
    setTaskModalOpen(false);
  };

  const handleDeleteTask = (taskId: string) => {
    if (!user) return;
    
    const success = dataService.deleteTask(user.id, taskId);
    if (success) {
      setProjects(prev => prev.map(project => ({
        ...project,
        tasks: project.tasks.filter(t => t.id !== taskId)
      })));
      
      // Update selected project if it contains this task
      if (selectedProject && selectedProject.tasks.some(t => t.id === taskId)) {
        setSelectedProject(prev => prev ? {
          ...prev,
          tasks: prev.tasks.filter(t => t.id !== taskId)
        } : null);
      }
    }
  };

  const handleToggleTaskComplete = (taskId: string) => {
    if (!user) return;
    
    const updatedTask = dataService.toggleTaskStatus(user.id, taskId);
    if (updatedTask) {
      setProjects(prev => prev.map(project => ({
        ...project,
        tasks: project.tasks.map(task =>
          task.id === taskId ? updatedTask : task
        )
      })));
      
      // Update selected project if it contains this task
      if (selectedProject && selectedProject.tasks.some(t => t.id === taskId)) {
        setSelectedProject(prev => prev ? {
          ...prev,
          tasks: prev.tasks.map(task => task.id === taskId ? updatedTask : task)
        } : null);
      }
    }
  };

  const handleSaveProject = (project: Project) => {
    if (!user) return;
    
    if (editingProject) {
      // Update existing project
      const updatedProject = dataService.updateProject(user.id, project.id, project);
      if (updatedProject) {
        setProjects(prev => prev.map(p => p.id === project.id ? updatedProject : p));
      }
    } else {
      // Create new project
      const newProject = dataService.createProject(user.id, {
        name: project.name,
        description: project.description,
        color: project.color,
        tasks: [],
        members: project.members
      });
      
      setProjects(prev => [...prev, newProject]);
    }
    
    setEditingProject(null);
    setProjectModalOpen(false);
  };

  const handleDeleteProject = (projectId: string) => {
    if (!user) return;
    
    const success = dataService.deleteProject(user.id, projectId);
    if (success) {
      setProjects(prev => prev.filter(p => p.id !== projectId));
      if (selectedProject?.id === projectId) {
        setSelectedProject(projects.find(p => p.id !== projectId) || null);
      }
    }
  };

  const handleOpenTaskModal = (task?: Task) => {
    setEditingTask(task || null);
    setTaskModalOpen(true);
  };

  const handleOpenProjectModal = (project?: Project) => {
    setEditingProject(project || null);
    setProjectModalOpen(true);
  };

  if (!isAuthenticated) {
    return <AuthFlow onShowApp={() => setShowApp(true)} />;
  }

  if (currentPage === 'settings') {
    return <SettingsPage onBack={() => setCurrentPage('dashboard')} />;
  }

  if (currentPage === 'dashboard') {
    return (
      <>
        <Header
          onNewTask={() => handleOpenTaskModal()}
          onNewProject={() => handleOpenProjectModal()}
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
          onOpenSettings={() => setCurrentPage('settings')}
          onOpenDashboard={() => setCurrentPage('dashboard')}
          onOpenProjects={() => setCurrentPage('projects')}
          onOpenSearch={() => setSearchModalOpen(true)}
        />
        <Dashboard />
        <SearchModal
          isOpen={searchModalOpen}
          onClose={() => setSearchModalOpen(false)}
          onSelectTask={(task) => {
            const project = projects.find(p => p.id === task.projectId);
            if (project) {
              setSelectedProject(project);
              setCurrentPage('projects');
              handleOpenTaskModal(task);
            }
          }}
          onSelectProject={(project) => {
            setSelectedProject(project);
            setCurrentPage('projects');
          }}
        />
      </>
    );
  }

  const currentTasks = selectedProject?.tasks || [];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-orange-200'}`}>
      <Header
        onNewTask={() => handleOpenTaskModal()}
        onNewProject={() => handleOpenProjectModal()}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        onOpenSettings={() => setCurrentPage('settings')}
        onOpenDashboard={() => setCurrentPage('dashboard')}
        onOpenProjects={() => setCurrentPage('projects')}
        onOpenSearch={() => setSearchModalOpen(true)}
      />
      
      <main className="max-w-7xl mx-auto p-4 md:p-6 space-y-4 md:space-y-6">
        <VoiceInterface onCommand={handleVoiceCommand} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Projects Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border-3 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="bg-blue-500 p-2 md:p-3 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-3">
                  <Folder size={20} className="text-white md:w-6 md:h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-black">PROJECTS</h2>
                <div className="bg-yellow-400 border-2 border-black px-2 py-1 ml-auto">
                  <span className="text-black font-black text-sm">{projects.length}</span>
                </div>
              </div>
              <div className="space-y-3">
                {projects.length === 0 ? (
                  <div className="text-center py-8 md:py-12 bg-gray-100 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
                    <div className="bg-red-500 p-3 md:p-4 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block mb-4 -rotate-2">
                      <Folder size={24} className="text-white md:w-8 md:h-8" />
                    </div>
                    <p className="text-black font-black text-lg md:text-xl mb-2">NO PROJECTS YET</p>
                    <p className="text-black font-mono text-xs md:text-sm mb-4">
                      Say "create project" or click NEW PROJECT
                    </p>
                    <button
                      onClick={() => handleOpenProjectModal()}
                      className="bg-purple-500 text-white font-black py-2 px-3 md:py-2 md:px-4 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] md:hover:translate-x-[2px] md:hover:translate-y-[2px] transition-all text-sm md:text-base"
                    >
                      CREATE FIRST PROJECT
                    </button>
                  </div>
                ) : (
                  projects.map(project => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onSelect={setSelectedProject}
                      isSelected={selectedProject?.id === project.id}
                      onEdit={() => handleOpenProjectModal(project)}
                      onDelete={() => handleDeleteProject(project.id)}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
          
          {/* Tasks Area */}
          <div className="lg:col-span-2">
            {selectedProject ? (
              <div className="bg-white border-3 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 md:mb-6">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className={`${selectedProject.color} p-2 md:p-3 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2`}>
                      <CheckCircle size={20} className="text-black md:w-6 md:h-6" />
                    </div>
                    <h2 className="text-xl md:text-3xl font-black text-black">
                      {selectedProject.name.toUpperCase()} TASKS
                    </h2>
                    <div className="bg-blue-400 border-2 border-black px-2 py-1">
                      <span className="text-black font-black text-sm">{currentTasks.length}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleOpenTaskModal()}
                    className="bg-green-500 text-white font-black py-2 px-4 md:py-3 md:px-6 border-3 md:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] md:hover:translate-x-[3px] md:hover:translate-y-[3px] transition-all flex items-center gap-2 text-sm md:text-base"
                  >
                    <Plus size={16} className="md:w-5 md:h-5" />
                    ADD TASK
                  </button>
                </div>
                
                {/* Task Stats */}
                <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6">
                  <div className="bg-gray-200 border-3 md:border-4 border-black p-3 md:p-4 text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
                    <div className="text-lg md:text-2xl font-black text-black">{currentTasks.filter(t => t.status === 'todo').length}</div>
                    <div className="text-black font-mono text-xs md:text-sm">TO DO</div>
                  </div>
                  <div className="bg-yellow-300 border-3 md:border-4 border-black p-3 md:p-4 text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <div className="text-lg md:text-2xl font-black text-black">{currentTasks.filter(t => t.status === 'in-progress').length}</div>
                    <div className="text-black font-mono text-xs md:text-sm">IN PROGRESS</div>
                  </div>
                  <div className="bg-green-300 border-3 md:border-4 border-black p-3 md:p-4 text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
                    <div className="text-lg md:text-2xl font-black text-black">{currentTasks.filter(t => t.status === 'done').length}</div>
                    <div className="text-black font-mono text-xs md:text-sm">COMPLETED</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {currentTasks.length === 0 ? (
                    <div className="text-center py-8 md:py-12 bg-gray-100 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
                      <div className="bg-blue-500 p-3 md:p-4 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block mb-4 rotate-2">
                        <CheckCircle size={24} className="text-white md:w-8 md:h-8" />
                      </div>
                      <p className="text-black font-black text-lg md:text-xl mb-2">NO TASKS YET</p>
                      <p className="text-black font-mono text-xs md:text-sm mb-4">
                        Say "create task" or click ADD TASK to get started
                      </p>
                      <button
                        onClick={() => handleOpenTaskModal()}
                        className="bg-green-500 text-white font-black py-2 px-3 md:py-2 md:px-4 border-3 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] md:hover:translate-x-[2px] md:hover:translate-y-[2px] transition-all text-sm md:text-base"
                      >
                        CREATE FIRST TASK
                      </button>
                    </div>
                  ) : (
                    currentTasks.map(task => (
                      <TaskCard
                        key={task.id}
                        task={task}
                        onToggleComplete={handleToggleTaskComplete}
                        onEdit={handleOpenTaskModal}
                        onDelete={() => handleDeleteTask(task.id)}
                      />
                    ))
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white border-3 md:border-4 border-black p-8 md:p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center transform rotate-1">
                <div className="bg-purple-500 p-4 md:p-6 border-3 md:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] inline-block mb-4 md:mb-6 -rotate-3">
                  <Folder size={32} className="text-white md:w-12 md:h-12" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-black mb-3 md:mb-4">SELECT A PROJECT</h2>
                <p className="text-black font-mono text-base md:text-lg mb-4 md:mb-6">Choose a project from the sidebar to view its tasks</p>
                {projects.length === 0 && (
                  <button
                    onClick={() => handleOpenProjectModal()}
                    className="bg-blue-500 text-white font-black py-2 px-4 md:py-3 md:px-6 border-3 md:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] md:hover:translate-x-[3px] md:hover:translate-y-[3px] transition-all text-sm md:text-base"
                  >
                    CREATE YOUR FIRST PROJECT
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
      
      <TaskModal
        task={editingTask}
        isOpen={taskModalOpen}
        onClose={() => {
          setTaskModalOpen(false);
          setEditingTask(null);
        }}
        onSave={handleSaveTask}
        onDelete={handleDeleteTask}
        projectId={selectedProject?.id}
      />
      
      <ProjectModal
        project={editingProject}
        isOpen={projectModalOpen}
        onClose={() => {
          setProjectModalOpen(false);
          setEditingProject(null);
        }}
        onSave={handleSaveProject}
      />
      
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectTask={(task) => {
          const project = projects.find(p => p.id === task.projectId);
          if (project) {
            setSelectedProject(project);
            handleOpenTaskModal(task);
          }
        }}
        onSelectProject={(project) => {
          setSelectedProject(project);
        }}
      />
    </div>
  );
};

const AuthFlow: React.FC<{ onShowApp: () => void }> = ({ onShowApp }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [currentPage, setCurrentPage] = useState<'landing' | 'features' | 'pricing' | 'about' | 'auth'>('landing');

  if (currentPage === 'landing') {
    return (
      <LandingPage 
        onGetStarted={() => setCurrentPage('auth')}
        onNavigate={(page) => setCurrentPage(page as any)}
      />
    );
  }

  if (currentPage === 'features') {
    return (
      <FeaturesPage 
        onBack={() => setCurrentPage('landing')}
        onGetStarted={() => setCurrentPage('auth')}
      />
    );
  }

  if (currentPage === 'pricing') {
    return (
      <PricingPage 
        onBack={() => setCurrentPage('landing')}
        onGetStarted={() => setCurrentPage('auth')}
      />
    );
  }

  if (currentPage === 'about') {
    return (
      <AboutPage 
        onBack={() => setCurrentPage('landing')}
        onGetStarted={() => setCurrentPage('auth')}
      />
    );
  }

  return isLogin ? (
    <LoginPage 
      onSwitchToSignup={() => setIsLogin(false)} 
      onBack={() => setCurrentPage('landing')}
    />
  ) : (
    <SignupPage 
      onSwitchToLogin={() => setIsLogin(true)}
      onBack={() => setCurrentPage('landing')}
    />
  );
};

function App() {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <MainApp />
      </ProtectedRoute>
    </AuthProvider>
  );
}

export default App;