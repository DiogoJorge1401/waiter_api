import { Product } from '@models/product';
import { CreateProductService } from './service';
import { CreateProductController } from './controller';

const createProductService = new CreateProductService(Product);
export const createProductController = new CreateProductController(
    createProductService
);
