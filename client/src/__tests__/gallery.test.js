import { screen, render } from "@testing-library/react";
import Gallery from "../pages/Gallery";

test("expected number of images render", () => {
  render(<Gallery />);

  expect(screen.getAllByRole("img")).toHaveLength(6);
});

test("each image provides a button link", () => {
  render(<Gallery />);

  expect(screen.getAllByRole("link")).toHaveLength(6);
});

test("should have two photo navigation buttons and 6 link buttons", () => {
  render(<Gallery />);

  expect(screen.getAllByRole("button")).toHaveLength(8);
});
