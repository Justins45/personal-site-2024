<script setup lang="ts">
import { PhoneIcon } from "@heroicons/vue/24/solid"
import { EnvelopeIcon } from "@heroicons/vue/24/outline"
import HaveAQuestion from "@/components/HaveAQuestion.vue"
</script>

<template>
  <div class="mx-3 mt-3">
    <h1 class="text-5xl text-center font-black">Let's Work Together</h1>
    <div class="bg-offblack-300/30 h-[1px] mt-5"></div>
    <div class="text-center mt-5 mb-8">
      <div>
        <div class="flex flex-start justify-center mb-2">
          <PhoneIcon class="w-6 h-6 mr-1 mt-0.5" />
          <h2 class="text-2xl font-semibold">Call / Text</h2>
        </div>
        <a
          href="tel:+14039881047"
          class="text-xl font-medium text-gold decoration-gold hover:underline underline-offset-2"
          >(403) 988-1047</a
        >
      </div>
      <div class="mt-5">
        <div class="flex flex-start justify-center mb-2">
          <EnvelopeIcon class="w-6 h-6 mr-1 mt-0.5" />
          <h2 class="text-2xl font-semibold">Email</h2>
        </div>
        <a
          href="mailto: shaw.justin@shaw.ca"
          class="text-xl font-medium text-gold decoration-gold hover:underline underline-offset-2"
          >shaw.justin@shaw.ca</a
        >
      </div>
    </div>
    <HaveAQuestion />
  </div>
</template>
