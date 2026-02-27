import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customers-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent {
  customers = [
    { id: 1, name: 'יעל כהן', phone: '050-1234567', email: 'yael@example.com', notes: 'העדפה: בוקר' },
    { id: 2, name: 'מיכל בר', phone: '052-7654321', email: 'michal@example.com', notes: 'רגישה לחרדה' },
    { id: 3, name: 'דניאל לוי', phone: '054-1112233', email: 'daniel@example.com', notes: 'מעוניין בטיפול זוגי' }
  ];
}
