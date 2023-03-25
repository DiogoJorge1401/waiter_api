import { Document } from 'mongoose';

export interface CategoryDocument extends Document {
    name: string;
    icon: string;
}