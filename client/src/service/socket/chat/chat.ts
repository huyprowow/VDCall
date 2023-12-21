import { EVENTS } from "../events/event";
import { socket } from "../socket";
import { useRoomStore } from "../../../store/room";
import { notificationCustom } from "../../../Notification/notificationCustom";

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
export const sendChatMessage = ({
  newChat,
  roomId,
}: {
  newChat: {
    chatMessage: string;
    dateCreated: string;
    user: {
      _id: string;
      userName: string;
    };
    __v: number;
    _id: string;
  };
  roomId: string;
}) => {
  socket.emit(EVENTS.SEND_MESSAGE, {
    newChat,
    roomId,
  });
};

export const listeningMessage = (
  chats: IChat[],
  setChatInRoom: any,
  currentRoom: any
) => {
  socket.on(EVENTS.RECEIVE_MESSAGE, (response: any) => {
    if (currentRoom._id === response.roomId) {
      const newChats = [...chats, response.newChat];
      setChatInRoom(newChats);
      console.log(response);
      notificationCustom({
        type: "warning",
        message: "new message",
        description: response.message,
      })
    }
  });
};
