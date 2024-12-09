import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/Navbar.js";

test("logo renders", () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  const logo = screen.getByRole("link", { name: /university of derby/i });
  expect(logo).toBeInTheDocument();
});

test("renders with list items", () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(7);
});

test("one list item to be link called gallery", () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  const navLink = screen.getByRole("link", { name: /gallery/i });

  expect(navLink).toBeInTheDocument();
});

test("navigates to gallery", () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  const galleryLink = screen.getByText(/gallery/i);
  expect(galleryLink).toHaveAttribute("href", "/gallery");
});
