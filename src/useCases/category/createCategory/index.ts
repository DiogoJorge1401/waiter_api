import { Category } from '@models/category';
import { CreateCategoryService } from './service';
import { CreateCategoryController } from './controller';

const createCategoryService = new CreateCategoryService(Category);
export const createCategoryController = new CreateCategoryController(
    createCategoryService
);
