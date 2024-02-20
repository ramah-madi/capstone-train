const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

router.get("/", userController.getData)
router.get("/:id", userController.getUserData);
router.post("/newUser", userController.addUserData);
router.put("/updateUserInfo/:id", userController.updateUserData);


module.exports = router;