import { Product } from '@models/product';
import { GetProductByCategoryService } from './service';
import { GetProductByCategoryController } from './controller';

const getProductByCategoryService = new GetProductByCategoryService(Product);
export const getProductByCategoryController =
  new GetProductByCategoryController(getProductByCategoryService);
