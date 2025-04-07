import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinTripComponent } from './join-trip.component';

describe('JoinTripComponent', () => {
  let component: JoinTripComponent;
  let fixture: ComponentFixture<JoinTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinTripComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
