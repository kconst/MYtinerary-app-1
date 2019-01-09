const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//create city schema & model
const CitySchema = new Schema({
  name: String,
  country: String
});

module.exports = mongoose.model("City", CitySchema);
