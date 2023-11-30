import { Component, Input } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/components/Home/product.interface';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent{
  @Input() product: Product | undefined;
}
