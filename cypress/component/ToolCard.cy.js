import ToolCard from "@/components/ToolCard.vue";
import rentalChargesMixin from "@/mixins/rentalCharges";

describe("ToolCard.cy.js", () => {
  it("should get the right label and daily rate for the ridgid jackhammer", () => {
    cy.mount(ToolCard, {
      props: {
        toolType: "jackhammer",
        code: "JAKR",
        brand: "Ridgid",
      },
    });

    cy.get(".tool-card-title").should("have.text", "Ridgid jackhammer");
    cy.get(".tool-rental-rate").should("have.text", "$2.99");
  });

  it("should get the right label and daily rate for the Werner ladder", () => {
    cy.mount(ToolCard, {
      props: {
        toolType: "ladder",
        code: "LADW",
        brand: "Werner",
      },
    });

    cy.get(".tool-card-title").should("have.text", "Werner ladder");
    cy.get(".tool-rental-rate").should("have.text", "$1.49");
  });
});
