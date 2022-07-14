import React, {useState, useRef, useEffect} from "react";
import PropTypes from "prop-types";
import { useCart } from "react-use-cart";
import Modal from "../../components/modal/Modal";
import { useNavigate } from "react-router-dom";
function PayPal(props) {
	const {subtotal, description, styles} = props;
	const [paid, setPaid] = useState(false);
	const [error, setError] = useState(null);
	const payPalRef = useRef();
	const { emptyCart } = useCart();
	const navigate = useNavigate();
	useEffect(() => {
		if(subtotal && description) {
			window.paypal
				.Buttons({
					createOrder: (data, actions) => {
						return actions.order.create({
							intent: "CAPTURE",
							purchase_units: [
								{
									description: description,
									amount: {
										currency_code: "USD",
										value: subtotal,
									},
								},
							],
						});
					},
					onApprove: async (data, actions) => {
						const order = await actions.order.capture();
						setPaid(order);
					},
					onError: (err) => {
						setError(err);
					},
				})
				.render(payPalRef.current);
		}
	}, [subtotal, description]);

	if (paid) {
		emptyCart();
		const timer = setTimeout(() => {
			navigate("/tools/shop");
		}, 4000);
		() => clearTimeout(timer);
		return <Modal 
			response={"Payment Successful, redirecting to shop page"}
			delay={4000}/>;
	}
	
	// If any error occurs
	if (error) {
		return <Modal 
			response={error.message}
			delay={6000}/>;
	}
	
	// Default Render
	return <>
		<div className={styles.totalDiv}>
			<section>
				<h4>Total Amount in USD. : {subtotal}</h4>
				<div ref={payPalRef} />
			</section>
		</div>
	</>;
}
PayPal.propTypes = {
	subtotal: PropTypes.any,
	description: PropTypes.any,
	styles: PropTypes.any
};

export default PayPal;