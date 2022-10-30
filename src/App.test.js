import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

test("App mounts without crashing", () => {
  const root = createRoot(document.createElement("div"));
  root.render(<App />);
});
