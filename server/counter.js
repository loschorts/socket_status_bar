function Counter(ws){
	this.ws = ws;
	this.data = 100;
}

Counter.prototype.start = function(){
	this.interval = setInterval(function(){
		this.data -= 1;

		console.log('sending ' + this.data + ' as data');

		this.send();

		if (this.data <= 0) {
			this.stop();
		}
	}.bind(this), 500);
};

Counter.prototype.send = function(){
	try {	
		this.ws.send(JSON.stringify(this.data));
	} catch(err) {
		console.log('connection interrupted');
		this.stop(); 
	}
}

Counter.prototype.stop = function(){
	this.data = 100;
	clearInterval(this.interval);
}

module.exports = Counter;