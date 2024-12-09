/* eslint-disable no-undef */
describe("navbar functionality", () => {
  it("navigates to gallery page", () => {
    cy.visit("https://derbystudentgallery.netlify.app/");

    cy.contains("Gallery").click();
    cy.url().should("include", "/gallery");
  });
});
