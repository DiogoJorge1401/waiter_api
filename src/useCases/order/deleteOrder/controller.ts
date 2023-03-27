import { Request, Response } from 'express';
import { DeleteOrderService } from './service';

export class DeleteOrderController {
    constructor(private deleteOrderService: DeleteOrderService) {}

    handle = async (req: Request, res: Response) => {
        try {
            const { orderId } = req.params;
            await this.deleteOrderService.execute(orderId);
            res.sendStatus(204);
        } catch (err) {
            if (err instanceof Error)
                res.status(400).json({ message: err.message });
        }
    };
}
