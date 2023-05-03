import { OrderModel, OrderProduct } from '@models/order/types';

export type CreateOrderData = {
    table: string;
    status: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
    products: OrderProduct[];
};

export class CreateOrderService {
  constructor(private orderModel: OrderModel) {}

  async execute(data: CreateOrderData) {
    return this.orderModel.create(data);
  }
}
