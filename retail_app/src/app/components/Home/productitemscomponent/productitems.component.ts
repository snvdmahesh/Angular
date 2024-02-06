import { Component, Input } from '@angular/core';
import { Product } from 'src/app/components/Home/product.interface';

@Component({
  selector: 'app-productitems',
  templateUrl: './productitems.component.html',
  styleUrls: ['./productitems.component.scss']
})
export class ProductitemsComponent {
  @Input() products: Product[] = [];
}