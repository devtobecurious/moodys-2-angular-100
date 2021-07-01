import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { VatPipe } from 'src/app/pipes/vat.pipe';

@Component({
  selector: 'amb-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {
    title: '',
    price: 0
  }
  @Output() addToCart: EventEmitter<Product> = new EventEmitter()
  isImageMouseover: boolean = false

  ngOnInit(): void {
  }

  constructor(private vatPipe: VatPipe, private currencyPipe: CurrencyPipe) { }

  handleImageClick(event: MouseEvent) {
    console.log('IMAGE CLICK', event)
    console.log('PRODUCT CLICKED :', this.currencyPipe.transform(this.vatPipe.transform(this.product.price)))
  }

  handleCartClick() {
    this.addToCart.emit(this.product)
  }

  toggleImageMouseover() {
    this.isImageMouseover = !this.isImageMouseover
  }

}
