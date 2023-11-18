import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import AxiosInstance from "../../lib/AxiosInstance";
import { useNavigate } from "react-router-dom";
import { Service } from "../../service/index";
const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const onFinish = async (values: IAccount) => {
    setLoading(true);
    console.log("Success:", values);
    const success = await Service.ApiService.signUp(values);
    if (success) {
      setTimeout(() => {
        setLoading(false);
        navigate("/signin");
      }, 2500);
    }else{
      setLoading(false);
      return;
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="userName"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUp;
