import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from "./parent/parent.component";
import { ReeactiveFormComponent } from "./reeactive-form/reeactive-form.component";
import { ServiceComponent } from './service/service.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentComponent, ReeactiveFormComponent, ServiceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2';
}
