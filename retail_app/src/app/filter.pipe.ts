// filter.pipe.ts
// filter-by-star-rating.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByStarRating'
})
export class FilterByStarRatingPipe implements PipeTransform {
  transform(products: any[], selectedRating: number | undefined): any[] {
    if (selectedRating !== undefined) {
      return products.filter(product => product.rating === selectedRating);
    } else {
      return products;
    }
  }
}

//filter by title or search bar
@Pipe({
  name: 'filterByTitle'
})
export class FilterByTitlePipe implements PipeTransform {
  transform(array: any[], searchValue: string): any[] {
    if (!array || array.length === 0 || !searchValue) {
      return array;
    }

    return array.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));
  }
}
