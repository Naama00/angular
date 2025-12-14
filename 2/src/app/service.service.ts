import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  language: string = 'he';
  lastDate: Date = new Date('2024-10-31');
  constructor() {
  }
  getData() {
    return this;
  }
  alertIfOldDate(date: Date) {
    if (date > this.lastDate) {
      const daysDiff = Math.floor((date.getTime() - this.lastDate.getTime()) / (1000 * 60 * 60 * 24));
      alert(`sorry, but it's too late to request now: ${daysDiff} days have passed since the last possible date.`);
    } else
      alert('the request was send successfully.');
  }
}