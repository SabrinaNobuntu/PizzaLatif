import { Server } from 'socket.io';
import { createServer } from 'http';
import socketHandlers from './socketHandlers';

const httpServer = createServer(); 
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  console.log(`Client connected: ${socket.id}`);
  socketHandlers(socket, io);
  socket.on('disconnect', () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
});

export default httpServer;
