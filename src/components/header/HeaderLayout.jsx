import React, {useContext, useState, useEffect, useRef} from "react";
import {Link} from "react-router-dom";

import LogoSvg from "../../assets/svgsReactReady/logoSvg/LogoSvg";
import CartButtonSvg from "../../assets/svgsReactReady/cartButtonSvg/CartButtonSvg";
import AccountSvg from "../../assets/svgsReactReady/account/AccountSvg";
import NavBar from "./navBar/NavBar";
import DropDown from "./dropdown/DropDown";

import {ScreenResizeContext} from "../../context/context";

import styles from "./header.module.css";

function HeaderLayout() {
	const {width} = useContext(ScreenResizeContext);
	const [dropDown, setDropdown] = useState(false);
	const headerDiv = useRef();

	function handleDropdownClick() {
		if(dropDown) {
			setDropdown(false);
		} else {
			setDropdown(true);
			const eventType = window.matchMedia("(any-pointer:coarse)").matches && "touchend" || "mouseout"; // find out if the user is using a mouse or a touch device
			const div = headerDiv.current;

			document.addEventListener(eventType, function hideDropDown(event) { // hide the dropdown when the user clicks outside of it
				if(div && !div.contains(event.target)){
					setDropdown(false);
					return document.removeEventListener(eventType, hideDropDown);			
				}
				return;
			});
		}
	}
	
	return <div className={styles.headerDiv} ref={headerDiv}>
		<header className={styles.header}>
			<Link 
				to="/tools/" 
				aria-label="home" 
			>
				<LogoSvg alt="logo"/>
			</Link>
			{width > 575 && <NavBar styles={styles}/>}
			<Link 
				to="/tools/cart" 
				aria-label="cart" 
			>
				<CartButtonSvg alt="cart button"/>
			</Link>
			<AccountSvg 
				onClick={() => handleDropdownClick()}
				role="button" 
				aria-label="dropdown"
			/>
		</header>
		{dropDown && (
			<div 
				className={styles.dropDown}  
				data-testid="header-dropdown"
			>
				<DropDown width={width} styles={styles}/>
			</div>
		)}
	</div>;

}

export default HeaderLayout;