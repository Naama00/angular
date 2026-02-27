import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatringMenuComponent } from './catring-menu.component';

describe('CatringMenuComponent', () => {
  let component: CatringMenuComponent;
  let fixture: ComponentFixture<CatringMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatringMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatringMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
