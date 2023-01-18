import { Advertisement } from '../../domain/Advertisement';
import { getTotalAdsById } from '../../utils';
import { container, button, adTotal } from './cartControls.css';

type CartControlsProps = {
	cart: Advertisement[];
	advertisement: Advertisement;
	addItemToCart: (advertisement: Advertisement) => void;
	removeItemFromCart: (advertisement: Advertisement) => void;
};

export const CartControls: React.FC<CartControlsProps> = ({
	advertisement,
	addItemToCart,
	removeItemFromCart,
	cart,
}) => (
	<div className={container}>
		<button
			className={button}
			onClick={() => removeItemFromCart(advertisement)}
		>
			Remove
		</button>
		<div className={adTotal}>
			{getTotalAdsById(cart, advertisement.advertisementId, 'advertisementId')}
		</div>
		<button className={button} onClick={() => addItemToCart(advertisement)}>
			Add
		</button>
	</div>
);
