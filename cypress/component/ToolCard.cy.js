import ToolCard from "@/components/ToolCard.vue";

describe("ToolCard.cy.js", () => {
  it("should get the right label and daily rate for the ridgid jackhammer", () => {
    cy.mount(ToolCard, {
      props: {
        type: "jackhammer",
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
        type: "ladder",
        code: "LADW",
        brand: "Werner",
      },
    });

    cy.get(".tool-card-title").should("have.text", "Werner ladder");
    cy.get(".tool-rental-rate").should("have.text", "$1.49");
  });
});
