/* eslint-disable react/display-name */
import React from "react";
import {jest} from "@jest/globals";
import { render, screen, shallow, find } from "@testing-library/react";
import firebase from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const mockgetAuth = jest.fn();
const mockonAuthStateChanged = jest.fn();
const mockhandleAuthSubmitClick = jest.fn(e => e.preventDefault());
import Auth from "../Auth";
import { ScreenResizeContext, AuthContext } from "../../../context/context";
import { MemoryRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import handleAuthSubmitClick from "../handleAuthSubmitClick";
jest.mock("../handleAuthSubmitClick.js", () => (e) => {
	e.preventDefault()
	mockhandleAuthSubmitClick() 
}); 
jest.mock("firebase/auth", () => {
	return {
		getAuth: () => mockgetAuth(),
		onAuthStateChanged: () => mockonAuthStateChanged(),
	};
});
const width = {width: 1000};
const isUser = false;
const setIsUser = jest.fn();
describe("Sign in page renders correct info", () => { 
	beforeEach(() => {
		render(
			<ScreenResizeContext.Provider value={width}>  
				<AuthContext.Provider value={{isUser, setIsUser}}> 
					<Router>
						<Auth /> 
					</Router>
				</AuthContext.Provider>
			</ScreenResizeContext.Provider>
		); 
	});
	test("Sign in text is visible", () => {
		const text = screen.queryByRole("heading", {
			name: /sign in/i
		});
		expect(text).toBeVisible();
	}); 
	
	test("Email field is present", () => {
		const textbox = screen.queryByRole("textbox", {
			placeholder: "email"
		});
		expect(textbox).toBeVisible();
	}); 
	test("Password field is present", () => {
		const textbox = screen.queryByRole("textbox", {
			placeholder: "password"
		});
		expect(textbox).toBeVisible();
	}); 
	test("Submit button is present", () => {
		const button = screen.queryByRole("button", {
			name: /submit/i
		});
		expect(button).toBeVisible();
	}); 
	test("Register Instead button is present", () => {
		const button = screen.queryByRole("button", {
			name: /Register Instead/i
		});
		expect(button).toBeVisible(); 
	}); 
	test("Admin info is visible", () => {
		const text = screen.queryByTestId("adminInfo");
		expect(text).toBeVisible();
	}); 

}); 

describe("Register page renders correct info", () => { 
	beforeEach(() => {
		render(
			<ScreenResizeContext.Provider value={width}>  
				<AuthContext.Provider value={{isUser, setIsUser}}> 
					<Router>
						<Auth /> 
					</Router>
				</AuthContext.Provider>
			</ScreenResizeContext.Provider>
		); 
		const button = screen.queryByRole("button", {
			name: /Register Instead/i
		});
		userEvent.click(button);

	});
	test("Log in text is visible", () => {
		const text = screen.queryByRole("heading", {
			name: /Sign up/i
		});
		expect(text).toBeVisible();
	}); 
	
	test("Email field is present", () => {
		const textbox = screen.queryByRole("textbox", {
			placeholder: "email"
		});
		expect(textbox).toBeVisible();
	}); 
	test("Password field is present", () => {
		const textbox = screen.queryByRole("textbox", {
			placeholder: "password"
		});
		expect(textbox).toBeVisible();
	}); 
	test("Submit button is present", () => {
		const button = screen.queryByRole("button", {
			name: /submit/i
		});
		expect(button).toBeVisible();
	}); 
	test("Already registered button is present", () => {
		const button = screen.queryByRole("button", {
			name: /Already registered\?/i
		});
		expect(button).toBeVisible();
	}); 
	test("Admin info is visible", () => {
		const text = screen.queryByTestId("adminInfo");
		expect(text).toBeVisible();
	}); 

}); 

describe("Submit button calls auth submit function", () => { 
	beforeEach(() => {
		render(
			<ScreenResizeContext.Provider value={width}>  
				<AuthContext.Provider value={{isUser, setIsUser}}> 
					<Router>
						<Auth /> 
					</Router>
				</AuthContext.Provider>
			</ScreenResizeContext.Provider>
		); 
	});
	test("Email field is present", () => {
		const email = screen.getByPlaceholderText(/email/i);
		const password = screen.getByPlaceholderText(/password/i);
		const button = screen.getByRole("button", {
			name: /submit/i
		});
		userEvent.click(email);
		userEvent.keyboard("test@gmail.com"); 
		userEvent.click(password);
		userEvent.keyboard("password");
		userEvent.click(button);
		expect(mockhandleAuthSubmitClick).toHaveBeenCalledTimes(1);    
	}); 
	test("Password field is present", () => {
		const textbox = screen.queryByRole("textbox", {
			placeholder: "password"
		});
		expect(textbox).toBeVisible();
	}); 
	test("Submit button is present", () => {
		const button = screen.queryByRole("button", {
			name: /submit/i
		});
		expect(button).toBeVisible();
	}); 

}); 