import { notificationCustom } from "../../Notification/notificationCustom";
import AxiosInstance from "../../lib/AxiosInstance";
export const signUp = async (values: IAccount) => {
  try {
    const res = await AxiosInstance.post("/user/new", values);
    console.log(res);
    return true;
  } catch (error) {
    notificationCustom({
      type: "error",
      message: "Error",
      description: `${error}`,
    });
    return false;
  }
};
