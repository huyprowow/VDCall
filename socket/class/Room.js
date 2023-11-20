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
  usersTyping() {
    console.log(this.#data);
    try {
      this.#io.to(this.#data.roomName).emit("TYPING", {
        usersTyping:this.#data.usersTyping,
        roomName: this.#data.roomName,
        message: `user typing`,
      });
    } catch (error) {
      console.log(error);
    }
  }
  
  
}
module.exports = Room;
