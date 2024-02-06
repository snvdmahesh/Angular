import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  rating?: number | undefined

  constructor(private http: HttpClient) { }
  setRating(rate: number | undefined) {
    this.rating = rate
  }
  getRating() {
    return this.rating
  }
  fetchedProducts() {
    return this.http.get('http://localhost:3000/merchandise')
  }

}
