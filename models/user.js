const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  rooms: [{ type: Schema.Types.ObjectId, ref: "Room" }],
  isAdmin: { type: Boolean, default: false },
},{ collection: "user" });
module.exports = mongoose.model("User", UserSchema,"user");
