export const generateTilesArray = (totalTiles, chanceOfMineInTile) => {

  // Create an array of objects containing the data for each tile
  let tiles = [];

  for (let i = 1; i <= totalTiles; i++) {

    tiles.push({
	  tileNumber: i,
	  // Add a landmine if Math.random() is less than or equal to our chanceOfMineInTile constant (also excludes a landmine on the starting tile)
	  mineInTile: Math.random() <= chanceOfMineInTile && i !== totalTiles
    });

  }

  return tiles;

};
