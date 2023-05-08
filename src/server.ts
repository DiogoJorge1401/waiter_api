import { app } from './app';
import { PORT, URL } from './configs/vars';
import http from 'node:http';

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on ${URL}`);
});
