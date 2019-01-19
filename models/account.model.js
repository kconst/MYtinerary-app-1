const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create account schema

const AccountSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  userName: { type: String },
  password: { type: String },
  email: { type: String },
    country: { type: String },
    userImage: { type: String }
});

module.exports = mongoose.model("Account", AccountSchema);
