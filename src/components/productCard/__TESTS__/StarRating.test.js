import React from "react";
import { render, screen } from "@testing-library/react";
import StarRating from "../starRating/StarRating";
let star;
let emptyStar;
describe("Amount of stars is correct", () => { 
	test("5 empty stars and 0 full stars are rendered when rating is 0", async() => {
		render(
			<StarRating 
				rating={0}
				width="5"
			/>
		);
		star = screen.queryAllByTestId("star");
		emptyStar = screen.queryAllByTestId("emptyStar");
		expect(star).toHaveLength(0);
		expect(emptyStar).toHaveLength(5);
	});
	test("4 empty stars and 1 full stars are rendered", async() => {
		render(
			<StarRating 
				rating={1}
				width="5"
			/>
		);
		star = screen.queryAllByTestId("star");
		emptyStar = screen.queryAllByTestId("emptyStar");
		expect(star).toHaveLength(1);
		expect(emptyStar).toHaveLength(4); 
	});
	test("3 empty stars and 2 full stars are rendered", async() => {
		render(
			<StarRating 
				rating={2}
				width="5"
			/>
		);
		star = screen.queryAllByTestId("star");
		emptyStar = screen.queryAllByTestId("emptyStar");
		expect(star).toHaveLength(2);
		expect(emptyStar).toHaveLength(3); 
	});
	test("2 empty stars and 3 full stars are rendered", async() => {
		render(
			<StarRating 
				rating={3}
				width="5"
			/>
		);
		star = screen.queryAllByTestId("star");
		emptyStar = screen.queryAllByTestId("emptyStar");
		expect(star).toHaveLength(3);
		expect(emptyStar).toHaveLength(2); 
	});
	test("1 empty stars and 4 full stars are rendered", async() => {
		render(
			<StarRating 
				rating={4}
				width="5"
			/>
		);
		star = screen.queryAllByTestId("star");
		emptyStar = screen.queryAllByTestId("emptyStar");
		expect(star).toHaveLength(4);
		expect(emptyStar).toHaveLength(1); 
	});
	test("0 empty stars and 5 full stars are rendered", async() => {
		render(
			<StarRating 
				rating={5}
				width="5"
			/>
		);
		star = screen.queryAllByTestId("star");
		emptyStar = screen.queryAllByTestId("emptyStar");
		expect(star).toHaveLength(5);
		expect(emptyStar).toHaveLength(0); 
	});
});

describe("Edge cases", () => {
	test("5 empty stars is passed when rating is null", async() => {
		render(
			<StarRating 
				rating={null}
				width="5"
			/>
		);
		star = screen.queryAllByTestId("star");
		emptyStar = screen.queryAllByTestId("emptyStar");
		expect(star).toHaveLength(0);
		expect(emptyStar).toHaveLength(5);  
	});
	test("If rating is > 5 show 5 stars (edge case)", async() => {
		render(
			<StarRating 
				rating={55} 
				width="5"
			/>
		);
		star = screen.queryAllByTestId("star");
		emptyStar = screen.queryAllByTestId("emptyStar");
		expect(star).toHaveLength(5);
		expect(emptyStar).toHaveLength(0);
	});
	test("If rating is < 0 show 5 stars (edge case)", async() => {
		render(
			<StarRating 
				rating={-55} 
				width="5"
			/>
		);
		star = screen.queryAllByTestId("star");
		emptyStar = screen.queryAllByTestId("emptyStar");
		expect(star).toHaveLength(5);
		expect(emptyStar).toHaveLength(0);
	});
	test("If rating undefined show 5 stars (edge case)", async() => {
		render(
			<StarRating 
				rating={undefined} 
				width="5"
			/>
		);
		star = screen.queryAllByTestId("star");
		emptyStar = screen.queryAllByTestId("emptyStar");
		expect(star).toHaveLength(5);
		expect(emptyStar).toHaveLength(0); 
	});
	test("If rating is a word show 5 stars (edge case)", async() => {
		render(
			<StarRating 
				rating={"one"} 
				width="5"
			/>
		);
		star = screen.queryAllByTestId("star");
		emptyStar = screen.queryAllByTestId("emptyStar");
		expect(star).toHaveLength(5);
		expect(emptyStar).toHaveLength(0); 
	});
	test("If rating is not passed show 5 stars (edge case)", async() => {
		render(
			<StarRating 
				width="5"
			/>
		);
		star = screen.queryAllByTestId("star");
		emptyStar = screen.queryAllByTestId("emptyStar");
		expect(star).toHaveLength(5);
		expect(emptyStar).toHaveLength(0); 
	});
});