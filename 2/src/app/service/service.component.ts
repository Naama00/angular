import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  serviceData: any;

  constructor(private service: ServiceService) {
    this.serviceData = this.service;
  }

  onSubmit() {
    this.service.alertIfOldDate(new Date());
  }
}
