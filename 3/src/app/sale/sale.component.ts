import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Apartment {
  id: number;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
}

@Component({
  selector: 'app-sale',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.css'
})
export class SaleComponent {
  apartments: Apartment[] = [
    { id: 1, title: 'Modern Apartment in Tel Aviv', price: 2500000, location: 'Tel Aviv', bedrooms: 3, bathrooms: 2 },
    { id: 2, title: 'Cozy Studio in Jerusalem', price: 800000, location: 'Jerusalem', bedrooms: 1, bathrooms: 1 },
    { id: 3, title: 'Spacious Villa in Haifa', price: 4500000, location: 'Haifa', bedrooms: 5, bathrooms: 3 }
  ];
}
