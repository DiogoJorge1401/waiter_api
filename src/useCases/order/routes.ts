import { Router } from 'express';
import { getAllOrdersController } from './getAllOrders';
import { createOrderController } from './createOrder';
import { changeOrderStatusController } from './changeOrderStatus';
import { deleteOrderController } from './deleteOrder';
import { endpoint } from '@middlewares/enpoint';

const orderRouter = Router();

// get all orders
orderRouter.get('/', endpoint(getAllOrdersController.handle));

// create order
orderRouter.post('/', endpoint(createOrderController.handle));

// change order status
orderRouter.patch('/:orderId', endpoint(changeOrderStatusController.handle));

// cancel order
orderRouter.delete('/:orderId', endpoint(deleteOrderController.handle));

export { orderRouter };
