import { Routes } from '@angular/router';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { TherapistsListComponent } from './therapist/therapists-list/therapists-list.component';
import { AppointmentComponent } from './appointments/appointment/appointment.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'customers', pathMatch: 'full' },
	{ path: 'customers', component: CustomersListComponent },
	{ path: 'therapists', component: TherapistsListComponent },
	{ path: 'appointments', component: AppointmentComponent }
];
