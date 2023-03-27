import { Router } from 'express';
import { getAllCategoriesController } from './getAllCategories';

const categoryRouter = Router();

// get all categories
categoryRouter.get('/', getAllCategoriesController.handle);
// create categories

export { categoryRouter };
