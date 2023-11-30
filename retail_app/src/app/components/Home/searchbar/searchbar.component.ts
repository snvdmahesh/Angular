import { Component, OnInit } from '@angular/core';
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
  constructor(private productservices: ProductsService) {}

  myControl = new FormControl('');
  filteredOptions?: Observable<string[]>;

  products: Product[] = []; // Assuming this holds fetched products

  ngOnInit(): void {
    this.productservices.fetchedProducts().subscribe(
      (data: any) => {
        this.products = data as Product[]; // Assuming the service response is an array of products
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
      .filter(product => product.title.toLowerCase().includes(filterValue)) // Assuming 'name' is the property containing the product name
      .map(product => product.title);
  }
}
