const User = require("../models/user");

exports.get_all_user = (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.send(err);
    }
    res.json(users);
  });
};
exports.create_user = async (req, res) => {
  const { userName, password } = req.body;
  try {
    const user = await User.findOne({ userName: userName });
    if (user) {
      res.status(400).json({ message: "User already exists" });
    } else {
      const newUser = new User({
        userName,
        password,
        rooms: [],
      });
      const userCreated = await newUser.save();
      res.status(201).json({ message: "User created successfully" });
    }
  } catch (err) {
    console.log(err);
  }
};
exports.signin_user = async (req, res) => {
  const { userName, password } = req.body;
  try {
    const user = await User.findOne({ userName: userName });
    if (!user) {
      res.status(400).json({ message: "User does not exist" });
    } else if (user.password !== password) {
      res.status(400).json({ message: "Password is incorrect" });
    } else {
      res.status(200).json({ message: "User signed in successfully" });
    }
  } catch (err) {
    console.log(err);
  }
};

