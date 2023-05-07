import e from 'express';
import path from 'node:path';
import { connect } from './connections/mongo_connect';
import { routes } from './routes';
import { exception } from './middlewares/exception';
import { swaggerDocs } from './configs/swagger';

connect();

const app = e();

app.use(e.json());

app.use('/uploads', e.static(path.resolve(__dirname, '..', 'uploads')));

app.use(routes);

app.use(exception);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Controll-Allow-Methods', '*');

  next();
});

swaggerDocs(app);

export { app };
