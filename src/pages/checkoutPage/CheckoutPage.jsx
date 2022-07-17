import React, {useState, useEffect, useContext} from "react";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";

import {AuthContext} from "../../context/context";

import PayPal from "../../components/paypal/PayPal";

import styles from "./checkoutPage.module.css";

function CheckoutPage() {
	const {isUser} = useContext(AuthContext);
	const { items } = useCart();
	const [subtotal, setSubTotal] = useState(0);
	const navigate = useNavigate();

	const initialOptions = {
		"client-id": "Afp8TCWSmhfuz4HD-Ba4V6Qr3Sizb6yYr6gahuKwRr3SBJAhFc2NGe8Or_J0No4xit4ncVL0xY9zj-DS",
		currency: "USD",
		intent: "capture",
		"data-client-token": "abc123xyz==",
	};
	useEffect(() => {
		let total = 0;
		items.map( item => {
			const priceToNumber = parseInt(item.price);
			const totalWithQuantity = priceToNumber * item.quantity;
			total = total + totalWithQuantity;
		});
		setSubTotal(total);
	},[items]);
	return <main className={styles.mainDiv}>
		<h1>Checkout</h1>
		<button onClick={() => navigate("/tools/shop")}>Back to Shop page</button>
		<button onClick={() => navigate("/tools/cart")}>Back to Cart</button>

		<ul className={styles.list}>
			{items.map( product => (
				<li key={product.id}>
					<p>{product.name} x{product.quantity}</p>
					<p>Price: ${product.price}</p>
					<p>Shipping: ${product.shipping}</p>
				</li>
			))}
		</ul>
		<h3>For buyer account use <br/> email: asaturov0-buyer@gmail.com <br/> password: buyertest</h3>
		<PayPal subtotal={subtotal} description="Order from ToolsPros" styles={styles}/>
	</main>;
}

export default CheckoutPage;