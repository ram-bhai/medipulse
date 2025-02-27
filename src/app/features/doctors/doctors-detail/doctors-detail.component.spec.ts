import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsDetailComponent } from './doctors-detail.component';

describe('DoctorsDetailComponent', () => {
  let component: DoctorsDetailComponent;
  let fixture: ComponentFixture<DoctorsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorsDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
