//Require for Twitch chat module
var tmi = require('tmi.js');

//Require for DateTime module
var moment = require('moment');

//Require for Selenium webDriver module
const {Builder, By, Key, until} = require('selenium-webdriver');

//Require for CMD Line Module
var cmd = require('node-command-line'),
Promise = require('bluebird');

//Declare and Initialize happy map to store timestamps of chat's smieleyfaces
var happyMap = [];



//Sleep Function
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//Recursive date function to remove any datetimes from happymaparray that are 30 seconds less than current
function dateRemover(happyMapArray, subtractedDateTime) {
	if (happyMapArray[0] < subtractedDateTime)
	{
		happyMapArray.shift();
		dateRemover(happyMapArray, subtractedDateTime);
	}
	return happyMapArray;
}

//Initialize Twitch User
var options = {
	options:{
		debug: true
	},
	connection: {
		cluster: "aws",
		reconnect: true
	},
	identity: {
		username: "testnewguy176",
		password: "oauth:7p5g0awmzsrsihp7rmjoc8dbal4s09"
	},
	channels: ["thenewguy176"]
};

//Connect to Twitch
var client = new tmi.client(options);
client.connect();

client.on('chat', function(channel, user, message, self){
	console.log("channel is " + channel);
	console.log("user is " + user);
	console.log("message is " + message);
	console.log("self is " + self);

	console.log("Channels are " + client.getChannels());

	if(message.includes("PogChamp") && channel == "#thenewguy176")
	{
		//Declare Dates
		var fulldate = moment();
		var subtractedDate = moment().subtract(30, 'seconds');
		
		//Add fulldate to Array
		happyMap.push(fulldate);

		console.log("Happy Map array 0 before remove" + happyMap[0].format("DD-HH-mm-ss"));
		happyMap = dateRemover(happyMap, subtractedDate);
		console.log("Happy Map array 0 after remove" + happyMap[0].format("DD-HH-mm-ss"));
		console.log(happyMap.length);
		console.log(happyMap);

		if(happyMap.length > 3) {
			console.log("Start Recording");
				cmd.run('node TwitchVideoRecordingBot mogtimeosrs');
 				console.log('Executed your command :)');
		}

	}
});
