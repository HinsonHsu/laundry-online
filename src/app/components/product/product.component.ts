import {Component, OnInit} from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

import {ProductService} from '../../services/product.service';
import {Product} from '../../models/product';
import {CartProduct} from '../../models/cartProduct';

import * as $ from 'jquery';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  category_id: number;
  products: Product [];
  total_price: number;
  total_num: number;
  cartProducts: CartProduct [];

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(params => {
      this.category_id = params['id'];
    });
    this.total_price = 0;
    this.total_num = 0;
    this.cartProducts = [];
  }

  ngOnInit() {
    this.productService.getProducts(this.category_id).subscribe((products) => {
      console.log(products);
      this.products = products;
    });
  }

  onProductClick(product) {
    this.total_price += product.price;
    this.total_num += 1;
    let flag = true;
    for (let i = 0; i < this.cartProducts.length; i++) {
      if (this.cartProducts[i].id === product.id) {
        this.cartProducts[i].amount += 1;
        flag = false;
      }
    }
    if (flag) {
      const cartProduct = new CartProduct;
      cartProduct.id = product.id;
      cartProduct.name = product.name;
      cartProduct.logo = product.logo;
      cartProduct.price = product.price;
      cartProduct.amount = 1;
      this.cartProducts.push(cartProduct);
    }
  }

  onCartClick() {
    this.productService.setCartProducts(this.cartProducts);
    this.router.navigate(['/shopcart']);
  }

  onVerifyClick() {
    this.productService.setCartProducts(this.cartProducts);
    this.router.navigate(['/verifyorder']);
  }
}
