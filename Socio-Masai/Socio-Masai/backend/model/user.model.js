const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  gender: String,
  password: String,
});

const UserModel = new mongoose.model("user", userSchema);

module.exports = { UserModel };
