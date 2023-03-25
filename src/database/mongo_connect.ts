import mongoose from 'mongoose';
import { MONGO_URI } from '../config';
export const connect = () => mongoose.connect(MONGO_URI);
