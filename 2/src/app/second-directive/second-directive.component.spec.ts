import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondDirectiveComponent } from './second-directive.component';

describe('SecondDirectiveComponent', () => {
  let component: SecondDirectiveComponent;
  let fixture: ComponentFixture<SecondDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondDirectiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
