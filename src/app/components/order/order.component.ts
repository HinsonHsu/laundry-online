import {Component, OnInit} from '@angular/core';

import {Order} from '../../models/order';
import {OrderService} from '../../services/order.service';
import {CartProduct} from '../../models/cartProduct';

import { Router } from '@angular/router';

import * as $ from 'jquery';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: Order[];
  unCompletedOrders: Order[];
  completedOrders: Order[];

  constructor(private orderService: OrderService,
              private router: Router) {
  }

  ngOnInit() {
    this.orderService.getUnCompletedOrders().subscribe((orders) => {
      this.unCompletedOrders = orders;
      this.orders = this.unCompletedOrders;
    });
    this.orderService.getCompletedOrders().subscribe((orders) => {
      this.completedOrders = orders;
    });

  }

  onUncompletedClick() {
    this.orders = this.unCompletedOrders;
    $('#li-completed').removeClass('active');
    $('#li-uncompleted').addClass('active');
  }

  onCompletedClick() {
    this.orders = this.completedOrders;
    $('#li-completed').addClass('active');
    $('#li-uncompleted').removeClass('active');
  }
  onOrderClick(order) {
    let link = ['/orderdetail', order.ordersn];
    this.router.navigate(link);
  }
}
