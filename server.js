const express = require('express')
const app = express()
const igdb = require('igdb-api-node').default;
const client = igdb(process.env.IGDB_API_KEY)

app.use(express.static('public'))

app.get('/', function(req, res) {
  res.render('index.html');
});

app.get('/api', function(req, res) {
  console.log("I hope this works");
  console.log(req.query.genre);
  client.games( {
    genres:[req.query.genre],
    // filters: {
    //   'release_dates.date-gt': '2010-12-31',
    //   'release_dates.date-lt': '2017-10-01'
    // },
    // order: 'release_dates.date:desc',
    limit: 50
  },[
    "name"
    ]).then(response => {
    console.log("Request successful.");
    res.send(response.body);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
