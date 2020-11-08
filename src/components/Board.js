import React from 'react';
import { Tile } from './Tile';

export const Board = (props) => {

	const tilesContainerStyle = {
		display: 'flex',
  		flexWrap: 'wrap',
  		flexDirection: 'row-reverse',
  		maxWidth: '400px',
  		width: '100%'
	}

	return (
		<div style={tilesContainerStyle}>
			{props.tilesArr.map(tile => {
				return (
					<Tile 
						key={tile.tileNumber}
						tileNumber={tile.tileNumber}
						playerCurrentTile={props.playerCurrentTile}
						squareBoardWidth={props.squareBoardWidth}
						playerMineTileHistory={props.playerMineTileHistory}
					/>
				)
			})}
		</div>
	)
}