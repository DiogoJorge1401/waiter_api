import { Order } from '@models/order';
import { ChangeOrderStatusService } from './service';
import { ChangeOrderStatusController } from './controller';

const changeOrderStatusService = new ChangeOrderStatusService(Order);
export const changeOrderStatusController = new ChangeOrderStatusController(
  changeOrderStatusService
);
