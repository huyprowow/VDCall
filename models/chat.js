const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ChatSchema = new Schema(
  {
    chatMessage: { type: String, required: true },
    dateCreated: { type: Date, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: "User", require: true },
  },
  { collection: "chat" }
);
module.exports = mongoose.model("Chat", ChatSchema, "chat");
