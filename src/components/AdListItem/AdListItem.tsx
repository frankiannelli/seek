import { Advertisement } from '../../domain/Advertisement';
import { AdDetails } from '../AdDetails';
import { CartControls } from '../CartControls';
import { container } from './adListItem.css';

export type AdListItemProps = {
	advertisement: Advertisement;
	cart: Advertisement[];
	addItemToCart: (advertisement: Advertisement) => void;
	removeItemFromCart: (advertisement: Advertisement) => void;
};

export const AdListItem: React.FC<AdListItemProps> = ({
	advertisement,
	addItemToCart,
	removeItemFromCart,
	cart,
}) => {
	const { description, name, retailPriceInCents } = advertisement;
	return (
		<div className={container}>
			<AdDetails
				description={description}
				name={name}
				retailPriceInCents={retailPriceInCents}
			/>
			<CartControls
				advertisement={advertisement}
				cart={cart}
				addItemToCart={addItemToCart}
				removeItemFromCart={removeItemFromCart}
			/>
		</div>
	);
};
