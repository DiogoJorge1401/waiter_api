import { OrderModel, OrderProduct } from '@models/order/types';
import { io } from '@/server';

export type CreateOrderData = {
  table: string;
  status: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
  products: OrderProduct[];
};

export class CreateOrderService {
  constructor(private orderModel: OrderModel) {}

  async execute(data: CreateOrderData) {
    const order = await this.orderModel.create(data);

    const orderPopulated = await order.populate('products.product');

    io.emit('newOrder', orderPopulated);

    return order;
  }
}
