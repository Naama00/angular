import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TherapistModule } from './therapist/therapist.module';
import { CustomersModule } from './customers/customers.module';
import { AppointmentsModule } from './appointments/appointments.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CustomersModule,TherapistModule,AppointmentsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '4';
}
