import React from 'react';

const Bar = ({color, width}) => {
	return <div style={ {background: color, width: `${width}%`} } className="bar-segment"/>;
};

export default Bar;