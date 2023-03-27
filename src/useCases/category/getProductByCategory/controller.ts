import { Request, Response } from 'express';
import { GetProductByCategoryService } from './service';

export class GetProductByCategoryController {
    constructor(
        private getProductByCategoryService: GetProductByCategoryService
    ) {}

    handle = async (req: Request, res: Response) => {
        try {
            const { categoryId } = req.params;
            const product = await this.getProductByCategoryService.execute(
                categoryId
            );
            res.json({ product });
        } catch (err) {
            if (err instanceof Error)
                res.status(400).json({ message: err.message });
        }
    };
}
