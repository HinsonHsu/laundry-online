import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

@Injectable()
export class AuthorityService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  code(phoneMsg: any) {
    return this.http.post('http://127.0.0.1:8000/angular/angular_code/', JSON.stringify(phoneMsg), {headers: this.headers})
      .map(res => res.json());
  }

  login(phoneMsg: any) {
    return this.http.post('http://127.0.0.1:8000/angular/angluar_login/', JSON.stringify(phoneMsg), {headers: this.headers})
      .map(res => res.json());
  }
}
