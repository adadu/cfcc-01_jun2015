/* 2)
Create a simple http server using node. *   This server should
respond to a root-url request with a file called index.html. Do not
use ExpressJS. Your code should have error checking and at least one
callback. Put five or more html elements in your index.html. One of
the elements should be a link to an external page. Things to research:
node.js, callbacks, the fs module, the http module. */

// ******************* SERVER FILE: server.js *******************

'use strict';

var fs = require('fs');
var http = require('http');
var path = require('path');

var port = 3000;

var server = http.createServer(function (req, res) {

  var file = __dirname + req.url;

  // ignore favicon.ico request from node
  if (req.url === '/favicon.ico') {
    res.writeHead(200, {'Content-Type': 'image/x-icon'} );
    res.end();
    return;
  }

  // serve index at request of root
  if(req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    file = __dirname + '/index.html';
    fs.createReadStream(file, function(err){
      if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
      }
    res.writeHead(200, {'Content-Type': 'text/html'});
    }).pipe(res);
  }

  // serve url in relation to root upon request
  else {
    file = __dirname + req.url;
    fs.createReadStream(file, function(err){
      if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
      }
    res.writeHead(200, {'Content-Type': 'text/html'});
    }).pipe(res);
  }
}).listen(port);
  console.log('server available at localhost: ' + port);
