import React from "react";
import { createRoot } from "react-dom/client";
import { render, screen, fireEvent } from "@testing-library/react";
import Homepage from "./views/Homepage";
import { act } from "react-dom/test-utils";

const realScrollIntoViewPrototype = HTMLElement.prototype.scrollIntoView;
var scrollIntoViewMock;

// making a mock function for scrollIntoView
beforeEach(() => {
  scrollIntoViewMock = jest.fn();
  HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;
});

// replacing the scrollIntoView Mock fn back to the actual HTML DOM Prototype
afterEach(() => {
  HTMLElement.prototype.scrollIntoView = realScrollIntoViewPrototype;
});

it("renders without crashing", () => {
  const root = createRoot(document.createElement("div"));
  act(() => {
    root.render(<Homepage />);
  });
});

it("scrolling to writing section on clicking writing nav link", () => {
  render(<Homepage />);
  const writingNavElem = screen.getByTestId("nav-writing");
  fireEvent.click(writingNavElem);
  expect(scrollIntoViewMock).toBeCalledWith({ behavior: "smooth" });
});

it("scrolling to writing section on clicking down arrow icon", () => {
  render(<Homepage />);
  const downIconElem = screen.getByTestId("down-icon");
  fireEvent.click(downIconElem);
  expect(scrollIntoViewMock).toBeCalledWith({ behavior: "smooth" });
});

it("scrolling to writing section on clicking about-me nav link", () => {
  render(<Homepage />);
  const aboutMeNavElem = screen.getByTestId("nav-about-me");
  fireEvent.click(aboutMeNavElem);
  expect(scrollIntoViewMock).toBeCalledWith({ behavior: "smooth" });
});
