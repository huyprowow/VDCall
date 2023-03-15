import AxiosInstance from "../../lib/AxiosInstance";

export const getRoomService = async () => {
  const res = await AxiosInstance.post("/room", {
    userName: localStorage.getItem("userName"),
  });
  return res;
};
