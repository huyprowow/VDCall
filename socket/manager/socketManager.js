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
  userTyping = (io, socket, data) => {
   const user=new User(io,socket,data);
    user.userTyping();
  }
  userStopTyping = (io, socket, data) => {
    const user=new User(io,socket,data);
    user.userStopTyping();
  }
}
module.exports = SocketManager;
