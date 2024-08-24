//import required to create a server
var http = require('http');
var url = require('url');
//import required to read html files and render them on screen
var fs = require('fs');


http.createServer( (req, res) => {
//check what the request url path is and display the correct content
  if(req.url == '/' || req.url == '/index') {
    fs.readFile('index.html', (err,data)=> {
      //display an error page if path is bad
      if(err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('404 Not Found.')
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });

  } else if( req.url == '/about') {
    fs.readFile('about.html', (err,data)=> {
      if(err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('404 Not Found.')
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });

  } else if (req.url == '/contact-me') {
    fs.readFile('contact-me.html', (err,data)=> {
      if(err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('404 Not Found.')
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });

  } else {
    //display an error page if try to go to a path other than the above paths
      fs.readFile('404.html', (err,data)=> {
        if(err) {
          res.writeHead(404, {'Content-Type': 'text/html'});
          res.end('404 Not Found.')
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
  
    }  
}).listen(8080, ()=> {
  console.log('The server has started')
});


