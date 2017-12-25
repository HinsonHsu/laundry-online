import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import {AppComponent} from './app.component';
import {FootbarComponent} from './components/footbar/footbar.component';
import {HeadbarComponent} from './components/headbar/headbar.component';
import {OrderComponent} from './components/order/order.component';
import {PersonageComponent} from './components/personage/personage.component';
import {ShopComponent} from './components/shop/shop.component';
import {ProductComponent} from './components/product/product.component';

import {AppRoutingModule} from './app-routing.module';

import {CategoryService } from './services/category.service';
import {ProductService } from './services/product.service';
import { ShopcartComponent } from './components/shopcart/shopcart.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import {OrderService} from './services/order.service';
import { VerifyOrderComponent } from './components/verify-order/verify-order.component';
import { UserAddressComponent } from './components/user-address/user-address.component';
import {UserAddressService} from './services/user-address.service';
import { LoginComponent } from './components/login/login.component';
import {AuthorityService} from './services/authority.service';

@NgModule({
  declarations: [
    AppComponent,
    FootbarComponent,
    HeadbarComponent,
    OrderComponent,
    PersonageComponent,
    ShopComponent,
    ProductComponent,
    ShopcartComponent,
    OrderDetailComponent,
    VerifyOrderComponent,
    UserAddressComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    CategoryService,
    ProductService,
    OrderService,
    UserAddressService,
    AuthorityService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
