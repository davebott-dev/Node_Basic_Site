var http = require('http');
var url = require('url');
var fs = require('fs');


http.createServer( (req, res) => {

  if(req.url == '/' || req.url == '/index') {
    
    fs.readFile('index.html', (err,data)=> {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });

  } else if( req.url == '/about') {
    
    fs.readFile('about.html', (err,data)=> {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });

  } else if (req.url == '/contact-me') {
    
    fs.readFile('contact-me.html', (err,data)=> {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });

  } else {
      fs.readFile('404.html', (err,data)=> {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
  
    }  
}).listen(8080, ()=> {
  console.log('server has started')
});


