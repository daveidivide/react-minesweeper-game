import { generateTilesArray } from './utils';

describe('generateTilesArray function', () => {
	it('should return an array of tile objects', () => {
		expect(generateTilesArray(64, 0.3)).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					tileNumber: expect.any(Number),
					mineInTile: expect.any(Boolean)
				})
			])
		)
	});
});

