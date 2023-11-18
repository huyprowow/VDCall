import { notificationCustom } from "../../../Notification/notificationCustom";
import { EVENTS } from "../events/event";
import { socket } from "./../socket";
export const joinAllRoom = (listRoomJoin: string[]) => {
  socket.emit(EVENTS.JOIN_ALL_ROOM, { rooms: listRoomJoin }, () => {
    notificationCustom({
      key: "joinAllRoom",
      type: "success",
      message: "Join all room success",
    });
  });
};
