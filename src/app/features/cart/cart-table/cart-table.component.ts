import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'amb-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.scss']
})
export class CartTableComponent implements OnInit {
  products: Product[] = [];

  constructor(private service: CartService) { }

  ngOnInit(): void {
    this.products = this.service.cartProducts;
  }

}
