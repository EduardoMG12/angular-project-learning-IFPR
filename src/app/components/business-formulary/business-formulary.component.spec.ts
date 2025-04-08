import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessFormularyComponent } from './business-formulary.component';

describe('BusinessFormularyComponent', () => {
  let component: BusinessFormularyComponent;
  let fixture: ComponentFixture<BusinessFormularyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessFormularyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessFormularyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
