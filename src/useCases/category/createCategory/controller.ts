import { Request, Response } from 'express';
import { CreateCategoryService } from './service';

export class CreateCategoryController {
    constructor(private createCategoryService: CreateCategoryService) {}

    handle = async (req: Request, res: Response) => {
        const { icon, name } = req.body;

        const category = await this.createCategoryService.execute({
            icon,
            name,
        });

        res.status(201).json(category);
    };
}
