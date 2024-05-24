<script setup lang="ts">
import { ArrowRightIcon } from "@heroicons/vue/24/solid"
</script>

<template>
  <div class="bg-offblack-500 px-3 py-5 md:py-16">
    <h2 class="text-center text-5xl font-bold text-gold">Let's Work Together</h2>
    <div class="mt-5 text-center text-offwhite-500">
      <RouterLink to="/contact">
        <p
          class="justify-center text-xl tracking-wider underline-offset-2 hover:underline hover:decoration-gold md:flex"
        >
          Get in touch and we will create something
          <span class="flex items-center justify-center">
            amazing <ArrowRightIcon class="ml-3 h-6 w-6 text-gold" />
          </span>
        </p>
      </RouterLink>
    </div>
  </div>
</template>
