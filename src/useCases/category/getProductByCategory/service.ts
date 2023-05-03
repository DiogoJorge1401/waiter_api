import { ProductModel } from '@models/product/types';

export class GetProductByCategoryService {
  constructor(private productModel: ProductModel) {}

  async execute(categoryId: string) {
    return this.productModel.find({
      category: categoryId,
    });
  }
}
