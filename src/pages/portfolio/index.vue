<script setup lang="ts">
import LetsWorkTogether from '@/components/LetsWorkTogether.vue'
</script>

<template>
  <div >
    <div class="mx-3 my-3">
      <h1 class="font-semibold text-3xl">Portfolio Projects</h1>
      <div class="mt-5">
        <RouterLink to="/banfflogcabin">
          <img src="" alt="Banff Log Cabin collage" class="mb-3">
        </RouterLink>
        <RouterLink to="/personalproject">
          <img src="" alt="This current website collage" class="mb-3">
        </RouterLink>
        <RouterLink to="/components">
          <img src="" alt="Artsman components collage" class="mb-3">
        </RouterLink>
      </div>
    </div>
    <LetsWorkTogether />
    <div class="mx-3 my-3 space-y-5">
      <img src="" alt="Gold mood board">
      <img src="" alt="Maroon mood board">
      <img src="" alt="Teal mood board">
      <img src="" alt="Purple mood board">
      <img src="" alt="Grey mood board">
      <img src="" alt="Peach mood board">
    </div>
  </div>
</template>
