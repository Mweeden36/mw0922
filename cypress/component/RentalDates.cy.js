import RentalDates from "@/components/RentalDates.vue";

describe("RentalDates.cy.js", () => {
  it("should mount", () => {
    cy.mount(RentalDates);
  });

  it("should prepopulate dates", () => {
    cy.mount(RentalDates);
    cy.get(".date-picker.start .dp__input")
      .invoke("val")
      .should("match", /\d{2}\/\d{2}\/\d{2}/);
    cy.get(".date-picker.end .dp__input")
      .invoke("val")
      .should("match", /\d{2}\/\d{2}\/\d{2}/);
  });
});
