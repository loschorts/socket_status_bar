import React from 'react';
import Bar from './bar';

const setColor = (idx, segments, percent, onColor, offColor) =>{
	const threshold = (idx / segments) * 100;
	return threshold <= percent ? onColor : offColor;
};

class StatusBar extends React.Component {
	constructor(props){
		super(props);
		this.ws = new WebSocket('ws://localhost:8080');
		this.ws.onmessage = this.update.bind(this);
		this.state = {percent: 100};
		window.sb = this;
	}

	update({data}){
		this.setState({percent: parseInt(data)})
	}

	render(){
		const { percent } = this.state;
		const { color , segments, string1, string2 } = this.props;
		const width = Math.floor(100 / segments); 
		let bars = [];
		for (let idx = 1 ; idx <= segments ; idx++ ) {
			bars.push(
				<Bar 
					key={idx} 
					color={setColor(idx, segments, percent, color, 'white')}
					width={width}
				/>
			); 
		}

		return (
			<div className="status-bar-widget">
				<p>{string1} {string2}</p>
				<div className="status-bar" key>
					{ bars }
				</div>
				<p>Server status is at { percent }%. </p>
			</div>
			);
	}
};

export default StatusBar;