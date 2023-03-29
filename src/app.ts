import e from 'express';
import 'express-async-support';
import path from 'node:path';
import { exception } from './middlewares/exception';
import { routes } from './routes';

const app = e();

app.use(e.json());
app.use('/uploads', e.static(path.resolve(__dirname, '..', 'uploads')));

app.use(routes);
app.use(exception);

export { app };
