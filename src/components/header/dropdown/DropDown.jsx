import React, { useContext, useState } from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { signOut } from "firebase/auth";

import { AuthContext, ScreenResizeContext } from "../../../context/context";
import NavBar from "../navBar/NavBar";

import styles from "./dropDown.module.css";
import Modal from "../../modal/Modal";

function DropDown() {
	const {auth, isUser} = useContext(AuthContext);
	const {width} = useContext(ScreenResizeContext);
	const [response, setResponse] = useState(null);
	function handleSignOut() {
		signOut(auth).then(() => {
			auth.currentUser = null;
			setResponse("Signed out successfully");
		}).catch((error) => {
			setResponse(error.message);
		});
	}
	return (
		<>
			<Modal response={response} delay={3000} setResponse={setResponse} />
			{width < 575 && <NavBar styles={styles}/>}
			<div className={styles.dropDown}>
				<Link to="/tools/admin" name="admin">
					<button>Admin Page</button>
				</Link>
				{isUser 
					? <button onClick={() =>  handleSignOut()}
					>Sign Out</button>
					:
					<Link to="/tools/auth" name="sign in">
						<button>Sign in</button>
					</Link>
				}
			</div>
		</>
	);
}
DropDown.propTypes = {
	styles: PropTypes.any,
	dropDown: PropTypes.any,
	isUser: PropTypes.any
};

export default DropDown;