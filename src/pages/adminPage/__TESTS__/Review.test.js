import React from "react";
import {jest} from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Review from "../adminReviewList/review/Review";
import userEvent from "@testing-library/user-event";
describe("Review contains correct fields", () => { 
	const review = {
		leftByEmail: "test@gmail.com",
		comment: "test comment",
		dateReviewLeft: "10/10/10",
		rating: 5,
		docId: "test"
	};
	const removeData = jest.fn();
	const loading = false;

	beforeEach(() => {  
		render(
			<Review review={review} removeData={removeData} loading={loading}/> 
		);
	});
	test("Email field is present", () => {
		const field = screen.queryByTestId("email");
		expect(field).toBeInTheDocument();
		expect(field).toBeVisible();
	}); 
	test("Comment field is present", () => {
		const field = screen.queryByTestId("comment");
		expect(field).toBeInTheDocument();
		expect(field).toBeVisible();
	}); 
	test("Date field is present", () => {
		const field = screen.queryByTestId("date");
		expect(field).toBeInTheDocument();
		expect(field).toBeVisible();
	}); 
	test("Rating field is present", () => {
		const field = screen.queryByTestId("rating");
		expect(field).toBeInTheDocument();
		expect(field).toBeVisible();
	}); 
	test("DocID field is present", () => {
		const field = screen.queryByTestId("doc id");
		expect(field).toBeInTheDocument();
		expect(field).toBeVisible();
	}); 
	test("Remove button is present", () => {
		const button = screen.queryByRole("button", {
			name: /Remove review from data base/i
		});
		expect(button).toBeInTheDocument();
		expect(button).toBeVisible();
	}); 

}); 

describe("Review contains correct data", () => { 
	const review = {
		leftByEmail: "test@gmail.com",
		comment: "test comment",
		dateReviewLeft: "10/10/10",
		rating: 5,
		docId: "test"
	};
	const removeData = jest.fn();
	const loading = false;

	beforeEach(() => {  
		render(
			<Review review={review} removeData={removeData} loading={loading}/> 
		);
	});
	test("Email field data is correct", () => {
		const field = screen.getByTestId("email");
		expect(field.textContent).toEqual("Email: test@gmail.com");
	}); 
	test("Comment field data is correct", () => {
		const field = screen.getByTestId("comment");
		expect(field.textContent).toEqual("Comment: test comment");
	}); 
	test("Date field data is correct", () => {
		const field = screen.getByTestId("date");
		expect(field.textContent).toEqual("Date: 10/10/10");
	}); 
	test("Rating field data is correct", () => {
		const field = screen.getByTestId("rating");
		expect(field.textContent).toEqual("Rating: 5"); 
	}); 
	test("DocID field data is correct", () => {
		const field = screen.getByTestId("doc id");
		expect(field.textContent).toEqual("DocID: test");
	}); 
}); 
describe("Review contains correct data if some data is missing", () => { 
	const review = {
		leftByEmail: null,
		comment: null,
		dateReviewLeft: null,
		rating: null,
		docId: "test"
	};
	const removeData = jest.fn();
	const loading = false;

	beforeEach(() => {  
		render(
			<Review review={review} removeData={removeData} loading={loading}/> 
		);
	});
	test("Email field data is correct", () => {
		const field = screen.getByTestId("email");
		expect(field.textContent).toEqual("Email: unknown");
	}); 
	test("Comment field data is correct", () => {
		const field = screen.getByTestId("comment");
		expect(field.textContent).toEqual("Comment: no comment");
	}); 
	test("Date field data is correct", () => {
		const field = screen.getByTestId("date");
		expect(field.textContent).toEqual("Date: unknown");
	}); 
	test("Rating field data is correct", () => {
		const field = screen.getByTestId("rating");
		expect(field.textContent).toEqual("Rating: no rating"); 
	}); 
}); 
describe("Remove data", () => { 
	const review = {
		leftByEmail: "test@gmail.com",
		comment: "test comment",
		dateReviewLeft: "10/10/10",
		rating: 5,
		docId: "test"
	};
	const removeData = jest.fn();
	const loading = false;

	beforeEach(() => {  
		render(
			<Review review={review} removeData={removeData} loading={loading}/> 
		);
	});
	test("Button calls removeData", () => {
		const button = screen.getByRole("button", {
			name: /Remove review from data base/i
		});
		userEvent.click(button);
		expect(removeData).toHaveBeenCalledTimes(1);
	}); 
	test("Button passes correct data", () => {
		const button = screen.getByRole("button", {
			name: /Remove review from data base/i
		});
		userEvent.click(button);
		expect(removeData).toHaveBeenCalledWith("reviews", review.docId);
	}); 
}); 
