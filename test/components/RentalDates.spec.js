import RentalDates from "../../src/components/RentalDates.vue";
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

describe("RentalDates.vue", () => {
  it("should initialize with sensible defaults", () => {
    const { vm } = mount(RentalDates);
    expect(vm.daysToRent).toEqual(7);
    expect(vm.invalid).toEqual(false);
  });

  it("should determine when the dates are too close together", () => {
    const { vm } = mount(RentalDates);
    vm.rentalStart = new Date();
    vm.rentalEnd = new Date();
    expect(vm.invalid).toEqual(true);
  });
});
