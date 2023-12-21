const { instrument } = require("@socket.io/admin-ui");
const { Server } = require("socket.io");
const { createAdapter } = require("@socket.io/cluster-adapter");
const { setupWorker } = require("@socket.io/sticky");
const EVENTS = require("./socket/events/event");
const SocketManager = require("./socket/manager/socketManager");

const options = {
  cors: {
    origin: ["*", "https://admin.socket.io"],
    credentials: true,
  },
};
const SocketMng = new SocketManager();
const initSocketServer = (httpServer) => {
  const io = new Server(httpServer, options);
  // io.adapter(createAdapter());

  // setupWorker(io);
  instrument(io, {
    auth: false,
  });
  io.on(EVENTS.SOCKET_CONNECTION, (socket) => {
    SocketMng.handleConnect();
    socket.on(EVENTS.SET_USER_INFO, (data, callback) => {
      SocketMng.setUserInfo(io, socket, data, callback)
    });
    // socket.on(EVENTS.JOIN_ROOM, (data, callback) => {
    // });
    // socket.on(EVENTS.LEAVE_ROOM, (data) => {
    // });
    socket.on(EVENTS.JOIN_ALL_ROOM, (data, callback) => {
      console.log("🚀 ~ file: socketServer.js:30 ~ socket.on ~ data:", data);
      SocketMng.joinAllRoom(io, socket, data, callback);
    });
    socket.on(EVENTS.TYPING, (data) => {
      console.log("🚀 ~ file: socketServer.js:30 ~ socket.on ~ data:", data);
      SocketMng.usersTyping(io, socket, data);
    })
    socket.on(EVENTS.SEND_MESSAGE, (data) => {
      SocketMng.sendChatInRoom(io, socket, data);
    });
  });
};

module.exports = { initSocketServer };
