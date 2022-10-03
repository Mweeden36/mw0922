import RentalAgreementItem from "../../src/components/RentalAgreementItem.vue";
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

describe("RentalAgreementItem.vue", () => {
  it("should initialize when passing in the tool code", () => {
    const { vm } = mount(RentalAgreementItem, {
      props: {
        itemType: "toolCode",
        value: "JAKD",
      },
    });
    expect(vm.isCurrencyField).toEqual(false);
    expect(vm.isPercentageField).toEqual(false);
    expect(vm.label).toEqual("Tool");
    expect(vm.displayValue).toEqual("DeWalt jackhammer");
  });

  it("should initialize when passing in a percentage value", () => {
    const { vm } = mount(RentalAgreementItem, {
      props: {
        itemType: "discountPercent",
        value: 50,
      },
    });
    expect(vm.isCurrencyField).toEqual(false);
    expect(vm.isPercentageField).toEqual(true);
    expect(vm.label).toEqual("Discount Percent");
    expect(vm.displayValue).toEqual("50%");
  });

  it("should initialize when passing in a currency value", () => {
    const { vm } = mount(RentalAgreementItem, {
      props: {
        itemType: "finalAmount",
        value: 50124.125,
      },
    });
    expect(vm.isCurrencyField).toEqual(true);
    expect(vm.isPercentageField).toEqual(false);
    expect(vm.label).toEqual("Final Amount");
    expect(vm.displayValue).toEqual("$50,124.13");
  });

  it("should generate the correct html", () => {
    const wrapper = mount(RentalAgreementItem, {
      props: {
        itemType: "finalAmount",
        value: 50124.125,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
