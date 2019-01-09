const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create itinerary schema
const ItinerarySchema = new Schema({
  userImage: String,
  title: String,
  userName: String,
  userRating: Number,
  duration: Number,
  cost: String,
  hashtags: [String]
});

module.exports = mongoose.model("Itinerary", ItinerarySchema);
