import React from "react";
import {jest} from "@jest/globals";
import { render, screen } from "@testing-library/react";
const mockAddData = jest.fn();
import AddProduct from "../addProduct/AddProduct";
import userEvent from "@testing-library/user-event";
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
describe("Add product contains correct fields", () => { 

	beforeEach(() => {  
		render(
			<AddProduct/> 
		);
	});
	test("Name field is present", () => {
		const field = screen.getByPlaceholderText("Name");  
		expect(field).toBeInTheDocument();
		expect(field).toBeVisible();
	}); 
	test("Description field is present", () => {
		const field = screen.getByPlaceholderText("Description");
		expect(field).toBeInTheDocument();
		expect(field).toBeVisible();
	}); 
	test("Category field is present", () => {
		const field = screen.getByPlaceholderText("Category");
		expect(field).toBeInTheDocument();
		expect(field).toBeVisible();
	}); 
	test("Sub category field is present", () => {
		const field = screen.getByPlaceholderText("Sub Category");
		expect(field).toBeInTheDocument();
		expect(field).toBeVisible();
	}); 
	test("Checkbox is present", () => {
		const checkbox = screen.getByRole("checkbox");
		expect(checkbox).toBeInTheDocument();
		expect(checkbox).toBeVisible();
	}); 
	test("Price field is present", () => {
		const field = screen.getByPlaceholderText("Price");
		expect(field).toBeInTheDocument();
		expect(field).toBeVisible();
	}); 
	test("Shipping field is present", () => {
		const field = screen.getByPlaceholderText("Shipping");
		expect(field).toBeInTheDocument();
		expect(field).toBeVisible();
	}); 
	test("Image URL field is present", () => {
		const field = screen.getByPlaceholderText("Image URL");
		expect(field).toBeInTheDocument();
		expect(field).toBeVisible();
	}); 

}); 

describe("fields display correct input", () => { 

	beforeEach(() => {  
		render(
			<AddProduct/>
		);
	});
	test("Name field displays correct input", () => {
		const field = screen.getByPlaceholderText("Name"); 
		userEvent.click(field);
		userEvent.keyboard("test 123");
		expect(field.value).toEqual("test 123");
	}); 
	test("Description field displays correct input", () => {
		const field = screen.getByPlaceholderText("Description"); 
		userEvent.click(field);
		userEvent.keyboard("test 123");
		expect(field.value).toEqual("test 123");
	}); 
	test("Description field displays correct input", () => {
		const field = screen.getByPlaceholderText("Description"); 
		userEvent.click(field);
		userEvent.keyboard("test 123");
		expect(field.value).toEqual("test 123");
	}); 
	test("Category field displays correct input", () => {
		const field = screen.getByPlaceholderText("Category"); 
		userEvent.click(field);
		userEvent.keyboard("test 123");
		expect(field.value).toEqual("test 123");
	}); 
	test("Sub Category field displays correct input", () => {
		const field = screen.getByPlaceholderText("Sub Category"); 
		userEvent.click(field);
		userEvent.keyboard("test 123");
		expect(field.value).toEqual("test 123");
	}); 
	test("Price field displays correct input", () => {
		const field = screen.getByPlaceholderText("Price"); 
		userEvent.click(field);
		userEvent.keyboard("123");
		expect(field.value).toEqual("123");
	}); 
	test("Price field is numbers only", () => {
		const field = screen.getByPlaceholderText("Price"); 
		userEvent.click(field);
		userEvent.keyboard("123abc@!/");
		expect(field.value).toEqual("123");
	});
	test("Shipping Price field displays correct input", () => {
		const field = screen.getByPlaceholderText("Shipping"); 
		userEvent.click(field);
		userEvent.keyboard("123");
		expect(field.value).toEqual("0123"); // default is 0
	}); 
	test("Shipping Price field is numbers only", () => {
		const field = screen.getByPlaceholderText("Shipping"); 
		userEvent.click(field);
		userEvent.keyboard("123abc@!/");
		expect(field.value).toEqual("0123"); // default is 0
	});  

	test("Image url field displays correct input", () => {
		const field = screen.getByPlaceholderText("Image URL"); 
		userEvent.click(field);
		userEvent.keyboard("test 123");
		expect(field.value).toEqual("test 123");
	}); 

}); 

describe("Submitting product", () => { 
	let name;
	let description;
	let category;
	let price;
	let shipping;
	let imgUrl;
	let submit;

	beforeEach(() => {  
		render(
			<AddProduct/>
		);
		name = screen.getByPlaceholderText("Name"); 
		description = screen.getByPlaceholderText("Description"); 
		category = screen.getByPlaceholderText("Category");  
		price = screen.getByPlaceholderText("Price"); 
		shipping = screen.getByPlaceholderText("Shipping"); 
		imgUrl = screen.getByPlaceholderText("Image URL"); 
		submit = screen.getByRole("button", {
			name: "Submit"
		});

	});
	test("Add data is called with correct data", () => {
		userEvent.click(name);
		userEvent.keyboard("test 123"); 
		userEvent.click(description); 
		userEvent.keyboard("test 123");
		userEvent.click(category);
		userEvent.keyboard("test 123");
		userEvent.click(price);
		userEvent.keyboard("123");
		userEvent.click(shipping);
		userEvent.keyboard("456");
		userEvent.click(imgUrl);
		userEvent.keyboard("test 123"); 
		userEvent.click(submit); 
		expect(mockAddData).toHaveBeenCalledTimes(1); 
		expect(mockAddData).toHaveBeenCalledWith("products", 
			{"category": "test 123", 
				"description": "test 123", 
				"imgUrl": "test 123", 
				"isFeatured": false, 
				"name": "test 123", 
				"price": "123", 
				"shipping": "0456", 
				"subCategory": ""}); 
	}); 

}); 
