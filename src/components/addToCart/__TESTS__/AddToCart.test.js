import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import AddToCart from "../AddToCart";
import userEvent from "@testing-library/user-event";
import { MemoryRouter as Router } from "react-router-dom";
import { CartProvider } from "react-use-cart";

const product = {
	name: "test name",
	imgUrl: "test image",
	price: 555,
	shipping: 1000,
	id: 444
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
describe("Change quantity", () => { 
	let addToCart;
	let decrease;
	let increase;
	let quantity;

	beforeEach(() => {
		render(
			<Router>
				<CartProvider>
					<AddToCart product={product} styles={styles}/>
				</CartProvider> 
			</Router>
		);
		addToCart = screen.queryByRole("button", {
			name: /Add to cart/i
		});

	});
	afterEach(() => {
		cleanup();
	});
	test("Decrease button removes item and returns back add to cart button", () => {
		userEvent.click(addToCart);
		decrease = screen.getByRole("button", { 
			name: /-/i  
		}); 
		userEvent.click(decrease);
		addToCart = screen.queryByRole("button", {
			name: /Add to cart/i
		});
		expect(addToCart).toBeInTheDocument();
	}); 
	test("Increase button adds item quantity", () => {
		userEvent.click(addToCart);
		increase = screen.getByRole("button", { 
			name: /\+/i
		}); 
		quantity = screen.getByTestId("quantity");
		expect(quantity).toHaveTextContent(1);
		userEvent.click(increase);
		expect(quantity).toHaveTextContent(2);
	});
	test("Decrease reduces item quantity back from 2", () => {
		decrease = screen.getByRole("button", { 
			name: /-/i 
		}); 
		expect(quantity).toHaveTextContent(2);
		userEvent.click(decrease);
		userEvent.click(decrease);
		expect(quantity).not.toBeInTheDocument();  
	}); 

	
});