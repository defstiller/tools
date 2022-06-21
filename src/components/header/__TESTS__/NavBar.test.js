import React from "react";
import { render, screen} from "@testing-library/react";
import NavBar from "../navBar/NavBar";
import { MemoryRouter} from "react-router-dom";


describe("all elements are present", () => { 
	beforeEach(() => {
		const styles = [];
		render(
			<MemoryRouter>
				<NavBar styles={{styles}}/>
			</MemoryRouter>
		);
	});

	test("navbar is present", () => {
		const navigation = screen.getByRole("navigation");
		expect(navigation).toBeInTheDocument();
	});
	test("shop link is present", () => {
		const link = screen.getByRole("link", {
			name: /page with our products/i
		});
		expect(link).toBeInTheDocument();
	});
	test("about link is present", () => {
		const link = screen.getByRole("link", {
			name: /about/i
		});
		expect(link).toBeInTheDocument();
	});
	test("contact link is present", () => {
		const link = screen.getByRole("link", {
			name: /contact/i
		});
		expect(link).toBeInTheDocument();
	});
});

describe("links have correct attributes", () => { 
	beforeEach(() => {
		const styles = [];
		render(
			<MemoryRouter>
				<NavBar styles={{styles}}/>
			</MemoryRouter>

		);
	});
	test("shop link has correct attributes", () => {
		const link = screen.getByRole("link", {
			name: /page with our products/i
		});

		expect(link).toHaveAttribute("href", "/tools/shop");

	});
	
	test("about link has correct attributes", () => {
		const link = screen.getByRole("link", {
			name: /about/i
		}); 

		expect(link).toHaveAttribute("href", "/tools/about");

	});
	test("contact link has correct attributes", () => {
		const link = screen.getByRole("link", {
			name: /contact/i
		}); 

		expect(link).toHaveAttribute("href", "/tools/contact");

	});
});
describe("links have correct text", () => { 
	beforeEach(() => {
		const styles = [];
		render(
			<MemoryRouter>
				<NavBar styles={{styles}}/>
			</MemoryRouter>

		);
	});
	test("shop link has correct text", () => {
		const link = screen.getByRole("link", {
			name: /page with our products/i
		});

		expect(link).toHaveTextContent("Shop");

	});
	
	test("about link has correct text", () => {
		const link = screen.getByRole("link", {
			name: /about/i
		}); 

		expect(link).toHaveTextContent("About");

	});
	test("contact link has correct text", () => {
		const link = screen.getByRole("link", {
			name: /contact/i
		}); 

		expect(link).toHaveTextContent("Contact");

	});
});

describe("links have accessible name", () => { 
	beforeEach(() => {
		const styles = [];
		render(
			<MemoryRouter>
				<NavBar styles={{styles}}/>
			</MemoryRouter>

		);
	});
	test("shop link has accessible name", () => {
		const link = screen.getByRole("link", {
			name: /page with our products/i
		});

		expect(link).toHaveAccessibleName();

	});
	
	test("about link has accessible name", () => {
		const link = screen.getByRole("link", {
			name: /about/i
		}); 

		expect(link).toHaveAccessibleName();

	});
	test("contact link has accessible name", () => {
		const link = screen.getByRole("link", {
			name: /contact/i
		}); 

		expect(link).toHaveAccessibleName();

	});
});



// 	test("idk", async() => {
// 		history = createMemoryHistory();
// 		const styles = [];
// 		render(
// 			<App styles={{styles}}/>
// 		);
// 		const pushSpy = jest.spyOn(history, 'push');
// 		const shopBtn = screen.getByRole("link", {
// 			name: /shop/i
// 		}); 
// 		// userEvent.click(screen.getByRole("link", {
// 		// 	name: /shop/i
// 		// }));
// 		// await userEvent.click(shopBtn);
// 		// await waitFor(()=>expect(pushSpy).toHaveBeenLastCalledWith(`/shop/i`)); 
// 		expect(pushSpy).toHaveBeenCalledTimes(1);
// 		// rerender(); 
// 		// expect(location.pathname).toEqual('/tools/shop');    
