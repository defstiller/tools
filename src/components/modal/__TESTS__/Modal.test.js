import React from "react";
import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import Modal from "../Modal";
import userEvent from "@testing-library/user-event";


describe("Modal works as expected with response set to true", () => { 
	const delay = 500;
	let response = true;
	let main;
	const setResponse = jest.fn();
	beforeEach(() => {
		response = true;
		render(
			<Modal response={response} delay={delay} setResponse={setResponse}/>
		);
		main = screen.queryByRole("main");
	});
	test("Modal renders when response is received", () => {
		expect(main).toBeInTheDocument();
		expect(main).toBeVisible();
	});
	test("Modal opens and closes when delay is passed", async() => {
		expect(main).toBeInTheDocument();
		expect(main).toBeVisible();
		await waitForElementToBeRemoved(main); 
	});
	
});
describe("Modal works as expected with error set to true", () => { 
	let error;
	let delay = 100;
	let customErrorDelay = 100;
	let main;
	const setError = jest.fn();
	beforeEach(() => {
		error = true;
		render(
			<Modal error={error} 
				setError={setError} 
				customErrorDelay={customErrorDelay} 
				delay={delay}/>
		);
		main = screen.queryByRole("main");
	});
	test("Modal renders when error is received", () => {
		expect(main).toBeInTheDocument();
		expect(main).toBeVisible();
	});
	test("Modal sets error to null", async() => {
		await waitForElementToBeRemoved(main);
		expect(setError).toBeCalledTimes(1); 
		expect(error).toBeFalsy; 
	}); 
	test("Modal opens and closes when delay is passed", async() => {
		expect(main).toBeInTheDocument();
		expect(main).toBeVisible();
		await waitForElementToBeRemoved(main);
		expect(main).not.toBeInTheDocument();
	});
	
});

describe("Modal response renders correct info", () => { 
	let response;
	let responseParagraph;
	const setResponse = jest.fn();
	beforeEach(() => {
		response = "Test response paragraph";
		render(
			<Modal response={response} 
				setResponse={setResponse} 
			/>
		);
		responseParagraph = screen.queryByTestId("responseParagraph");
	});
	test("Modal renders with response", () => {
		expect(responseParagraph).toBeInTheDocument();
		expect(responseParagraph).toBeVisible();
	});
	test("Response contains correсt text", () => {
		expect(responseParagraph).toHaveTextContent(response);
	});
});
describe("Modal error renders correct info", () => { 
	let data;
	let errorMessage;
	let errorCode;
	const setError = jest.fn();
	beforeEach(() => {
		data = {
			message: "Test error paragraph",
			code: 500
		};
		render(
			<Modal error={data} 
				setError={setError} 
			/>
		);
		errorMessage = screen.queryByTestId("errorMessage");
		errorCode = screen.queryByTestId("errorCode");

	});
	test("Error message is displayed", () => {
		expect(errorMessage).toBeInTheDocument();
		expect(errorMessage).toBeVisible();
	});
	test("Error code is displayed", () => {
		expect(errorCode).toBeInTheDocument();
		expect(errorCode).toBeVisible();
	});
	test("Error message has correct text", () => {
		expect(errorMessage).toHaveTextContent(data.message); 
	});
	test("Error code has correct text", () => {
		expect(errorCode).toHaveTextContent(data.code);
	});
});

describe("Modal close button", () => { 
	let data;
	let errorDiv;
	let errorMessage;
	let closeBtn;
	const setData = jest.fn();
	beforeEach(() => {
		data = {
			message: "Test error paragraph",
			code: 500
		};
		render(
			<Modal error={data} 
				setError={setData} 
			/>
		);
		errorDiv = screen.queryByTestId("errorDiv");
		errorMessage = screen.queryByTestId("errorMessage");
		closeBtn = screen.getByRole("button", {
			name: /close/i
		});

	});
	test("Close button displayed", () => {
		expect(closeBtn).toBeInTheDocument();
		expect(closeBtn).toBeVisible();
	});

	test("Close button closes modal", () => {
		expect(errorDiv).toBeInTheDocument();
		expect(errorDiv).toBeVisible();
		userEvent.click(closeBtn); 
		expect(errorDiv).not.toBeInTheDocument();
	});
	test("Close button clears error message", () => {
		expect(errorMessage).toBeInTheDocument();
		expect(errorMessage).toBeVisible();
		userEvent.click(closeBtn); 
		expect(setData).toBeCalledTimes(1);
		expect(setData).toHaveBeenCalledWith(null); 
	}); 
}); 