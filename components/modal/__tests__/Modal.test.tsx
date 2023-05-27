import Modal from "../Modal";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

const data = {
  children: <p>test</p>,
};

describe("<Modal/>", () => {
  it("should render the component", () => {
    render(<Modal {...data} />);

    const container = screen.getByTestId("container");
    const children = screen.getByTestId("children");
    expect(children).tohave;
    expect(container).toHaveTextContent("test");
  });
});
