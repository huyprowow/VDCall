const User = require("../models/user");
const Room = require("../models/room");

exports.get_all_room = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    console.log(err);
  }
};


exports.create_room = async (req, res) => {
  const { roomName, roomPassword, roomDescription, userName } = req.body;
  try {
    const user = await User.findOne({ userName: userName });
    const room = await Room.findOne({ roomName: roomName });
    if (room) {
      res.status(400).json({ message: "Room already exists" });
    } else {
      const newRoom = new Room({
        roomName,
        roomPassword,
        roomDescription,
        users: [user._id],
        chats: [],
        roomCreatedBy: userName,
      });
      const roomCreated = await newRoom.save();

      user.rooms.push(roomCreated._id);
      await user.save();
      res.status(201).json({ message: "Room created successfully" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.join_room = async (req, res) => {
  
  const { roomName, roomPassword, userName } = req.body;
  try {
    const user = await User.findOne({ userName: userName });

    const room = await Room.findOne({ roomName: roomName });

    if (!room) {
      res.status(400).json({ message: "Room does not exist" });
    } else {
      if (room.roomPassword === roomPassword) {
        if (room.users.includes(user._id)) {
          res.status(400).json({ message: "User already in room" });
        } else {
          room.users.push(user._id);
          const roomJoined = await room.save();
          user.rooms.push(roomJoined._id);
          await user.save();
        }
        res.status(201).json({ message: "User joined room successfully" });
      } else {
        res.status(400).json({ message: "Wrong password" });
      }
    }
  } catch (err) {
    console.log(err);
  }
};
exports.get_room_by_user = async (req, res) => {
  const { userName } = req.body;
  try {
    const user = await User.findOne({ userName: userName });
    if (!user) {
      res.status(400).json({ message: "User does not exist" });
    } else {
      const rooms = await Room.find({ users: user._id }).select("-roomPassword");
      res.status(200).json(rooms);
    }
  } catch (err) {
    console.log(err);
  }
}