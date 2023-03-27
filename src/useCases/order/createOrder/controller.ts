import { Request, Response } from 'express';
import { CreateOrderService } from './service';

export class CreateOrderController {
    constructor(private createOrderService: CreateOrderService) {}

    handle = async (req: Request, res: Response) => {
        try {
            const data = req.body;
            const order = await this.createOrderService.execute(data);
            res.status(201).json({ order });
        } catch (err) {
            if (err instanceof Error)
                res.status(400).json({ message: err.message });
        }
    };
}
