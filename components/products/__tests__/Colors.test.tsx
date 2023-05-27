import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Colors from "../Colors";

afterEach(cleanup);
const data = {
  colors: ["red", "blue"],
};
describe("<Colors/>", () => {
  it("renders component", () => {
    render(<Colors {...data} />);
    const container = screen.getByTestId("container");
    const title = screen.getByText("Colors");
    const buttons = screen.getAllByTestId("button");
    expect(buttons).toHaveLength(data.colors.length);
    expect(title).toBeInTheDocument();
    expect(container).toBeInTheDocument();

    buttons.map((item, index) => {
      expect(item).toHaveStyle(`background: ${data.colors[index]}`);
    });
  });

  it("change selected color", () => {
    render(<Colors {...data} />);
    const buttonContainer = screen.getAllByTestId("button-container");

    expect(buttonContainer).toHaveLength(data.colors.length);
    expect(buttonContainer[0]).not.toHaveClass("selectedColor");
    fireEvent.click(buttonContainer[0]);
    expect(buttonContainer[0]).toHaveClass("selectedColor");
    fireEvent.click(buttonContainer[1]);
    expect(buttonContainer[0]).not.toHaveClass("selectedColor");
    expect(buttonContainer[1]).toHaveClass("selectedColor");
  });
});
