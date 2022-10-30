import React from "react";
import { createRoot } from "react-dom/client";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { act } from "react-dom/test-utils";

it("renders without crashing", () => {
  const root = createRoot(document.createElement("div"));
  act(() => {
    root.render(<Footer />);
  });
});

it("checking if the year matches with the mock Date", () => {
  render(<Footer />);
  const yearElement = screen.getByText(new Date().getFullYear() + "", {
    exact: false,
  });
  expect(yearElement).toBeInTheDocument();
});
