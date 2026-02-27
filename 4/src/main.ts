import { bootstrapApplication } from '@angular/platform-browser';
// Ensure JIT compiler is available when a runtime-compiled component appears
import '@angular/compiler';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
