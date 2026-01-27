import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidateFieldDirective  } from './appValidateField'; 
@Component({
  selector: 'app-second-directive',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ValidateFieldDirective],
  templateUrl: './second-directive.component.html',
  styleUrl: './second-directive.component.css'
})
export class SecondDirectiveComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      // 1. שם מלא: חובה, מינימום 5 תווים
      name: new FormControl('', [
        Validators.required, 
        Validators.minLength(5)
      ]),

      // 2. כתובת: חובה
      address: new FormControl('', [
        Validators.required
      ]),

      // 3. אימייל: חובה ובפורמט אימייל תקין
      email: new FormControl('', [
        Validators.required, 
        Validators.email
      ]),

      // 4. טלפון: חובה, בדיוק 10 ספרות, ורק מספרים
      phoneNumber: new FormControl('', [
        Validators.required, 
        Validators.pattern('^[0-9]*$'), 
        Validators.minLength(9), 
        Validators.maxLength(10)
      ]),

      // 5. סיבת פנייה: חובה
      enquiryCause: new FormControl('', [
        Validators.required
      ])
    });
  }

  onSubmit() {
    if (this.form.valid) {
     alert('הטופס נשלח בהצלחה!');
    } else {
      alert('יש למלא את כל השדות כראוי לפני השליחה.');
      this.form.markAllAsTouched();
    }
  }
  
}

