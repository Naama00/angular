import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { username: 'מיכל', password: '123', role: 'מורה להתעמלות' },
    { username: 'לאה', password: '456', role: 'מזכירת רישום' },
    { username: 'אפרת', password: '789', role: 'מורה להתעמלות' },
    { username: 'יעל', password: 'abc', role: 'מורה להתעמלות' },
    { username: 'שרה', password: 'def', role: 'מזכירת רישום' }
  ];

  login(username: string, password: string) {
    const user = this.users.find(u => u.username === username && u.password === password);
    return user ? user.role : null;
  }
}