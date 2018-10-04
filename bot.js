console.log('The bot is starting ');

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);
var seconds = 10 // Seconds waiting for DM

// Settig up a user stream
var stream = T.stream('user');

// Anytime Someone follows me
 stream.on('follow', onFollowed);

/**
 * Function onFollowed will be triggered when someone follows me
 *
 * @param { Object } eventTwit - Event that contains twitter values
 * @param { String } eventTwit.source.screen_name - User's screen name
 */
function onFollowed(eventTwit) {
  console.log('Follow event!');
  var screenName = eventTwit.source.screen_name;

  // the post request for direct messages > need to add a function to handle errors

  setTimeout(function() {  // wait 60 sec before sending direct message.
    console.log("Direct Message sent");
     T.post("direct_messages/new", {
      screen_name: screenName,
      text: 'Thanks for following' + ' ' + screenName + '! ' + ' What you want to be sent to a new follower '
     });
  }, 1000 * seconds);  // will respond via direct message after a user follows.
};
