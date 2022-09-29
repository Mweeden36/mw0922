<template>
  <div class="rental-agreement panel">
    <h1 class="rental-agreement__header">Rental Agreement</h1>
    <RentalAgreementItem
      v-for="(val, key) in rentalAgreement"
      :key="key"
      :itemType="key"
      :value="val"
    />
    <button @click="$emit('back')">Back to Rental Form</button>
  </div>
</template>

<script>
import RentalAgreementItem from "@/components/RentalAgreementItem.vue";

export default {
  name: "RentalAgreement",

  components: {
    RentalAgreementItem,
  },

  props: {
    rentalAgreement: {
      type: Object,
      required: true,
    },
  },

  methods: {
    formatCurrency(val) {
      return `$${val.toFixed(2)}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.rental-agreement {
  width: 500px;
  .rental-agreement__header {
    padding-bottom: 10px;
  }
}
</style>
