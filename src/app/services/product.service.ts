import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
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
    const url = 'https://d2bc9bc6-2cd2-4bf1-bf23-296185edebc9.mock.pstmn.io/api/v3/products';
    return this.httpClient.get<ResultApi>(url).pipe(
      map(item => {
        return item.items;
      }),
      
    );
  }
}
