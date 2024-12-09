import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Gallery from "../pages/Gallery";

test("expected number of images render", () => {
  render(
    <MemoryRouter>
      <Gallery />
    </MemoryRouter>
  );

  expect(screen.getAllByRole("img")).toHaveLength(6);
});

test("each image provides a button link", () => {
  render(
    <MemoryRouter>
      <Gallery />
    </MemoryRouter>
  );

  expect(screen.getAllByRole("link")).toHaveLength(6);
});

test("should have two image navigation buttons and 6 link buttons", () => {
  render(
    <MemoryRouter>
      <Gallery />
    </MemoryRouter>
  );

  expect(screen.getAllByRole("button")).toHaveLength(8);
});
