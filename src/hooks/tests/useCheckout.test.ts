import { act, renderHook } from '@testing-library/react';
import { useCheckout } from '../useCheckout';
import { describe, expect, it } from 'vitest';
import { customerList } from '../../data/customerList';
import { mockAxilCart, mockMyerCart, mockSecondBiteCart } from './mockData';

describe('useCheckout hook', () => {
	it('should select a customer', () => {
		const { result } = renderHook(() => useCheckout(customerList));
		act(() => {
			result.current.setSelectedCustomerId('1');
		});
		expect(result.current.selectedCustomerId).toBe('1');
	});

	it('should add an item to cart', () => {
		const { result } = renderHook(() => useCheckout(customerList));
		act(() => {
			result.current.addItemToCart({
				advertisementId: '1',
				description: 'An ad',
				name: 'standard ad',
				retailPriceInCents: 20000,
			});
		});
		expect(result.current.cart).toEqual([
			{
				advertisementId: '1',
				description: 'An ad',
				name: 'standard ad',
				retailPriceInCents: 20000,
			},
		]);
	});
	it('should remove an item from cart', () => {
		const { result } = renderHook(() => useCheckout(customerList));
		act(() => {
			result.current.addItemToCart({
				advertisementId: '1',
				description: 'an ad',
				name: 'standard ad',
				retailPriceInCents: 20000,
			});
		});
		act(() => {
			result.current.addItemToCart({
				advertisementId: '2',
				description: 'another ad',
				name: 'premium ad',
				retailPriceInCents: 300,
			});
		});
		act(() => {
			result.current.removeItemFromCart({
				advertisementId: '1',
				description: 'an ad',
				name: 'standard ad',
				retailPriceInCents: 200,
			});
		});
		expect(result.current.cart).toEqual([
			{
				advertisementId: '2',
				description: 'another ad',
				name: 'premium ad',
				retailPriceInCents: 300,
			},
		]);
	});
	it('should correctly total a cart for 2nd Bite', () => {
		const { result } = renderHook(() => useCheckout(customerList));
		act(() => {
			result.current.setSelectedCustomerId('1');
		});
		mockSecondBiteCart.forEach((item) => {
			act(() => {
				result.current.addItemToCart(item);
			});
		});
		//rounding is off
		expect(result.current.cartTotal).toEqual(53997);
	});
	it('should correctly total a cart for Axil', () => {
		const { result } = renderHook(() => useCheckout(customerList));
		act(() => {
			result.current.setSelectedCustomerId('2');
		});
		mockAxilCart.forEach((item) => {
			act(() => {
				result.current.addItemToCart(item);
			});
		});
		expect(result.current.cartTotal).toEqual(59998);
	});
	it('should correctly total a cart for Myer', () => {
		const { result } = renderHook(() => useCheckout(customerList));
		act(() => {
			result.current.setSelectedCustomerId('3');
		});
		mockMyerCart.forEach((item) => {
			act(() => {
				result.current.addItemToCart(item);
			});
		});
		// rounding is off
		expect(result.current.cartTotal).toEqual(166194);
	});
});
