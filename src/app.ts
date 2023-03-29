import e from 'express';
import { routes } from './routes';
import path from 'node:path';

const app = e();

app.use('/uploads', e.static(path.resolve(__dirname, '..', 'uploads')));
app.use(e.json());
app.use(routes);

export { app };
