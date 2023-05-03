import { Schema, model } from 'mongoose';
import { ProductDocument } from './types';

export const Product = model<ProductDocument>(
  'Product',
  new Schema<ProductDocument>({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imagePath: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    ingredients: {
      type: [
        {
          icon: { type: String, required: true },
          name: { type: String, required: true },
        },
      ],
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Category',
    },
  })
);
