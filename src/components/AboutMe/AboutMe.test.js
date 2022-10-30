import React from "react";
import { createRoot } from "react-dom/client";
import AboutMe from "./AboutMe";

it("renders without crashing", () => {
  const root = createRoot(document.createElement("div"));
  root.render(<AboutMe />);
});
