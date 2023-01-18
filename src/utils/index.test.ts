import { describe, it, expect } from 'vitest';
import {
	removeItemFromArray,
	getTotalAdsById,
	convertCentsToDollarString,
} from './index';

describe('utils', () => {
	it('remove an item from an array', () => {
		const array = ['frank', 'john', 'steve'];
		const newArray = removeItemFromArray(array, 1);
		expect(newArray).toEqual(['frank', 'steve']);
	});

	it('should get total ads by id', () => {
		const array = [{ id: '1' }, { id: '2' }, { id: '2' }, { id: '2' }];
		const total = getTotalAdsById(array, '2', 'id');
		expect(total).toEqual(3);
	});

	it('should get convert cents to a dollar string', () => {
		const dollarString = convertCentsToDollarString(5399);
		expect(dollarString).toEqual('$53.99');
	});
});
