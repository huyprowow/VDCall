import React from "react";
import { useChatStore } from "../../../../store/chat";
import ChatLine from "./ChatLine/ChatLine";

type Props = {};

const Chat = (props: Props) => {
  const chats = useChatStore((state) => state.chats);
  return (
    <>
      {chats.map((chat) => {
        return <ChatLine chat={chat} />;
      })}
    </>
  );
};

export default Chat;
