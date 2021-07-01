import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'amb-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products: Product[] = []

  ngOnInit(): void {
    this.products = this.cartService.cartProducts
  }

  constructor(private cartService: CartService) { }

}
