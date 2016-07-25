
var routes = function(app, io) {
  //sockets
  io.on('connection', function(socket){
    console.log('a user connected~~~~!');
  })
}

module.exports = routes;