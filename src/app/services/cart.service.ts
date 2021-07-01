import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts: Product[] = []

  constructor() { }

  addProduct(product: Product) {
    this.cartProducts.push(product)
  }
}
