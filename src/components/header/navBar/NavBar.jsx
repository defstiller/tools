import React from "react";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";

function NavBar(props) {
	const {styles} = props;
	return(
		<nav>
			<ul className={styles.NavBar}>
				<li>
					<NavLink to="/tools/shop" aria-label="Page with our products" name="shopPage">
						Shop
					</NavLink>
				</li>

				<li>
					<NavLink to="/tools/about" aria-label="Read more about us">
						About
					</NavLink>
				</li>
				
				<li>
					<NavLink to="/tools/contact" aria-label="Need help? Contact us!">
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
NavBar.propTypes = {
	styles: PropTypes.any
};
export default NavBar;