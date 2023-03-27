import { OrderModel } from '@models/order/types';

export class GetAllOrdersService {
    constructor(private orderModel: OrderModel) {}

    async execute() {
        return this.orderModel.find();
    }
}
