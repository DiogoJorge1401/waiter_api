import { Router } from 'express';
import { getAllOrdersController } from './getAllOrders';
import { createOrderController } from './createOrder';
import { changeOrderStatusController } from './changeOrderStatus';
import { deleteOrderController } from './deleteOrder';

const orderRouter = Router();

// get all orders
orderRouter.get('/', getAllOrdersController.handle);

// create order
orderRouter.post('/', createOrderController.handle);

// change order status
orderRouter.patch('/:orderId', changeOrderStatusController.handle);

// cancel order
orderRouter.delete('/:orderId', deleteOrderController.handle);

export { orderRouter };
