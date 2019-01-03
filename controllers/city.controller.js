const City = require("../models/city.model");

// test message
exports.test = (req, res) => {
  res.send("Greetings from the Test controller!");
};

//add city funnction
exports.add_city = (req, res) => {
  let city = new City(
      {
    name: req.body.name,
    country: req.body.country
  }
  );
  city.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("City added successfully");
  });
};

exports.world = (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`, );
}

// get city details
exports.get_cities = (req, res) => { 
    City.find().then(cities =>     
      res.send(cities)
    )}

// City.find( (err, city) => {
    //     if (err) return next(err);
    //     res.send(city);
    // })
