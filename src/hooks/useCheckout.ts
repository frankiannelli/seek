import React from 'react';
import { Customer } from "../domain/Customer";
import { Advertisement } from '../domain/Advertisement';
import { Checkout } from '../domain/Checkout';
import { removeItemFromArray } from '../utils';

export const useCheckout = (customerList: Customer[]) => {
	const [cart, setCart] = React.useState<Advertisement[]>([]);
	const [selectedCustomerId, setSelectedCustomerId] =
		React.useState<string>('0');
	const [cartTotal, setCartTotal] = React.useState(0);

	React.useEffect(() => {
		const customer = customerList.find(
			(customer) => customer.customerId === selectedCustomerId,
		);
		if (customer) {
			const checkout = new Checkout(customer.discounts);
			const ads = cart.map(
				({ advertisementId, name, description, retailPriceInCents }) => ({
					advertisementId,
					name,
					description,
					retailPriceInCents,
				}),
			);
			ads.forEach((ad) => checkout.add(ad));
			setCartTotal(checkout.getGrandTotal());
		}
	}, [cart]);

	React.useEffect(() => {
		setCart([]);
	}, [selectedCustomerId]);

	const addItemToCart = (advertisement: Advertisement) =>
		setCart((prevArray) => [...prevArray, advertisement]);

	const removeItemFromCart = (advertisement: Advertisement) => {
		const cartAdIdIndex = cart.findIndex(
			(ad) => ad.advertisementId === advertisement.advertisementId,
		);
		if (cartAdIdIndex > -1) {
			const updatedCart = removeItemFromArray(cart, cartAdIdIndex);
			return setCart(updatedCart);
		}
	};

	return {
		cart,
		cartTotal,
		selectedCustomerId,
		setSelectedCustomerId,
		addItemToCart,
		removeItemFromCart,
	};
};
