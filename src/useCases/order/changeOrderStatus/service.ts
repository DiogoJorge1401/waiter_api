import { OrderModel } from '@models/order/types';

export class ChangeOrderStatusService {
    constructor(private orderModel: OrderModel) {}

    async execute(orderId: string, status: string) {
        const allowed_status = ['WAITING', 'IN_PRODUCTION', 'DONE'];

        if (!allowed_status.includes(status))
            throw new Error(`status should be ${allowed_status.join(', ')}`);

        return this.orderModel.findByIdAndUpdate(orderId, { $set: { status } });
    }
}
