<template>
  <div class="rental-agreement-item" :class="itemType">
    <b class="rental-agreement__label">{{ label }}</b>
    <span class="rental-agreement__label">{{ displayValue }}</span>
  </div>
</template>

<script>
import tools from "@/data/tools.json";

export default {
  name: "RentalAgreementItem",

  props: {
    itemType: {
      type: String,
      required: true,
    },

    value: {
      required: true,
    },
  },

  data() {
    return {
      currencyFields: [
        "dailyCharge",
        "prediscountAmount",
        "discountAmount",
        "finalAmount",
      ],
      itemTypes: {
        toolCode: "Tool",
        checkoutDate: "Checkout Date",
        returnDate: "Return Date",
        discountPercent: "Discount Percent",
        chargeableDays: "Chargeable Days",
        dailyCharge: "Daily Charge",
        prediscountAmount: "Pre-discount Amount",
        discountAmount: "Discount Amount",
        finalAmount: "Final Amount",
      },
    };
  },

  computed: {
    isCurrencyField() {
      return this.currencyFields.indexOf(this.itemType) !== -1;
    },

    isPercentageField() {
      return this.itemType === "discountPercent";
    },

    label() {
      return this.itemTypes[this.itemType];
    },

    displayValue() {
      if (this.itemType === "toolCode") {
        const toolObj = tools.find((tool) => tool.code === this.value);
        return `${toolObj.brand} ${toolObj.type}`;
      }
      if (this.isCurrencyField) {
        return this.toCurrency(this.value);
      }
      if (this.isPercentageField) {
        return this.toPercentage(this.value);
      }
      return this.value;
    },
  },

  methods: {
    toPercentage(val) {
      return `${val}%`;
    },

    toCurrency(val) {
      // Convert to number for toLocaleString.
      const numericVal = Number(val);
      return `$${numericVal.toLocaleString(undefined, {
        minimumFractionDigits: 2,
      })}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.rental-agreement-item {
  padding: 5px 0px;
  .rental-agreement__label {
    padding-right: 10px;
  }
}
</style>
