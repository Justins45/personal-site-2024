<script setup lang="ts">
import {ArrowRightIcon} from '@heroicons/vue/24/solid'
</script>

<template>
  <div class="bg-offblack-500 py-5 px-3">
    <h2 class="text-gold font-bold text-center text-5xl">Let's Work Together</h2>
    <div class="text-offwhite-500 text-center mt-5">
      <RouterLink to="/contact">
        <p class="text-xl tracking-wider hover:underline hover:decoration-gold underline-offset-2">
          Get in touch and we will create something
          <span class="flex items-center justify-center">
            amazing <ArrowRightIcon class="text-gold w-6 h-6 ml-3" />
          </span>
        </p>
      </RouterLink>
    </div>
  </div>
</template>