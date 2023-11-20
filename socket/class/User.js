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
    this.#io.to(this.#data.user.socketId).emit("chat", message);
  }
  chatInRoom(message) {
    this.#io.to(this.#data.roomName).emit("chat", message);
  }
 
}
module.exports = User;
