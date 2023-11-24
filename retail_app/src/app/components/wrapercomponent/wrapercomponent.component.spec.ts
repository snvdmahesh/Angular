import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapercomponentComponent } from './wrapercomponent.component';

describe('WrapercomponentComponent', () => {
  let component: WrapercomponentComponent;
  let fixture: ComponentFixture<WrapercomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WrapercomponentComponent]
    });
    fixture = TestBed.createComponent(WrapercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
