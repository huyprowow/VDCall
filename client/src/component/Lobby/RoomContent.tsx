import React from "react";
import RoomCamera from "./RoomCamera";
import RoomChat from "./RoomChat";
import { Col, Divider, Row } from "antd";

const RoomContent = () => {
  return (
    <Row>
      <Col
        style={{
          height: "100vh",
          width: "calc(100% - 30% - 17px)",
        }}
      >
        <RoomCamera />
      </Col>
      <Divider
        style={{ width: 1, height: "100vh", backgroundColor: "#f1f1f1" }}
        dashed
        type="vertical"
      />
      <Col
        style={{
          height: "100vh",
          width: "30%",
        }}
      >
        <RoomChat />
      </Col>
    </Row>
  );
};

export default RoomContent;
