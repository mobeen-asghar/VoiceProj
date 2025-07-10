import { Project, Task } from '../types';

class DataService {
  private readonly PROJECTS_KEY = 'voiceproj_projects';
  private readonly USER_STATS_KEY = 'voiceproj_user_stats';

  // Projects
  getProjects(userId: string): Project[] {
    const projectsData = localStorage.getItem(`${this.PROJECTS_KEY}_${userId}`);
    if (!projectsData) return [];
    
    try {
      return JSON.parse(projectsData).map((project: any) => ({
        ...project,
        createdAt: new Date(project.createdAt),
        tasks: project.tasks.map((task: any) => ({
          ...task,
          createdAt: new Date(task.createdAt),
          updatedAt: new Date(task.updatedAt),
          dueDate: task.dueDate ? new Date(task.dueDate) : undefined
        }))
      }));
    } catch {
      return [];
    }
  }

  saveProjects(userId: string, projects: Project[]): void {
    localStorage.setItem(`${this.PROJECTS_KEY}_${userId}`, JSON.stringify(projects));
    this.updateUserStats(userId);
  }

  createProject(userId: string, project: Omit<Project, 'id' | 'userId' | 'createdAt'>): Project {
    const newProject: Project = {
      ...project,
      id: Date.now().toString(),
      userId,
      createdAt: new Date()
    };

    const projects = this.getProjects(userId);
    projects.push(newProject);
    this.saveProjects(userId, projects);
    this.updateUserStats(userId);
    
    return newProject;
  }

  updateProject(userId: string, projectId: string, updates: Partial<Project>): Project | null {
    const projects = this.getProjects(userId);
    const index = projects.findIndex(p => p.id === projectId);
    
    if (index === -1) return null;
    
    projects[index] = { ...projects[index], ...updates };
    this.saveProjects(userId, projects);
    this.updateUserStats(userId);
    
    return projects[index];
  }

  deleteProject(userId: string, projectId: string): boolean {
    const projects = this.getProjects(userId);
    const filteredProjects = projects.filter(p => p.id !== projectId);
    
    if (filteredProjects.length === projects.length) return false;
    
    this.saveProjects(userId, filteredProjects);
    this.updateUserStats(userId);
    return true;
  }

  // Tasks
  createTask(userId: string, task: Omit<Task, 'id' | 'userId' | 'createdAt' | 'updatedAt'>): Task {
    const newTask: Task = {
      ...task,
      id: Date.now().toString(),
      userId,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const projects = this.getProjects(userId);
    const projectIndex = projects.findIndex(p => p.id === task.projectId);
    
    if (projectIndex !== -1) {
      projects[projectIndex].tasks.push(newTask);
      this.saveProjects(userId, projects);
      this.updateUserStats(userId);
    }
    
    return newTask;
  }

  updateTask(userId: string, taskId: string, updates: Partial<Task>): Task | null {
    const projects = this.getProjects(userId);
    
    for (const project of projects) {
      const taskIndex = project.tasks.findIndex(t => t.id === taskId);
      if (taskIndex !== -1) {
        project.tasks[taskIndex] = {
          ...project.tasks[taskIndex],
          ...updates,
          updatedAt: new Date()
        };
        this.saveProjects(userId, projects);
        this.updateUserStats(userId);
        return project.tasks[taskIndex];
      }
    }
    
    return null;
  }

  deleteTask(userId: string, taskId: string): boolean {
    const projects = this.getProjects(userId);
    
    for (const project of projects) {
      const originalLength = project.tasks.length;
      project.tasks = project.tasks.filter(t => t.id !== taskId);
      
      if (project.tasks.length < originalLength) {
        this.saveProjects(userId, projects);
        this.updateUserStats(userId);
        return true;
      }
    }
    
    return false;
  }

  toggleTaskStatus(userId: string, taskId: string): Task | null {
    const projects = this.getProjects(userId);
    
    for (const project of projects) {
      const task = project.tasks.find(t => t.id === taskId);
      if (task) {
        task.status = task.status === 'done' ? 'todo' : 'done';
        task.updatedAt = new Date();
        this.saveProjects(userId, projects);
        this.updateUserStats(userId);
        return task;
      }
    }
    
    return null;
  }

  // User Statistics
  getUserStats(userId: string) {
    const statsData = localStorage.getItem(`${this.USER_STATS_KEY}_${userId}`);
    if (!statsData) {
      return {
        totalProjects: 0,
        totalTasks: 0,
        completedTasks: 0,
        lastActivity: null
      };
    }
    
    try {
      const stats = JSON.parse(statsData);
      return {
        ...stats,
        lastActivity: stats.lastActivity ? new Date(stats.lastActivity) : null
      };
    } catch {
      return {
        totalProjects: 0,
        totalTasks: 0,
        completedTasks: 0,
        lastActivity: null
      };
    }
  }

  private updateUserStats(userId: string) {
    const projects = this.getProjects(userId);
    const allTasks = projects.flatMap(p => p.tasks);
    
    const stats = {
      totalProjects: projects.length,
      totalTasks: allTasks.length,
      completedTasks: allTasks.filter(t => t.status === 'done').length,
      lastActivity: new Date()
    };
    
    localStorage.setItem(`${this.USER_STATS_KEY}_${userId}`, JSON.stringify(stats));
  }

  // Data Export/Import
  exportUserData(userId: string) {
    const projects = this.getProjects(userId);
    const stats = this.getUserStats(userId);
    
    return {
      projects,
      stats,
      exportDate: new Date(),
      version: '1.0'
    };
  }

  importUserData(userId: string, data: any) {
    try {
      if (data.projects && Array.isArray(data.projects)) {
        this.saveProjects(userId, data.projects);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }

  // Search functionality
  searchTasks(userId: string, query: string): Task[] {
    const projects = this.getProjects(userId);
    const allTasks = projects.flatMap(p => p.tasks);
    
    const lowerQuery = query.toLowerCase();
    return allTasks.filter(task => 
      task.title.toLowerCase().includes(lowerQuery) ||
      task.description?.toLowerCase().includes(lowerQuery)
    );
  }

  searchProjects(userId: string, query: string): Project[] {
    const projects = this.getProjects(userId);
    const lowerQuery = query.toLowerCase();
    
    return projects.filter(project =>
      project.name.toLowerCase().includes(lowerQuery) ||
      project.description?.toLowerCase().includes(lowerQuery)
    );
  }
}

export const dataService = new DataService();