import {CartProduct} from './cartProduct';

export class Order {
  ordersn: number;
  orderTime: string;
  name: string;
  address: string;
  orderPrice: number;
  orderProducts: CartProduct [];
}
