const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', function(req, res) {
  res.render('index.html');
});

app.get('/api', function(req, res) {
  console.log("I hope this works");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
