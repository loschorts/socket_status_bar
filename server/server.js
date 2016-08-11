var WebSocketServer = require('ws').Server;
var Counter = require("./counter.js");

wss = new WebSocketServer({ port: 8080 });

console.log("web socket open at 'ws://localhost:8080'");

var counter;

wss.on('connection', function(ws) {
	console.log('new connection');
	counter = new Counter(ws);
	counter.start();
});

wss.on('close', function (){
	console.log('disconnected');
	counter.stop();
});

