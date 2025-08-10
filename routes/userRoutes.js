const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController"); //imports all controller functions

router.post("/", userController.createUser); //Send data to the server to create something new.
router.get("/", userController.getAllUsers); //Fetch data from the server.
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser); //Update an existing resource.
router.delete("/:id", userController.deleteUser); //Remove a resource from the server.

module.exports = router;

//move to app.js
