describe("test 2", () => {
  const rentalDate = "07/02/20";
  const returnDate = "07/04/20";

  it("sets the checkout date to 7/2/20", () => {
    cy.visit("http://localhost:3001");
    cy.get(".multiselect").click();
    cy.get(".tool-card__wrapper.LADW").click();
    const rentalDatePicker = cy.get(".date-picker.start");
    rentalDatePicker.click();
    cy.get(".dp__month_year_select[aria-label='Open years overlay']").click();
    cy.get(".dp__overlay_col").contains("2020").click();
    cy.get(".dp__month_year_select[aria-label='Open months overlay']").click();
    cy.get(".dp__overlay_col").contains("Jul").click();
    cy.get(".dp__calendar_item").eq(3).click();
    rentalDatePicker.find("input").should("have.value", rentalDate);
  });

  it("sets the return date to 7/4/20", () => {
    const returnDatePicker = cy.get(".date-picker.end");
    returnDatePicker.click();
    cy.get(".dp__month_year_select[aria-label='Open years overlay']").click();
    cy.get(".dp__overlay_col").contains("2020").click();
    cy.get(".dp__month_year_select[aria-label='Open months overlay']").click();
    cy.get(".dp__overlay_col").contains("Jul").click();
    cy.get(".dp__calendar_item").eq(5).click();
    returnDatePicker.find("input").should("have.value", returnDate);
  });

  it("sets the discount percentage to 10%", () => {
    const discountInput = cy.get(".checkout-discount");
    discountInput.type(10);
  });

  it("successfully allows checkout", () => {
    cy.get("button.checkout-button").click();
  });

  it("successfully generated the Rental Agreement", () => {
    cy.get(".rental-agreement-item.toolCode span").should(
      "have.text",
      "Werner ladder"
    );
    cy.get(".rental-agreement-item.checkoutDate span").should(
      "have.text",
      rentalDate
    );
    cy.get(".rental-agreement-item.returnDate span").should(
      "have.text",
      returnDate
    );
    cy.get(".rental-agreement-item.discountPercent span").should(
      "have.text",
      "10%"
    );
    cy.get(".rental-agreement-item.chargeableDays span").should(
      "have.text",
      "2"
    );
    cy.get(".rental-agreement-item.dailyCharge span").should(
      "have.text",
      "$1.49"
    );
    cy.get(".rental-agreement-item.prediscountAmount span").should(
      "have.text",
      "$2.98"
    );
    cy.get(".rental-agreement-item.discountAmount span").should(
      "have.text",
      "$0.30"
    );
    cy.get(".rental-agreement-item.finalAmount span").should(
      "have.text",
      "$2.68"
    );
  });
});
