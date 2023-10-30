const express = require("express");
const bcrypt = require("bcrypt");
const { UserModel } = require("../model/user.model");
const UserRouter = express.Router();
const { authentication } = require("../middlewares/authentication.middleware");
const jwt = require("jsonwebtoken");
require("dotenv").config();

UserRouter.get("/", (req, res) => {
  res.status(200).send({ msg: "Welcome to users section" });
});

UserRouter.post("/register", (req, res) => {
  try {
    const { name, email, gender, password } = req.body;
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        res.status(400).send({
          msg: "Error while saving user to DB, Please try again...",
          Error: err,
        });
      } else {
        const newUser = new UserModel({ name, email, gender, password: hash });
        await newUser.save();
        res.status(200).send({
          msg: "New User has been successfully registered",
          userDetails: { name, email, gender },
        });
      }
    });
  } catch (error) {
    res
      .status(404)
      .send({ msg: "Error while saving user to DB", Error: error });
  }
});

UserRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    let userFound = await UserModel.findOne({ email });
    if (userFound) {
      const hash = userFound.password;
      bcrypt.compare(password, hash, async (err, result) => {
        if (err) {
          res
            .status(400)
            .send({ msg: "Please check your Password...!", Error: err });
        } else {
          let token = jwt.sign(
            {
              _id: userFound._id,
              email: userFound.email,
              name: userFound.name,
              gender: userFound.gender,
            },
            process.env.SECRET_CODE
          );
          res.status(200).send({
            msg: `Login Successfull. Welcome ${userFound.name}`,
            token,
          });
        }
      });
    } else {
      res.status(200).send({ msg: "User not Found!" });
    }
  } catch (error) {
    res.status(404).send({ msg: "Error while Login", Error: error });
  }
});

module.exports = {
  UserRouter,
};
