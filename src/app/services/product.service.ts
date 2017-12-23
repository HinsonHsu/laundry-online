import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Product } from '../models/product';
import { CartProduct } from '../models/cartProduct';
import * as $ from 'jquery';
@Injectable()
export class ProductService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(public http: Http) {
    console.log('ProductService connecting...');
  }

  getProducts(category_id: number) {
    return this.http.get('http://127.0.0.1:8000/angular/category/' + category_id)
      .map(res => res.json());
  }
  setCartProducts(cartProducts: CartProduct[]) {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    console.log(localStorage.getItem('cartProducts'));
  }
  getCartProducts() {
    const str = localStorage.getItem('cartProducts')
    return JSON.parse(str);
  }
}
