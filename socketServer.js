const { instrument } = require("@socket.io/admin-ui");
const { Server } = require("socket.io");
const { createAdapter } = require("@socket.io/cluster-adapter");
const { setupWorker } = require("@socket.io/sticky");
const EVENT = require("./socket/events/event");

const options = {
  cors: {
    origin: ["*", "https://admin.socket.io"],
    credentials: true,
  },
};
const initSocketServer = (httpServer) => {
  const io = new Server(httpServer, options);
  // io.adapter(createAdapter());

  // setupWorker(io);
  instrument(io, {
    auth: false,
  });

  io.on(EVENT.SOCKET_CONNECTION, (socket) => {
    console.log("socket connected");
  });
};

module.exports = { initSocketServer };
