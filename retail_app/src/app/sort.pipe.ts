// sort.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(array: any[], sortOption: string): any[] {
    if (!array || array.length <= 1) {
      return array;
    }

    switch (sortOption) {
      case 'alphabetical':
        return array.slice().sort((a, b) => a.title.localeCompare(b.title));
      case 'reverseAlphabetical':
        return array.slice().sort((a, b) => b.title.localeCompare(a.title));
      case 'priceLowToHigh':
        return array.slice().sort((a, b) => a.price - b.price);
      case 'priceHighToLow':
        return array.slice().sort((a, b) => b.price - a.price);
      default:
        return array;
    }
  }
}
