require("dotenv").config({ path: "./config/config.env" });
module.exports = {
  //   METERED_DOMAIN: process.env.METERED_DOMAIN || "",
  //   METERED_SECRET_KEY: process.env.METERED_SECRET_KEY || "",
  port: process.env.PORT || 3080,
  db_uri: process.env.MONGO_URI.toString(),
  passphrase:process.env.PASSWORD_CERT
};