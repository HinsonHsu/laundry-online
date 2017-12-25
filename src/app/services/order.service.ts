import {Injectable} from '@angular/core';

import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';

import {CartProduct} from '../models/cartProduct';


@Injectable()
export class OrderService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
    this.headers.set('AUTHORIZATION', sessionStorage.getItem('AUTHORIZATION'));
  }

  getUnCompletedOrders() {
    return this.http.get('http://39.106.44.111:8000/angular/uncompletedorders/',{headers: this.headers})
      .map(res => res.json());
  }

  getCompletedOrders() {
    return this.http.get('http://39.106.44.111:8000/angular/completedorders/',{headers: this.headers})
      .map(res => res.json());
  }

  getOrderDetailByOrdersn(ordersn: number) {
    return this.http.get('http://39.106.44.111:8000/angular/orderdetail/' + ordersn)
      .map(res => res.json());
  }

  getCartProducts() {
    const str = localStorage.getItem('cartProducts');
    return JSON.parse(str);
  }

  submitOrder(cartProducts: CartProduct[]) {
    return this.http.put('http://127.0.0.1:8000/angular/makeorder/', JSON.stringify(cartProducts), {headers: this.headers})
      .map(res => res.json());
  }
}
