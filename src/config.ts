import 'dotenv/config';
export const PORT = process.env.PORT || 4000;
export const URL = process.env.RAILWAY_STATIC_URL || `http://localhost:${PORT}`;
export const MONGO_URI = process.env.MONGO_URI || '';
