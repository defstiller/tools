import React from "react";
import {jest} from "@jest/globals";
import { render, screen } from "@testing-library/react";
import ProductInfo from "../productInfo/ProductInfo";
import { MemoryRouter as Router, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../../context/context";
import { CartProvider } from "react-use-cart";

var mockReactDom = () => jest.requireActual("react-router-dom");

jest.mock("../../../logic/firebaseLogic/firebaseDB/useAddGetRemoveData");
jest.mock("react-router-dom", () => ({
	...mockReactDom,
	useParams: () => ({
		id: "123" 
	}),
}));

const setAverageRating = jest.fn();
describe("Product displays correct info, reviews and item are passed", () => {
	let auth = {
		currentUser: {
			uid: 2,
			email: "testEmail@gmail.com" 
		} 
	};
	beforeEach(() => { 

		
		render( 
			<CartProvider> 
				<AuthContext.Provider value={{auth}}>
					<ProductInfo setAverageRating={setAverageRating}/>
				</AuthContext.Provider> 
			</CartProvider> 

		);
	} 

	);
	test("Product is displayed when item is found", () => {
		const product = screen.queryByTestId("productMain");  
		expect(product).toBeInTheDocument();  
	}); 
	test("Product image is displayed", () => {
		const productImage = screen.queryByTestId("productImage");  
		expect(productImage).toBeInTheDocument();  
	});
	test("Product name is displayed", () => {
		const productName = screen.queryByTestId("productName");  
		expect(productName).toBeInTheDocument();  
	});
	test("Product price is displayed", () => {
		const productPrice = screen.queryByTestId("price");
		expect(productPrice).toBeInTheDocument();
	}
	);
	test("Product description is displayed", () => {
		const productDescription = screen.queryByTestId("description");
		expect(productDescription).toBeInTheDocument();
	}
	);
	test("Add to cart button is displayed", () => {
		const addToCartButton = screen.queryByRole("button", {
			name: /Add to cart/i
		});
		expect(addToCartButton).toBeInTheDocument();
	}
	);	


}); 

describe("Product displays correct info, reviews and item are passed", () => {
	let auth = {
		currentUser: {
			uid: 2,
			email: "testEmail@gmail.com" 
		} 
	};
	beforeEach(() => { 

		
		render( 
			<CartProvider> 
				<AuthContext.Provider value={{auth}}>
					<ProductInfo setAverageRating={setAverageRating}/>
				</AuthContext.Provider> 
			</CartProvider> 

		);
	} 

	);
	test("Product is displayed when item is found", () => {
		const product = screen.queryByTestId("productMain");  
		expect(product).toBeInTheDocument();  
	}); 
	test("Product image is displayed", () => {
		const productImage = screen.queryByTestId("productImage");  
		expect(productImage).toBeInTheDocument();  
	});
	test("Product name is displayed", () => {
		const productName = screen.queryByTestId("productName");  
		expect(productName).toBeInTheDocument();  
	});
	test("Product price is displayed", () => {
		const productPrice = screen.queryByTestId("price");
		expect(productPrice).toBeInTheDocument();
	}
	);
	test("Product description is displayed", () => {
		const productDescription = screen.queryByTestId("description");
		expect(productDescription).toBeInTheDocument();
	}
	);
	test("Add to cart button is displayed", () => {
		const addToCartButton = screen.queryByRole("button", {
			name: /Add to cart/i
		});
		expect(addToCartButton).toBeInTheDocument();
	}
	);	


}); 