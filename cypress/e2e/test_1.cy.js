describe("discount_validation", () => {
  it("sets the checkout date to 9/3/15", () => {
    cy.visit("http://localhost:3001");
    cy.get(".multiselect").click();
    cy.get(".tool-card__wrapper.JAKR").click();
    const rentalDatePicker = cy.get(".date-picker.start");
    rentalDatePicker.click();
    cy.get(".dp__month_year_select[aria-label='Open years overlay']").click();
    cy.get(".dp__overlay_col").contains("2015").click();
    cy.get(".dp__month_year_select[aria-label='Open months overlay']").click();
    cy.get(".dp__overlay_col").contains("Sep").click();
    cy.get(".dp__calendar_item").eq(3).click();
    rentalDatePicker.find("input").should("have.value", "09/03/15");
  });

  it("sets the return date to 9/8/15", () => {
    const returnDatePicker = cy.get(".date-picker.end");
    returnDatePicker.click();
    cy.get(".dp__month_year_select[aria-label='Open years overlay']").click();
    cy.get(".dp__overlay_col").contains("2015").click();
    cy.get(".dp__month_year_select[aria-label='Open months overlay']").click();
    cy.get(".dp__overlay_col").contains("Sep").click();
    cy.get(".dp__calendar_item").eq(8).click();
    returnDatePicker.find("input").should("have.value", "09/08/15");
  });

  it("sets the discount percentage to 101", () => {
    const discountInput = cy.get(".checkout-discount");
    discountInput.type(101);
    discountInput.should("have.class", "invalid");
  });

  it("displays an error when the discount amount is invalid", () => {
    const discountWrapper = cy.get(".discount-amount__wrapper");
    discountWrapper.find(".error-notification");
  });

  it("does not allow check out", () => {
    cy.get("button.checkout-button").click();
    cy.on("window:alert", (text) => {
      expect(text).to.equal("Please double check your selections");
    });
  });
});
