import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductsService } from 'src/app/services/products.service';
import { StarfilterComponent } from './starfilter.component';


describe('StarfilterComponent', () => {
  let component: StarfilterComponent;
  let fixture: ComponentFixture<StarfilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarfilterComponent],
      imports: [HttpClientTestingModule], 
      providers: [ProductsService], 
    });

    fixture = TestBed.createComponent(StarfilterComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
