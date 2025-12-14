import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReeactiveFormComponent } from './reeactive-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReeactiveFormComponent
  ],
  exports: [ReeactiveFormComponent]
})
export class ReeactiveFormModule { }
