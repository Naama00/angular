import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-money-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './money-summary.component.html',
  styleUrl: './money-summary.component.css'
})
export class MoneySummaryComponent {
  totalEarnings: number = 15000;
  totalExpenses: number = 8000;
  netProfit: number = 7000;
  monthlyRevenue: number = 2500;
}
