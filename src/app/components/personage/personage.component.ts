import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-personage',
  templateUrl: './personage.component.html',
  styleUrls: ['./personage.component.css']
})
export class PersonageComponent implements OnInit {
  phone: any;

  constructor() {
    this.phone = sessionStorage.getItem('AUTHORIZATION');
  }

  ngOnInit() {
  }

}
