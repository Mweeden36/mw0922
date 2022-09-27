<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
});

let isError = ref(false);

const imgSrc = computed(() => {
  return `../assets/images/${props.code}.jpg`
});

const onImageError = () => {
  isError.value = true;
};
</script>

<template>
  <div class="tool-card-img__wrapper">
    <img v-if="!isError" :src="imgSrc" @error="onImageError" />
    <vue-feather v-else type="tool" />
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/colors';
@import '../styles/borders';

.tool-card-img__wrapper {
  padding: 10px;
  border: 1px solid $color-tertiary;
  border-radius: $border-radius;
  box-shadow: $box-shadow;
}
</style>