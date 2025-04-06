import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHostelComponent } from './card-hostel';

describe('CardHostelComponent', () => {
  let component: CardHostelComponent;
  let fixture: ComponentFixture<CardHostelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHostelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHostelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
