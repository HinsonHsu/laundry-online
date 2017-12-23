import {Injectable} from '@angular/core';

import {Headers, Http} from '@angular/http';
import {UserAddress} from '../models/userAddress';

@Injectable()
export class UserAddressService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(public http: Http) {
  }

  getUserAddress() {
    return this.http.get('http://127.0.0.1:8000/angular/useraddress/')
      .map(res => res.json());
  }
  setUserAddress(userAddress: UserAddress) {
    return this.http.put('http://127.0.0.1:8000/angular/useraddress/', JSON.stringify(userAddress), {headers: this.headers})
      .map(res => res.json());
  }
}
