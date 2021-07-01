import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';
import { ProductService } from 'src/app/services/product.service';
import { SearchService } from 'src/app/shared/modules/search/services/search.service';

@Component({
  selector: 'amb-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  searchString: string = ''
  products: Array<Product> = []

  ngOnInit(): void {
   const obs$ = this.productService.getAll();
   const sub = obs$.subscribe(items => this.products = items);

   this.subscriptions.push(sub);

    console.info('list', this.searchService.searchValue);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(item => item.unsubscribe());
  }

  constructor(
    private dataService: DataService,
    private productService: ProductService,
    private cartService: CartService,
    private searchService: SearchService
  ) {}


  handleAddToCart(product: Product) {
    this.cartService.addProduct(product)
  }

}
