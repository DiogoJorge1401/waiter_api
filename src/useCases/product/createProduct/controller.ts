import { Request, Response } from 'express';
import { CreateProductService } from './service';

export class CreateProductController {
    constructor(private createProductService: CreateProductService) {}

    handle = async (req: Request, res: Response) => {
        try {
            const { body, file } = req;
            const { price, ingredients } = body;
            const product = await this.createProductService.execute({
                ...body,
                imagePath: file?.filename,
                price: +price,
                ingredients: JSON.parse(ingredients),
            });
            res.status(201).json(product);
        } catch (err) {
            if (err instanceof Error)
                res.status(400).json({ message: err.message });
        }
    };
}
