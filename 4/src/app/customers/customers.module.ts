import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { AppointmentsModule } from '../appointments/appointments.module';


@NgModule({
  declarations: [CustomerCardComponent],
  imports: [CommonModule, AppointmentsModule],
  exports: []
})
export class CustomersModule { }
