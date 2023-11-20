const logger = require("./utils/logger");
const port = require("./config/config").port;
const passphrase = require("./config/config").passphrase;
const app = require("./app");
const https = require("https");
const http = require("http");
const { initSocketServer } = require("./socketServer");
const fs = require("fs");
const options = {
  key: fs.readFileSync("./ssl/key.pem"),
  cert: fs.readFileSync("./ssl/cert.pem"),
  passphrase: passphrase, //delete this line if you not using passphrase
};
const httpServer = http.createServer(options, app);
initSocketServer(httpServer);
httpServer
  .listen(port, () => {
    logger.info(`Server is running on port ${port}`);
  })
  .on("error", (err) => {
    logger.error(err);
  });
