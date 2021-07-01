import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'cartFilter',
  pure: false
})
export class CartFilterPipe implements PipeTransform {

  transform(products: Product[]): Product[] {
    return products.reduce(function(acc: Product[], cur) {
      console.log(cur)
      return acc.find(function(product: Product) {
        if (product.id == cur.id) {
          if (!product.quantity) {
            product.quantity = 1
          }
          product.quantity++
          return true
        } else {
          return false
        }
      }) ? acc : acc.concat([cur])
    }, [])
  }

}
