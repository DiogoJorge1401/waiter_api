import http from 'node:http';
import { Server } from 'socket.io';
import { app } from './app';
import { PORT, URL } from './configs/vars';

const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: '*',
    methods: '*',
  },
});

server.listen(PORT, () => {
  console.log(`Server is running on ${URL}`);
});
