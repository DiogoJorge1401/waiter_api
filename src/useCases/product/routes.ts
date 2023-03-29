import { upload } from '@configs/multer';
import { Router } from 'express';
import { createProductController } from './createProduct';
import { getAllProductsController } from './getAllProducts';

const productRouter = Router();

// get all products
productRouter.get('/', getAllProductsController.handle);

// create product
productRouter.post('/', upload.single('image'), createProductController.handle);

export { productRouter };
