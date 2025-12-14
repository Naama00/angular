import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReeactiveFormComponent } from './reeactive-form.component';

describe('ReeactiveFormComponent', () => {
  let component: ReeactiveFormComponent;
  let fixture: ComponentFixture<ReeactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReeactiveFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReeactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
