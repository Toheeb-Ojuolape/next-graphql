import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  it("should render the input with the correct placeholder", () => {
    const onChangeMock = jest.fn();
    const { getByPlaceholderText } = render(<Input onChange={onChangeMock} type={"text"} placeholder="Enter text" />);
    const input = getByPlaceholderText("Enter text");
    expect(input).toBeDefined();
  });

  it("should call the onChange prop when the value is changed", () => {
    const onChangeMock = jest.fn();
    const { getByPlaceholderText } = render(<Input type={"text"} onChange={onChangeMock} placeholder="Enter text" />);
    const input = getByPlaceholderText("Enter text");
    fireEvent.change(input, { target: { value: "hello" } });
    expect(onChangeMock).toBeCalledWith("hello");
  });
});
