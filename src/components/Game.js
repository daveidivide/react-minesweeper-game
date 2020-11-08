import React, { useState, useEffect } from 'react';
import useGlobalKeyDown from 'react-global-key-down-hook';
import { generateTilesArray } from './utils';
import { Board } from './Board';

const squareBoardWidth = 8;
const totalTiles = squareBoardWidth ** 2;
const chanceOfMineInTile = 0.4;

export const Game = () => {

	const [playerTileHistory, setPlayerTileHistory] = useState([totalTiles]);
	const [playerMineTileHistory, setPlayerMineTileHistory] = useState([]);
	const [tilesArr, setTilesArray] = useState(generateTilesArray(totalTiles, chanceOfMineInTile));
	const playerCurrentTile = playerTileHistory[playerTileHistory.length - 1];

	useEffect(() => {

	// Alert 'game won' if reached top line
    if (playerCurrentTile <= squareBoardWidth) {
      alert('You just won the game');
      resetGame();
      
    // Alert 'game lost' if more than 2 bomb explosions
    } else if (playerMineTileHistory.length > 2) {
      alert('You just lost the game');
      resetGame();
    }

	},[playerCurrentTile, playerMineTileHistory.length]);

	const resetGame = () => {
		setPlayerTileHistory([totalTiles]);
		setTilesArray(generateTilesArray(totalTiles, chanceOfMineInTile));
		setPlayerMineTileHistory([]);
	}

	// Set a mine explosion into the history if current tile has a mine and that tile is not already in the history
	if (tilesArr[playerCurrentTile - 1].mineInTile === true && !playerMineTileHistory.includes(playerCurrentTile)) {
		setPlayerMineTileHistory(prev => {
			return [...prev, playerCurrentTile];
		});
	}

	// Listen for 'up' keydown, if move stays on the board, add to the playerTileHistory array
	useGlobalKeyDown(() => {
		if (playerCurrentTile > squareBoardWidth) {
			setPlayerTileHistory(prev => {
				return [...prev, prev[prev.length - 1] - squareBoardWidth]; 
			});
		};
	}, ['U', 'u'])

  	// Listen for 'down' keydown, if move stays on the board, add to the playerTileHistory array
	useGlobalKeyDown(() => {
		if (playerCurrentTile <= squareBoardWidth * (squareBoardWidth - 1)) {
    		setPlayerTileHistory(prev => {
    			return [...prev, prev[prev.length - 1] + squareBoardWidth]; 
    		});
    	};
  	}, ['D', 'd']);

  	// Listen for 'left' keydown, if move stays on the board, add to the playerTileHistory array
	useGlobalKeyDown(() => {
		if ((playerCurrentTile) % squareBoardWidth !== 0) {
    		setPlayerTileHistory(prev => {
    			return [...prev, prev[prev.length - 1] + 1]; 
    		});
    	};
  	}, ['L', 'l']);

  	// Listen for 'right' keydown, if move stays on the board, add to the playerTileHistory array
	useGlobalKeyDown(() => {
		if ((playerCurrentTile - 1) % squareBoardWidth !== 0) {
    		setPlayerTileHistory(prev => {
    			return [...prev, prev[prev.length - 1] - 1]; 
    		});   		
    	};
  	}, ['R', 'r']);

	return (
		<>
			<h5>Mines Hit: {playerMineTileHistory.length}</h5>
			<Board 
				tilesArr={tilesArr} 
				playerCurrentTile={playerCurrentTile}
				squareBoardWidth={squareBoardWidth}
				playerMineTileHistory={playerMineTileHistory}
			/>
		</>
	)
}