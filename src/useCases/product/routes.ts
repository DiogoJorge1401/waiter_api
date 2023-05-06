import { upload } from '@configs/multer';
import { Router } from 'express';
import { createProductController } from './createProduct';
import { getAllProductsController } from './getAllProducts';
import { endpoint } from '@middlewares/enpoint';

const productRouter = Router();

/**
 * @openapi
 * /products:
 *   get:
 *     tags:
 *       - Products
 *     description: Get all products
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 products:
 *                   type: array
 *                   items:
 *                     type: object
 *
 */
productRouter.get('/', endpoint(getAllProductsController.handle));

// create product
productRouter.post(
  '/',
  upload.single('image'),
  endpoint(createProductController.handle)
);

export { productRouter };
