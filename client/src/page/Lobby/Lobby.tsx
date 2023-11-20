import { Layout } from "antd";
import "./Lobby.scss";
import RoomList from "../../component/Lobby/RoomList/RoomList";
import RoomContent from "../../component/Lobby/RoomContent";
import { useRoomStore } from "../../store/room";
import _ from "lodash";
import { useEffect } from "react";

const { Sider, Content } = Layout;

const Lobby = () => {
  const currentRoom = useRoomStore((state) => state.currentRoom);
  useEffect(() => {
    console.log("currentRoom", currentRoom);
  }, [currentRoom]);
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider theme="light">
        <RoomList />
      </Sider>
      {!_.isEmpty(currentRoom) ? (
        <Content>
          <RoomContent />
        </Content>
      ) : null}
    </Layout>
  );
};

export default Lobby;
