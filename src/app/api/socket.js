import { Server } from 'http';
import { Server as SocketIOServer } from 'socket.io';

const server = new Server((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Socket.IO server for Next.js');
});

const io = new SocketIOServer(server);

io.on('connection', (socket) => {
  console.log('User connected');

  socket.on('message', (data) => {
    // Broadcast the message to all connected clients
    io.emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default (req, res) => {
  if (!res.socket.server.io) {
    console.log('*First Use, starting socket.io');

    // Create an io instance on the server object
    res.socket.server.io = io;
  }

  return server(req, res);
};