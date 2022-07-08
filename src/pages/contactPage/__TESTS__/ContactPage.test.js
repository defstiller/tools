import React from "react";
import {jest} from "@jest/globals";
import { render, screen } from "@testing-library/react";
const mockAddData = jest.fn(event => event.preventDefault());
import ContactPage from "../ContactPage";
import userEvent from "@testing-library/user-event";
import { ScreenResizeContext } from "../../../context/context";
import { MemoryRouter as Router } from "react-router-dom";
jest.mock("../../../logic/firebaseLogic/firebaseDB/useAddGetRemoveData.js", () => {
	return {
		__esModule: true,
		default: () =>  {
			return {
				addData:(db, input) => {
					mockAddData(db, input);
				}
			};
		}
	};
});
const width = {width: 500};
describe("Contact us contains correct fields", () => { 

	beforeEach(() => {  
		render(
			<Router>
				<ScreenResizeContext.Provider value={width}>
					<ContactPage/> 
				</ScreenResizeContext.Provider>
			</Router>
		);
	});
	test("heading is present", () => {
		const heading = screen.queryByRole("heading", {
			name: /would you like to contact us\?/i
		});
		expect(heading).toBeInTheDocument();
		expect(heading).toBeVisible();
	});
	test("Email is present", () => {
		const textbox = screen.queryByPlaceholderText("Email");
		expect(textbox).toBeInTheDocument(); 
		expect(textbox).toBeVisible();
	}); 
	test("Name is present", () => {
		const textbox = screen.queryByPlaceholderText("Name");
		expect(textbox).toBeInTheDocument(); 
		expect(textbox).toBeVisible();
	}); 
	test("Subject is present", () => {
		const textbox = screen.queryByPlaceholderText("Subject");
		expect(textbox).toBeInTheDocument(); 
		expect(textbox).toBeVisible();
	}); 
	test("Message is present", () => {
		const textbox = screen.queryByPlaceholderText("Message");
		expect(textbox).toBeInTheDocument(); 
		expect(textbox).toBeVisible(); 
	}); 
	test("Button is present", () => {
		const button = screen.queryByRole("button", {
			name: "Submit"
		});
		expect(button).toBeInTheDocument(); 
		expect(button).toBeVisible(); 
	});

}); 

describe("Contact fields accept input", () => { 

	beforeEach(() => {  
		render(
			<Router>
				<ScreenResizeContext.Provider value={width}>
					<ContactPage/> 
				</ScreenResizeContext.Provider>
			</Router>
		);
	});
	test("Email input is accepted", () => {
		const textbox = screen.getByPlaceholderText("Email");
		userEvent.click(textbox);
		userEvent.keyboard("test@email");
		const value = textbox.value;
		expect(value).toEqual("test@email");
	}); 
	test("Name input is accepted", () => {
		const textbox = screen.getByPlaceholderText("Name");
		userEvent.click(textbox);
		userEvent.keyboard("test name");
		const value = textbox.value;
		expect(value).toEqual("test name");
	}); 
	test("Subject input is accepted", () => {
		const textbox = screen.getByPlaceholderText("Subject");
		userEvent.click(textbox);
		userEvent.keyboard("test subject 123");
		const value = textbox.value;
		expect(value).toEqual("test subject 123");
	}); 
	test("Message input is accepted", () => {
		const textbox = screen.getByPlaceholderText("Message");
		userEvent.click(textbox);
		userEvent.keyboard("test message 123");
		const value = textbox.value;
		expect(value).toEqual("test message 123"); 
	}); 

}); 

describe("Contact message submit", () => { 
	let email;
	let name;
	let subject;
	let message;
	let button;
	beforeEach(() => {  
		render(
			<Router>
				<ScreenResizeContext.Provider value={width}>
					<ContactPage/> 
				</ScreenResizeContext.Provider>
			</Router>
		);
		email = screen.getByPlaceholderText("Email");
		name = screen.getByPlaceholderText("Name");
		subject = screen.getByPlaceholderText("Subject");
		message = screen.getByPlaceholderText("Message");
		button = screen.getByRole("button", {
			name: "Submit"
		});
	});
	test("Submit calls add data", () => {
		userEvent.click(email);
		userEvent.keyboard("test@gmail.com");
		userEvent.click(name);
		userEvent.keyboard("test name");
		userEvent.click(subject);
		userEvent.keyboard("test subject 123");
		userEvent.click(message);
		userEvent.keyboard("test message");
		userEvent.click(button);
		expect(mockAddData).toHaveBeenCalledTimes(1);    

	}); 
	test("Submit calls add data with correct input", () => {
		userEvent.click(email);
		userEvent.keyboard("test@gmail.com");
		userEvent.click(name);
		userEvent.keyboard("test name");
		userEvent.click(subject);
		userEvent.keyboard("test subject 123");
		userEvent.click(message);
		userEvent.keyboard("test message");
		userEvent.click(button);
		expect(mockAddData).toHaveBeenCalledWith(
			"messages", 
			{
				"email": "test@gmail.com", 
				"message": "test message", 
				"name": "test name", 
				"subject": "test subject 123"
			});    

	});

}); 