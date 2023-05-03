import { Request, Response } from 'express';
import { ChangeOrderStatusService } from './service';

export class ChangeOrderStatusController {
  constructor(private changeOrderStatusService: ChangeOrderStatusService) {}

  handle = async (req: Request, res: Response) => {
    const { status } = req.body;
    const { orderId } = req.params;

    await this.changeOrderStatusService.execute(orderId, status);

    res.sendStatus(204);
  };
}
