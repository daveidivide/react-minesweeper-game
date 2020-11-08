import React from 'react';
import { Tile } from './Tile';

export const Board = ({
  tilesArr,
  playerCurrentTile,
  squareBoardWidth,
  playerMineTileHistory
}) => {

  const tilesContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row-reverse',
    maxWidth: '400px',
    width: '100%'
  }

  return (
    <div style={tilesContainerStyle}>
	  {tilesArr.map(({ tileNumber }) => {
	    return (
		  <Tile 
		    key={tileNumber}
		    tileNumber={tileNumber}
		    playerCurrentTile={playerCurrentTile}
		    squareBoardWidth={squareBoardWidth}
		    playerMineTileHistory={playerMineTileHistory}
		  />
		)
	  })}
	</div>
  )
}