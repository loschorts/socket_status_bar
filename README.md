# How to Run

## Installation
0.	`brew install node` (if you don't have node)
0. `npm install -g webpack`
0.	`./install.sh`

## Start the Server

`node server/server.js` (or `npm start` from `/server`).

## View the Widget

`open client/index.html`

## Change the number of segments or color

0.	`cd clients`

0.	In `client/index.js`, tweak this and save: 

	```
		<StatusBar 
		color="blue"
		segments={5}
		string1="sup"
		string2="jefe"/>
	```
0.	`webpack`

0.	Refresh.
