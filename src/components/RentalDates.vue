<template>
  <div class="rental-dates__wrapper" :class="invalid ? 'invalid' : ''">
    <b class="checkout-form__label"> Rental Dates: </b>
    <Datepicker
      class="date-picker start"
      v-model="rentalStart"
      :format="format"
      :clearable="false"
    />
    <span class="date-separator">to</span>
    <Datepicker
      class="date-picker end"
      v-model="rentalEnd"
      :format="format"
      :clearable="false"
    />
    <div v-if="invalid" class="error-notification color--danger">
      Please make sure the return date is after the checkout date.
    </div>
  </div>
</template>

<script>
import Datepicker from "@vuepic/vue-datepicker";

export default {
  name: "RentalDates",

  components: {
    Datepicker,
  },

  data() {
    const startDate = new Date();
    const defaultDaysToRent = 7;
    return {
      format: "MM/dd/yy",
      millisecondsInDay: 1000 * 60 * 60 * 24,
      rentalStart: startDate,
      rentalEnd: new Date(
        new Date().setDate(startDate.getDate() + defaultDaysToRent)
      ),
    };
  },

  computed: {
    daysToRent() {
      const diff = this.rentalEnd.getTime() - this.rentalStart.getTime();
      return Math.round(diff / this.millisecondsInDay);
    },

    invalid() {
      return this.daysToRent < 1;
    },
  },

  watch: {
    daysToRent() {
      this.$emit("input", {
        rentalStart: this.rentalStart,
        rentalEnd: this.rentalEnd,
        daysToRent: this.daysToRent,
      });
    },
  },

  mounted() {
    this.$emit("input", {
      rentalStart: this.rentalStart,
      rentalEnd: this.rentalEnd,
      daysToRent: this.daysToRent,
    });
  },
};
</script>

<style lang="scss" scoped>
.rental-dates__wrapper {
  &.invalid {
    :deep(.dp__input) {
      border-color: red;
    }
  }
  .date-picker {
    width: 150px;
    display: inline-block;
  }
  .date-separator {
    padding: 0px 5px;
  }
}
</style>

<style lang="scss">
// Can't use scoped styles because datepicker renders to body.
.dp__instance_calendar {
  .dp__button {
    display: none;
  }
}
</style>
