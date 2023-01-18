import './App.css';
import { AdListItem } from './components/AdListItem';
import { Logo } from './components/Logo';
import { container } from './styles.css';
import { adList } from './data/adList';
import { customerList } from './data/customerList';
import { CheckoutTotal } from './components/CheckoutTotal';
import { useCheckout } from './hooks/useCheckout';

function App() {
	const {
		cart,
		cartTotal,
		selectedCustomerId,
		setSelectedCustomerId,
		addItemToCart,
		removeItemFromCart,
	} = useCheckout(customerList);

	return (
		<div className={container}>
			<header>
				<Logo />
			</header>
			<main>
				<CheckoutTotal total={cartTotal} />
				<select onChange={(event) => setSelectedCustomerId(event.target.value)}>
					{customerList.map((customer) => (
						<option key={customer.customerId} value={customer.customerId}>
							{customer.name}
						</option>
					))}
				</select>
				{selectedCustomerId &&
					adList.map((advertisement) => (
						<AdListItem
							key={advertisement.advertisementId}
							advertisement={advertisement}
							addItemToCart={addItemToCart}
							removeItemFromCart={removeItemFromCart}
							cart={cart}
						/>
					))}
			</main>
		</div>
	);
}

export default App;
