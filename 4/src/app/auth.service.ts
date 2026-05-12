import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: { username: string; role: string } | null = null;

  constructor() {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    }
  }

  login(username: string, password: string, role: string): boolean {
    if (username === 'admin' && password === 'password') {
      this.currentUser = { username, role: 'admin' };
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      return true;
    } else if (username && password) {
      this.currentUser = { username, role };
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      return true;
    }
    return false;
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  isAdmin(): boolean {
    return this.currentUser?.role === 'admin';
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
