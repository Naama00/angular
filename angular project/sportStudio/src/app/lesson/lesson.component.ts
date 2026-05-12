import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit, OnDestroy {
  @Input() lessonData: any;
  isStarted: boolean = false;
  private timer: any;

  ngOnInit() {
    this.checkIfStarted(); // בדיקה ראשונית עם טעינת הרכיב
    
    // בדיקה חוזרת בכל דקה (60,000 מילישניות)
    this.timer = setInterval(() => {
      this.checkIfStarted();
    }, 60000);
  }

  checkIfStarted() {
    const now = new Date();
    const [lessonHour, lessonMinutes] = this.lessonData.time.split(':').map(Number);
    
    const lessonTime = new Date();
    lessonTime.setHours(lessonHour, lessonMinutes, 0);

    this.isStarted = now >= lessonTime;
  }

  ngOnDestroy() {
    // חשוב לנקות את הטיימר כשהקומפוננטה נסגרת כדי למנוע בעיות זיכרון
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}