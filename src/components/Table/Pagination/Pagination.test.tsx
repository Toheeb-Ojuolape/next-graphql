import React from "react";
import { render, screen,fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";


describe("Pagination", () => {
  it("should render the correct number of page buttons", () => {
    const props = {
      page: 1,
      setPage: jest.fn(),
    };
    render(<Pagination {...props} />);
    const pageButtons = screen.getAllByRole("button");
    expect(pageButtons.length).toBe(5);
  });

  it("should render the active page button with the active class", () => {
    const props = {
      page: 2,
      setPage: jest.fn(),
    };
    render(<Pagination {...props} />);
    const activePageButton = screen.getByRole("button", { name: "2" });
    expect(activePageButton.className).toContain("activePage");
  });

  it("should call the setPage function when a page button is clicked", () => {
    const props = {
      page: 1,
      setPage: jest.fn(),
    };
    render(<Pagination {...props} />);
    const buttonElement = screen.getByRole("button", { name: "2" });
    fireEvent.click(buttonElement)
    expect(props.setPage).toBeCalledWith(2);
  });
});
