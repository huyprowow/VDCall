const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const RoomSchema = new Schema(
  {
    roomName: { type: String, required: true },
    roomPassword: { type: String },
    roomDescription: { type: String, default: "" },
    chats: [{ type: Schema.Types.ObjectId, ref: "Chat" }],
    users: [{ type: Schema.Types.ObjectId, ref: "User" }],
    roomCreatedBy: { type: String, required: true },
    dateCreated: { type: Date, default: Date.now },
  },
  { collection: "room" }
);
module.exports = mongoose.model("Room", RoomSchema, "room");
