<script setup>
import { computed } from 'vue';
import ToolCardImg from '@/views/ToolCardImg.vue';
import rentalCharges from '@/data/rental_charges';

const props = defineProps({
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
});

const dailyRate = computed(() => {
  return rentalCharges.find(rentalCharge => rentalCharge.type === props.type).dailyCharge;
});
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
  padding: 5px;
  margin: 10px 0px;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 1px 2px 1px $color-tertiary;
  }
  .tool-card-info {
    padding: 0px 5px;
    .tool-card-title {
      padding-bottom: 5px;
    }
  }
}
</style>