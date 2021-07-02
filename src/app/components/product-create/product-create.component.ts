import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'amb-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  product: Product = { price: 0, title: '' };

  constructor() { }

  ngOnInit(): void {
  }

  clickToSave() {
    // this.service.save(this.product);
  }
}
