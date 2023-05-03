import { Schema, model } from 'mongoose';
import { OrderDocument } from './types';

export const Order = model<OrderDocument>(
  'Order',
  new Schema<OrderDocument>(
    {
      table: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
        default: 'WAITING',
        required: true,
      },
      products: {
        type: [
          {
            product: {
              type: Schema.Types.ObjectId,
              ref: 'Product',
              required: true,
            },
            quantity: { type: Number, default: 1, required: true },
          },
        ],
        required: true,
      },
    },
    { timestamps: true }
  )
);
