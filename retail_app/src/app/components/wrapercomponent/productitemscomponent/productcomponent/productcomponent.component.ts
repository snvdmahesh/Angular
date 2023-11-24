import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-productcomponent',
  templateUrl: './productcomponent.component.html',
  styleUrls: ['./productcomponent.component.scss']
})
export class ProductcomponentComponent implements OnInit {
 constructor(private productservices:ProductsService){}
 ngOnInit(): void {
   this.productservices.fetchedProducts().subscribe((res)=>{console.log(res)})
 }
 
}
