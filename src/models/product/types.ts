import { Document, Model } from 'mongoose';
import { CategoryDocument } from '../category/types';

export interface Ingredient {
    icon: string;
    name: string;
}

export interface ProductDocument extends Document {
    name: string;
    description: string;
    imagePath: string;
    price: number;
    ingredients: Ingredient[];
    category: CategoryDocument['_id'];
}

export type ProductModel = Model<ProductDocument>;
