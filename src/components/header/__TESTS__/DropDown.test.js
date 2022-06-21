import React from "react";
import { render, screen } from "@testing-library/react";
import Dropdown from "../dropdown/DropDown";
import { ScreenResizeContext, AuthContext } from "../../../context/context";
import { MemoryRouter as Router } from "react-router-dom";

const smallScreen = {width: 500};
const largeScreen = {width: 1000};

describe("Dropdown contains pc elements, large screen, user is not signed in", () => { 
	beforeEach(() => {
		render(
			<Router>
				<ScreenResizeContext.Provider value={largeScreen}>
					<AuthContext.Provider value={{auth: false, isUser:false}}>
						<Dropdown />
					</AuthContext.Provider>
				</ScreenResizeContext.Provider>
			</Router>
		);
	});
	test("Admin page button is shown", () => {
		const button =screen.getByRole("button", {
			name: /admin page/i
		});
		expect(button).toBeInTheDocument();
	});
	
	test("Sign in button is shown when user is not signed in", () => {
		const button =screen.queryByRole("button", {
			name: /sign in/i
		});
		expect(button).toBeInTheDocument();
	});

	test("Sign out button is not shown when user is not signed in", () => {
		const button = screen.queryByRole("button", {
			name: /sign out/i
		});
		expect(button).not.toBeInTheDocument();
	});
});

describe("Dropdown contains pc elements, large screen, user is signed in", () => { 
	beforeEach(() => {
		render(
			<Router>
				<ScreenResizeContext.Provider value={largeScreen}>
					<AuthContext.Provider value={{auth: true, isUser:true}}> 
						<Dropdown />
					</AuthContext.Provider>
				</ScreenResizeContext.Provider>
			</Router>
		);
	});
	test("Admin page button is shown", () => {
		const button =screen.getByRole("button", {
			name: /admin page/i
		});
		expect(button).toBeInTheDocument();
	});
	
	test("Sign in button is shown when user is not signed in", () => {
		const button =screen.queryByRole("button", {
			name: /sign in/i
		});
		expect(button).not.toBeInTheDocument();
	});

	test("Sign out button is not shown when user is not signed in", () => {
		const button = screen.queryByRole("button", {
			name: /sign out/i
		});
		expect(button).toBeInTheDocument();
	});
});

describe("Dropdown contains pc and nav elements, small screen, user is not signed in", () => { 
	beforeEach(() => {
		render(
			<Router>
				<ScreenResizeContext.Provider value={smallScreen}>
					<AuthContext.Provider value={{auth: false, isUser:false}}>
						<Dropdown />
					</AuthContext.Provider>
				</ScreenResizeContext.Provider>
			</Router>
		);
	});
	test("Admin page button is shown", () => {
		const button = screen.getByRole("button", {
			name: /admin page/i
		});
		expect(button).toBeInTheDocument();
	});
	
	test("Sign in button is shown when user is not signed in", () => {
		const button = screen.getByRole("button", {
			name: /sign in/i
		});
		expect(button).toBeInTheDocument();
	});

	test("Sign out button is not shown when user is not signed in", () => {
		const button = screen.queryByRole("button", {
			name: /sign out/i
		});
		expect(button).not.toBeInTheDocument();
	});
	test("Nav Shop link is shown", () => {
		const link = screen.getByRole("link", {
			name: /page with our products/i
		});
		expect(link).toBeInTheDocument();
	});
	test("Nav About link is shown", () => {
		const link = screen.getByRole("link", {
			name: /read more about us/i
		});
		expect(link).toBeInTheDocument();
	});
	test("Nav Contact link is shown", () => {
		const link = screen.getByRole("link", {
			name: /need help\? contact us!/i
		});
		expect(link).toBeInTheDocument();
	});
	
});
describe("Dropdown contains pc and nav elements, small screen, user is signed in", () => { 
	beforeEach(() => {
		render(
			<Router>
				<ScreenResizeContext.Provider value={smallScreen}>
					<AuthContext.Provider value={{auth: true, isUser:true}}>
						<Dropdown />
					</AuthContext.Provider>
				</ScreenResizeContext.Provider>
			</Router>
		);
	});
	test("Admin page button is shown", () => {
		const button = screen.getByRole("button", {
			name: /admin page/i
		});
		expect(button).toBeInTheDocument();
	});
	
	test("Sign in button is not shown when user is signed in", () => {
		const button = screen.queryByRole("button", {
			name: /sign in/i
		});
		expect(button).not.toBeInTheDocument();
	});

	test("Sign out button is shown when user is signed in", () => {
		const button = screen.queryByRole("button", {
			name: /sign out/i
		});
		expect(button).toBeInTheDocument();
	});
	test("Nav Shop link is shown", () => {
		const link = screen.getByRole("link", {
			name: /page with our products/i
		});
		expect(link).toBeInTheDocument();
	});
	test("Nav About link is shown", () => {
		const link = screen.getByRole("link", {
			name: /read more about us/i
		});
		expect(link).toBeInTheDocument();
	});
	test("Nav Contact link is shown", () => {
		const link = screen.getByRole("link", {
			name: /need help\? contact us!/i
		});
		expect(link).toBeInTheDocument();
	});
	
});

describe("links have correct attributes", () => { 
	beforeEach(() => {
		render(
			<Router>
				<ScreenResizeContext.Provider value={smallScreen}>
					<AuthContext.Provider value={{auth: false, isUser:false}}>
						<Dropdown />
					</AuthContext.Provider>
				</ScreenResizeContext.Provider>
			</Router>
		);
	});
	test("Admin page link has correct attributes", () => {
		const button = screen.getByRole("link", {
			name: /admin/i
		});
		expect(button).toHaveAttribute("href", "/tools/admin");
	});
	test("Sign out link has correct attributes", () => {
		const button = screen.getByRole("link", {
			name: /sign in/i
		});
		expect(button).toHaveAttribute("href", "/tools/auth");
	});
});