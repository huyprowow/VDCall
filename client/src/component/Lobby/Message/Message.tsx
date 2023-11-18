import { Button, Col, Input, Row, Space } from "antd";
import React from "react";
import { SendOutlined } from "@ant-design/icons";
import Chat from "./Chat/Chat";
import { useRoomStore } from "../../../store/room";
import { Service } from "../../../service";
type Props = {};

const Message = (props: Props) => {
  const [chatMessage, setChatMessage] = React.useState("");
  const userTyping = useRoomStore((state) => state.userTyping.user);
  const setUserTyping = useRoomStore((state) => state.setUserTyping);
  const currentRoom = useRoomStore((state) => state.currentRoom);
  const handleTyping = (e: any) => {
    const userName = localStorage.getItem("userName");
    if (!userName) return;
    const newUserTyping = [...userTyping, userName];
    setUserTyping({
      roomName: currentRoom.roomName,
      user: newUserTyping,
    });
    setChatMessage(e.target.value);
    Service.SocketService.Chat.userTyping(currentRoom._id);
  };
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
        <span style={{
          color: "gray",
        }}>xxx</span>
        <div
          style={{
            padding: "5px 5px 15px 0",
            display: "flex",
            gap: 5,
          }}
        >
          <Input onChange={handleTyping} />
          <Button icon={<SendOutlined />}></Button>
        </div>
      </Col>
    </Row>
  );
};

export default Message;
