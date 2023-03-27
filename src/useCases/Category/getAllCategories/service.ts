import { CategoryModel } from '@models/Category/types';

export class GetAllCategoriesService {
    constructor(private categoryModel: CategoryModel) {}

    async execute() {
        return this.categoryModel.find();
    }
}
