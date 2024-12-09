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

  expect(screen.getByRole("button")).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /view the gallery/i })
  ).toBeInTheDocument();
});
