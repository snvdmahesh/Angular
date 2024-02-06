import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/components/Home/product.interface';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  @Output() searchClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor(private productService: ProductsService) {}

  myControl = new FormControl('');
  filteredOptions?: Observable<string[]>;
  products: Product[] = [];
//auto fill extention
  ngOnInit(): void {
    this.productService.fetchedProducts().subscribe(
      (data: any) => {
        this.products = data as Product[];
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value || ''))
        );
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.products
      .filter(product => product.title.toLowerCase().includes(filterValue))
      .map(product => product.title);
  }

  onSearchClick(): void {
    const searchValue = this.myControl.value || ''; // Default to an empty string if null
    this.searchClicked.emit(searchValue);

    this.myControl.setValue('');
  }
}

