const Chat = require("../models/chat");
const Room = require("../models/room");
const User = require("../models/user");
exports.get_chat = async (req, res, next) => {
  try {
    const chat = await Chat.find({});
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
exports.get_room_chat = async (req, res, next) => {
  try {
    const roomId = req.params.room;
    const room = await Room.findById(roomId).populate("chats");
    res.status(200).json(room.chats);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
exports.chat_new_message = async (req, res, next) => {
  try {
    const roomId = req.params.room;
    const room = await Room.findById(roomId);
    if (room) {
      const { chatMessage, userName } = req.body;
      const user = await User.findOne({ userName: userName });
      const newChat = new Chat({
        chatMessage: chatMessage,
        user: user._id,
        dateCreated: new Date(),
      });
      await newChat.save();
      room.chats.push(newChat);
      await room.save();
      res.status(201).json({ message: "Chat created successfully" });

    } else {
      res.status(400).json({ message: "Room does not exist" });
    }
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
