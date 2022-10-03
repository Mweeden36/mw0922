import RentalAgreement from "../../src/components/RentalAgreement.vue";
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

describe("RentalAgreement.vue", () => {
  const testAgreement = {
    toolCode: "JAKD",
    checkoutDate: "09/01/22",
    returnDate: "09/04/22",
    discountPercent: 4,
    chargeableDays: 3,
    dailyCharge: 1.99,
    prediscountAmount: 5.97,
    discountAmount: 0.24,
    finalAmount: 5.73,
  };

  it("should initialize with sensible defaults", () => {
    const { vm } = mount(RentalAgreement, {
      props: {
        rentalAgreement: testAgreement,
      },
    });
    expect(vm.rentalAgreement).toEqual(testAgreement);
  });

  it("should generate the correct html", () => {
    const wrapper = mount(RentalAgreement, {
      props: {
        rentalAgreement: testAgreement,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
