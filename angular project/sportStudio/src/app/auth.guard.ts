import { Injectable } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  const authService = new AuthService();
  
  // Check if user is authenticated
  if (authService.isAuthenticated()) {
    return true;
  }
  
  // Redirect to login
  router.navigate(['/login']);
  return false;
};
