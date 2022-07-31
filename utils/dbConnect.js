const mongoose = require("mongoose");
const MONGO_URI= require("../config/config").db_uri;
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
} catch (error) {
  console.log(error);
}
