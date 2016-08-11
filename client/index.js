import React from 'react';
import ReactDOM from 'react-dom';
import StatusBar from './status_bar';

document.addEventListener('DOMContentLoaded', () => {
	const root = document.querySelector("#root");
	ReactDOM.render(
		<StatusBar 
		color="blue"
		segments={5}
		string1="sup"
		string2="jefe"/>, root);
});