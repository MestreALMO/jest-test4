import { render } from "@testing-library/react";
import { Test } from ".";

test("sum", () => {
  const { getByText } = render(<Test />);

  // expect(getByText("Test")).toBeInTheDocument();
  expect(getByText("Test")).toHaveAttribute("class", "test");
});
