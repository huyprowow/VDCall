import React from "react";
import { useEffect } from "react";
import { List, Avatar, Typography } from "antd";
import { Service } from "../../../service";
import { useRoomStore } from "../../../store/room";
import { UserOutlined } from "@ant-design/icons";
import Find from "./Find/Find";
import { useChatStore } from "../../../store/chat";
type Props = {};
const { Title } = Typography;

const RoomList = (props: Props) => {
  const rooms = useRoomStore((state) => state.rooms);
  const setRooms = useRoomStore((state) => state.setRooms);
  const setChatInRoom = useChatStore((state) => state.setChatInRoom);
  const setCurrentRoom = useRoomStore((state) => state.setCurrentRoom);
  const getRooms = async () => {
    try {
      const res = await Service.ApiService.getRoomService();
      setRooms(res.data);
      Service.SocketService.User.setUserInfo();
      Service.SocketService.User.userJoined();
      const listRoomJoin = res.data.map((room: IRoom) => room._id);
      Service.SocketService.Room.joinAllRoom(listRoomJoin);
      if (res.data.length > 0) {
        console.log("res.data[0]._id", res.data[0]._id);
        onClickRoom(res.data[0]._id);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getRooms();
  }, [rooms.length]);
  const onClickRoom = async (roomId: string) => {
    console.log("click room", roomId);
    const chats = await Service.ApiService.getChats(roomId);
    const currentRoom = rooms.find((room: IRoom) => room._id === roomId);
    if (currentRoom) {
      setCurrentRoom(currentRoom);
      setChatInRoom(chats);
    }
  };
  return (
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
  );
};

export default RoomList;
