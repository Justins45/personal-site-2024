<script setup lang="ts">
import type { Component } from "vue"
const props = defineProps<{
  title: string
  icon: Component
  text: string
}>()
</script>

<template>
  <div class="mt-5">
    <div class="mx-auto w-10/12 bg-offblack-300 px-3 pb-5">
      <div class="ml-2 pl-3 pt-3">
        <component :is="props.icon" class="h-16 w-16 text-gold" />
      </div>
      <div class="ml-3 mt-5">
        <h3 class="ml-2 w-32 text-xl font-medium tracking-wider">{{ props.title }}</h3>
        <div class="-mt-2.5 h-2 w-56 rounded-full bg-gold"></div>
        <p class="ml-2 mt-5">{{ props.text }}</p>
      </div>
    </div>
  </div>
</template>
