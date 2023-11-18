import { Avatar, Col, Row, Typography } from "antd";
import React from "react";
import "./ChatLine.scss";
const { Text } = Typography;
const ChatLine = ({ chat }: { chat: IChat }) => {
  const myName = localStorage.getItem("userName");
  const isMyMessage = chat.user.userName === myName;
  return (
    <Row
      key={chat._id}
      className="chat-line"
      style={{
        width: "100%",
        padding: 2,
        flexDirection: isMyMessage ? "row" : "row-reverse",
      }}
      gutter={2}
      align="middle"
    >
      <Col
        style={{
          flex: 1,
        }}
      />
      <Col
        className={isMyMessage ? "message-bubble-right" : "message-bubble-left"}
        style={{
          padding: 5,
        }}
      >
        <Text>{chat.chatMessage}</Text>
      </Col>
      <Col>
        <Avatar className={isMyMessage ? "avatar-left" : "avatar-right"}>
          {chat.user.userName}
        </Avatar>
      </Col>
    </Row>
  );
};

export default ChatLine;
