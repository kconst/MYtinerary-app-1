import mongoose from "mongoose";
const Schema = mongoose.Schema;

// create itinerary schema
const ItinerarySchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userImage: String,
  title: String,
  userName: String,
  userRating: Number,
  duration: Number,
  cost: String,
  hashtags: [String],
  city: String
});

module.exports = mongoose.model("Itinerary", ItinerarySchema);
