import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductitemscomponentComponent } from './productitemscomponent.component';

describe('ProductitemscomponentComponent', () => {
  let component: ProductitemscomponentComponent;
  let fixture: ComponentFixture<ProductitemscomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductitemscomponentComponent]
    });
    fixture = TestBed.createComponent(ProductitemscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
