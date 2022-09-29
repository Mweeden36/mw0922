<script>
import ToolCardImg from '@/components/ToolCardImg.vue';
import rentalCharges from '@/data/rental_charges';

export default {
  props: {
    brand: {
      type: String,
      required: true,
    },

    code: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },
  },

  components: {
    ToolCardImg,
  },

  computed: {
    checkoutUrl() {
      return `/checkout?tool=${this.code}`;
    },

    dailyRate() {
      return rentalCharges.find(rentalCharge => rentalCharge.type === this.type).dailyCharge;
    },
  },
};

</script>


<template>
  <div class="tool-card__wrapper">
    <ToolCardImg :code="code" class="tool-card-image" />
    <div class="tool-card-info">
      <h1 class="tool-card-title">
        {{ brand }} {{ type }}
      </h1>
      <div class="font-size--16">
        Daily Rate: <b>${{ dailyRate }}</b>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/colors';

.tool-card__wrapper {
  display: flex;
  box-sizing: border-box;
  cursor: pointer;
  text-decoration: none;
  .tool-card-info {
    padding: 0px 5px;
    .tool-card-title {
      padding-bottom: 5px;
    }
  }
}
</style>