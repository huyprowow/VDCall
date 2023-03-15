const mongoose = require("mongoose");
const MONGO_URI= require("../config/config").db_uri;
const logger=require("../utils/logger");
try {
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize: 100,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    wtimeoutMS: 45000,
    connectTimeoutMS: 45000,
  });
  logger.info("Connected to MongoDB");
} catch (error) {
  logger.error(error);
}
