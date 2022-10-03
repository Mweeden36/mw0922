import CheckoutForm from "../../src/components/CheckoutForm.vue";
import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

describe("CheckoutForm.vue", () => {
  const start = new Date();
  const end = new Date(new Date().setDate(start.getDate() + 4));

  it("should initialize with sensible default values", () => {
    const { vm } = shallowMount(CheckoutForm);
    expect(vm.selected).toEqual({});
    expect(vm.daysToRent).toEqual(0);
    expect(vm.discountPercent).toEqual(0);
    expect(vm.rentalStart).toEqual(null);
    expect(vm.rentalEnd).toEqual(null);
    expect(vm.discountAmount).toEqual(0);
    expect(vm.discountIsValid).toEqual(true);
    expect(vm.subtotal).toEqual(0);
    expect(vm.toolOptions).toEqual([
      {
        brand: "Stihl",
        code: "CHNS",
        display: "Stihl chainsaw",
        type: "chainsaw",
      },
      {
        brand: "Werner",
        code: "LADW",
        display: "Werner ladder",
        type: "ladder",
      },
      {
        type: "jackhammer",
        code: "JAKD",
        brand: "DeWalt",
        display: "DeWalt jackhammer",
      },
      {
        type: "jackhammer",
        code: "JAKR",
        brand: "Ridgid",
        display: "Ridgid jackhammer",
      },
    ]);
    expect(vm.toolType).toEqual(undefined);
    expect(vm.total).toEqual(0);
    expect(vm.valid).toEqual(false);
    expect(vm.rentalAgreement).toEqual();
  });

  it("should generate the correct html", () => {
    const wrapper = shallowMount(CheckoutForm);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should prepend zeros to values < 10", () => {
    const { vm } = shallowMount(CheckoutForm);
    for (let i = 0; i <= 9; i++) {
      expect(vm.prependZero(i)).toEqual(`0${i}`);
    }
  });

  it("should handle date updates", () => {
    const { vm } = shallowMount(CheckoutForm);
    expect(vm.daysToRent).toEqual(0);
    expect(vm.rentalStart).toEqual(null);
    expect(vm.rentalEnd).toEqual(null);
    vm.onChangeDates({
      daysToRent: 4,
      rentalStart: start,
      rentalEnd: end,
    });
    expect(vm.daysToRent).toEqual(4);
    expect(vm.rentalStart).toEqual(start);
    expect(vm.rentalEnd).toEqual(end);
  });

  it("should format dates properly", () => {
    const { vm } = shallowMount(CheckoutForm);
    const d = new Date(2019, 5, 3);
    expect(vm.formatDate(d)).toEqual("06/03/19");
  });

  it("should emit an event when checking out", () => {
    const wrapper = shallowMount(CheckoutForm);
    wrapper.vm.selectedOption = {
      code: "JAKD",
      type: "jackhammer",
    };
    wrapper.vm.rentalStart = start;
    wrapper.vm.rentalEnd = end;
    wrapper.vm.daysToRent = 4;

    wrapper.vm.onClickCheckout();
    expect(wrapper.emitted()).toHaveProperty("confirm");
    expect(wrapper.emitted("confirm")[0]).toEqual([
      {
        chargeableDays: 4,
        checkoutDate: expect.any(String),
        dailyCharge: "2.99",
        discountAmount: "0.00",
        discountPercent: 0,
        finalAmount: "11.96",
        prediscountAmount: "11.96",
        returnDate: expect.any(String),
        toolCode: "JAKD",
      },
    ]);
  });
});
