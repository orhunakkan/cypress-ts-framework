export class Login {
  // Page Objects
  getUserName = () => cy.get("#userName");
  getPassword = () => cy.get("#password");
  getLoginButton = () => cy.get("#login");
  getInvalidUserMessage = () => cy.get("#name");

  // Actions
  loginToDemoQA(username: string, password: string): void {
    this.getUserName().type(username);
    this.getPassword().type(password);
    this.getLoginButton().click();
  }

  visit(): void{
    cy.visit(`${Cypress.env("demoQa")}/login`);
  }
}

// Below code can be put if we do not export the class above
// export const loginPage = new Login();
