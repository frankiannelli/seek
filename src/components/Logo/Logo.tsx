import { container } from './logo.css';
import seekLogo from '../../assets/seek.svg';

export const Logo: React.FC = () => (
	<div className={container}>
		<img src={seekLogo} alt="Seek logo" />
	</div>
);
