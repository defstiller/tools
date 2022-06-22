import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LoadingModal from "../loadingModal/LoadingModal";

describe("Loading modal test", () => { 
	test("Loading modal is displayed when loading is true", () => {
		const loading = true;
		render(
			<LoadingModal loading={loading}/>
		);
		const loadingDiv = screen.queryByRole("main");
		expect(loadingDiv).toBeInTheDocument(); 
		expect(loadingDiv).toBeVisible();
	});
	test("Loading modal is hidden when loading is false", () => {
		const loading = false;
		render(
			<LoadingModal loading={loading}/>
		);
		const loadingDiv = screen.queryByRole("main");
		expect(loadingDiv).not.toBeInTheDocument();
	});
	test("Loading svg is displayed when loading is true", () => {
		const loading = true;
		render(
			<LoadingModal loading={loading}/>
		);
		const loadingDiv = screen.queryByRole("main");
		const svg = loadingDiv.querySelector("div"); // loading is css, not svg
		expect(svg).toBeInTheDocument();
		expect(svg).toBeVisible();

	});
});