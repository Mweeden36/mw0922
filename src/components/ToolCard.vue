<template>
  <div class="tool-card__wrapper" :class="code">
    <ToolCardImg :code="code" class="tool-card-image" />
    <div class="tool-card-info">
      <h1 class="tool-card-title">{{ brand }} {{ toolType }}</h1>
      <div class="font-size--16" v-if="dailyRate">
        Daily Rate: <b class="tool-rental-rate">${{ dailyRate }}</b>
      </div>
    </div>
  </div>
</template>

<script>
import ToolCardImg from "@/components/ToolCardImg.vue";
import rentalChargesMixin from "@/mixins/rentalCharges";

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

    toolType: {
      type: String,
      required: true,
    },
  },

  mixins: [rentalChargesMixin],

  components: {
    ToolCardImg,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/colors";

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
