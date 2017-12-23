import {Component, OnInit} from '@angular/core';

import {CartProduct} from '../../models/cartProduct';
import {UserAddress} from '../../models/userAddress';
import {UserAddressService} from '../../services/user-address.service';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-verify-order',
  templateUrl: './verify-order.component.html',
  styleUrls: ['./verify-order.component.css']
})
export class VerifyOrderComponent implements OnInit {
  cartProducts: CartProduct[];
  userAddress: UserAddress;
  totalPrice: number;

  constructor(private userAddressService: UserAddressService,
              private orderService: OrderService) {
    this.cartProducts = [];
    this.userAddress = new UserAddress();
    this.totalPrice = 0;
  }

  ngOnInit() {
    this.initCartProduct();
    this.initUserAddress();
  }

  initCartProduct() {
    this.cartProducts = this.orderService.getCartProducts();
    for (let i = 0; i < this.cartProducts.length; i++) {
      this.totalPrice += this.cartProducts[i].amount * this.cartProducts[i].price;
    }
  }

  initUserAddress() {
    this.userAddressService.getUserAddress().subscribe((userAddress) => {
      this.userAddress = userAddress;
    });
  }

  onSubmitClick() {
    if (confirm('你确定提交吗？')) {
      this.orderService.submitOrder(this.cartProducts).subscribe((res) => {
        console.log(res);
      });
    }
  }
}
