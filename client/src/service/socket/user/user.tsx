import { socket } from "../socket";
import { EVENTS } from "../events/event";
import { notificationCustom } from "../../../Notification/notificationCustom";
import { Tag } from "antd";

export const setUserInfo = () => {
  socket.emit(
    EVENTS.SET_USER_INFO,
    {
      user: {
        userName: localStorage.getItem("userName"),
      },
    },
    (response: any) => {
      notificationCustom({
        key: "setUserInfo",
        type: "success",
        message: `Hi ${localStorage.getItem("userName")}`,
      });
    }
  );
};
export const userJoined = () => {
  socket.on(EVENTS.USER_JOINED, (data: any) => {
    console.log(data);
    notificationCustom({
      key: "userJoined",
      type: "success",
      message: (
        <>
          User: <Tag color={"gold"}>{`${data.userName}`}</Tag> joined
        </>
      ),
      description: (
        <>
          <>
            SocketId: <Tag color={"gold"}>{`${data.socketId}`}</Tag>
          </>
          <p>
            Rooms:
            {data.rooms &&
              data.rooms?.map((room: string) => (
                <Tag color={"green"}>{`${room}`}</Tag>
              ))}
          </p>
        </>
      ),
    });
  });
};
