//test ReviewForm component
import React from "react";
import ReviewForm from "../productInfo/productReviews/reviewForm/ReviewForm";
import {jest} from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
const initialState = "";
React.useState = jest.fn().mockReturnValue([initialState, {}]);
const [input, setInput] = React.useState("");
const ratingsAndUids = {
	ratings: [5],
	current: {
		userUidsArray: [2]
	} 
}
function objectInput(event) {
	const value = event.target.value;
	const name = event.target.name; 
	setInput({
		...input,
		[name]:value
	});
} 
const styles = {};
const handleReviewSubmit = jest.fn();
describe("ReviewForm component, user did not leave a comment", () => {
	const userData = {
		userId: 1
	}; 
	beforeEach(() => {
		render(<ReviewForm 
			ratingsAndUids={ratingsAndUids}
			userData={userData}
			input={input}
			objectInput={objectInput}
			handleReviewSubmit={handleReviewSubmit}
			styles={styles} 
		/>);
	});
	test("Rating is present", () => {
		const rating = screen.queryByPlaceholderText("rating"); 
		expect(rating).toBeInTheDocument();
	}
	); 
	test("Comment is present", () => {
		const comment = screen.queryByPlaceholderText("comment");
		expect(comment).toBeInTheDocument();
	}
	);
	test("Comment is present", () => {
		const button = screen.queryByRole("button", {
			name: "Submit"
		});
		expect(button).toBeInTheDocument();
	}
	);
	test("Submit calls handleReviewSubmit", () => {
		const button = screen.queryByRole("button", {
			name: "Submit"
		});
		userEvent.click(button);
		expect(handleReviewSubmit).toHaveBeenCalled();
	});

});

describe("ReviewForm component, user previously left a comment", () => {
	const userData = {
		userId: 2
	}; 
	beforeEach(() => {
		render(<ReviewForm 
			ratingsAndUids={ratingsAndUids}
			userData={userData}
			input={input}
			objectInput={objectInput}
			handleReviewSubmit={handleReviewSubmit}
			styles={styles} 
		/>);
	}
	);
	test("rating is not present", () => {
		const rating = screen.queryByPlaceholderText("rating"); 
		expect(rating).not.toBeInTheDocument();
	}
	);
	test("comment is not present", () => {
		const comment = screen.queryByPlaceholderText("comment");
		expect(comment).not.toBeInTheDocument();
	}
	);
	test("button is not present", () => {
		const button = screen.queryByRole("button", {
			name: "Submit"
		});
		expect(button).not.toBeInTheDocument();
	}
	); 


}); 