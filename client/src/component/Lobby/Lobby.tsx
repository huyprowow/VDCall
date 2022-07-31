import { useEffect, useState } from "react";
import AxiosInstance from "../../lib/AxiosInstance";
import Find from "../Find/Find";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Layout, List } from "antd";
import "./Lobby.scss";
import RoomContent from "../Room/RoomContent";
import { Typography } from 'antd';

const { Title } = Typography;
const { Sider, Content } = Layout;

const Lobby = () => {
  const [rooms, setRooms] = useState();
  const getRooms = async () => {
    try {
      const rooms = await AxiosInstance.post("/room", {
        userName: localStorage.getItem("userName"),
      });
      setRooms(rooms.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getRooms();
  }, []);

  const onClickRoom=(roomId:string)=>{
    console.log("click room",roomId);
  }
  return (
    <Layout style={{ display: "flex" }}>
      <Sider style={{ height: "100vh" }} 
      >
        <List
          id="room-list"
          bordered
          size="large"
          header={
          <>
          <Title level={2}>
            <Avatar icon={<UserOutlined />} />
              {localStorage.getItem("userName")}
            </Title>
          <Find />
          </>}
          dataSource={rooms}
          renderItem={(room: IRoom) => (
            <List.Item key={room._id} className="room-item" onClick={()=>onClickRoom(room._id)}>
              <List.Item.Meta
                style={{ display: "flex" }}
                avatar={<Avatar size="large" icon={<UserOutlined />} />}
                title={room.roomName}
                description={room.roomDescription}
              />
            </List.Item>
          )}
        />
      </Sider>
      <Content style={{ height: "100vh", flex: "70" }}>
        <RoomContent />
      </Content>
    </Layout>
  );
};

export default Lobby;
