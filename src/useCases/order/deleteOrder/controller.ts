import { Request, Response } from 'express';
import { DeleteOrderService } from './service';

export class DeleteOrderController {
  constructor(private deleteOrderService: DeleteOrderService) {}

  handle = async (req: Request, res: Response) => {
    const { orderId } = req.params;

    await this.deleteOrderService.execute(orderId);

    res.sendStatus(204);
  };
}
