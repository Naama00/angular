import { Component, OnInit } from '@angular/core';
import { AnnualSalesSummaryComponent } from './annual-sales-summary/annual-sales-summary.component';
import { CustomersComponent } from './customers/customers.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SearchInArrayPipe } from './search-in-array.pipe';
import { SecondDirectiveComponent } from './second-directive/second-directive.component';
import { HttpComponent } from './http/http.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CustomersComponent,AnnualSalesSummaryComponent,SearchInArrayPipe,SecondDirectiveComponent,HttpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  admin: string = "Admin";
  secretary: string = "secretary";
  random: number = Math.floor(Math.random() * 2);
  
  userRole: string | undefined;

  searchValue: number = 7;
  searchArray: number[] = [1, 2, 3, 4, 5];

  async ngOnInit() {
    const role = await this.authorizationPromise();
    this.userRole = role as string;
  }

  authorizationPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (this.random === 0) {
          resolve(this.admin);
        } else {
          resolve(this.secretary);
        }
      }, 2000); 
    });
  }
}