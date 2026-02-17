import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { AppointmentsModule } from '../appointments/appointments.module';



@NgModule({
  declarations: [CustomerCardComponent,CustomersListComponent],
  imports: [
    CommonModule,AppointmentsModule
  ],
  exports: []
})
export class CustomersModule { }
