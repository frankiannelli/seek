import { convertCentsToDollarString } from '../../utils';
import { container, heading } from './checkoutTotal.css';

type CheckoutTotalProps = {
	total: number;
};

export const CheckoutTotal: React.FC<CheckoutTotalProps> = ({ total }) => (
	<div className={container}>
		<div>{convertCentsToDollarString(total)}</div>
		<h1 className={heading}>Cart Total</h1>
	</div>
);
