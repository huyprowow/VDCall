import { Layout } from "antd";
import "./Lobby.scss";
import RoomList from "../../component/Lobby/RoomList/RoomList";
import RoomContent from "../../component/Lobby/RoomContent";

const { Sider, Content } = Layout;

const Lobby = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider theme="light">
        <RoomList />
      </Sider>
      <Content>
        <RoomContent />
      </Content>
    </Layout>
  );
};

export default Lobby;
