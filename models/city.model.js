const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create city schema & model
const CitySchema = new Schema({
  name: {
    type: String,
    required: [true, "Name of city is required"]
  },
  country: {
    type: String,
    required: [true, "Name of country is required"]
  }
});

module.exports = mongoose.model("City", CitySchema);
