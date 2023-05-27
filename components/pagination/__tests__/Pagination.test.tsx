import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Pagination from "../Pagination";

afterEach(cleanup);

describe("<Pagination/>", () => {
  it("should render component", () => {
    render(<Pagination />);
    const totalProduct = 50;
    const showing = 10;
    const quotient = totalProduct / showing;
    const container = screen.getByTestId("container");
    const pageButtons = screen.getAllByTestId("page-button");
    const selectedPage = screen.getByTestId("selected-page");
    const nextButton = screen.getByTestId("next");
    expect(container).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(pageButtons).toHaveLength(quotient);
    expect(selectedPage).toHaveTextContent("1");
    fireEvent.click(nextButton);
    expect(selectedPage).toHaveTextContent("2");

    const prevButton = screen.getByTestId("prev");
    fireEvent.click(prevButton);
    expect(selectedPage).toHaveTextContent("1");
  });
});
