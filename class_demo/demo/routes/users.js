var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

var userModel = require('../models/users');

io.on('connection', function(socket) {

    socket.on('req_login', function (params) {
        userModel.validateCredentials(params, socket);
    });

});

module.exports = router;
