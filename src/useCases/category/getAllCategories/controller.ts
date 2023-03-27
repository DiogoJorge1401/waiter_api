import { Request, Response } from 'express';
import { GetAllCategoriesService } from './service';

export class GetAllCategoriesController {
    constructor(private getAllCategories: GetAllCategoriesService) {}

    handle = async (req: Request, res: Response) => {
        const categories = await this.getAllCategories.execute();
        return res.json({ categories });
    };
}
