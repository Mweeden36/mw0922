<template>
  <div class="checkout-form__wrapper panel">
    <div class="checkout-form__item">
      <b class="checkout-form__label">Select a tool: </b>
      <VueMultiselect
        class="tool-selector"
        :allowEmpty="false"
        deselectLabel=""
        label="display"
        :options="toolOptions"
        placeholder="Select a tool to checkout"
        trackBy="code"
        v-model="selectedOption"
      >
        <template v-slot:option="props">
          <ToolCard
            :brand="props.option.brand"
            :code="props.option.code"
            :toolType="props.option.type"
          />
        </template>
      </VueMultiselect>
    </div>
    <div class="checkout-form__item">
      <RentalDates @input="onChangeDates" />
    </div>
    <div class="checkout-form__item">
      <DiscountCounter v-model="discountPercent" />
    </div>
    <div class="checkout-form__item">
      <button class="button checkout-button" @click="onClickCheckout">
        Checkout
      </button>
    </div>
  </div>
</template>

<script>
import "@vuepic/vue-datepicker/dist/main.css";
import VueMultiselect from "vue-multiselect";
import DiscountCounter from "@/components/DiscountCounter.vue";
import RentalDates from "@/components/RentalDates.vue";
import ToolCard from "@/components/ToolCard.vue";
import tools from "@/data/tools.json";
import rentalChargesMixin from "@/mixins/rentalCharges";

export default {
  name: "CheckoutForm",

  components: {
    DiscountCounter,
    RentalDates,
    ToolCard,
    VueMultiselect,
  },

  mixins: [rentalChargesMixin],

  data() {
    return {
      selectedOption: null,
      daysToRent: 0,
      discountPercent: 0,
      rentalStart: null,
      rentalEnd: null,
    };
  },

  computed: {
    discountAmount() {
      return Number((this.subtotal * (this.discountPercent / 100)).toFixed(2));
    },

    discountIsValid() {
      return 100 >= this.discountPercent && this.discountPercent >= 0;
    },

    rentalAgreementInfo() {
      return {
        toolCode: this.selected.code,
        checkoutDate: this.formatDate(this.rentalStart),
        returnDate: this.formatDate(this.rentalEnd),
        discountPercent: this.discountPercent,
        chargeableDays: this.daysToRent,
        dailyCharge: this.dailyRate.toFixed(2),
        prediscountAmount: this.subtotal.toFixed(2),
        discountAmount: this.discountAmount.toFixed(2),
        finalAmount: this.total.toFixed(2),
      };
    },

    selected() {
      /* There's a bug with vue-multiselect where the placeholder text
       *  won't show up if the value is {}. Since we want to be able to
       *  access selected.code in a computed prop, I do this to prevent
       *  an error */
      return this.selectedOption ? this.selectedOption : {};
    },

    subtotal() {
      return this.dailyRate * this.daysToRent;
    },

    toolOptions() {
      return tools.map((tool) => {
        return {
          ...tool,
          display: `${tool.brand} ${tool.type}`,
        };
      });
    },

    toolType() {
      return this.selected.type;
    },

    total() {
      return this.subtotal - this.discountAmount;
    },

    valid() {
      return (
        this.daysToRent > 0 &&
        this.selectedOption !== null &&
        this.discountIsValid
      );
    },
  },

  methods: {
    formatDate(dateVal) {
      const fullYear = dateVal.getFullYear();
      const shortYear = fullYear.toString().substring(2);
      const month = this.prependZero(dateVal.getMonth() + 1);
      const day = this.prependZero(dateVal.getDate());
      return `${month}/${day}/${shortYear}`;
    },

    onChangeDates(data) {
      // Loop over the rental date keys and sync them up.
      ["rentalStart", "rentalEnd", "daysToRent"].forEach((key) => {
        this[key] = data[key];
      });
    },

    onClickCheckout() {
      if (this.valid) {
        // This is typically where I would send the agreement info to the server.
        // If the response is successful, I'd emit this event. Otherwise I'd have some
        // error messaging for the user.
        console.log(this.rentalAgreementInfo);
        return this.$emit("confirm", this.rentalAgreementInfo);
      }
      alert("Please double check your selections");
    },

    prependZero(val) {
      if (val < 10) {
        return `0${val}`;
      }

      return val.toString();
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style lang="scss" scoped>
@import "../styles/borders";

.checkout-form__wrapper {
  width: 500px;
  .checkout-form__item {
    padding: 15px 0px;
    .tool-selector {
      display: inline-block;
    }
    :deep(.checkout-form__label) {
      display: block;
      padding-bottom: 10px;
    }
  }
}
</style>
