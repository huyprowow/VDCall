import { UserOutlined } from "@ant-design/icons";
import { Avatar, Layout, List, Typography } from "antd";
import { useEffect } from "react";
import Find from "../Find/Find";
import RoomContent from "../Room/RoomContent";
import "./Lobby.scss";
import { useRoomStore } from "../../store/room";
import { Service } from "../../service/index";

const { Title } = Typography;
const { Sider, Content } = Layout;

const Lobby = () => {
  const rooms = useRoomStore((state) => state.rooms);
  const setRooms = useRoomStore((state) => state.setRooms);
  const getRooms = async () => {
    try {
      const res = await Service.ApiService.getRoomService();
      setRooms(res.data);
      Service.SocketService.User.setUserInfo();
      Service.SocketService.User.userJoined();
      const listRoomJoin = res.data.map((room: IRoom) => room._id);
      Service.SocketService.Room.joinAllRoom(listRoomJoin);
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
