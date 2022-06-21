import React from "react";
import { render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HeaderLayout from "../HeaderLayout";
import { ScreenResizeContext, AuthContext } from "../../../context/context";
import { MemoryRouter as Router } from "react-router-dom";

const hiddenNav = {width: 500};
const withNav = {width: 1000};
const wrapper = ({width, auth, isUser}) => {
	return (
		<Router>
			<ScreenResizeContext.Provider value={width}>
				<AuthContext.Provider value={{auth, isUser}}>
					<HeaderLayout />
				</AuthContext.Provider>
			</ScreenResizeContext.Provider>
		</Router>
	);
};
describe("renders the header 1000px screen, pc elements are present", () => {

	beforeEach(() => {
		render(
			wrapper({width:withNav})
		);
	});

	test("banner (background of the header) is present", () => {
		expect(screen.getByRole("banner")).toBeInTheDocument();
	});

	test("home link is present", () => {
		expect(screen.getByRole("link", {
			name: /home/i
		})).toBeInTheDocument();
	});

	test("navbar is present", () => {
		expect(screen.getByRole("navigation")).toBeInTheDocument();
	});

	test("cart link is present", () => {
		expect(screen.getByRole("link", {
			name: /cart/i
		})).toBeInTheDocument();
	});
	test("dropdown button svg is present", ()=> {
		const button = screen.getByRole("button", {
			name: /dropdown/i
		});
		expect(button).toBeInTheDocument();
	});
});

describe("1000px screen, pc sub-elements are present, svgs on buttons, links in navigation", () => {
	beforeEach(() => {
		render(
			wrapper({width:withNav})
		);
	});
	test("home button svg is present", ()=> {
		const container = screen.getByRole("link", {
			name: /home/i
		});
		expect(container.querySelector("svg")).toBeInTheDocument();
	});
	test("shop link is present", ()=> {
		expect(screen.getByRole("link", {
			name: /page with our products/i
		})).toBeInTheDocument;
	});
	test("about link is present", ()=> {
		expect(screen.getByRole("link", {
			name: /about/i
		})).toBeInTheDocument;
	});
	test("contact link is present", ()=> {
		expect(screen.getByRole("link", {
			name: /contact/i
		})).toBeInTheDocument;
	});
	test("cart button svg is present", ()=> {
		const container = screen.getByRole("link", {
			name: /cart/i
		});
		expect(container.querySelector("svg")).toBeInTheDocument();
	});
});

describe("500px screen, pc sub-elements are hidden", () => {
	beforeEach(() => {
		render(
			wrapper({width:hiddenNav}) 
		);
	});
	test("home button svg is present", ()=> {
		const container = screen.getByRole("link", {
			name: /home/i
		});
		expect(container.querySelector("svg")).toBeInTheDocument();
	});
	test("navigation is hidden", ()=> {
		const link = screen.queryByRole("navigation");
		expect(link).toBeNull();
	});
	test("shop link is hidden", ()=> {
		const link = screen.queryByRole("link", {
			name: /shop/i
		});
		expect(link).toBeNull();
	});
	test("about link is hidden", ()=> {
		const link = screen.queryByRole("link", {
			name: /about/i
		});
		expect(link).toBeNull();
	});
	test("contact link is hidden", ()=> {
		const link = screen.queryByRole("link", {
			name: /contact/i
		});
		expect(link).toBeInTheDocument;
	});
	test("cart button svg is present", ()=> {
		const container = screen.getByRole("link", {
			name: /cart/i
		});
		const svgInsideContainer = container.querySelector("svg");
		expect(svgInsideContainer).toBeInTheDocument();
	});
	test("dropdown button svg is present", ()=> {
		const button = screen.getByRole("button", {
			name: /dropdown/i
		});
		expect(button).toBeInTheDocument();
	});
}); 

describe("header elements are accessible", () => {

	beforeEach(() => {
		render(
			wrapper({width:withNav})
		);
	});

	test("home link has accessible name", () => {
		const link = screen.getByRole("link", {
			name: /home/i
		});

		expect(link).toHaveAccessibleName();

	});
	
	test("cart link has accessible name", () => {
		const link = screen.getByRole("link", {
			name: /cart/i
		});

		expect(link).toHaveAccessibleName();

	});
	test("dropdown button has accessible name", () => {
		const button = screen.getByRole("button", {
			name: /dropdown/i
		});

		expect(button).toHaveAccessibleName();

	});
});

describe("links have correct attributes", () => { 
	beforeEach(() => {
		render(
			wrapper({width:withNav})
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

describe("Dropdown click opens menu", () => { 
	test("Menu opens with large screen", () => {
		render(
			wrapper({width:withNav, auth:true, isUser:false})
		);
		const button =screen.getByRole("button", {
			name: /dropdown/i
		});
		userEvent.click(button);
		const dropdownDiv = screen.getByTestId("header-dropdown");
		expect(dropdownDiv).toBeInTheDocument();

	});
	
	test("Menu opens with small screen", () => {
		render(
			wrapper({width:withNav, auth:true, isUser:false})
		);
		const button =screen.getByRole("button", {
			name: /dropdown/i
		});
		userEvent.click(button);
		const dropdownDiv = screen.getByTestId("header-dropdown");
		expect(dropdownDiv).toBeInTheDocument();

	});
});