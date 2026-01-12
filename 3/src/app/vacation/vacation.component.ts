import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Apartment {
  id: number;
  title: string;
  nightlyRate: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
}

@Component({
  selector: 'app-vacation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vacation.component.html',
  styleUrl: './vacation.component.css'
})
export class VacationComponent {
  apartments: Apartment[] = [
    { id: 1, title: 'Beachfront Villa in Eilat', nightlyRate: 1500, location: 'Eilat', bedrooms: 4, bathrooms: 3 },
    { id: 2, title: 'Mountain Cabin in Golan', nightlyRate: 800, location: 'Golan Heights', bedrooms: 2, bathrooms: 1 },
    { id: 3, title: 'City Center Apartment in Tel Aviv', nightlyRate: 1200, location: 'Tel Aviv', bedrooms: 3, bathrooms: 2 }
  ];
}
