import React from "react";
import {jest} from "@jest/globals";
import { render, screen } from "@testing-library/react";
import ProductReviews from "../productInfo/productReviews/ProductReviews";
import { MemoryRouter as Router } from "react-router-dom";
import { AuthContext } from "../../../context/context";
jest.mock("../../../logic/firebaseLogic/firebaseDB/useAddGetRemoveData");
let auth = {
	currentUser: {
		uid: 2,
		email: "testEmail@gmail.com"
	} 
};
const setAverageRating = jest.fn();
// Which products have reviews can be found in useAddGetRemoveData mock
describe("Product reviews renders correct info when user is signed in, no reviews passed", () => {
	beforeEach(() => { 
		render(
			<Router> 
				<AuthContext.Provider value={{auth}}>
					<ProductReviews productDocId="456" setAverageRating={setAverageRating}/>
				</AuthContext.Provider>
			</Router>
		);
	}
	);
	test("Renders no reviews found", () => {
		const noReviews = screen.queryByText(/no reviews found/i);
		expect(noReviews).toBeInTheDocument();
	});
	test("Renders ReviewForm", () => {
		const reviewForm = screen.queryByTestId("reviewForm"); 
		expect(reviewForm).toBeInTheDocument();
	});
	test("Does not render reviews", () => {
		const reviews = screen.queryAllByTestId("reviews"); 
		reviews.forEach( review => {
			expect(review).not.toBeInTheDocument();
		});
	});

});

describe("Product reviews renders correct info when user is signed in, reviews are passed", () => {
	beforeEach(() => { 
		render(
			<Router> 
				<AuthContext.Provider value={{auth}}>
					<ProductReviews productDocId="123" setAverageRating={setAverageRating}/>
				</AuthContext.Provider>
			</Router>
		);
	}
	);
	test("Does not render no reviews found", () => {
		const noReviews = screen.queryByText(/no reviews found/i);
		expect(noReviews).not.toBeInTheDocument();
	});
	test("Renders ReviewForm", () => {
		const reviewForm = screen.queryByTestId("reviewForm"); 
		expect(reviewForm).toBeInTheDocument();
	}); 
	test("Renders reviews", () => {
		const reviews = screen.queryAllByTestId("reviews"); 
		reviews.forEach( review => {
			expect(review).toBeInTheDocument(); 
		});
	});
});
describe("Product reviews renders correct info when user is not signed in reviews were not passed", () => {
	let auth = {
		currentUser: null 
	};
	beforeEach(() => {
		render( 
			<Router> 
				<AuthContext.Provider value={{auth}}>
					<ProductReviews productDocId="456" setAverageRating={setAverageRating}/>
				</AuthContext.Provider>
			</Router> 
		);
	}
	);
	test("Renders no reviews found", () => {
		const noReviews = screen.queryByText(/no reviews found/i);
		expect(noReviews).toBeInTheDocument(); 
	});
	test("Review form is not present", () => { 
		const reviewForm = screen.queryByTestId("reviewForm"); 
		expect(reviewForm).not.toBeInTheDocument();
	}); 
	test("Reviews are not rendered", () => {
		const reviews = screen.queryAllByTestId("reviews"); 
		reviews.forEach( review => {
			expect(review).not.toBeInTheDocument(); 
		}); 
	});
  
});

describe("Product reviews renders correct info when several reviews are passed", () => {
	let auth = {
		currentUser: null 
	};
	beforeEach(() => {
		render( 
			<Router> 
				<AuthContext.Provider value={{auth}}>
					<ProductReviews productDocId="000" setAverageRating={setAverageRating}/>
				</AuthContext.Provider>
			</Router> 
		);
	}
	); 
	test("Does not render no reviews found", () => {
		const noReviews = screen.queryByText(/no reviews found/i);
		expect(noReviews).not.toBeInTheDocument(); 
	});
	test("Review form is not present", () => { 
		const reviewForm = screen.queryByTestId("reviewForm"); 
		expect(reviewForm).not.toBeInTheDocument();
	}); 
	test("Reviews are rendered", () => {
		const reviews = screen.queryAllByTestId("reviews"); 
		expect(reviews).toHaveLength(2); 
		reviews.forEach( review => {
			expect(review).toBeInTheDocument(); 
		}); 
	});
  
});