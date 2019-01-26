const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create account schema

const UserSchema = new Schema({
  firstname: { type: String },
  lastname: { type: String },
  username: { type: String },
  password: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/
  },
  selectedCountry: { type: String }
  // userImage: { type: String }
});

module.exports = mongoose.model("User", UserSchema);
