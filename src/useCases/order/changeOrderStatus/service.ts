import { OrderModel } from '@models/order/types';

export class ChangeOrderStatusService {
    constructor(private orderModel: OrderModel) {}

    async execute(orderId: string, status: string) {
        return this.orderModel.updateOne({ id: orderId }, { $set: { status } });
    }
}
