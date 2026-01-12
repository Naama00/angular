import { Routes } from '@angular/router';
import { RentingComponent } from './renting/renting.component';
import { SaleComponent } from './sale/sale.component';
import { VacationComponent } from './vacation/vacation.component';
import { CustomerComponent } from './customer/customer.component';
import { EntranceComponent } from './entrance/entrance.component';
export const routes: Routes = [
    {path:'renting',component:RentingComponent},
    {path:'sale',component:SaleComponent},
    {path:'vacation',component:VacationComponent},
    {path:'customer',component:CustomerComponent},
    {path:'entrance',component:EntranceComponent},
    {path: '**', redirectTo: '' } ];
