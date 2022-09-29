import RentalAgreementItem from "@/components/RentalAgreementItem.vue";

describe("RentalAgreementItem.cy.js", () => {
  it("should mount", () => {
    cy.mount(RentalAgreementItem, {
      props: {
        itemType: "toolCode",
        value: "JAKR",
      },
    });
  });

  it("should lookup the correct label and value for the Ridgid Jackhammer", () => {
    cy.mount(RentalAgreementItem, {
      props: {
        itemType: "toolCode",
        value: "JAKR",
      },
    });
    cy.get("b").should("have.text", "Tool");
    cy.get("span").should("have.text", "Ridgid jackhammer");
  });

  it("should lookup the correct label and value for the Werner ladder", () => {
    cy.mount(RentalAgreementItem, {
      props: {
        itemType: "toolCode",
        value: "LADW",
      },
    });
    cy.get("b").should("have.text", "Tool");
    cy.get("span").should("have.text", "Werner ladder");
  });

  it("should lookup the correct label and value for a specified checkout date", () => {
    cy.mount(RentalAgreementItem, {
      props: {
        itemType: "checkoutDate",
        value: "09/29/22",
      },
    });
    cy.get("b").should("have.text", "Checkout Date");
    cy.get("span").should("have.text", "09/29/22");
  });

  it("should lookup the correct label and value for a specified return date", () => {
    cy.mount(RentalAgreementItem, {
      props: {
        itemType: "returnDate",
        value: "09/29/22",
      },
    });
    cy.get("b").should("have.text", "Return Date");
    cy.get("span").should("have.text", "09/29/22");
  });

  it("should lookup the correct label and value for a specified discount percent", () => {
    cy.mount(RentalAgreementItem, {
      props: {
        itemType: "discountPercent",
        value: 5,
      },
    });
    cy.get("b").should("have.text", "Discount Percent");
    cy.get("span").should("have.text", "5%");
  });

  it("should lookup the correct label and value for a specified discount percent", () => {
    cy.mount(RentalAgreementItem, {
      props: {
        itemType: "chargeableDays",
        value: 5,
      },
    });
    cy.get("b").should("have.text", "Chargeable Days");
    cy.get("span").should("have.text", "5");
  });

  it("should lookup the correct label and value for a specified discount percent", () => {
    cy.mount(RentalAgreementItem, {
      props: {
        itemType: "dailyCharge",
        value: 1.49,
      },
    });
    cy.get("b").should("have.text", "Daily Charge");
    cy.get("span").should("have.text", "$1.49");
  });

  it("should lookup the correct label and value for a specified discount percent", () => {
    cy.mount(RentalAgreementItem, {
      props: {
        itemType: "discountAmount",
        value: 12.34,
      },
    });
    cy.get("b").should("have.text", "Discount Amount");
    cy.get("span").should("have.text", "$12.34");
  });

  it("should lookup the correct label and value for a specified discount percent", () => {
    cy.mount(RentalAgreementItem, {
      props: {
        itemType: "prediscountAmount",
        value: 12.34,
      },
    });
    cy.get("b").should("have.text", "Pre-discount Amount");
    cy.get("span").should("have.text", "$12.34");
  });

  it("should lookup the correct label and value for a specified discount percent", () => {
    cy.mount(RentalAgreementItem, {
      props: {
        itemType: "finalAmount",
        value: 123.4,
      },
    });
    cy.get("b").should("have.text", "Final Amount");
    cy.get("span").should("have.text", "$123.40");
  });

  it("should convert a whole number to a two-digit currency amount", () => {
    cy.mount(RentalAgreementItem, {
      props: {
        itemType: "finalAmount",
        value: 12345,
      },
    });
    cy.get("b").should("have.text", "Final Amount");
    cy.get("span").should("have.text", "$12,345.00");
  });
});
