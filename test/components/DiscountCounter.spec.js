import DiscountCounter from "../../src/components/DiscountCounter.vue";
import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";

describe("DiscountCounter.vue", () => {
  it("should Initialize with sensible defaults", () => {
    const { vm } = mount(DiscountCounter, {
      props: {
        modelValue: 0,
      },
    });
    expect(vm.discountAmount).toEqual(0);
    expect(vm.invalid).toEqual(false);
  });

  it("should generate the correct html", () => {
    const wrapper = mount(DiscountCounter, {
      props: {
        modelValue: 0,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should mark as invalid when discount amount is initialized as negative", () => {
    const { vm } = mount(DiscountCounter, {
      props: {
        modelValue: -1,
      },
    });
    expect(vm.discountAmount).toEqual(-1);
    expect(vm.invalid).toEqual(true);
  });

  it("should mark as invalid when discount amount is initialized as over 100", () => {
    const { vm } = mount(DiscountCounter, {
      props: {
        modelValue: 101,
      },
    });
    expect(vm.discountAmount).toEqual(101);
    expect(vm.invalid).toEqual(true);
  });

  it("should mark as invalid when discount amount is modified to over 100", () => {
    const { vm } = mount(DiscountCounter, {
      props: {
        modelValue: 100,
      },
    });

    expect(vm.discountAmount).toEqual(100);
    expect(vm.invalid).toEqual(false);
    vm.discountAmount = 101;
    expect(vm.invalid).toEqual(true);
  });

  it("should prevent alpha keys and allow numeric keys in the input", () => {
    const { vm } = mount(DiscountCounter, {
      props: {
        modelValue: 100,
      },
    });

    const spy = vi.fn();
    vm.onKeydown({ key: "a", preventDefault: spy });
    expect(spy).toHaveBeenCalledTimes(1);
    vm.onKeydown({ key: "0", preventDefault: spy });
    expect(spy).toHaveBeenCalledTimes(1);
    vm.onKeydown({ key: ".", preventDefault: spy });
    expect(spy).toHaveBeenCalledTimes(2);
  });
});
