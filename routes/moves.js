var express = require('express');
var router = express.Router();

module.exports = function(app, io) {
  app.post('/move/:direction', function(req, res){
    var direction = req.params.direction;
    console.log("about to emit message with direction: " + direction);
    io.emit("httpmove", direction);
    res.json(200, {message: "Message received!"});
  })
};
