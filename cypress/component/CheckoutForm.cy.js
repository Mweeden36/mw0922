import CheckoutForm from "@/components/CheckoutForm.vue";

describe("CheckoutForm.cy.js", () => {
  it("should mount", () => {
    cy.mount(CheckoutForm);
  });

  it("should have 4 form items", () => {
    cy.mount(CheckoutForm);
    cy.get(".checkout-form__item").should("have.length", 4);
  });

  it("should prevent checkout with missing required values", () => {
    cy.mount(CheckoutForm);
    cy.get("button.checkout-button").click();
    cy.on("window:alert", (text) => {
      expect(text).to.equal("Please double check your selections");
    });
  });

  it("should allow checkout once the user selects a tool.", () => {
    cy.mount(CheckoutForm);
    cy.get(".multiselect").click();
    cy.get(".tool-card__wrapper.JAKR").click();
    cy.get("button.checkout-button").click();
  });
});
