import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reeactive-form',
  templateUrl: './reeactive-form.component.html',
  styleUrls: ['./reeactive-form.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class ReeactiveFormComponent {
  technicianOrderForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.technicianOrderForm = fb.group({
      date: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(10)]],
      coase: ['', [Validators.required]],
      problemDescription: ['', []]
    });
  }

  isValidForm() {
   if( this.technicianOrderForm.valid)
    { 
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.technicianOrderForm.value);
   } else {
      alert('Please fill all the required fields in the form!!!');
      this.technicianOrderForm.markAllAsTouched();
   }
    }
  
  isFieldInvalid(field: string) {
    const control = this.technicianOrderForm.get(field);
    return control?.invalid && control.touched;
  }

}