const express = require("express");
const router = express.Router();
const City = require("../models/city.model");
const bodyParser = require("body-parser");

//create a middleware called myLogger
var myLogger = function(req, res, next) {
  req.myLogger = "Logged";
  next();
};

//use myLogger
router.use(myLogger);

//create a middleware called requestTime
var requestTime = function(req, res, next) {
  req.requestTime = Date();
  next();
};

//use requestTime
router.use(requestTime);

//use middleware
router.use(function(req, res, next) {
  // log each request to the console
  console.log(req.method, req.url);
  // continue doing what we were doing and go to the route
  next();
});

//test next call with middleware
router.get("/hello", (req, res) => {
  var responseText = "Hello World!<br>";
  responseText +=
    "<small>Requested at : " +
    req.requestTime +
    "</small>" +
    " " +
    req.myLogger;
  res.send(responseText);
});

//get cities from mlab and post on mlab
router.get("/cities", (req, res) => {
  City.find().then(cities => res.send(cities));
});

//post city onto mlab
router.post("/addCity", function(req, res) {
  var city = new City({
    name: req.body.name,
    country: req.body.country
  });
  console.log(req.body.name);
  console.log(req.body.country);

  city.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("City added successfully");
  });
});

router.post("/contact", (req,res) => {
  res.send("This is the contact page with a POST request")
})

module.exports = router;

// Require the controllers
// const city_controller = require("../controllers/city.controller");

// a simple test url to check that all of our files are communicating correctly
// router.get("/test", city_controller.test);

// get a list of cities
// router.get("/cities", city_controller.get_cities);

//add a city
// router.post("/addcity", city_controller.add_city);

//post something
// router.post("/world", city_controller.world);
