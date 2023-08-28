import React from "react";
import { render, fireEvent } from "@testing-library/react";
import PrimaryButton from "./PrimaryButton";
import ButtonLoading from "../Loader/ButtonLoading";

describe("PrimaryButton", () => {
  it("should render the button with the correct title", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <PrimaryButton
        onClick={onClickMock}
        disabled={false}
        title="Click Me"
        loading={false}
      />
    );

    const buttonElement = getByText("Click Me");
    expect(buttonElement).toBeDefined();
  });

  it("should call the onClick function when clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <PrimaryButton
        onClick={onClickMock}
        disabled={false}
        title="Click Me"
        loading={false}
      />
    );

    const buttonElement = getByText("Click Me");
    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalled();
  });

  it("should be disabled when the 'disabled' prop is true", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <PrimaryButton
        onClick={onClickMock}
        disabled={true}
        title="Click Me"
        loading={false}
      />
    );

    const buttonElement = getByText("Click Me");
    expect(buttonElement.classList.contains("disabled")).toBe(true);
  });

  it("should show loading indicator when 'loading' prop is true", () => {
    const onClickMock = jest.fn();
    const { getByTestId, queryByText } = render(
      <PrimaryButton
        onClick={onClickMock}
        disabled={false}
        title="Click Me"
        loading={true}
      />
    );

    const buttonElement = queryByText("Click Me");
    const loadingIndicator = getByTestId("button-loading");

    expect(buttonElement).toBeNull();
    expect(loadingIndicator).toBeDefined();
  });
});
