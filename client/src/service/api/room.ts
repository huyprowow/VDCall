import { notificationCustom } from "../../Notification/notificationCustom";
import AxiosInstance from "../../lib/AxiosInstance";

export const getRoomService = async () => {
  try {
    const res = await AxiosInstance.post("/room", {
      userName: localStorage.getItem("userName"),
    });
    return res;
  } catch (error: any) {
    notificationCustom({
      type: "error",
      message: "Error when get room",
      description: error,
    });
  }
};
