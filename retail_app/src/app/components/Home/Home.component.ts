import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from './product.interface';
import { SortPipe } from 'src/app/sort.pipe';
import { FilterByStarRatingPipe } from 'src/app/filter.pipe';
import { FilterByTitlePipe } from 'src/app/filter.pipe';


@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss'],
  providers: [ProductsService,
    FilterByTitlePipe,
    FilterByStarRatingPipe,
    SortPipe]
})

export class HomeComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  selectedSortOption: string = '';
  searchValue: string = '';
  selectedRating: number | undefined;

  constructor(private productService: ProductsService, private sortPipe: SortPipe, private filterByStarRatingPipe: FilterByStarRatingPipe, private filterByTitlePipe: FilterByTitlePipe) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.fetchedProducts().subscribe(
      (data: any) => {
        this.products = data;
        this.filteredProducts = data;
        console.log(this.products)
      },
      error => {
        console.error('Error fetching products:', error);
      }
    );
  }
  //Search bar
  onSearchClicked(searchValue: string): void {
    this.searchValue = searchValue;
    this.updateFilteredProducts();
  }

  //star filter
  applyFilterByStarRating(selectedRating: number | undefined): void {
    if (selectedRating !== undefined) {
      this.selectedRating = selectedRating;
      this.updateFilteredProducts();
    } // Update filtered products when the star rating changes
    else {
      this.filteredProducts = this.products;
    }
  }




  // Sort Pipe
  onSortBy(): void {
    this.filteredProducts = this.sortPipe.transform(this.filteredProducts, this.selectedSortOption);
  }

  updateFilteredProducts(): void {
    this.filteredProducts = this.sortPipe.transform(
      this.filterByTitlePipe.transform(
        this.filterByStarRatingPipe.transform(this.products, this.selectedRating),
        this.searchValue
      ),
      this.selectedSortOption
    );
  }
}