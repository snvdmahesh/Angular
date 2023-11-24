import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchmoduleComponent } from './searchmodule.component';

describe('SearchmoduleComponent', () => {
  let component: SearchmoduleComponent;
  let fixture: ComponentFixture<SearchmoduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchmoduleComponent]
    });
    fixture = TestBed.createComponent(SearchmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
