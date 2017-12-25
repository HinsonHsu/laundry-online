import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { FootbarComponent } from './components/footbar/footbar.component';
import { HeadbarComponent } from './components/headbar/headbar.component';
import { OrderComponent } from './components/order/order.component';
import { PersonageComponent } from './components/personage/personage.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductComponent } from './components/product/product.component';
import { ShopcartComponent } from './components/shopcart/shopcart.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { UserAddressComponent } from './components/user-address/user-address.component';
import { VerifyOrderComponent } from './components/verify-order/verify-order.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/foot', pathMatch: 'full'},
  {path: 'shop', component: ShopComponent},
  {path: 'category/:id', component: ProductComponent},
  {path: 'personage', component: PersonageComponent},
  {path: 'order', component: OrderComponent},
  {path: 'foot', component: FootbarComponent},
  {path: 'shopcart', component: ShopcartComponent},
  {path: 'orderdetail/:id', component: OrderDetailComponent},
  {path: 'address', component: UserAddressComponent},
  {path: 'verifyorder', component: VerifyOrderComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
