import { notificationCustom } from "../../Notification/notificationCustom";
import AxiosInstance from "../../lib/AxiosInstance";
export const getChats = async (roomId: string) => {
  try {
    const res = await AxiosInstance.get(`/chat/${roomId}`);
    return res.data;
  } catch (error: any) {
    notificationCustom({
      type: "error",
      message: "Error when get chats",
      description: error,
    });
  }
};
export const sendChatMessage = async ({
  roomId,
  chatMessage,
  userName,
}: {
  roomId: string;
  chatMessage: string;
  userName: string;
}) => {
  try {
    const res = await AxiosInstance.post(`/chat/${roomId}/new`, {
      chatMessage,
      userName,
    });
    return res.data;
  } catch (error: any) {
    notificationCustom({
      type: "error",
      message: "Error when send message",
      description: error,
    });
  }
};
