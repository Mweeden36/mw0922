<template>
  <div class="tool-card-img__wrapper" :class="isError ? 'error' : ''">
    <img v-if="!isError" :src="imgSrc" @error="onImageError" />
    <vue-feather v-else type="tool" />
  </div>
</template>

<script>
export default {
  name: "ToolCardImg",

  props: {
    code: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      isError: false,
    };
  },

  computed: {
    imgSrc() {
      return `/images/${this.code}.jpg`;
    },
  },

  methods: {
    onImageError() {
      this.isError = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/colors";
@import "../styles/borders";

.tool-card-img__wrapper {
  border: 1px solid $color-tertiary;
  border-radius: $border-radius;
  box-shadow: $box-shadow;
  background: #fff;
  &.error {
    padding: 10px;
  }
  img {
    max-width: 40px;
    max-height: 40px;
  }
}
</style>
