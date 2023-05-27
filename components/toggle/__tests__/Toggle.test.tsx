import { screen, cleanup, render, fireEvent } from "@testing-library/react";
import Toggle from "../Toggle";

afterEach(cleanup);

const data = {
  status: false,
};
describe("<Toggle/>", () => {
  it("render component", () => {
    render(<Toggle {...data} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-[#e1e1e1]");
    fireEvent.click(button);
    expect(button).toHaveClass("bg-primary");
  });
});
