// To prevent 'cy' from being not defined
/* global cy */
describe("empty spec", () => {
  it("login to the application", () => {
    cy.visit("/");
  });
});
