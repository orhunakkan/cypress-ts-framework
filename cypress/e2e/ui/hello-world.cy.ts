describe("Go to https://www.saucedemo.com/", () => {
  it("Validate standard username", () => {
    cy.visit("https://www.saucedemo.com");
    cy.get('#login_credentials').should("contain.text", "standard_user");
  });
});
