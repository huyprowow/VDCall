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
  chatInRoom(message,) {
    this.#io.to(this.#data.room.roomName).emit("chat", message);
  }
  userTyping() {
    this.#io.to(this.#data.room.roomName).emit("userTyping", {
      userName: this.#socket.user.userName,
      socketId: this.#socket.id,
      room: this.#data.room.roomName,
      message: `user ${this.#socket.user.userName} typing`,
    });
  }
  userStopTyping() {
    this.#io.to(this.#data.room.roomName).emit("userStopTyping", {
      userName: this.#socket.user.userName,
      socketId: this.#socket.id,
      room: this.#data.room.roomName,
      message: `user stop typing`,
    });
  }
}
module.exports = User;
