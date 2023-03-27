import { Request, Response } from 'express';
import { GetAllProductsService } from './service';

export class GetAllProductsController {
    constructor(private getAllProductsService: GetAllProductsService) {}

    handle = async (req: Request, res: Response) => {
        const products = await this.getAllProductsService.execute();
        return res.json({ products });
    };
}
