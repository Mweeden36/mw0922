<template>
  <div class="discount-amount__wrapper">
    <b class="checkout-form__label">Discount Amount:</b>
    <input
      v-model="discountAmount"
      type="number"
      class="checkout-discount"
      :class="invalid ? 'invalid' : ''"
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
    };
  },

  computed: {
    invalid() {
      return this.discountAmount > 100 || this.discountAmount < 0;
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
