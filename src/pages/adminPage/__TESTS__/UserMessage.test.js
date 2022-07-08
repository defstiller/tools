import React from "react";
import {jest} from "@jest/globals";
import { render, screen } from "@testing-library/react";
import UserMessage from "../getUserMessages/userMessage/UserMessage";
import userEvent from "@testing-library/user-event";
describe("Review contains correct fields", () => { 
	const userMessage = {
		email: "test@gmail.com",
		name: "test name",
		subject: "test subject",
		message: "test message"
	};
	const removeData = jest.fn();
	const loading = false;

	beforeEach(() => {  
		render(
			<UserMessage userMessage={userMessage} removeData={removeData} loading={loading}/> 
		);
	});
	test("Email field is present", () => {
		const field = screen.queryByTestId("email");
		expect(field).toBeInTheDocument();
		expect(field).toBeVisible();
	}); 
	test("Name field is present", () => {
		const field = screen.queryByTestId("name");
		expect(field).toBeInTheDocument();
		expect(field).toBeVisible();
	}); 
	test("Subject field is present", () => {
		const field = screen.queryByTestId("subject");
		expect(field).toBeInTheDocument();
		expect(field).toBeVisible();
	}); 
	test("Message field is present", () => {
		const field = screen.queryByTestId("message");
		expect(field).toBeInTheDocument();
		expect(field).toBeVisible();
	}); 
	test("Remove button is present", () => {
		const button = screen.queryByRole("button", {
			name: /Remove message from data base/i
		});
		expect(button).toBeInTheDocument();
		expect(button).toBeVisible();
	}); 

}); 

describe("Review contains correct data", () => { 
	const userMessage = {
		email: "test@gmail.com",
		name: "test name",
		subject: "test subject",
		message: "test message"
	};
	const removeData = jest.fn();
	const loading = false;

	beforeEach(() => {  
		render(
			<UserMessage userMessage={userMessage} removeData={removeData} loading={loading}/> 
		);
	});
	test("Email field data is correct", () => {
		const field = screen.getByTestId("email");
		expect(field.textContent).toEqual("Email: test@gmail.com");
	}); 
	test("Name field data is correct", () => {
		const field = screen.getByTestId("name");
		expect(field.textContent).toEqual("Name: test name");
	}); 
	test("Subject field data is correct", () => {
		const field = screen.getByTestId("subject");
		expect(field.textContent).toEqual("Subject: test subject");
	}); 
	test("Message field data is correct", () => {
		const field = screen.getByTestId("message");
		expect(field.textContent).toEqual("Message: test message"); 
	}); 
}); 
describe("Review contains correct data if some data is missing", () => { 
	const userMessage = {
		email: null,
		name: null,
		subject: null,
		message: null
	};
	const removeData = jest.fn();
	const loading = false;

	beforeEach(() => {  
		render(
			<UserMessage userMessage={userMessage} removeData={removeData} loading={loading}/> 
		);
	});
	test("Email field data is correct", () => {
		const field = screen.getByTestId("email");
		expect(field.textContent).toEqual("Email: email is missing, check form validation");
	}); 
	test("Comment field data is correct", () => {
		const field = screen.getByTestId("name");
		expect(field.textContent).toEqual("Name: name is missing, check form validation");
	}); 
	test("Date field data is correct", () => {
		const field = screen.getByTestId("subject");
		expect(field.textContent).toEqual("Subject: subject is missing, check form validation");
	}); 
	test("Rating field data is correct", () => {
		const field = screen.getByTestId("message");
		expect(field.textContent).toEqual("Message: message is missing, check form validation"); 
	}); 
}); 
describe("Remove data", () => { 
	const userMessage = {
		email: null,
		name: null,
		subject: null,
		message: null,
		docId: 55
	};
	const removeData = jest.fn();
	const loading = false;

	beforeEach(() => {  
		render(
			<UserMessage userMessage={userMessage} removeData={removeData} loading={loading}/> 
		);
	});
	test("Button calls removeData", () => {
		const button = screen.getByRole("button", {
			name: /Remove message from data base/i
		});
		userEvent.click(button);
		expect(removeData).toHaveBeenCalledTimes(1);
	}); 
	test("Button passes correct data", () => {
		const button = screen.getByRole("button", {
			name: /Remove message from data base/i
		});
		userEvent.click(button);
		expect(removeData).toHaveBeenCalledWith("messages", userMessage.docId);
	}); 
}); 
