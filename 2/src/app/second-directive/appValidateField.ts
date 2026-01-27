import { Directive, ElementRef, HostListener, Renderer2, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appValidateField]',
  standalone: true
})
export class ValidateFieldDirective {

  // אנחנו מזריקים את NgControl כדי לקבל גישה לסטטוס של ה-FormControl
  constructor(
    private el: ElementRef, 
    private render: Renderer2,
    @Optional() private control: NgControl 
  ) {}

  // מאזין להקלדה בשדה
  @HostListener('keyup') onKeyUp() {
    this.checkValidation();
  }

  // מאזין ליציאה מהשדה (כדי לעדכן צבע גם אם המשתמש רק עבר שדה)
  @HostListener('blur') onBlur() {
    this.checkValidation();
  }

  private checkValidation() {
    if (!this.control) return;

    // בדיקה: אם השדה לא תקין וגם המשתמש נגע בו (dirty)
    if (this.control.invalid && (this.control.dirty || this.control.touched)) {
      this.render.setStyle(this.el.nativeElement, 'border-color', 'red');
      this.render.setStyle(this.el.nativeElement, 'border-width', '2px');
    } else {
      // אם הוא תקין - נחזיר לצבע המקורי
      this.render.setStyle(this.el.nativeElement, 'border-color', 'black');
      this.render.setStyle(this.el.nativeElement, 'border-width', '1px');
    }
  }
  
}