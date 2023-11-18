import { notificationCustom } from "../../Notification/notificationCustom";
import AxiosInstance from "../../lib/AxiosInstance";

export const signIn = async (values: IAccount) => {
  try {
    const res = await AxiosInstance.post("/user/signin", values);
    console.log(res);
    localStorage.setItem("userName", values.userName);
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
