import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  status: string = '';
  username: string = '';
  password: string = '';
  role: string = 'user';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.authService.login(this.username, this.password, this.role)) {
      this.status = 'התחברת בהצלחה!';
     
      this.router.navigate(['/']);
    } else {
      this.status = 'שם משתמש או סיסמה שגויים.';
    }
  }
}