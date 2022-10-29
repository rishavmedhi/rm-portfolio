import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import Emoji from "./Emoji";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Emoji />, div);
});

it("rendering the same emoji as expected", () => {
  render(<Emoji symbol="🌇" />);
  const emojiElem = screen.getByText("🌇");
  expect(emojiElem).toBeInTheDocument();
});

// TODO: visual testing for this component
