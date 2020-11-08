import React from 'react';

export const Tile = ({
  squareBoardWidth,
  playerCurrentTile,
  tileNumber,
  playerMineTileHistory
}) => {
	let tileStyle = {
  		width: 100 / squareBoardWidth + '%',
  		paddingTop: 100 / squareBoardWidth + '%',
		backgroundColor: '#444',
		color: '#EEEEEE',
  		boxSizing: 'border-box',
  		border: '1px solid #EEEEEE'
  	}

	//Change tile colour if the current tile is active
	if (playerCurrentTile === tileNumber) {
		tileStyle.backgroundColor = 'lightblue';
	}

	// Change tile colour to red if it's a mine that's been landed on
	if (playerMineTileHistory.includes(tileNumber)) {
		tileStyle.backgroundColor = 'red';
	}

	// Change tile colour to green if it's landed in the win zone
	if (playerCurrentTile <= squareBoardWidth && playerCurrentTile === tileNumber) {
		tileStyle.backgroundColor = 'green';
	}

	return <div style={tileStyle}></div>;
}