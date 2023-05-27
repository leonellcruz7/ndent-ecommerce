import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import Dropdown from "../Dropdown";

afterEach(cleanup);
const data = {
  id: "test id",
  options: ["a", "b"],
  placeholder: "placeholder",
};
describe("<Dropdown/>", () => {
  it("should render component", () => {
    render(<Dropdown {...data} />);

    const container = screen.getByTestId("container");
    const menu = screen.getByTestId("menu");
    const dropdown = screen.getByTestId("dropdown");
    expect(container).toBeInTheDocument();
    expect(menu).toHaveClass("hidden");
    expect(menu).not.toHaveClass("block");
    fireEvent.click(dropdown);
    expect(menu).not.toHaveClass("hidden");
    expect(menu).toHaveClass("block");
  });
});
