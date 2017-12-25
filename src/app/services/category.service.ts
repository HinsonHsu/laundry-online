import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {

  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(public http: Http) {
    console.log('CategoryService connecting...');
  }

  getCategories() {
    return this.http.get('http://39.106.44.111:8000/angular/categories/')
      .map(res => res.json());
  }

}
