describe("test 3", () => {
  const rentalDate = "09/03/15";
  const returnDate = "09/09/15";
  it("sets the checkout date to 7/1/22", () => {
    cy.visit("http://localhost:3002");
    cy.get(".multiselect").click();
    cy.get(".tool-card__wrapper.JAKD").click();
    const rentalDatePicker = cy.get(".date-picker.start");
    rentalDatePicker.click();
    cy.get(".dp__month_year_select[aria-label='Open years overlay']").click();
    cy.get(".dp__overlay_col").contains("2015").click();
    cy.get(".dp__month_year_select[aria-label='Open months overlay']").click();
    cy.get(".dp__overlay_col").contains("Sep").click();
    cy.get(".dp__calendar_item").eq(3).click();
    cy.get(".dp__select").click();
    rentalDatePicker.find("input").should("have.value", rentalDate);
  });

  it("sets the return date to 7/8/22", () => {
    const returnDatePicker = cy.get(".date-picker.end");
    returnDatePicker.click();
    cy.get(".dp__month_year_select[aria-label='Open years overlay']").click();
    cy.get(".dp__overlay_col").contains("2015").click();
    cy.get(".dp__month_year_select[aria-label='Open months overlay']").click();
    cy.get(".dp__overlay_col").contains("Sep").click();
    cy.get(".dp__calendar_item").eq(9).click();
    cy.get(".dp__select").click();
    returnDatePicker.find("input").should("have.value", returnDate);
  });

  it("successfully allows checkout", () => {
    cy.get("button.checkout-button").click();
  });

  it("successfully generated the Rental Agreement", () => {
    cy.get(".rental-agreement-item.toolCode span").should(
      "have.text",
      "DeWalt jackhammer"
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
      "0%"
    );
    cy.get(".rental-agreement-item.chargeableDays span").should(
      "have.text",
      "6"
    );
    cy.get(".rental-agreement-item.dailyCharge span").should(
      "have.text",
      "$2.99"
    );
    cy.get(".rental-agreement-item.prediscountAmount span").should(
      "have.text",
      "$17.94"
    );
    cy.get(".rental-agreement-item.discountAmount span").should(
      "have.text",
      "$0.00"
    );
    cy.get(".rental-agreement-item.finalAmount span").should(
      "have.text",
      "$17.94"
    );
  });
});
