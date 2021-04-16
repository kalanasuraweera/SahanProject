import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Product} from './product-models';
import * as loadedProducts from './ss-products/mocks/LoadProducts.json';

@Injectable({
  providedIn: 'root'
})
export class SsProductsService {

  constructor() { }

  loadProducts() : Observable<Product[]> {
    let subject: BehaviorSubject<Product[]> = new BehaviorSubject(null);
    setTimeout(() => {
      subject.next(loadedProducts.data);
    }, 1000);
    return subject;
  }
}
