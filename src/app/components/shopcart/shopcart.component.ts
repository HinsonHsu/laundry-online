import {Component, OnInit} from '@angular/core';

import {CartProduct} from '../../models/cartProduct';
import {ProductService} from '../../services/product.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.component.html',
  styleUrls: ['./shopcart.component.css']
})
export class ShopcartComponent implements OnInit {
  cartProducts: CartProduct [];
  totalPrice: number;
  totalNum: number;

  constructor(private productService: ProductService,
              private router: Router) {
    this.cartProducts = [];
    this.totalPrice = 0;
    this.totalNum = 0;
  }

  ngOnInit() {
    this.initCart();
  }

  initCart() {
    this.cartProducts = this.productService.getCartProducts();
    for (let i = 0; i < this.cartProducts.length; i++) {
      this.totalPrice += this.cartProducts[i].amount + this.cartProducts[i].price;
      this.totalNum += 1;
    }
  }

  amountMinus(cartProduct: CartProduct) {
    if (cartProduct.amount > 1) {
      cartProduct.amount -= 1;
      this.totalPrice -= cartProduct.price;
      this.totalNum -= 1;
    }
  }

  amountPlus(cartProduct: CartProduct) {
    cartProduct.amount += 1;
    this.totalPrice += cartProduct.price;
    this.totalNum += 1;
  }

  onVerifyClick() {
    this.productService.setCartProducts(this.cartProducts);
    this.router.navigate(['/verifyorder']);
  }
}
