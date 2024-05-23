<script setup lang="ts">
import { ArrowLeftIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <RouterLink to="/portfolio" class="flex flex-start hover:underline underline-offset-2 decoration-gold">
    <ArrowLeftIcon class="w-6 h-6 mr-3" />
    <p class="font-medium text-xl">View Other Projects</p>
  </RouterLink>
</template>