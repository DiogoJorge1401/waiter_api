import { Router } from 'express';
import { getAllProductsController } from './getAllProducts';

const productRouter = Router();

productRouter.get('/', getAllProductsController.handle);

export { productRouter };
