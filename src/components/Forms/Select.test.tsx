import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Select from "./Select";

const options = [
  {
    value: "option 1",
    name: "Option 1",
  },
  {
    value: "option 2",
    name: "Option 2",
  },
];

describe("Select", () => {
  it("should render the select with the correct placeholder", () => {
    const onChangeMock = jest.fn();
    const { getByPlaceholderText } = render(
      <Select
        options={options}
        placeholder={"Select an option"}
        onChange={onChangeMock}
      />
    );
    const select = getByPlaceholderText("Select an option");
    expect(select).toBeDefined();
  });

  it("should call the onChange prop when an option is selected", () => {
    const onChangeMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <Select
        options={options}
        placeholder="Select an option"
        onChange={onChangeMock}
      />
    );
    const select = getByPlaceholderText("Select an option");
    fireEvent.change(select, { target: { value: "option 1" } });
    expect(onChangeMock).toBeCalledWith("option 1");
  });
});
