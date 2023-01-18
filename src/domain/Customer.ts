import { BaseDiscount } from './Discount';

export type Customer = {
	customerId: string;
	name: string;
	discounts: BaseDiscount[];
};
