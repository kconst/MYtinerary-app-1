//Use dotenv to read .env into node
//How to fo gitignore???
require("dotenv").config();

//set up express app
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//import routes
const routes = require("./routes/api");

//set up mongoose connection to mlab
const mongoose = require("mongoose");
const mongoDB = process.env.MONGODB_URI || process.env.DB_URL;
mongoose.connect(
  mongoDB,
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise; //WHAT IS THIS????
const connection = mongoose.connection;

connection.on("connected", function() {
  app.listen(process.env.PORT, () => {
    console.log(
      `db connected..Listening on port ${process.env.PORT} for request`
    );
  });
});

connection.on("disconnected", function() {
  console.log("db disconnected");
});

connection.on("error", function(error) {
  console.log("db connection error", error);
});

process.on("SIGINT", function() {
  connection.close(function() {
    console.log("db connection closed due to process termination");
    process.exit(0);
  });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//set up routes
app.use("/api", routes);
