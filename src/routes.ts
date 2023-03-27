import { Router } from 'express';
import { categoryRouter } from './useCases/category/routes';
import { orderRouter } from './useCases/order/routes';
import { productRouter } from './useCases/product/routes';

const routes = Router();

routes.use('/products', productRouter);
routes.use('/orders', orderRouter);
routes.use('/categories', categoryRouter);

export { routes };
