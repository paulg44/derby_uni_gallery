import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../pages/Home";

test("has header", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("heading", { name: /the future is you/i })
  ).toBeInTheDocument();
});

test("has button with link", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("link", { name: /view the gallery/i })
  ).toBeInTheDocument();
});

test("navigates to gallery", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  const buttonLink = screen.getByRole("link", { name: /view the gallery/i });
  expect(buttonLink).toHaveAttribute("href", "/gallery");
});
