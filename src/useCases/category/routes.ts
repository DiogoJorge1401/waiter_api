import { Router } from 'express';
import { getAllCategoriesController } from './getAllCategories';
import { createCategoryController } from './createCategory';
import { getProductByCategoryController } from './getProductByCategory';

const categoryRouter = Router();

// get all categories
categoryRouter.get('/', getAllCategoriesController.handle);

// create categories
categoryRouter.post('/', createCategoryController.handle);

// get product by category
categoryRouter.get(
    '/:categoryId/products',
    getProductByCategoryController.handle
);

export { categoryRouter };
