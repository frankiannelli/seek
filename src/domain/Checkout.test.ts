import { Advertisement } from './Advertisement';
import { Checkout } from './Checkout';

const ads: Advertisement[] = [
	{
		advertisementId: '1',
		description: 'Ad1',
		name: 'Ad1',
		retailPriceInCents: 20000,
	},
	{
		advertisementId: '2',
		description: 'Ad2',
		name: 'Ad2',
		retailPriceInCents: 30000,
	},
	{
		advertisementId: '3',
		description: 'Ad3',
		name: 'Ad3',
		retailPriceInCents: 40000,
	},
];

describe('Checkout', () => {
	it('should add Advertisements to the checkout', () => {
		const checkout = new Checkout([]);
		ads.forEach((ad) => checkout.add(ad));
		expect(checkout.advertisements).toEqual([
			{
				advertisementId: '1',
				description: 'Ad1',
				name: 'Ad1',
				retailPriceInCents: 20000,
			},
			{
				advertisementId: '2',
				description: 'Ad2',
				name: 'Ad2',
				retailPriceInCents: 30000,
			},
			{
				advertisementId: '3',
				description: 'Ad3',
				name: 'Ad3',
				retailPriceInCents: 40000,
			},
		]);
	});

	it('should get a grand total of the checkout', () => {
		const checkout = new Checkout([]);
		ads.forEach((ad) => checkout.add(ad));
		expect(checkout.getGrandTotal()).toEqual(90000);
	});
});
