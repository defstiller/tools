import React from "react";
import { render, screen } from "@testing-library/react";
import AddToCart from "../AddToCart";
import userEvent from "@testing-library/user-event";
import { MemoryRouter as Router } from "react-router-dom";
import { CartProvider } from "react-use-cart";

const product = {
	name: "test name",
	imgUrl: "test image",
	price: 555,
	shipping: 1000,
	id: 55
}; 
const styles = [];

describe("Add to cart returns correct elements, product is not in cart", () => { 
	let addToCartDiv;
	let addToCartMenu;
	beforeEach(() => {
		render(
			<Router>
				<CartProvider>
					<AddToCart product={product} styles={styles}/>
				</CartProvider> 
			</Router>
		);
		addToCartDiv = screen.getByTestId("addToCartDiv");
		addToCartMenu = screen.getByTestId("addToCartMenu");
	});
	test("Add to cart div is present", () => {
		expect(addToCartDiv).toBeInTheDocument();
	}); 
	test("Add to cart menu is present", () => {
		expect(addToCartMenu).toBeInTheDocument();
	});
	test("Add to cart button is present", () => { 
		const button = screen.getByRole("button", {
			name: /Add to cart/i
		});
		expect(button).toBeInTheDocument();  
	});
	
}); 

describe("Add to cart returns correct elements, product is added to cart", () => { 
	beforeEach(() => {
		render(
			<Router>
				<CartProvider>
					<AddToCart product={product} styles={styles}/>
				</CartProvider> 
			</Router>
		);
		const button = screen.getByRole("button", {
			name: /Add to cart/i
		});
		userEvent.click(button);

	});
	afterEach(() => {
		const button = screen.getByRole("button", {
			name: /-/i 
		});
		userEvent.click(button);
	});
	test("Decrease button is present", () => {
		const button = screen.getByRole("button", {
			name: /-/i 
		});
		expect(button).toBeInTheDocument();
		expect(button).toBeVisible();  
	}); 
	test("Increase button is present", () => {
		const button = screen.getByRole("button", {
			name: /\+/i
		});
		expect(button).toBeInTheDocument();
		expect(button).toBeVisible();  
	});
	test("Go to cart button is present", () => { 
		const button = screen.getByRole("button", {
			name: /Go to cart/i
		});
		expect(button).toBeInTheDocument();  
		expect(button).toBeVisible();  
	});
	test("Go to cart button has correct attributes", () => { 
		const link = screen.getByRole("link");
		expect(link).toHaveAttribute("href", "/tools/cart"); 
	});

	
}); 