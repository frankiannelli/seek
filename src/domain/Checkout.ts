import { Advertisement } from './Advertisement';
import { BaseDiscount } from './Discount';

export class Checkout {
	constructor(
		public discounts: BaseDiscount[],
		public advertisements: Advertisement[] = [],
	) {}

	private getAdTotal(): number {
		return this.advertisements.reduce(
			(acc, val) => acc + val.retailPriceInCents,
			0,
		);
	}

	private getDiscountItems() {
		return this.discounts.map((discount) =>
			discount.calculateDiscount(this.advertisements),
		);
	}

	private getDiscountItemsTotal() {
		const discountItems = this.getDiscountItems();
		return discountItems.reduce((acc, val) => acc + val, 0);
	}

	add(advertisement: Advertisement) {
		this.advertisements.push(advertisement);
	}

	getGrandTotal() {
		const totalDiscounts = this.getDiscountItemsTotal();
		const totalAds = this.getAdTotal();
		return totalAds - totalDiscounts;
	}
}
