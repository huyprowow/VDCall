import socketIO from "socket.io-client";
// console.log(`${process.env.REACT_APP_BASE_URL}`)
export const socket = socketIO(`${process.env.REACT_APP_BASE_URL}`, {
  transports: ["websocket"],
});