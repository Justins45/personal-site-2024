<script setup lang="ts">
import { RouterView } from "vue-router"
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
</script>

<template>
  <div class="bg-offwhite-500">
    <Header />
    <div class="mx-auto max-w-7xl">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>
