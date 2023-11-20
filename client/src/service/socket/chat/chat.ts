import { EVENTS } from "../events/event";
import { socket } from "../socket";
import { useRoomStore } from "../../../store/room";

export const usersTyping = ({
  roomName,
  usersTyping,
}: {
  roomName: string;
  usersTyping: string[];
}) => {
  socket.emit(EVENTS.TYPING, {
    roomName,
    usersTyping,
  });
};

export const listeningTyping = (setUsersTyping: any, currentRoom: any) => {
  socket.on(EVENTS.TYPING, (response: any) => {
    // console.log("response", response); vẫn không hiểu vì sao nó log cái response này nhiều vcl mà render với emit lên sẻver đúng số lần
    if (currentRoom._id === response.roomName) {
      setUsersTyping({
        user: response.usersTyping,
        roomName: response.roomName,
      });
    }
  });
};
