import rentalCharges from "@/data/rental_charges";

export default {
  computed: {
    dailyRate() {
      return this.rentalCharge.dailyCharge || 0;
    },

    rentalCharge() {
      return rentalCharges.find(
        (rentalCharge) => rentalCharge.type === this.toolType
      );
    },
  },
};
