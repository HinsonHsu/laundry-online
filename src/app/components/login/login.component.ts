import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {AuthorityService} from '../../services/authority.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  phone: any;
  checkCode: any;

  constructor(private authorityService: AuthorityService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onCaptchaClick() {
    this.phone = $('#phoneNum').val();
    this.authorityService.code({'phone': this.phone}).subscribe((res) => {
      if (res['result'] === 0) {
        alert('Code Sent');
      } else {
        alert(res['errMsg']);
      }
    });
  }

  onLoginClick() {
    this.phone = $('#phoneNum').val();
    this.checkCode = $('#checkCode').val();
    this.authorityService.login({'phone': this.phone, 'checkCode': this.checkCode}).subscribe((res) => {
      if (res['code'] === 0) {
        alert('login successfully' + res['authorization']);
        sessionStorage.setItem('AUTHORIZATION', res['authorization']);
        this.router.navigate(['/personage']);
      } else {
        alert(res['errMsg']);
      }
    });
  }

}
