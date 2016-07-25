var cors = require('cors');
var path = require('path');


var middleware = function(app, express) {
  app.use(cors());
  // handle every other route with index.html
  app.use(express.static('client'));
  app.get('*', function(req, res, next){
    res.sendFile(path.resolve(__dirname + '/../../client/index.html'));
  });
}

module.exports = middleware;