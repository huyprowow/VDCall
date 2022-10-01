import React from "react";
import { Button, Divider, notification, Space } from "antd";
import { SmileOutlined, FrownOutlined } from "@ant-design/icons";

const style = {
  width: 300,
  transition: "all 1.5s",
  borderRadius: 7,
};
export const notificationCustom = (type, message, description) => {
  switch (type) {
    case "success":
      notification.success({
        message: message,
        description: description,
        placement: "bottomRight",
        style: style,
        // duration: 1.5,
        icon: <SmileOutlined style={{ color: "#52C41A" }} />,
      });
      break;
    case "error":
      notification.error({
        message: message,
        description: description,
        placement: "bottomRight",
        style: style,
        // duration: 1.5,
        icon: <FrownOutlined style={{ color: "#F8444F" }} />,
      });
      break;
    case "warning":
        notification.warning({
          message: message,
          description: description,
          placement: "bottomRight",
          style: style,
          // duration: 1.5,
        });
      break;
    case "info":
      notification.info({
        message: message,
        description: description,
        placement: "bottomRight",
        style: style,
        // duration: 1.5,
      });
      break;
    default:
      break;
  }
  //   notification.open({
  //     message: title,
  //     description: message,
  //     icon: <SmileOutlined style={{ color: "#108ee9" }} />,
  //   });
};
