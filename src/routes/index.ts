import { Router } from 'express';
import { categoryRouter } from './category';
import { orderRouter } from './order';
import { productRouter } from './product';

const routes = Router();

routes.use('/product', productRouter);
routes.use('/order', orderRouter);
routes.use('/category', categoryRouter);

export { routes };
