import { Advertisement } from './Advertisement';
import { MultiBuyDiscount, PriceDiscount } from './Discount';

const ads: Advertisement[] = [
	{
		advertisementId: '1',
		description: 'Ad1',
		name: 'Ad1',
		retailPriceInCents: 20000,
	},
	{
		advertisementId: '1',
		description: 'Ad1',
		name: 'Ad1',
		retailPriceInCents: 20000,
	},
	{
		advertisementId: '1',
		description: 'Ad1',
		name: 'Ad1',
		retailPriceInCents: 20000,
	},
];

describe('Discount', () => {
	it('should calculate a PriceDiscount correctly', () => {
		const discount = new PriceDiscount(
			'2',
			'Stand out Ads where the price drops to $299.99 per ad',
			'1',
			10000,
		);
		expect(discount.calculateDiscount(ads)).toEqual(30000);
	});

	it('should calculate a MultiBuyDiscount correctly', () => {
		const discount = new MultiBuyDiscount('1', '3 for 2 deal', '1', 3, 2);
		expect(discount.calculateDiscount(ads)).toEqual(20001);
	});
});
