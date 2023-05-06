import { Ingredient, ProductModel } from '@models/product/types';

interface CreateProductData {
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: Ingredient[];
  category: string;
}

export class CreateProductService {
  constructor(private productModel: ProductModel) {}

  async execute(data: CreateProductData) {
    return this.productModel.create(data);
  }
}
