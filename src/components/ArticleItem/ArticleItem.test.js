import React from "react";
import { createRoot } from "react-dom/client";
import { render, screen } from "@testing-library/react";
import ArticleItem from "./ArticleItem";
import { act } from "react-dom/test-utils";

it("renders without crashing", () => {
  const root = createRoot(document.createElement("div"));
  act(() => {
    root.render(
      <ArticleItem
        link="https://rishavmedhi.medium.com/looking-a-year-back-my-transition-to-nodejs-and-reactjs-ef96b6dab384"
        heading="Looking a year back, My transition to Nodejs and Reactjs"
        subHeading="A software developer’s experience with a tech stack transition and how it has made me a better software developer"
      />
    );
  });
});

it("correct link in anchor tag", () => {
  render(
    <ArticleItem
      link="https://rishavmedhi.medium.com/looking-a-year-back-my-transition-to-nodejs-and-reactjs-ef96b6dab384"
      heading="Looking a year back, My transition to Nodejs and Reactjs"
      subHeading="A software developer’s experience with a tech stack transition and how it has made me a better software developer"
    />
  );
  const articleItemElem = screen.getByRole("link");
  expect(articleItemElem).toHaveAttribute(
    "href",
    "https://rishavmedhi.medium.com/looking-a-year-back-my-transition-to-nodejs-and-reactjs-ef96b6dab384"
  );
});
