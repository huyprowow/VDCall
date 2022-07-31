import React from "react";
import RoomCamera from "./RoomCamera";
import RoomChat from "./RoomChat";
import { Col, Divider, Row } from "antd";

const RoomContent = () => {
  return (
    <Row style={{ display: "flex" }}>
      <Col flex={2}>
        <RoomCamera />
      </Col>
        <Divider
          style={{ width: 1, height: "100vh",backgroundColor:"#f1f1f1" }}
          dashed
          type="vertical"
        />
      <Col flex={1}>
        <RoomChat />
      </Col>
    </Row>
  );
};

export default RoomContent;
