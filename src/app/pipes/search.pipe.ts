import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: Product[], searchString: string = ''): Product[] {
    return products.filter(function(product) {
      return product.title.toLowerCase().includes(searchString.toLowerCase())
    })
  }

}
