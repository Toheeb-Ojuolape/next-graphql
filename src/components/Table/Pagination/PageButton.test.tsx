import React from "react";
import { render, fireEvent } from "@testing-library/react";
import PageButton from "./PageButton";

test("renders button with correct text", () => {
  const setPageMock = jest.fn();
  const { getByText } = render(
    <PageButton className="customClass" pageNumber={2} setPage={setPageMock}>
      Button Text
    </PageButton>
  );

  const button = getByText("Button Text");
  expect(button).toBeTruthy();
  expect(button.className).toContain("customClass pageButton");
});

test("clicking on button triggers setPage", () => {
  const setPageMock = jest.fn();
  const { getByText } = render(
    <PageButton className="customClass" pageNumber={2} setPage={setPageMock}>
      Button Text
    </PageButton>
  );

  const button = getByText("Button Text");
  fireEvent.click(button);

  expect(setPageMock).toHaveBeenCalledWith(2);
});
