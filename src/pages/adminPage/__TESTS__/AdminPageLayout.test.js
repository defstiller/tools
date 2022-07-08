/* eslint-disable react/display-name */
import React from "react";
import {jest} from "@jest/globals";
import { render, screen, shallow, find } from "@testing-library/react";
import AdminPageLayout from "../AdminPageLayout.jsx";
import { ScreenResizeContext, AuthContext } from "../../../context/context";
import { MemoryRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
jest.mock("../adminProductList/AdminProductList", () => () => <h1 data-testid="productList">test products</h1>);
jest.mock("../adminReviewList/AdminReviews.jsx", () => () => <h1 data-testid="userReviews">admin reviews</h1>);
jest.mock("../addProduct/AddProduct", () => () => <h1 data-testid="addProduct">add product</h1>);
jest.mock("../getUserMessages/GetUserMessages", () => () => <h1 data-testid="userMessages">user messages</h1>);
describe("Admin page renders correct components", () => { 
	const width = 100;
	beforeEach(() => {
		render(
			<Router>
				<ScreenResizeContext.Provider value={width}>
					<AdminPageLayout />
				</ScreenResizeContext.Provider>  
			</Router>
		); 
	});
	test("Add product component renders on button click", async() => {
		let addProduct;
		addProduct = screen.queryByTestId("addProduct");
		expect(addProduct).not.toBeInTheDocument();  
		const button = screen.getByRole("button", {
			name: "Add Product"
		});
		userEvent.click(button);
		addProduct = screen.queryByTestId("addProduct"); 
		expect(addProduct).toBeInTheDocument();
	}); 
	test("Admin product list renders on button click", () => {
		let productList;
		productList = screen.queryByTestId("productList");
		expect(productList).not.toBeInTheDocument();
		const button = screen.getByRole("button", {
			name: "Product list"
		});
		userEvent.click(button);
		productList = screen.queryByTestId("productList");
		expect(productList).toBeVisible();
	});
	test("User messages renders on button click", () => {
		let userMessages;
		userMessages = screen.queryByTestId("userMessages");
		expect(userMessages).not.toBeInTheDocument();
		const button = screen.getByRole("button", {
			name: "User messages"
		});
		userEvent.click(button);
		userMessages = screen.queryByTestId("userMessages");
		expect(userMessages).toBeVisible();
	});
	test("Reviews renders on button click", () => {
		let reviews;
		reviews = screen.queryByTestId("userReviews");
		expect(reviews).not.toBeInTheDocument();
		const button = screen.getByRole("button", {
			name: "Reviews"
		});
		userEvent.click(button);
		reviews = screen.queryByTestId("userReviews");
		expect(reviews).toBeVisible();
	});

}); 

describe("Admin page renders only one component at a time", () => { 
	const width = 100;
	let addProduct;
	let productList;
	let userMessages;
	let reviews;
	beforeEach(() => {
		render(
			<Router>
				<ScreenResizeContext.Provider value={width}>
					<AdminPageLayout />
				</ScreenResizeContext.Provider>
			</Router>
		);

	});
	test("Add product button renders only add product", () => { 
		const button = screen.getByRole("button", {
			name: "Add Product"
		});
		userEvent.click(button);
		productList = screen.queryByTestId("productList");
		userMessages = screen.queryByTestId("userMessages");
		reviews = screen.queryByTestId("userReviews");	
		expect(productList).not.toBeInTheDocument();
		expect(userMessages).not.toBeInTheDocument();
		expect(reviews).not.toBeInTheDocument(); 
	}); 
	test("Admin product list button renders only admin product", () => {
		const button = screen.getByRole("button", {
			name: "Product list"
		});
		userEvent.click(button);
		addProduct = screen.queryByTestId("addProduct");
		userMessages = screen.queryByTestId("userMessages");
		reviews = screen.queryByTestId("userReviews");	
		expect(addProduct).not.toBeInTheDocument();
		expect(userMessages).not.toBeInTheDocument();
		expect(reviews).not.toBeInTheDocument(); 
	});
	test("User messages button renders only user messages", () => {
		const button = screen.getByRole("button", {
			name: "User messages"
		});
		userEvent.click(button);
		addProduct = screen.queryByTestId("addProduct");
		productList = screen.queryByTestId("productList");
		reviews = screen.queryByTestId("userReviews");	
		expect(addProduct).not.toBeInTheDocument();
		expect(productList).not.toBeInTheDocument();
		expect(reviews).not.toBeInTheDocument();  
	});
	test("Reviews button renders only reviews", () => {
		const button = screen.getByRole("button", {
			name: "Reviews"
		});
		userEvent.click(button);
		addProduct = screen.queryByTestId("addProduct");
		productList = screen.queryByTestId("productList");
		expect(userMessages).not.toBeInTheDocument();
		expect(productList).not.toBeInTheDocument();
		expect(addProduct).not.toBeInTheDocument();
	});

}); 

