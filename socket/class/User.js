const EVENTS = require("../events/event");

class User {
  #io;
  #socket;
  #data;
  constructor(io, socket, data) {
    this.#io = io;
    this.#socket = socket;
    this.#data = data;
  }
  privateChat(message) {
    this.#io
      .to(this.#data.user.socketId)
      .emit(EVENTS.SEND_PRIVATE_MESSAGE, message);
  }
  sendChatInRoom({ newChat, roomId }) {
    this.#socket.broadcast.to(this.#data.roomId).emit(EVENTS.RECEIVE_MESSAGE, {
      newChat,
      roomId,
      message: `user: ${this.#socket.user.userName} send message in ${roomId}`,
    }); //gui cho tat ca tru nguoi gui
  }
}
module.exports = User;
