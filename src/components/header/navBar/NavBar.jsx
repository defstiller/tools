import React from "react";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";

import classes from "./navBar.module.css";

function NavBar(props) {
	const {styles} = props;
	return(
		<nav>
			<ul className={styles.NavBar}>
				<li>
					<NavLink to="/tools/shop">
						Shop
					</NavLink>
				</li>

				<li>
					<NavLink to="/tools/about">
						About
					</NavLink>
				</li>
				
				<li>
					<NavLink to="/tools/contact">
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