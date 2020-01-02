var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"),
  Post = require("./src/models/Post"),
  bodyParser = require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/postsdb");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

var routes = require("./src/routes/posts");
routes(app);
app.listen(port);

console.log("Message RESTful API server started on: " + port);
