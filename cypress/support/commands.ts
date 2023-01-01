export {};
declare global {
  namespace Cypress {
    interface Chainable {
      loginDemoQA(username: string, password: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add("loginDemoQA", (username: string, password: string) => {
  cy.get("#userName").type(username);
  cy.get("#password").type(password);
  cy.get("#login").click();
});
