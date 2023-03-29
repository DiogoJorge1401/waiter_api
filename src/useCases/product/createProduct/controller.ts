import { Request, Response } from 'express';
import { CreateProductService } from './service';

export class CreateProductController {
    constructor(private createProductService: CreateProductService) {}

    handle = async (req: Request, res: Response) => {
        const { body, file } = req;
        const { price, ingredients = '[]' } = body;

        const product = await this.createProductService.execute({
            ...body,
            imagePath: file?.filename,
            price: +price,
            ingredients: JSON.parse(ingredients),
        });

        res.status(201).json(product);
    };
}
