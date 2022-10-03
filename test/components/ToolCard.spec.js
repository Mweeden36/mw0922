import ToolCard from "../../src/components/ToolCard.vue";
import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

describe("ToolCard.vue", () => {
  it("should initialize with sensible defaults", () => {
    const { vm } = shallowMount(ToolCard, {
      propsData: {
        code: "JAKD",
        toolType: "jackhammer",
        brand: "DeWalt",
      },
    });
    expect(vm.code).toEqual("JAKD");
    expect(vm.toolType).toEqual("jackhammer");
    expect(vm.brand).toEqual("DeWalt");
    expect(vm.dailyRate).toEqual(2.99);
  });
});
