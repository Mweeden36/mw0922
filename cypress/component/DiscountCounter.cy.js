import DiscountCounter from "@/components/DiscountCounter.vue";

describe("DiscountCounter.cy.js", () => {
  it("should mount", () => {
    cy.mount(DiscountCounter);
  });

  it("should change the value when typing into the input", () => {
    cy.mount(DiscountCounter);
    const input = cy.get("input[type=number]");
    input.type("1");
    input.should("have.value", 1);
  });

  it("should NOT mark the field as invalid when set to a value between 0 and 100", () => {
    // Probably overkill...
    cy.mount(DiscountCounter);
    const input = cy.get("input[type=number]");
    for (let i = 0; i < 101; i++) {
      input.clear();
      input.type(i);
      input.should("have.value", i);
      input.should("not.have.class", "invalid");
    }
  });

  it("should mark the field as invalid when set to a negative number", () => {
    cy.mount(DiscountCounter);
    const input = cy.get("input[type=number]");
    input.type("-1");
    input.should("have.value", -1);
    input.should("have.class", "invalid");
    cy.get(".error-notification").should(
      "contain.text",
      "Please make sure the discount amount is between 0 and 100%."
    );
  });

  it("should mark the field as invalid when set to a number over 100", () => {
    cy.mount(DiscountCounter);
    const input = cy.get("input[type=number]");
    input.type("101");
    input.should("have.value", 101);
    input.should("have.class", "invalid");
    cy.get(".error-notification").should(
      "contain.text",
      "Please make sure the discount amount is between 0 and 100%."
    );
  });

  it("should not allow alpha characters in the input", () => {
    cy.mount(DiscountCounter);
    const input = cy.get("input[type=number]");
    input.type("10a");
    input.should("have.value", 10);
    input.should("not.have.class", "invalid");
  });
});
