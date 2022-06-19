import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import LandingPageLayout from "../pages/landingPage/LandingPageLayout";
import ShopPageLayout from "../pages/shopPage/shopPageLayout";
import AdminPageLayout from "../pages/adminPage/AdminPageLayout";
import ProductPageLayout from "../pages/productPage/ProductPageLayout";
import Cart from "../pages/cart/Cart";
import Auth from "../pages/authenticationPage/Auth";
import AccountPage from "../pages/accountPage/AccountPage";
import CheckoutPage from "../pages/checkoutPage/CheckoutPage";
import ContactPage from "../pages/contactPage/ContactPage";
import About from "../pages/aboutPage/About";

function AppRouter() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={
					<LandingPageLayout /> 
				} />	
				<Route exact path="tools/" element={
					<LandingPageLayout /> 
				} />
				<Route exact path="/tools" element={ //for gh pages
					<LandingPageLayout /> 
				} />

				<Route exact path="/tools/shop" element={
					<ShopPageLayout />
				} />

				<Route path="/tools/shop/:id" element={
					<ProductPageLayout />
				} />

				<Route exact path="/tools/admin" element={
					<AdminPageLayout />
				} />
				<Route exact path="/tools/cart" element={
					<Cart />
				} />
				<Route exact path="/tools/auth" element={
					<Auth />
				} />
				<Route exact path="/tools/account" element={
					<AccountPage />
				} />
				<Route exact path="/tools/checkout" element={
					<CheckoutPage />
				} />
				<Route exact path="/tools/contact" element={
					<ContactPage />
				} />
				<Route exact path="/tools/about" element={
					<About />
				} />
			</Routes>
		</Router>
	);
}

export default AppRouter;