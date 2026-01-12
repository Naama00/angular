import { Component } from '@angular/core';

@Component({
  selector: 'app-annual-sales-summary',
  standalone: true,
  imports: [],
  templateUrl: './annual-sales-summary.component.html',
  styleUrl: './annual-sales-summary.component.css'
})
export class AnnualSalesSummaryComponent {
  sales = {
    total: 150000,
    growth: 12.5
  };

  customers = {
    total: 2500,
    new: 300,
    retention: 85
  };

  advertisements = {
    budget: 20000,
    spent: 18000,
    roi: 3.2
  };

  expenses = {
    total: 80000,
    categories: {
      marketing: 20000,
      operations: 30000,
      salaries: 30000
    }
  };

  revenues = {
    total: 150000,
    sources: {
      productSales: 120000,
      services: 30000
    }
  };
}
