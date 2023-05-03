import { Product } from '@models/product';
import { GetAllProductsController } from './controller';
import { GetAllProductsService } from './service';

const getAllProductsService = new GetAllProductsService(Product);
export const getAllProductsController = new GetAllProductsController(
  getAllProductsService
);
