import React from "react";
import { render } from "@testing-library/react";
import Main from "../pages/Main";

describe("<Main/>", () => {
  const greet = 'mamamma';
  it("Renders without crashing", () => {
    const main = render(<Main />);
    expect(main.getByText(/Item List/i)).toBeInTheDocument();
  });

  it("Renders the text from the prop", () => {
    const { getByTestId } = render(<Main greet={greet} />);
    expect(getByTestId("greet-text").textContent).toBe(greet);
  });
});