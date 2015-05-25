var config  = require('./../build.config'),
  envConfig = require('./../env.config.js'),
  express = require('express'),
  app     = express(),
  path    = require('path'),
  server  = require('http').createServer(app),
  Twitter = require('twitter');

// CONFIG TWITTER PROXY
var twitterClient = new Twitter({
  consumer_key: envConfig.TWITTER_CONSUMER_KEY,
  consumer_secret: envConfig.TWITTER_CONSUMER_SECRET,
  access_token_key: envConfig.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: envConfig.TWITTER_ACCESS_TOKEN_SECRET,
});

// CONFIG SERVER

app.use(express.static(config.build_dir));
app.get('/tweets', function (req, res) {
  twitterClient.get('statuses/user_timeline', {screen_name: 'BookBottles', count: 10}, function(error, tweets, response){
    res.send(tweets);
  });
});
app.get('*', function (req, res) {
    res.sendFile(path.resolve(config.build_dir + '/index.html'));
});

// FIRE IT UP

server.listen(config.port, function () {
    console.log("Express server listening on port %d", config.port);
});
