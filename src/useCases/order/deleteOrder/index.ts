import { Order } from '@models/order';
import { DeleteOrderService } from './service';
import { DeleteOrderController } from './controller';

const deleteOrderService = new DeleteOrderService(Order);
export const deleteOrderController = new DeleteOrderController(
    deleteOrderService
);
