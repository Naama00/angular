import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-travel-order',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './travel-order.component.html',
  styleUrl: './travel-order.component.css'
})
export class TravelOrderComponent {
  destination: string = '';
  date: string = '';
  purpose: string = '';
  submitted: boolean = false;

  submitOrder() {
    this.submitted = true;
    // Logic to submit the travel order
  }
}
