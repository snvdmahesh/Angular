import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductsService } from 'src/app/services/products.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { SearchbarComponent } from './searchbar.component';

describe('SearchbarComponent', () => {
  let component: SearchbarComponent;
  let fixture: ComponentFixture<SearchbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchbarComponent],
      imports: [HttpClientTestingModule,MatFormFieldModule,MatAutocompleteModule,MatIconModule],
      providers: [ProductsService], // Add ProductsService here
    });

    fixture = TestBed.createComponent(SearchbarComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
