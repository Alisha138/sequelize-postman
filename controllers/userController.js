//to implement all logics, what is requested by server and what will we get in response

const User = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body); //req.body is parameter that is requested by server
    res.status(201).json(user);               //201 means created
  } catch (err) {
    res.status(400).json({ error: err.message }); //400 means your request is malformed or invalid.
  }
};

exports.getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

exports.getUserById = async (req, res) => {
  const user = await User.findByPk(req.params.id); //expexting user ID in the URL
  user ? res.json(user) : res.status(404).json({ error: "User not found" });   //404 means the resource you’re trying to access doesn’t exist.
};

exports.updateUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });

  await user.update(req.body);
  res.json(user);
};

exports.deleteUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });

  await user.destroy();
  res.json({ message: "User deleted" });
};

//Move to routes Folder
