import { upload } from '@configs/multer';
import { Router } from 'express';
import { createProductController } from './createProduct';
import { getAllProductsController } from './getAllProducts';
import { endpoint } from '@middlewares/enpoint';

const productRouter = Router();

// get all products
productRouter.get('/', endpoint(getAllProductsController.handle));

// create product
productRouter.post(
    '/',
    upload.single('image'),
    endpoint(createProductController.handle)
);

export { productRouter };
