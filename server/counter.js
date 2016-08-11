function Counter(ws){
	this.ws = ws;
	this.data = 100;
}

Counter.prototype.start = function(){
	var _counter = this;
	this.interval = setInterval(function(){
		_counter.data -= 1;

		console.log('sending ' + _counter.data + ' as data')

		try {	
			_counter.send();
		} catch(err) {
			console.log('connection interrupted')
			_counter.stop(); 
		}

		if (_counter.data < 0) {
			_counter.stop();
		}
	}, 500);
};

Counter.prototype.send = function(){
	this.ws.send(JSON.stringify(this.data));
}

Counter.prototype.stop = function(){
	this.data = 100;
	clearInterval(this.interval);
}

module.exports = Counter;