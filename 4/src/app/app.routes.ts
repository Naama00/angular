import { Routes } from '@angular/router';
// import { CustomersListComponent } from './customers/customers-list/customers-list.component';
// import { TherapistsListComponent } from './therapist/therapists-list/therapists-list.component';
// import { AppointmentComponent } from './appointments/appointment/appointment.component';
import { LoginComponent } from './login/login.component';
import { MoneySummaryComponent } from './money-summary/money-summary.component';
import{TravelOrderComponent} from './travel-order/travel-order.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
	// { path: '', redirectTo: 'customers', pathMatch: 'full' },
	// { path: 'customers', component: CustomersListComponent },
	// { path: 'therapists', component: TherapistsListComponent },
	// { path: 'appointments', component: AppointmentComponent }
	{path: 'login', component: LoginComponent},
	{path: 'money-summary', component: MoneySummaryComponent, canActivate: [authGuard]},
	{path: 'travel-order', component: TravelOrderComponent},
	{ path: '', redirectTo: '/login', pathMatch: 'full' }
];
