import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewpostComponent } from './reviewpost.component';

describe('ReviewpostComponent', () => {
  let component: ReviewpostComponent;
  let fixture: ComponentFixture<ReviewpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
