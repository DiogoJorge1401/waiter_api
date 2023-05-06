import { Document, Model, Types } from 'mongoose';

export interface OrderProduct {
  product: Types.ObjectId;
  quantity: number;
}

export interface OrderDocument extends Document {
  table: string;
  status: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
  products: OrderProduct[];
  createdAt: string;
}

export type OrderModel = Model<OrderDocument>;
