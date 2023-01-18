export function removeItemFromArray<T>(arr: T[], index: number) {
	return arr.slice(0, index).concat(arr.slice(index + 1, arr.length));
}

export function getTotalAdsById<T>(arr: T[], id: string, propName: keyof T) {
	return arr.filter((item) => item[propName] === id).length;
}

export function convertCentsToDollarString(cents: number): string {
	return '$' + (cents / 100).toFixed(2);
}
