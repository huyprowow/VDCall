import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Find = () => {
  return <Input placeholder="default size" prefix={<SearchOutlined />} />;
};

export default Find;
