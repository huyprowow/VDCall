import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import socketIO from "socket.io-client";
import App from "./App";

import Lobby from "./component/Lobby/Lobby";
import SignUp from "./page/SignUp/SignUp";
import SignIn from "./page/SignIn/SignIn";

import "antd/dist/antd.css";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
console.log(`${process.env.REACT_APP_BASE_URL}`)
const socket = socketIO(`${process.env.REACT_APP_BASE_URL}`, {
  transports: ["websocket"],
});
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App socket={socket} />} />
        <Route path="room" element={<Lobby socket={socket} />} />
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="signin" element={<SignIn />}></Route>
        {/* <Route path="/looby" element={<Lobby/>}></Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
