describe("Go to https://restful-booker.herokuapp.com/booking", () => {
  it("Validate status code", () => {
    cy.api("https://restful-booker.herokuapp.com/booking").then((response) => {
        expect(response.status).to.eq(200);
      }
    );
  });
});
