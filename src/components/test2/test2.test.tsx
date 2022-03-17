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

  it("should be able to add new item to list", async () => {
    const { getByText, getByPlaceholderText, findByText } = render(<Test2 />);

    const inputElement = getByPlaceholderText("Novo item");
    const addButton = getByText("Adicionar");

    userEvent.type(inputElement, "Novo");
    userEvent.click(addButton);

    expect(await findByText("Novo")).toBeInTheDocument();

    expect(getByText("Novo")).toBeInTheDocument();
  });
});
