import React from "react";
import { Col, Row, Typography } from "antd";
import Message from "./Message/Message";
const { Title } = Typography;
const RoomChat = () => {
  return (
    <Row style={{ height: "100vh", flexDirection: "column" }}>
      <Title
        style={{
          height: 30,
          margin: 0,
        }}
        level={4}
      >
        RoomChat
      </Title>
      <Col
        style={{
          height: "calc(100vh - 30px)",
          width: "100%",
        }}
      >
        <Message />
      </Col>
    </Row>
  );
};

export default RoomChat;
