require("dotenv").config();
const express = require("express");
const router = express.Router();
const City = require("../models/city.model");
const Itinerary = require("../models/itinerary.model");
const Activity = require("../models/activity.model");
const Comment = require("../models/comment.model");
const bcrypt = require("bcryptjs");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator/check");

// const Login = require("../models/login.model");
// const { body } = require("express-validator/check");

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

//---------cities page---------------

// get cities from mlab
router.get("/cities", (req, res) => {
  City.find().then(cities => res.send(cities));
});

//get each city by city name
router.get("/cities/:city", (req, res) => {
  City.find({ city: req.params.city }).then(result => res.send(result));
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

//--------------itinerary page --------------------------
//get itineraries
router.get("/itineraries", (req, res) => {
  Itinerary.find()
    // .populate("cities").exec()
    .then(result => res.send(result));
});

// get itineraries by city
router.get("/itineraries/:city", (req, res) => {
  const city = req.params.city;
  Itinerary.find({ city }).then(result => res.send(result));
});

//post itinerary
router.post("/addPost", upload.single("userImage"), (req, res) => {
  // console.log(req.file.path)
  const itinerary = new Itinerary({
    userimage: req.file.path,
    title: req.body.title,
    username: req.body.username,
    rating: req.body.rating,
    duration: req.body.duration,
    cost: req.body.cost,
    hashtags: req.body.hashtags,
    city: req.body.city
  });
  itinerary.save().then(result => {
    console.log(result);
    res.send("post added successfully");
  });
});

//-------------activities page ----------------------

//get activities of specific itinerary by id
router.get("/activities/:id", (req, res) => {
  const itinerary_id = req.params.id;
  Activity.find({ itinerary_id })
    // .populate("cities").exec()
    .then(result => res.send(result));
});

//post activities
router.post("/addActivity", upload.single("activityImage"), (req, res) => {
  // console.log(req.file.path)
  const activity = new Activity({
    activityImage: req.file.path,
    activityCaption: req.body.activityCaption,
    title: req.body.title,
    city: req.body.city,
    itinerary_id: req.body.itinerary_id
  });
  activity.save().then(result => {
    console.log(result);
    res.send("post added successfully");
  });
});

//-----------comment page --------------------
// post comment
router.post("/postComment", (req, res) => {
  const comment = new Comment({
    title: req.body.title,
    city: req.body.city,
    itinerary_id: req.body.itinerary_id,
    comment: req.body.comment,
    username: req.body.username
  });
  comment.save().then(result => {
    console.log(result);
    res.status(200).json(result);
  });
});

//get comment specific to itinerary id
router.get("/postComment/:id", (req, res) => {
  const itinerary_id = req.params.id;
  Comment.find({ itinerary_id: itinerary_id }).then(result => res.json(result));
});

// -----create user account----------------------

//create account, check for existing email and post to mlab
router.post("/signUp", (req, res, next) => {
  // console.log(req.body);
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Mail exists"
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
            User.create({
              // userImage: req.file.path,
              username: req.body.username,
              firstname: req.body.firstname,
              lastname: req.body.lastname,
              email: req.body.email,
              password: hash,
              selectedCountry: req.body.selectedCountry
            })
              .then(result => {
                console.log(result);
                res.status(201).json({
                  message: "User created"
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
          }
        });
      }
    });
});

//delete user by _id
router.delete("/deleteUser/:userId", (req, res, next) => {
  User.remove({ _id: req.params.userId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "User deleted"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

//create login post

router.post("/login", (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth failed"
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user[0],
              userId: user[0]._id
            },
            process.env.JWT_KEY,
            {
              expiresIn: "1h"
            }
          );
          return res.status(200).json({
            message: "Auth successful",
            token: token
          });
        }
        if (result) {
          return res.status(200).json({
            message: "Auth successful"
          });
        }
        return res.status(401).json({
          message: "Auth failed"
        });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

//create login account and post to mlab
// router.post("/login", (req, res) => {
//   const login = new Login({
//     username: req.body.fields.username,
//     password: req.body.fields.password
//   });
//   login.save().then(result => {
//     res.json(result);
//   });
// });

module.exports = router;

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
//populate cities with itneraries
// router.get("/cities", (req, res, next) => {
//       City.find()
//         .populate("itineraries")
//         .exec(function(error, entries) {
//           res.send(cities);
//         })
// });
