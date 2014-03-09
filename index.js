var xmpp = require('simple-xmpp');

xmpp.on('online', function() {
    console.log('Yes, I\'m connected!');
});
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var parse = require('./lib/parse');



xmpp.on('chat', function(from, message) {
	console.log('from:' + from);
	console.log('message:' + message);
	parse(message, function (err, messageToSend) {
		if(!err){
			xmpp.send(from, messageToSend);
		} else {
			xmpp.send(from, "I am afraid I did not understand that");
		}
		
	});
	rl.question("Send a reply? \n", function(answer) {
 		xmpp.send(from, answer);
		//rl.close();
	});
    //xmpp.send(from, 'echo: ' + message);
});

xmpp.on('error', function(err) {
    console.error(err);
});

xmpp.on('subscribe', function(from) {
if (from === 'a.friend@gmail.com') {
    xmpp.acceptSubscription(from);
    }
});
var qconf = require('qconf'),
	config = qconf();

xmpp.connect({
    jid         : config.get('user'),
    password    : config.get('password'),
    host        : config.get('server'),
    port        : config.get('port')
});

//xmpp.subscribe('your.friend@gmail.com');
// check for incoming subscription requests
xmpp.getRoster();