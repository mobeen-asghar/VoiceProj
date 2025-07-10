import { User, UserSettings } from '../types';

class AuthService {
  private readonly STORAGE_KEY = 'voiceproj_user';
  private readonly USERS_KEY = 'voiceproj_users';

  async login(email: string, password: string): Promise<User | null> {
    const users = this.getAllUsers();
    const user = users.find(u => u.email === email);
    
    if (!user) {
      throw new Error('User not found');
    }

    // In a real app, you'd hash and compare passwords
    const storedPassword = localStorage.getItem(`voiceproj_password_${user.id}`);
    if (storedPassword !== password) {
      throw new Error('Invalid password');
    }

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
    return user;
  }

  async signup(email: string, password: string, name: string): Promise<User | null> {
    const users = this.getAllUsers();
    
    if (users.find(u => u.email === email)) {
      throw new Error('User already exists');
    }

    const newUser: User = {
      id: Date.now().toString(),
      email,
      name,
      createdAt: new Date(),
      settings: {
        theme: 'light',
        voiceEnabled: true,
        notifications: true,
        language: 'en'
      }
    };

    users.push(newUser);
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
    localStorage.setItem(`voiceproj_password_${newUser.id}`, password);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(newUser));
    
    return newUser;
  }

  logout(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  getCurrentUser(): User | null {
    const userData = localStorage.getItem(this.STORAGE_KEY);
    if (!userData) return null;
    
    try {
      const user = JSON.parse(userData);
      // Convert date strings back to Date objects
      user.createdAt = new Date(user.createdAt);
      return user;
    } catch {
      return null;
    }
  }

  updateUser(user: User): void {
    const users = this.getAllUsers();
    const index = users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      users[index] = user;
      localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
    }
  }

  private getAllUsers(): User[] {
    const usersData = localStorage.getItem(this.USERS_KEY);
    if (!usersData) return [];
    
    try {
      return JSON.parse(usersData).map((user: any) => ({
        ...user,
        createdAt: new Date(user.createdAt)
      }));
    } catch {
      return [];
    }
  }
}

export const authService = new AuthService();