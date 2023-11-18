import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

import SignUp from "./page/SignUp/SignUp";
import SignIn from "./page/SignIn/SignIn";

import "antd/dist/antd.css";
import Lobby from "./page/Lobby/Lobby";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  localStorage.debug = "*";
} else {
  // production code
  localStorage.removeItem("debug");
}
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="room" element={<Lobby />} />
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
