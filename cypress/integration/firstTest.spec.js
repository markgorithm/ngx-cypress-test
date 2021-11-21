/// <reference types="cypress" />
// We need to add this reference so VS Code knows that we are using the Cypress library

describe("Our first test suite", () => {
  describe("Our first test suite section", () => {
    it("Our first test case", () => {
      // Open the web browser to the URL specified in cypress.json
      cy.visit("/");
      // Go to the forms page by navigating on the sidebar menu
      cy.contains("Forms").click();
      cy.contains("Form Layouts").click();

      // Get any web element. We have to provide a locator.

      // by tag name
      cy.get("input");

      // by id
      cy.get("#inputEmail");

      // by class name
      cy.get(".input-full-width");

      //by class name and value: This means we have provided the entire class value.
      cy.get('[class="input-full-width size-medium shape-rectangle"]');

      // by attribute name
      cy.get("[placeholder]");

      // by attribute name and value
      cy.get("[placeholder='Email']");

      // by tag name and attribute name with value
      cy.get("input[placeholder='Email']");

      //by two different attributes
      cy.get('[placeholder="Email"][type="email"]');

      //by tag name, attribute name and value, id and class name
      cy.get('input[placeholder="Email"]#inputEmail.input-full-width');

      // the most recommended way to get an element according to Cypress docs. We should add our own tags
      cy.get('[data-cy="imputEmail1"]');
    });
  });
});
