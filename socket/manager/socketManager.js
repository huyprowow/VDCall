const logger = require("../../utils/logger");
const Room = require("../class/Room");
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
}
module.exports = SocketManager;
