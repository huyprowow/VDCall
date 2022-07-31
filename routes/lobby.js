const express = require("express");
const router = express.Router();
const lobbyController = require("../controllers/lobbyController");
router.get("/lobby", lobbyController.get_all_room_by_user);
module.exports = router;
