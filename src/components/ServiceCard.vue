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
    <div class="mx-auto w-10/12 max-w-sm bg-offblack-300 px-3 pb-5 md:h-full">
      <div class="ml-2 pl-3 pt-3">
        <component :is="props.icon" class="h-16 w-16 text-gold" />
      </div>
      <div class="ml-3 mt-5">
        <h3 class="ml-2 w-32 text-xl font-medium tracking-wider">{{ props.title }}</h3>
        <div class="-mt-2.5 h-2 w-36 rounded-full bg-gold md:w-48 lg:w-56"></div>
        <p class="ml-2 mt-5">{{ props.text }}</p>
      </div>
    </div>
  </div>
</template>
