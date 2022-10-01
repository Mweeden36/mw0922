<script setup>
import { RouterView } from "vue-router";
import HeaderView from "@/views/HeaderView.vue";
</script>

<template>
  <div>
    <HeaderView />
    <main>
      <RouterView />
    </main>
  </div>
</template>
