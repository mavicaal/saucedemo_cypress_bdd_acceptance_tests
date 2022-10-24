describe("Check login credentials", () => {
  it("User can login with credentials", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.get(".inventory_list").should("be.visible");
  });

  it("User cannot login with locked out credentials", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("locked_out_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should(
      "contain",
      "Epic sadface: Sorry, this user has been locked out."
    );
  });
});
