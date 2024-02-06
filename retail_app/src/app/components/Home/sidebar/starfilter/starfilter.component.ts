// import { Component ,Output,EventEmitter} from '@angular/core';

// @Component({
//   selector: 'app-starfilter',
//   templateUrl: './starfilter.component.html',
//   styleUrls: ['./starfilter.component.scss']
// })
// export class StarfilterComponent {
//   @Output() filterStarRating = new EventEmitter<number | undefined>();

//   filterProductsByStarRating(starRating: number | undefined) {
//     this.filterStarRating.emit(starRating);
//     console.log('clicked' ,this.filterStarRating);
//   }
// }


import { Component, EventEmitter, Output } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-starfilter',
  templateUrl: './starfilter.component.html',
  styleUrls: ['./starfilter.component.scss']
})
export class StarfilterComponent {

  @Output() filterByStarRating: EventEmitter<number | undefined> = new EventEmitter<number | undefined>();

  selectedRating: number | undefined;
  constructor(private productService: ProductsService){  }

  selectStarRating(starRating: number | undefined) {
    
    this.selectedRating = starRating;
    this.filterByStarRating.emit(starRating); // Emit the selected star rating
    this.productService.setRating(this.selectedRating)
    console.log(this.productService.getRating())
    
  } 
}


