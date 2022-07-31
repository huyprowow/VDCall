const express = require("express");
const logger = require("morgan");
const cors=require("cors");
const app = express();
const lobbyRouter = require("./routes/lobby");
const roomRouter = require("./routes/room");
const userRouter = require("./routes/user");
const chatRouter = require("./routes/chat");
const errorHandling =require("./middlewares/errorHandling");
const dbconnect = require("./utils/dbConnect");
app.use(cors())
app.use(logger("dev"));
app.use(errorHandling);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/",(req,res,next)=>{
    res.redirect("api/lobby");
})//Production will delete this line
app.use("/api", lobbyRouter);
app.use("/api/room", roomRouter);
app.use("/api/user", userRouter);
app.use("/api/chat", chatRouter);


module.exports = app;
