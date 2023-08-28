import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Tabs from "./Tabs";

describe("Tabs", () => {
  it("should render the tab with the correct class name when the active prop is 'table'", () => {
    const setActiveMock = jest.fn();
    const { getByText } = render(
      <Tabs active="table" setActive={setActiveMock} />
    );
    const tab = getByText("Table");
    expect(tab.className).toBe("active");
  });

  it("should call the setActive prop when the table tab is clicked", () => {
    const setActiveMock = jest.fn();
    const { getByText } = render(
      <Tabs active="table" setActive={setActiveMock} />
    );
    const tab = getByText("Table");
    fireEvent.click(tab);
    expect(setActiveMock).toBeCalledWith("table");
  });

  it("should render the tab with the correct class name when the active prop is 'graph'", () => {
    const setActiveMock = jest.fn();
    const { getByText } = render(
      <Tabs active="graph" setActive={setActiveMock} />
    );
    const tab = getByText("Graph");
    expect(tab.className).toBe("active");
  });

  it("should call the setActive prop when the graph tab is clicked", () => {
    const setActiveMock = jest.fn();
    const { getByText } = render(
      <Tabs active="graph" setActive={setActiveMock} />
    );
    const tab = getByText("Graph");
    fireEvent.click(tab);
    expect(setActiveMock).toBeCalledWith("graph");
  });
});
