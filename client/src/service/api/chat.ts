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
