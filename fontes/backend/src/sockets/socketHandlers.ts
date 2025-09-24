import { Socket, Server } from 'socket.io';

export default function socketHandlers(socket: Socket, io: Server) {
  socket.on('subscribeToEvents', (merchantId: string) => {
    console.log(`Socket ${socket.id} subscribed to events of merchant ${merchantId}`);
    socket.join(`merchant-${merchantId}`);
  });

  socket.on('unsubscribeFromEvents', (merchantId: string) => {
    socket.leave(`merchant-${merchantId}`);
  });
}
