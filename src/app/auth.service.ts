import { Injectable } from '@angular/core';

interface User {
  email: string;
  name: string;
  surname: string;
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [];

  private isAuthenticated = false;

  constructor() {
    // Default users
    this.users.push({
      email: 'admin@example.com',
      name: 'Admin',
      surname: 'User',
      username: 'admin',
      password: 'password'
    });
  }

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  register(user: User): boolean {
    const userExists = this.users.some(u => u.username === user.username);
    if (userExists) {
      return false;
    }
    this.users.push(user);
    return true;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
