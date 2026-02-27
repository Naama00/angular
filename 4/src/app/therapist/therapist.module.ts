import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TherapistCardComponent } from './therapist-card/therapist-card.component';
import { AppointmentsModule } from '../appointments/appointments.module';


@NgModule({
  declarations: [TherapistCardComponent],
  imports: [CommonModule, AppointmentsModule],
  exports: []
})
export class TherapistModule { }
