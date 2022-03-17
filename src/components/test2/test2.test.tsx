import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Test2 } from ".";

describe("Test2", () => {
  it("should render list items", () => {
    const { getByText } = render(<Test2 />);

    expect(getByText("Diego")).toBeInTheDocument();
    expect(getByText("Rodz")).toBeInTheDocument();
    expect(getByText("Mayk")).toBeInTheDocument();
  });

  it("should be able to add new item to list", () => {
    const { getByText, debug } = render(<Test2 />);

    const addButton = getByText("Adicionar");

    debug();

    userEvent.click(addButton);

    debug();

    expect(getByText("Novo")).toBeInTheDocument();
  });
});
