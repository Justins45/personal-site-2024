<script setup lang="ts">
import type { Component } from "vue"
const props = defineProps<{
  title: string,
  icon: Component,
  text: string
}>()

</script>

<template>
  <div class="mt-5">
    <div class="bg-offblack-300 w-10/12 pb-5 px-3 mx-auto">
      <div class="pl-3 pt-3 ml-2">
        <component :is="props.icon" class="w-16 h-16 text-gold" />
      </div>
      <div class="ml-3 mt-5">
        <h3 class="text-xl font-medium tracking-wider w-32 ml-2">{{ props.title }}</h3>
        <div class="bg-gold rounded-full h-2 w-56 -mt-2.5"></div>
        <p class="mt-5 ml-2">{{ props.text }}</p>
      </div>
    </div>
  </div>
</template>
