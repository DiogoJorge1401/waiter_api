import mongoose from 'mongoose';
import { MONGO_URI } from '@configs/vars';
export const connect = () => mongoose.connect(MONGO_URI);
