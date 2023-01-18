import { Advertisement } from './Advertisement';

export abstract class BaseDiscount {
	constructor(
		public discountId: string,
		public name: string,
		public adId: string,
	) {}

	abstract calculateDiscount(advertisements: Advertisement[]): number;
}

export class PriceDiscount extends BaseDiscount {
	constructor(
		discountId: string,
		name: string,
		adId: string,
		public discountedAmountInCents: number,
	) {
		super(discountId, name, adId);
	}

	calculateDiscount(advertisements: Advertisement[]): number {
		const relevantAds = advertisements.filter(
			(ad) => this.adId === ad.advertisementId,
		);
		const discountAmount = relevantAds
			.map(() => this.discountedAmountInCents)
			.reduce((acc, val) => acc + val, 0);
		return discountAmount;
	}
}

export class MultiBuyDiscount extends BaseDiscount {
	constructor(
		id: string,
		name: string,
		adId: string,
		public triggerBuyQuantity: number,
		public payQuantity: number,
	) {
		super(id, name, adId);
	}

	calculateDiscount(advertisements: Advertisement[]): number {
		const filteredAds = advertisements.filter(
			(ad) => this.adId === ad.advertisementId,
		);
		const numberOfAds = filteredAds.length;
		if (numberOfAds >= this.triggerBuyQuantity) {
			const { retailPriceInCents } = filteredAds[0];
			const discountedAdPrice = Math.round(
				(this.payQuantity * retailPriceInCents) / this.triggerBuyQuantity,
			);
			const adPriceDifference = retailPriceInCents - discountedAdPrice;
			const multiBuyDiscount = adPriceDifference * numberOfAds;
			return multiBuyDiscount;
		}
		return 0;
	}
}
