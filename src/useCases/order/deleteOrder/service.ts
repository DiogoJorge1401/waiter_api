import { OrderModel } from '@models/order/types';

export class DeleteOrderService {
  constructor(private orderModel: OrderModel) {}

  async execute(orderId: string) {
    await this.orderModel.findOneAndDelete({ id: orderId });
  }
}
