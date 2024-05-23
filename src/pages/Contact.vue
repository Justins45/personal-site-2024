<script setup lang="ts">
import { PhoneIcon } from "@heroicons/vue/24/solid"
import { EnvelopeIcon } from "@heroicons/vue/24/outline"
import HaveAQuestion from "@/components/HaveAQuestion.vue"
</script>

<template>
  <div class="mx-3 mt-3">
    <h1 class="text-center text-5xl font-black">Let's Work Together</h1>
    <div class="mt-5 h-[1px] bg-offblack-300/30"></div>
    <div class="mb-8 mt-5 text-center">
      <div>
        <div class="flex-start mb-2 flex justify-center">
          <PhoneIcon class="mr-1 mt-0.5 h-6 w-6" />
          <h2 class="text-2xl font-semibold">Call / Text</h2>
        </div>
        <a
          href="tel:+14039881047"
          class="text-xl font-medium text-gold decoration-gold underline-offset-2 hover:underline"
          >(403) 988-1047</a
        >
      </div>
      <div class="mt-5">
        <div class="flex-start mb-2 flex justify-center">
          <EnvelopeIcon class="mr-1 mt-0.5 h-6 w-6" />
          <h2 class="text-2xl font-semibold">Email</h2>
        </div>
        <a
          href="mailto: shaw.justin@shaw.ca"
          class="text-xl font-medium text-gold decoration-gold underline-offset-2 hover:underline"
          >shaw.justin@shaw.ca</a
        >
      </div>
    </div>
    <HaveAQuestion />
  </div>
</template>
