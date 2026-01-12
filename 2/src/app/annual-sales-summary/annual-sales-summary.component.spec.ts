import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualSalesSummaryComponent } from './annual-sales-summary.component';

describe('AnnualSalesSummaryComponent', () => {
  let component: AnnualSalesSummaryComponent;
  let fixture: ComponentFixture<AnnualSalesSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnualSalesSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnnualSalesSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
