import React, { useEffect } from "react";
import { useChatStore } from "../../../../store/chat";
import ChatLine from "./ChatLine/ChatLine";
import { Service } from "../../../../service";
import { useRoomStore } from "../../../../store/room";
import { notificationCustom } from "../../../../Notification/notificationCustom";

type Props = {};

const Chat = (props: Props) => {
  const chats = useChatStore((state) => state.chats);
  const currentRoom = useRoomStore((state) => state.currentRoom);
  const setChatInRoom = useChatStore((state) => state.setChatInRoom);

  useEffect(() => {
    Service.SocketService.Chat.listeningMessage(
      chats,
      setChatInRoom,
      currentRoom
    );
  }, [chats.length, currentRoom, setChatInRoom]);
  return (
    <>
      {chats?.map((chat) => {
        return <ChatLine chat={chat} />;
      })}
    </>
  );
};

export default Chat;
