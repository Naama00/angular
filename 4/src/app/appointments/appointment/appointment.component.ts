import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  appointments = [
    {
      id: 1,
      customer: 'יעל כהן',
      therapist: 'ד\"ר אבי לוי',
      time: '2026-02-25 10:00',
      notes: 'בדיקה ראשונית'
    },
    {
      id: 2,
      customer: 'מיכל בר',
      therapist: 'רותי ישראלי',
      time: '2026-02-26 14:30',
      notes: 'טיפול המשך'
    },
    {
      id: 3,
      customer: 'דניאל לוי',
      therapist: 'ד\"ר אבי לוי',
      time: '2026-03-01 09:00',
      notes: 'יעוץ והכוונה'
    }
  ];
}
