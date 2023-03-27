import { Schema, model } from 'mongoose';
import { CategoryDocument } from './types';

export const Category = model<CategoryDocument>(
    'Category',
    new Schema<CategoryDocument>({
        name: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
    })
);
