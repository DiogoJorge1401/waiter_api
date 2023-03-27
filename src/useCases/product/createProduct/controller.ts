import { Request, Response } from 'express';
import { CreateProductService } from './service';

export class CreateProductController {
    constructor(private createProductService: CreateProductService) {}

    handle = async (req: Request, res: Response) => {
        try {
            const data = req.body;
            const product = await this.createProductService.execute(data);
            res.status(201).json(product);
        } catch (err) {
            if (err instanceof Error)
                res.status(400).json({ message: err.message });
        }
    };
}
