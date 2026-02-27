import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-therapists-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './therapists-list.component.html',
  styleUrls: ['./therapists-list.component.css']
})
export class TherapistsListComponent {
  therapists = [
    { id: 1, name: 'ד\"ר אבי לוי', specialty: 'נוירולוגיה', phone: '03-5551234' },
    { id: 2, name: 'רותי ישראלי', specialty: 'פסיכותרפיה', phone: '03-5559876' },
    { id: 3, name: 'אורן כהן', specialty: 'פיזיותרפיה', phone: '03-5552233' }
  ];
}
