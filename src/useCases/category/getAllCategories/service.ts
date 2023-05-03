import { CategoryModel } from '@models/category/types';

export class GetAllCategoriesService {
  constructor(private categoryModel: CategoryModel) {}

  async execute() {
    return this.categoryModel.find();
  }
}
