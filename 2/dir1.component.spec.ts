import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dir1Component } from './dir1.component';

describe('Dir1Component', () => {
  let component: Dir1Component;
  let fixture: ComponentFixture<Dir1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dir1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Dir1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
