import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientListDetailComponent } from './patient-list-detail.component';

describe('PatientListDetailComponent', () => {
  let component: PatientListDetailComponent;
  let fixture: ComponentFixture<PatientListDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientListDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
