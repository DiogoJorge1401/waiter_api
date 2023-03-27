import { Router } from 'express';
import { getAllProductsController } from './getAllProducts';
import { createProductController } from './createProduct';

const productRouter = Router();

// get all products
productRouter.get('/', getAllProductsController.handle);

// create product
productRouter.post('/', createProductController.handle);

export { productRouter };
