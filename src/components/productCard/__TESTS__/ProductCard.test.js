import React from "react";
import { render, screen } from "@testing-library/react";
import ProductCard from "../productCardSmall/ProductCard";
import { CartProvider } from "react-use-cart";

describe("Card renders correct info", () => { 
	let product = {
		name: "test name", 
		imgUrl: "test image",
		price: 555,
		shipping: 1000,
	};
	let loading;
	let styles = {};
	let productName;
	let productPrice;
	let productShipping;
	const handleProductClick = jest.fn();

	beforeEach(() => { 
		render(
			<CartProvider>
				<ProductCard 
					handleProductClick={handleProductClick}
					product={product} 
					styles={styles} 
					loading={loading}
				/>
			</CartProvider> 

		);
		productName = screen.getByLabelText("name");
		productPrice = screen.getByLabelText("price");
		productShipping = screen.getByLabelText("shipping"); 
	});
	test("Card name is present and contains correct info", () => {
		expect(productName).toBeVisible();
		expect(productName).toHaveTextContent(product.name);
	}); 
	test("Card price is present and contains correct info", () => {
		expect(productPrice).toBeVisible();
		expect(productPrice).toHaveTextContent("Price: $"+product.price);
	}); 

	test("Card shipping is present and contains correct info", () => {
		expect(productShipping).toBeVisible();
		expect(productShipping).toHaveTextContent("Shipping: $"+product.shipping);
	}); 
	test("Image is present", () => {
		const image = screen.getByRole("img");
		expect(image).toBeVisible();
	});
	test("Image has correct alt", () => { 
		const image = screen.getByRole("img");
		expect(image).toHaveAttribute("alt", "test name");
	});
	test("Image has correct src", () => {
		const image = screen.getByRole("img");
		expect(image).toHaveAttribute("src", "test image");
	});

}); 
