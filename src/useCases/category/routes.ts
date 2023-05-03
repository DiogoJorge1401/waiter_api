import { Router } from 'express';
import { getAllCategoriesController } from './getAllCategories';
import { createCategoryController } from './createCategory';
import { getProductByCategoryController } from './getProductByCategory';
import { endpoint } from '@middlewares/enpoint';

const categoryRouter = Router();

// get all categories
categoryRouter.get('/', endpoint(getAllCategoriesController.handle));

// create categories
categoryRouter.post('/', endpoint(createCategoryController.handle));

// get product by category
categoryRouter.get(
  '/:categoryId/products',
  endpoint(getProductByCategoryController.handle)
);

export { categoryRouter };
