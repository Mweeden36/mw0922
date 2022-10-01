<template>
  <div>
    <CheckoutForm @confirm="onConfirmCheckout" v-if="!rentalAgreement" />
    <RentalAgreement
      v-else
      @back="onClickBack"
      :rentalAgreement="rentalAgreement"
    />
  </div>
</template>

<script>
import CheckoutForm from "@/components/CheckoutForm.vue";
import RentalAgreement from "@/components/RentalAgreement.vue";

export default {
  name: "CheckoutView",

  components: {
    CheckoutForm,
    RentalAgreement,
  },

  data() {
    return {
      rentalAgreement: null,
    };
  },

  methods: {
    onClickBack() {
      this.rentalAgreement = null;
    },

    onConfirmCheckout(data) {
      this.rentalAgreement = data;
    },
  },
};
</script>
