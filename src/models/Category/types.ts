import { Document, Model } from 'mongoose';

export interface CategoryDocument extends Document {
    name: string;
    icon: string;
}

export type CategoryModel = Model<CategoryDocument>;
