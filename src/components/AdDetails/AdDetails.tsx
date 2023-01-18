import { convertCentsToDollarString } from '../../utils';
import {
	container,
	heading,
	mainSection,
	price,
	textBody,
} from './adDetails.css';

export type AdDetailsProps = {
	name: string;
	description: string;
	retailPriceInCents: number;
};

export const AdDetails: React.FC<AdDetailsProps> = ({
	description,
	name,
	retailPriceInCents,
}) => (
	<div className={container}>
		<div className={mainSection}>
			<h2 className={heading}>{name}</h2>
			<div className={price}>
				{convertCentsToDollarString(retailPriceInCents)}
			</div>
		</div>
		<p className={textBody}>{description}</p>
	</div>
);
