const express = require("express");
const router = express.Router();
const chatController = require("../controllers/chatController");
router.get("/", chatController.get_chat);
router.get("/:room", chatController.get_room_chat);
router.post("/:room/new",chatController.chat_new_message);

module.exports = router;
