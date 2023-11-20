const logger = require("../../utils/logger");
const Room = require("../class/Room");
const User = require("../class/User");
class SocketManager {
  handleConnect = () => {
    logger.info("Socket connected");
  };
  joinAllRoom = (io, socket, data, callback) => {
    const room = new Room(io, socket, data);
    room.joinAllRoom();
    callback({ status: "ok", message: "join all room success" });
  };
  setUserInfo = (io, socket, data, callback) => {
    //set user info for socket to using everywhere
    socket.user = data.user;
    callback({ status: "ok", message: "set user info success" });
  };
  usersTyping = (io, socket, data) => {
   const room=new Room(io,socket,data);
    room.usersTyping();
  }

}
module.exports = SocketManager;
