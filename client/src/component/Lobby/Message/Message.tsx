import { Button, Col, Input, Row, Space } from "antd";
import React, { useEffect } from "react";
import { SendOutlined } from "@ant-design/icons";
import Chat from "./Chat/Chat";
import { useRoomStore } from "../../../store/room";
import { Service } from "../../../service";
type Props = {};

const Message = (props: Props) => {
  const [chatMessage, setChatMessage] = React.useState("");
  const usersTyping = useRoomStore((state) => state.usersTyping.user);
  const setUsersTyping = useRoomStore((state) => state.setUsersTyping);
  const currentRoom = useRoomStore((state) => state.currentRoom);
  // Service.SocketService.Chat.listeningTyping(setUsersTyping, currentRoom);
  // let timeout: any = undefined;

  useEffect(() => {
    Service.SocketService.Chat.listeningTyping(setUsersTyping, currentRoom);
  }, [usersTyping, currentRoom, setUsersTyping]);
  const handleTyping = (e: any) => {
    const userName = localStorage.getItem("userName");
    if (!userName) return;
    if (!usersTyping?.includes(userName)) {
      const newUsersTyping =
        usersTyping?.length > 0 ? [...usersTyping, userName] : [userName];
      console.log("newUsersTyping", newUsersTyping);
      setUsersTyping({
        roomName: currentRoom.roomName,
        user: newUsersTyping,
      });
    }
    setChatMessage(e.target.value);
    setTimeout(() => {
      if (usersTyping?.length > 0) {
        Service.SocketService.Chat.usersTyping({
          roomName: currentRoom._id,
          usersTyping: usersTyping,
        }); //id la room name luon
      }
    }, 1000);
  };
  const sendMessage = () => {

    const userName = localStorage.getItem("userName");
    if (!userName) return;
    const newUserTyping=usersTyping?.filter((user)=>user!==userName);
    setUsersTyping({
       roomName: currentRoom._id,
       user: newUserTyping,
    })
    Service.SocketService.Chat.usersTyping({
      roomName: currentRoom._id,
      usersTyping: newUserTyping,
    });
    const res=Service.ApiService.sendChatMessage({
      roomId: currentRoom._id,
      chatMessage: chatMessage,
      userName: userName,
    });
   
    Service.SocketService.Chat.sendChatMessage({
      roomName: currentRoom._id,
      message: chatMessage,
      userName: userName,
    });
    setChatMessage("");
  };

  const userTypingNotIncludeMe = usersTyping?.filter(
    (user) => user !== localStorage.getItem("userName")
  );
  return (
    <Row
      style={{
        height: "100%",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <Col
        style={{
          flex: 1,
        }}
      >
        <Chat />
      </Col>
      <Col>
        {userTypingNotIncludeMe?.length > 0 ? (
          userTypingNotIncludeMe?.length === 1 ? (
            <p>{userTypingNotIncludeMe[0]} is typing...</p>
          ) : (
            <p>
              {userTypingNotIncludeMe[0]} and{" "}
              {userTypingNotIncludeMe.length - 1} others are typing...
            </p>
          )
        ) : null}
        <div
          style={{
            padding: "5px 5px 15px 0",
            display: "flex",
            gap: 5,
          }}
        >
          <Input onChange={handleTyping} />
          <Button icon={<SendOutlined />} onClick={sendMessage}></Button>
        </div>
      </Col>
    </Row>
  );
};

export default Message;
