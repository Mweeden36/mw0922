describe("test 3", () => {
  const rentalDate = "07/01/22";
  const returnDate = "07/08/22";
  it("sets the checkout date to 7/1/22", () => {
    cy.visit("http://localhost:3001");
    cy.get(".multiselect").click();
    cy.get(".tool-card__wrapper.CHNS").click();
    const rentalDatePicker = cy.get(".date-picker.start");
    rentalDatePicker.click();
    cy.get(".dp__month_year_select[aria-label='Open years overlay']").click();
    cy.get(".dp__overlay_col").contains("2022").click();
    cy.get(".dp__month_year_select[aria-label='Open months overlay']").click();
    cy.get(".dp__overlay_col").contains("Jul").click();
    cy.get(".dp__calendar_item").eq(4).click();
    cy.get(".dp__select").click();
    rentalDatePicker.find("input").should("have.value", rentalDate);
  });

  it("sets the return date to 7/8/22", () => {
    const returnDatePicker = cy.get(".date-picker.end");
    returnDatePicker.click();
    cy.get(".dp__month_year_select[aria-label='Open years overlay']").click();
    cy.get(".dp__overlay_col").contains("2022").click();
    cy.get(".dp__month_year_select[aria-label='Open months overlay']").click();
    cy.get(".dp__overlay_col").contains("Jul").click();
    cy.get(".dp__calendar_item").eq(11).click();
    cy.get(".dp__select").click();
    returnDatePicker.find("input").should("have.value", returnDate);
  });

  it("sets the discount percentage to 25%", () => {
    const discountInput = cy.get(".checkout-discount");
    discountInput.type(25);
  });

  it("successfully allows checkout", () => {
    cy.get("button.checkout-button").click();
  });

  it("successfully generated the Rental Agreement", () => {
    cy.get(".rental-agreement-item.toolCode span").should(
      "have.text",
      "Stihl chainsaw"
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
      "25%"
    );
    cy.get(".rental-agreement-item.chargeableDays span").should(
      "have.text",
      "7"
    );
    cy.get(".rental-agreement-item.dailyCharge span").should(
      "have.text",
      "$1.99"
    );
    cy.get(".rental-agreement-item.prediscountAmount span").should(
      "have.text",
      "$13.93"
    );
    cy.get(".rental-agreement-item.discountAmount span").should(
      "have.text",
      "$3.48"
    );
    cy.get(".rental-agreement-item.finalAmount span").should(
      "have.text",
      "$10.45"
    );
  });
});
