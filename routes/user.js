const express = require("express");
const User = require("../database/models/user");
const auth = require("../middlewares/auth");
const mongoose = require("mongoose");
const router = new express.Router();

// REGISTER A NEW USER
router.post("/api/user/register", async (req, res) => {
  //Checking if the user already exists
  const userInDB = await User.findOne({ email: req.body.email });
  if (userInDB) {
    return res.status(400).send({ err: "This email is already taken" });
  }
  //Registering a new user
  const user = new User(req.body);
  try {
    await user.save();
    //Generating a new authorization token
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (err) {
    res.status(400).send({ err });
  }
});

//TO LOGIN USER
router.post("/api/user/login", async (req, res) => {
  try {
    //Finding the user
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    //Generating authorization token if the user exists
    const token = await user.generateAuthToken();
    //Responding with user and token
    res.status(200).send({ user, token });
  } catch (err) {
    res.status(400).send({ err });
  }
});

module.exports = router;
