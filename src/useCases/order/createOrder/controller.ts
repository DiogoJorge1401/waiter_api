import { Request, Response } from 'express';
import { CreateOrderService } from './service';

export class CreateOrderController {
    constructor(private createOrderService: CreateOrderService) {}

    handle = async (req: Request, res: Response) => {
        const data = req.body;

        const order = await this.createOrderService.execute(data);

        res.status(201).json({ order });
    };
}
