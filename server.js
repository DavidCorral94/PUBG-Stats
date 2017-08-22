var http = require('http');
var path = require('path');
var request = require('request');
var cors = require('cors');

var express = require('express');

var app = express();
var server = http.createServer(app);
const { PubgAPI, PubgAPIErrors, REGION, SEASON, MATCH } = require('pubg-api-redis');

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(cors());

// If no Redis configuration it wont be cached
const api = new PubgAPI({
  apikey: process.env.APIKEY,
  redisConfig: {
    host: '127.0.0.1',
    port: 6379,
    expiration: 300, // Optional - defaults to 300.
  },
});



app.get("/stats/:pubgname", (request, response) => {
  var name = request.params.pubgname;
  console.log("GET /stats/" + name);
  api.getProfileByNickname(name)
    .then((profile) => {
      const data = profile.content;
      /*
      const stats = profile.getStats({
        region: REGION.ALL, // defaults to profile.content.selectedRegion
        season: SEASON.EA2017pre3, // defaults to profile.content.defaultSeason
        match: MATCH.SOLO // defaults to SOLO
      });
      */
      response.send(data);
    });
});

server.listen(process.env.PORT || 3000, function() {
  console.log("App started");
});
