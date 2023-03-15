//k can luu tru chi can ban socket
const EVENTS = require("../events/event");

class Room {
  #io;
  #socket;
  #data;
  constructor(io, socket, data) {
    this.#io = io;
    this.#socket = socket;
    this.#data = data;
  }
  joinRoom() {}
  leaveRoom() {}
  joinAllRoom() {
    this.#socket.join(this.#data.rooms);
    this.#socket.broadcast.to(this.#data.rooms).emit(EVENTS.USER_JOINED, {
      userName: this.#socket.user.userName,
      socketId: this.#socket.id,
      rooms: this.#data.rooms,
      message: `Joined`,
    });
  }
}
module.exports = Room;
