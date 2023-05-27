import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Navbar from "../Navbar";
afterEach(cleanup);
describe("Navbar", () => {
  it("should render component", () => {
    render(<Navbar />);

    const container = screen.getByTestId("container");
    const logo = screen.getByAltText("logo");
    expect(container).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
  });

  it("should render on click", () => {
    render(<Navbar />);
    const searchButton = screen.getByTestId("search-button");
    expect(searchButton).toBeInTheDocument();

    fireEvent.click(searchButton);
    const search = screen.getByTestId("search");
    expect(search).toBeInTheDocument();
  });
});
