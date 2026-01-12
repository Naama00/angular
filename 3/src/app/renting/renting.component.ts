import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Apartment {
  id: number;
  title: string;
  rent: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
}

@Component({
  selector: 'app-renting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './renting.component.html',
  styleUrl: './renting.component.css'
})
export class RentingComponent {
  apartments: Apartment[] = [
    { id: 1, title: 'Affordable Apartment in Tel Aviv', rent: 5000, location: 'Tel Aviv', bedrooms: 2, bathrooms: 1 },
    { id: 2, title: 'Luxury Rental in Jerusalem', rent: 8000, location: 'Jerusalem', bedrooms: 4, bathrooms: 2 },
    { id: 3, title: 'Studio in Haifa', rent: 3000, location: 'Haifa', bedrooms: 1, bathrooms: 1 }
  ];
}
