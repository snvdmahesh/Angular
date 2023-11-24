import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarfilterComponent } from './starfilter.component';

describe('StarfilterComponent', () => {
  let component: StarfilterComponent;
  let fixture: ComponentFixture<StarfilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarfilterComponent]
    });
    fixture = TestBed.createComponent(StarfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
