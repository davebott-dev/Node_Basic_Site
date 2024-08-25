//imported express to handle static html pages easier
const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
const PORT = 3000;

//added router to handle the site routes
router.get('/',(req,res)=> {
  res.sendFile(path.join(__dirname, 'index.html'));
});
router.get('/about',(req,res)=> {
  res.sendFile(path.join(__dirname, 'about.html'));
});
router.get('/contact-me',(req,res)=> {
  res.sendFile(path.join(__dirname, 'contact-me.html'));
});
router.get('/404',(req,res)=> {
  res.sendFile(path.join(__dirname, '404.html'));
});

app.use('/', router);
app.listen(PORT, ()=> console.log(`Listening on PORT ${PORT}`))





