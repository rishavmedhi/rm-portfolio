import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Footer />, div);
});

it("checking if the year matches with the mock Date", () => {
  render(<Footer />);
  const yearElement = screen.getByText(new Date().getFullYear() + "", {
    exact: false,
  });
  expect(yearElement).toBeInTheDocument();
});
