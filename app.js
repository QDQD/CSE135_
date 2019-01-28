const express = require('express')
const fs = require('fs')
const app = express()
const port = 8083

app.use(express.static('/var/www/html'))

/*
app.get('/', function(req, res, next){
    res.send('Hello World!')
    console.log(req.originalUrl) 
})

app.get('*', function (req, res, next) {
  fs.readFile(req.originalUrl, function (err, data) {
    if (err) {
      console.log(err) 
      next(err); // Pass errors to Express.
    }
    else {
      res.sendFile(req.originalUrl);
    }
  });
});
*/
app.get('/forbidden/*', function(req, res, next){
    res.status(403).sendFile('403.html', {root: '/var/www/html'});
})

app.use(function (req, res, next) {
    res.status(404).sendFile('404.html', {root: '/var/www/html'});
})
app.listen(port, () => console.log(`CSE 135 app listening on port ${port}!`))
