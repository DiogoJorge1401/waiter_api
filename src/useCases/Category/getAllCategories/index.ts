import { Category } from '@models/Category';
import { GetAllCategoriesService } from './service';
import { GetAllCategoriesController } from './controller';

const getAllCategoriesService = new GetAllCategoriesService(Category);
export const getAllCategoriesController = new GetAllCategoriesController(
    getAllCategoriesService
);
