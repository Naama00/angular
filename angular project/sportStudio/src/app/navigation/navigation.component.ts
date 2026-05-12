import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
  template: `
    <mat-toolbar class="navbar" color="primary">
      <div class="navbar-container">
        <div class="navbar-brand">
          <span class="logo">🏋️ Studio ספורט</span>
        </div>
        <div class="navbar-menu">
          <button mat-button routerLink="/lessons-list" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
            <mat-icon>school</mat-icon>
            <span>שיעורים</span>
          </button>
          <button mat-button routerLink="/registered-list" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
            <mat-icon>people</mat-icon>
            <span>נרשמות</span>
          </button>
          <button mat-button routerLink="/login" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
            <mat-icon>logout</mat-icon>
            <span>יציאה</span>
          </button>
        </div>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    .navbar {
      background-color: #3f51b5 !important;
      color: white;
      direction: rtl;
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .navbar-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 0 20px;
    }

    .navbar-brand {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .logo {
      font-size: 20px;
      font-weight: bold;
      color: white;
    }

    .navbar-menu {
      display: flex;
      gap: 10px;
      align-items: center;
    }

    ::ng-deep .navbar-menu button {
      color: white !important;
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    ::ng-deep .navbar-menu button:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    ::ng-deep .navbar-menu button.active {
      background-color: rgba(255, 255, 255, 0.2);
      font-weight: bold;
    }

    ::ng-deep .navbar-menu button mat-icon {
      margin-right: 5px;
    }

    @media (max-width: 600px) {
      .navbar-brand {
        font-size: 14px;
      }

      ::ng-deep .navbar-menu button span {
        display: none;
      }
    }
  `]
})
export class NavigationComponent {
  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    // You can add authentication check here
    return true;
  }
}
