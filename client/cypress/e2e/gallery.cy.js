/* eslint-disable no-undef */

describe("gallery navigation", () => {
  it("renders first image", () => {
    cy.visit("https://derbystudentgallery.netlify.app/");

    cy.contains("Gallery").click();

    cy.get(".active img").should("have.attr", "alt", "acceptance letter");
  });

  it("navigates through buttons on mobile", () => {
    cy.visit("https://derbystudentgallery.netlify.app/");

    cy.contains("Gallery").click();
    cy.viewport(650, 800);

    cy.get(".scrollBtns > :nth-child(2)").click();
    cy.get(".active img").should("have.attr", "alt", "new beginnings");

    cy.get(".scrollBtns > :nth-child(1)").click();
    cy.get(".active img").should("have.attr", "alt", "acceptance letter");
  });
});
