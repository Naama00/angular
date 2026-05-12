// app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LessonsComponent } from './lessons/lessons.component';
import { RegistrationComponent } from './registration/registration.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // דף ברירת מחדל
  { path: 'login', component: LoginComponent },
  { path: 'lessons-list', component: LessonsComponent },
  { path: 'registered-list', component: RegistrationComponent },
  { path: '**', redirectTo: 'login' } // נתיב לכל מקרה של טעות בכתובת
];