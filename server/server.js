var WebSocketServer = require('ws').Server;
var Counter = require("./counter.js");

var wss = new WebSocketServer({ port: 8080 });

console.log("web socket open at 'ws://localhost:8080'");

wss.on('connection', function(ws) {
	console.log('new connection');
	new Counter(ws).start();
});

wss.on('close', function (){
	console.log('disconnected');
});

