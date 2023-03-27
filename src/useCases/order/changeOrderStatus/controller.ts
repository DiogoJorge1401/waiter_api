import { Request, Response } from 'express';
import { ChangeOrderStatusService } from './service';

export class ChangeOrderStatusController {
    constructor(private changeOrderStatusService: ChangeOrderStatusService) {}

    handle = async (req: Request, res: Response) => {
        try {
            const status = req.body.status;
            const { orderId } = req.params;
            this.changeOrderStatusService.execute(orderId, status);
            res.sendStatus(204);
        } catch (err) {
            if (err instanceof Error)
                res.status(400).json({ message: err.message });
        }
    };
}
