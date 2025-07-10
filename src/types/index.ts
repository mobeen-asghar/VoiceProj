export interface Task {
  id: string;
  title: string;
  description?: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  projectId: string;
  createdAt: Date;
  updatedAt: Date;
  assignedTo?: string;
  dueDate?: Date;
  userId: string;
}

export interface Project {
  id: string;
  name: string;
  description?: string;
  color: string;
  tasks: Task[];
  members: string[];
  createdAt: Date;
  userId: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: Date;
  settings: UserSettings;
}

export interface UserSettings {
  theme: 'light' | 'dark';
  voiceEnabled: boolean;
  notifications: boolean;
  language: string;
}

export interface VoiceCommand {
  command: string;
  action: () => void;
  description: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}