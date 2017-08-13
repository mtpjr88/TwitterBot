console.log('The bot is starting ');

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

// Settig up a user stream
var stream = T.stream('user');

// Anytime Someone follows me
 stream.on('follow', followed);

function followed(eventMsg) {
  console.log('Follow event!');
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;

  // the post request for direct messages > need to add a function to handle errors

  setTimeout(function() {  // wait 60 sec before sending direct message.
    console.log("Direct Message sent");
     T.post("direct_messages/new", {
      screen_name: screenName,
      text: 'Thanks for following' + ' ' + screenName + '! ' + ' What you want to be sent to a new follower '
     });
  }, 1000*10);  // will respond via direct message 10 seconds after a user follows.
};
