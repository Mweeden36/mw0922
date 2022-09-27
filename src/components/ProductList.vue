<script setup>
import { ref } from 'vue';
import ToolCard from '@/views/ToolCard.vue';
import toolsData from '@/data/tools.json';

const tools = ref(toolsData);
</script>

<template>
  <div class="product-list__wrapper">
    <ToolCard v-for="tool in tools" :key="tool.code" v-bind="tool" />
  </div>
</template>

<style lang="scss" scoped>
</style>
