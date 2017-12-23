import {Component, OnInit} from '@angular/core';

import {ActivatedRoute} from '@angular/router';

import {Order} from '../../models/order';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  ordersn: number;
  order: Order;

  constructor(private orderService: OrderService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.ordersn = params['id'];
    });
    this.order = new Order();
  }

  ngOnInit() {
    this.initOrder();
  }

  initOrder() {
    this.orderService.getOrderDetailByOrdersn(this.ordersn).subscribe((order) => {
      this.order = order;
      console.log(this.order);
    });
  }

}
