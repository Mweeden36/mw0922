import RentalAgreement from "@/components/RentalAgreement.vue";

describe("RentalAgreement.cy.js", () => {
  const rentalAgreement = {
    toolCode: "LADW",
    checkoutDate: "09/29/22",
    returnDate: "10/06/22",
    discountPercent: 25,
    chargeableDays: 7,
    dailyCharge: "1.49",
    prediscountAmount: "10.43",
    discountAmount: "2.61",
    finalAmount: "7.82",
  };

  it("should mount", () => {
    cy.mount(RentalAgreement, {
      props: {
        rentalAgreement,
      },
    });
  });

  it("should have 9 parts to each rental agreement", () => {
    cy.mount(RentalAgreement, {
      props: {
        rentalAgreement,
      },
    });
    cy.get(".rental-agreement-item").should("have.length", 9);
  });

  it("should have a rental agreement item for each key in the rental agreement", () => {
    cy.mount(RentalAgreement, {
      props: {
        rentalAgreement,
      },
    });

    Object.keys(rentalAgreement).forEach((key) => {
      const item = cy.get(`.rental-agreement-item.${key}`);
      item.should("have.length", 1);
    });
  });

  it("should have a 'Back to Rental Form' button", () => {
    cy.mount(RentalAgreement, {
      props: {
        rentalAgreement,
      },
    });

    cy.get("button.back").should("contain.text", "Back to Rental Form");
  });
});
