import { Router } from 'express';
import { categoryRouter } from './useCases/Category/routes';
import { orderRouter } from './useCases/Order/routes';
import { productRouter } from './useCases/Product/routes';

const routes = Router();

routes.use('/product', productRouter);
routes.use('/order', orderRouter);
routes.use('/category', categoryRouter);

export { routes };
