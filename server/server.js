var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('client'));

// handle every other route with index.html
app.get('*', function(req, res, next){
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});

app.listen(3000, function(){
  console.log('Listening on port 3000');
});