import { ProductModel } from '@models/product/types';

export class GetAllProductsService {
    constructor(private productDocument: ProductModel) {}

    async execute() {
        return this.productDocument.find();
    }
}
