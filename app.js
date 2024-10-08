const express = require("express");
// const logger = require("morgan");
const morganMiddleware = require("./middlewares/morgan.middleware");
const cors = require("cors");
const app = express();
const lobbyRouter = require("./routes/lobby");
const roomRouter = require("./routes/room");
const userRouter = require("./routes/user");
const chatRouter = require("./routes/chat");
const errorHandling = require("./middlewares/errorHandling");
const dbconnect = require("./utils/dbConnect");
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./docs/swagger_output.json')

app.use(cors());
// app.use(logger("dev"));
app.use(morganMiddleware);
app.use(errorHandling);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  // res.redirect("api/lobby");
  res.send("Hello World");
}); //Production will delete this line
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use("/api", lobbyRouter);
app.use("/api/room", roomRouter);
app.use("/api/user", userRouter);
app.use("/api/chat", chatRouter);

module.exports = app;
