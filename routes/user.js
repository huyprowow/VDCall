const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.get_all_user);
router.post("/new", userController.create_user);
router.post("/signin", userController.signin_user);


module.exports = router;
