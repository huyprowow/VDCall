const port = require("./config/config").port;
const passphrase = require("./config/config").passphrase;
const app = require("./app");
const https = require("https");
const fs = require("fs");
const options = {
  key: fs.readFileSync("./ssl/key.pem"),
  cert: fs.readFileSync("./ssl/cert.pem"),
  passphrase: passphrase,//delete this line if you not using passphrase
};
https
  .createServer(options, app)
  .listen(port, () => {
    console.log(`Server is running on port ${port}`);
  })
  .on("error", (err) => {
    console.log(err);
  });
