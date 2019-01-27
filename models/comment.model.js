import mongoose from "mongoose";
const Schema = mongoose.Schema;

//create comment schema
const commentSchema = new Schema({
  userName: String,
  comment: String,
  city: String,
  title: String,
  id: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model("Comment", CommentSchema);
