import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ImageWithFallBack from "../ImageWithFallBack";

describe("Image renders and returns correct attributes", () => { 
	test("Image component is rendered", () => {
		render(
			<ImageWithFallBack />
		);
		const image = screen.queryByRole("img");
		expect(image).toBeInTheDocument();
		expect(image).toBeVisible;
	});
	test("Loading error causing a no image fallback", () => {
		render(
			<ImageWithFallBack src={require("../../../assets/images/searchIcon.png")}/>
		);
		const image = screen.queryByRole("img");
		fireEvent.error(image);
		expect(image).toHaveAttribute("src", "noImage.webp");
	});
	test("All props are passed to component", () => {
		render(
			<ImageWithFallBack src={require("../../../assets/images/searchIcon.png")} test="test" test1="test1"/>
		);
		const image = screen.queryByRole("img");
		fireEvent.error(image);
		expect(image).toHaveAttribute("src", "noImage.webp");
		expect(image).toHaveAttribute("test", "test");
		expect(image).toHaveAttribute("test1", "test1");
	});
});