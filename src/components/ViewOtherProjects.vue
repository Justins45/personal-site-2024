<script setup lang="ts">
import { ArrowLeftIcon } from "@heroicons/vue/24/outline"
</script>

<template>
  <RouterLink
    to="/portfolio"
    class="flex-start flex decoration-gold underline-offset-2 hover:underline"
  >
    <ArrowLeftIcon class="mr-3 h-6 w-6" />
    <p class="text-xl font-medium">View Other Projects</p>
  </RouterLink>
</template>
