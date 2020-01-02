'use strict';
var mongoose = require('mongoose'),
  Post = mongoose.model('Posts');

exports.list_all_posts = function (req, res) {
  Post.find({}, function (err, msg) {
    if (err)
      res.send(err);
    res.json(msg);
  });
};

exports.create_posts = function (req, res) {
  var post = new Post(req.body);
  post.save(function (err, msg) {
    if (err)
      res.send(err);
    res.json(msg);
  });
}