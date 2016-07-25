var middleware = require('./config/middleware.js');
var routes = require('./config/routes.js');

var express = require('express');
var path = require('path');

var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);




middleware(app, express);
routes(app, io);




server.listen(3000, function(){
  console.log('Listening on port 3000');
});
//wrong way...
// app.listen(3000, function(){
//   console.log('Listening on port 3000');
// });

