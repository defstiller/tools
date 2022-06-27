import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import PropTypes from "prop-types";

import handleQuantityChange from "../../logic/product/handleQuantityChange";

function AddToCart(props) {
	const {product, styles, loading} = props;
	const { addItem, inCart, getItem, updateItemQuantity } = useCart();
	const productInCart = getItem(product.id);
	return (
		<div className={styles.cartDiv} data-testid="addToCartDiv">{
			inCart(product.id) 
				? <menu>
					<div className={styles.changeAmountBtns} data-testid="changeAmountDiv">
						<button onClick={() => handleQuantityChange(false, productInCart, updateItemQuantity)}>-</button>
						<p data-testid="quantity">{productInCart.quantity}</p>
						<button onClick={() => handleQuantityChange(true, productInCart, updateItemQuantity)}>+</button>
					</div>
					<div className={styles.link}>
						<Link to="/tools/cart" type="button" className={styles.cartBtn} disabled={loading}>
							Go to cart
						</Link>
					</div>
				</menu>
				: 
				<menu className={styles.addToCartMenu} data-testid="addToCartMenu">
					<button onClick={() => addItem(product, 1)} disabled={loading} className={styles.cartBtn}>
						Add to cart
					</button>
				</menu>
		}</div>
	);
}
AddToCart.propTypes = {
	product: PropTypes.any,
	styles: PropTypes.any,
	loading: PropTypes.bool
};

export default AddToCart;