import { Request, Response } from 'express';
import { GetAllOrdersService } from './service';

export class GetAllOrdersController {
    constructor(private getAllOrdersService: GetAllOrdersService) {}

    handle = async (req: Request, res: Response) => {
        const orders = await this.getAllOrdersService.execute();
        res.json({ orders });
    };
}
