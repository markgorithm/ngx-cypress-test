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

    it.only("Our second test case", () => {
      cy.visit("/");
      // Go to the forms page by navigating on the sidebar menu
      cy.contains("Forms").click();
      cy.contains("Form Layouts").click();

      cy.get('[data-cy="signInButton"]');

      // By using contains, if there are more than two elements with the same text, it will return the first one.
      cy.contains("Sign in");

      // To find another element with the same text, we have to add a second parameter. The first one has to be a locator, the second one the text itself
      cy.contains('[status="warning"]', "Sign in");

      // If we don't have an unique selector or id, we can locate an unique element that's placed on the same level and then travel to its parent.
      cy.get("#inputEmail3")
        .parents("form")
        .find("button")
        .should("contain", "Sign in");

      // If we don't have an unique selector or id, we can locate an unique element that's placed on the same level and then travel to its parent.
      cy.get("#inputEmail3")
        .parents("form")
        .find("button")
        .should("contain", "Sign in")
        .parents("form")
        .find("nb-checkbox")
        .click();

      // Third way to find an element
      cy.contains("nb-card", "Horizontal form").find('[type="email"]');
    });
  });
});
