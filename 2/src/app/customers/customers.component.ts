import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
  customers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '555-123-4567' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', phone: '444-987-6543' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', phone: '333-456-7890' }
  ];
}
