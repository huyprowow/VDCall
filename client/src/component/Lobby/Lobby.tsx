import { UserOutlined } from "@ant-design/icons";
import { Avatar, Layout, List, Typography } from "antd";
import { useEffect, useState } from "react";
import AxiosInstance from "../../lib/AxiosInstance";
import Find from "../Find/Find";
import RoomContent from "../Room/RoomContent";
import "./Lobby.scss";

const { Title } = Typography;
const { Sider, Content } = Layout;

const Lobby = (socket: any) => {
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

  const onClickRoom = (roomId: string) => {
    console.log("click room", roomId);
  };
  return (
    <Layout>
      <Sider theme="light">
        <List
          id="room-list"
          size="large"
          header={
            <>
              <Title level={5}>
                <Avatar icon={<UserOutlined />} style={{ margin: 10 }} />
                {localStorage.getItem("userName")}
              </Title>
              <Find />
            </>
          }
          dataSource={rooms}
          renderItem={(room: IRoom) => (
            <List.Item
              key={room._id}
              className="room-item"
              onClick={() => onClickRoom(room._id)}
            >
              <List.Item.Meta
                avatar={<Avatar size="small" icon={<UserOutlined />} />}
                title={room.roomName}
                description={room.roomDescription}
              />
            </List.Item>
          )}
        />
      </Sider>
      <Content>
        <RoomContent />
      </Content>
    </Layout>
  );
};

export default Lobby;
