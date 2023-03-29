import e from 'express';
import 'express-async-errors';
import path from 'node:path';
import { connect } from './connections/mongo_connect';
import { routes } from './routes';

connect();

const app = e();

app.use(e.json());

app.use('/uploads', e.static(path.resolve(__dirname, '..', 'uploads')));

app.use(routes);

export { app };
