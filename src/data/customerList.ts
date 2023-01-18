import { MultiBuyDiscount, PriceDiscount } from '../domain/Discount';
import { Customer } from '../domain/Customer';

export const customerList: Customer[] = [
	{
		customerId: '0',
		name: 'Default',
		discounts: [],
	},
	{
		customerId: '1',
		name: 'SecondBite',
		discounts: [
			new MultiBuyDiscount('1', '3 for 2 deal on Classic Ads', '1', 3, 2),
		],
	},
	{
		customerId: '2',
		name: 'Axil Coffee Roasters',
		discounts: [
			new PriceDiscount(
				'2',
				'Stand out Ads where the price drops to $299.99 per ad',
				'2',
				2300,
			),
		],
	},
	{
		customerId: '3',
		name: 'Myer',
		discounts: [
			new MultiBuyDiscount('3', '5 for 4 deal on Stand out Ads', '2', 5, 4),
			new PriceDiscount(
				'4',
				'Premium Ads where the price drops to $389.99',
				'2',
				500,
			),
		],
	},
];
