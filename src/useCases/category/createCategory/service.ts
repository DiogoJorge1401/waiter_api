import { CategoryModel } from '@models/category/types';

type CreateCategoryData = {
    icon: string;
    name: string;
};

export class CreateCategoryService {
    constructor(private categoryModel: CategoryModel) {}

    async execute(data: CreateCategoryData) {
        return this.categoryModel.create(data);
    }
}
