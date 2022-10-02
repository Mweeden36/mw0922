<template>
  <div class="discount-amount__wrapper">
    <b class="checkout-form__label">Discount Amount:</b>
    <input
      v-model="discountAmount"
      type="number"
      class="checkout-discount"
      :class="invalid ? 'invalid' : ''"
      @keydown="onKeydown"
    />
    <div v-if="invalid" class="error-notification color--danger">
      Please make sure the discount amount is between 0 and 100%.
    </div>
  </div>
</template>

<script>
export default {
  name: "DiscountCounter",

  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      discountAmount: this.value,
      specialKeys: ["ArrowLeft", "ArrowRight", "Backspace", "Delete", "-", "+"],
    };
  },

  computed: {
    invalid() {
      return this.discountAmount > 100 || this.discountAmount < 0;
    },
  },

  methods: {
    onKeydown(e) {
      if (this.specialKeys.indexOf(e.key) === -1 && /[^0-9]/.test(e.key)) {
        // If it's not in the list of special keys, and not 0-9, don't
        // allow the user to type it.
        e.preventDefault();
      }
    },
  },

  watch: {
    discountAmount() {
      this.$emit("update:modelValue", this.discountAmount);
    },
  },
};
</script>

<style lang="scss" scoped>
.discount-amount__wrapper {
  .checkout-discount {
    outline: none;
    &.invalid {
      border-color: red;
    }
  }
}
</style>
