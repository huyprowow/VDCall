import { response } from "express";
import { EVENTS } from "../events/event";
import { socket } from "../socket";

export const userTyping = (roomName: string) => {
  socket.emit(EVENTS.TYPING, {
    roomName,
  },(response: any) => {

  });
};
export const userStopTyping = (roomName: string) => {
    socket.emit(EVENTS.STOP_TYPING, {
        roomName,
    });
}
