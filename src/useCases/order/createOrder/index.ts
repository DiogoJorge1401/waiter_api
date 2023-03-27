import { Order } from '@models/order';
import { CreateOrderService } from './service';
import { CreateOrderController } from './controller';

const createOrderService = new CreateOrderService(Order);
export const createOrderController = new CreateOrderController(
    createOrderService
);
