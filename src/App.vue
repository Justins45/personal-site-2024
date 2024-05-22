<script setup lang="ts">
import { RouterView } from "vue-router"
import Header from "@/components/Header.vue"
</script>

<template>
  <Header />
  <div class="mx-auto max-w-7xl">
    <RouterView />
  </div>
</template>
