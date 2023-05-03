import { Order } from '@models/order';
import { GetAllOrdersService } from './service';
import { GetAllOrdersController } from './controller';

const getAllOrdersService = new GetAllOrdersService(Order);
export const getAllOrdersController = new GetAllOrdersController(
  getAllOrdersService
);
