// lessons-list.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonComponent } from '../lesson/lesson.component'; 

@Component({
  selector: 'app-lessons-list',
  standalone: true,
  imports: [CommonModule, LessonComponent], 
  template: `
    <h2>רשימת השיעורים שלי:</h2>
    <div *ngFor="let item of lessons">
      <!-- שימוש בקומפוננטת הבן והעברת הנתונים אליה -->
      <app-lesson [lessonData]="item"></app-lesson>
    </div>
  `
})
export class LessonsComponent {
lessons = [
  { name: 'פילאטיס', teacher: 'יעל', sessions: 10, startDate: '2024-01-01', price: 100, day: 'ראשון', time: '10:00' },
  { name: 'אירובי', teacher: 'אפרת', sessions: 8, startDate: '2024-02-01', price: 80, day: 'שני', time: '14:00' },
  { name: 'יוגה', teacher: 'מיכל', sessions: 12, startDate: '2024-03-01', price: 120, day: 'שלישי', time: '16:00' },
  { name: 'זומבה', teacher: 'דנה', sessions: 6, startDate: '2024-04-01', price: 60, day: 'רביעי', time: '18:00' },
  { name: 'היפהופ', teacher: 'אורית', sessions: 8, startDate: '2024-05-01', price: 80, day: 'חמישי', time: '20:00' }
];


}

