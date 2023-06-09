import { Request, Response } from 'express';
import { GetProductByCategoryService } from './service';

export class GetProductByCategoryController {
  constructor(
    private getProductByCategoryService: GetProductByCategoryService
  ) {}

  handle = async (req: Request, res: Response) => {
    const { categoryId } = req.params;

    const products = await this.getProductByCategoryService.execute(categoryId);

    res.json({ products });
  };
}
