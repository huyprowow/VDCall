const express = require("express");
const router = express.Router();
const roomController = require("../controllers/roomController");
router.get("/all", roomController.get_all_room);
router.post("/", roomController.get_room_by_user);
router.post("/new", roomController.create_room);
router.post("/join", roomController.join_room);

module.exports = router;
