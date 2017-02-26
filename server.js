var express = require('express');
var app = express();
var route_id = 0;
var route_url = '';

app.get('/', function(req, res) {
  res.send('Please enter a url after the /new/ route');
});

app.get('/:id', function(req, res) {
  var id = req.params.id;
  if (id != route_id) res.send('Nice try, but you have to give me a url first.');
  else {
    res.redirect(route_url);
  }
});

app.get('/new/http://:url', function(req, res) {
  var url = route_url = 'http://' + req.params.url;
  var id = route_id = Math.floor(Math.random() * 10000);
  var host = 'https://' + req.headers.host + '/' + id;
  
  res.send({
    original_url: url,
    short_url: host
  });
});

var port = process.env.PORT;
app.listen(port, function() {
  console.log('App listening on port', port);
});