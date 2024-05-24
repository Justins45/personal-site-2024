<script setup lang="ts">
import { RouterView } from "vue-router"
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
</script>

<template>
  <div class="bg-offwhite-500 min-h-svh flex flex-col justify-between">
    <div>
      <Header />
      <div class="mx-auto max-w-7xl">
        <RouterView />
      </div>
    </div>
    <Footer />
  </div>
</template>
