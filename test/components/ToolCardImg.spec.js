import ToolCardImg from "../../src/components/ToolCardImg.vue";
import VueFeather from "vue-feather";
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

describe("Toolcard.vue", () => {
  it("should compute the correct image source url", () => {
    const { vm } = mount(ToolCardImg, {
      propsData: {
        code: "JAKD",
      },
      global: {
        stubs: {
          "vue-feather": VueFeather,
        },
      },
    });
    expect(vm.imgSrc).toEqual("/images/JAKD.jpg");
  });

  it("should generate the correct non-error html", () => {
    const wrapper = mount(ToolCardImg, {
      propsData: {
        code: "JAKD",
      },
      global: {
        stubs: {
          "vue-feather": VueFeather,
        },
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should generate the correct non-error html", () => {
    const wrapper = mount(ToolCardImg, {
      propsData: {
        code: "JAKD",
      },
      global: {
        stubs: {
          "vue-feather": VueFeather,
        },
      },
    });

    expect(wrapper.vm.isError).toEqual(false);
    wrapper.vm.onImageError();
    expect(wrapper.vm.isError).toEqual(true);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
