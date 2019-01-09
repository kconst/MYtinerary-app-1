const express = require("express");
const router = express.Router();
const City = require("../models/city.model");
const Itinerary = require("../models/itinerary.model");
const bodyParser = require("body-parser");

//require for file upload
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

// get cities from mlab
router.get("/cities", (req, res) => {
  City.find().then(cities => res.send(cities));
});

//get each city by id
router.get("/cities/:name", (req, res) => {
  City.find({name: req.params.name}).then(result => res.send(result));
});

//populate cities with itneraries
// router.get("/cities", (req, res, next) => {
//       City.find()
//         .populate("itineraries")
//         .exec(function(error, entries) {
//           res.send(cities);
//         })
// });

//post city onto mlab
router.post("/addCity", function(req, res) {
  var city = new City(req.body);
  console.log(req.body);
  city
    .save(req.body)
    .then(item => {
      res.send("item added successfully");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

//post itinerary
router.post("/addPost", upload.single("userImage"), (req, res) => {
  // console.log(req.file.path)
  const itinerary = new Itinerary({
    userImage: req.file.path,
    title: req.body.title,
    userName: req.body.userName,
    userRating: req.body.userRating,
    duration: req.body.duration,
    cost: req.body.cost,
    hashtags: req.body.hashtags,
    name: req.body.name
  });
  itinerary.save().then(result => {
    console.log(result);
    res.send("post added successfully");
  });
});

//get itineraries
router.get("/itinerary", (req, res) => {
  Itinerary.find()
  .populate("cities").exec()
  .then(result => res.send(result));
});

//get itineraries by city
router.get("/itinerary/:city_id", (req, res) => {
  Itinerary.find({city_id: req.params.city_id})
  .then(result => res.send(result));
});

//store an img in binary
// var imgPath = "./client/src/images/GaudiLover.png";
// var itinerary = new Itinerary();
// itinerary.userImage.data = fs.readFileSync(imgPath);
// itinerary.userImage.contentType = "image/png";
// itinerary.save(function(err, itinerary) {
//   if (err) throw err;
//   console.log("save img to mongo");

// router.get("/entry", function(req, res, next) {
//   Itinerary.findById(itinerary, function(err, doc) {
//     if (err) return next(err);
//     res.contentType(doc.userImage.contentType);
//     res.send(doc.userImage.data);
//   });
// });
// })
//create a middleware called myLogger
// var myLogger = function(req, res, next) {
//   req.myLogger = "Logged";
//   next();
// };

//use myLogger
// router.use(myLogger);

//create a middleware called requestTime
// var requestTime = function(req, res, next) {
//   req.requestTime = Date();
//   next();
// };

//use requestTime
// router.use(requestTime);

//use middleware
// router.use(function(req, res, next) {
//   // log each request to the console
//   console.log(req.method, req.url);
//   // continue doing what we were doing and go to the route
//   next();
// });

//test next call with middleware
// router.get("/hello", (req, res) => {
//   var responseText = "Hello World!<br>";
//   responseText +=
//     "<small>Requested at : " +
//     req.requestTime +
//     "</small>" +
//     " " +
//     req.myLogger;
//   res.send(responseText);
// });

// City.create(req.body, function(err, city) {
//   if (err) {
//     console.log(err);
//     res.send("error adding city");
//   } else {
//    res.send(city);
//     console.log("City added successfully");
//   }
// });

//   city.save(function(err) {
//     if (err) {
//       return next(err);
//     }

//   });
// });

// router.post("/contact", (req, res) => {
//   res.send("This is the contact page with a POST request");
// });

module.exports = router;
