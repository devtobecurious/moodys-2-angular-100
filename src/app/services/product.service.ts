import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

export declare type ResultApi = {
  success: string,
  items: Product[]
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<ResultApi>(environment.apis.products.url).pipe(
      map(item => {
        return item.items;
      })
    );
  }
}
