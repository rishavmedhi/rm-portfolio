import React from "react";
import { createRoot } from "react-dom/client";
import { render, screen } from "@testing-library/react";
import Emoji from "./Emoji";
import { act } from "react-dom/test-utils";

it("renders without crashing", () => {
  const root = createRoot(document.createElement("div"));
  act(() => {
    root.render(<Emoji />);
  });
});

it("rendering the same emoji as expected", () => {
  render(<Emoji symbol="🌇" />);
  const emojiElem = screen.getByText("🌇");
  expect(emojiElem).toBeInTheDocument();
});

// TODO: visual testing for this component
