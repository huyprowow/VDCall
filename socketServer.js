const { Server } = require("socket.io");
const EVENT = require("./events/event");
const options = {
  cors: {
    origin: "*",
  },
};
const initSocketServer = (httpServer) => {
  const io = new Server(httpServer, options);
  io.on(EVENT.SOCKET_CONNECTION, (socket) => {
    console.log("socket connected");
  });
};
module.exports = { initSocketServer };
