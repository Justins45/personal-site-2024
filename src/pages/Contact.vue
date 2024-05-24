<script setup lang="ts">
import { PhoneIcon } from "@heroicons/vue/24/solid"
import { EnvelopeIcon } from "@heroicons/vue/24/outline"
import HaveAQuestion from "@/components/HaveAQuestion.vue"
</script>

<template>
  <div class="mx-3 mt-3">
    <h1
      class="text-center text-5xl font-black md:mx-auto md:w-96 md:text-7xl lg:my-10 lg:w-8/12 lg:text-8xl"
    >
      Let's Work Together
    </h1>
    <div class="mt-5 h-[1px] bg-offblack-300/30"></div>
    <div class="mb-8 mt-5 text-center md:mt-10 md:flex md:justify-around">
      <div>
        <div class="flex-start mb-2 flex justify-center">
          <PhoneIcon class="mr-1 mt-0.5 h-6 w-6 md:mt-0 md:h-8 md:w-8" />
          <h2 class="text-2xl font-semibold md:text-3xl">Call / Text</h2>
        </div>
        <a
          href="tel:+14039881047"
          class="text-xl font-medium text-gold decoration-gold underline-offset-2 hover:underline md:text-2xl"
          >(403) 988-1047</a
        >
      </div>
      <div class="mt-5 md:mt-0">
        <div class="flex-start mb-2 flex justify-center">
          <EnvelopeIcon class="mr-1 mt-0.5 h-6 w-6 md:mt-0 md:h-8 md:w-8" />
          <h2 class="text-2xl font-semibold md:text-3xl">Email</h2>
        </div>
        <a
          href="mailto: shaw.justin@shaw.ca"
          class="text-xl font-medium text-gold decoration-gold underline-offset-2 hover:underline md:text-2xl"
          >shaw.justin@shaw.ca</a
        >
      </div>
    </div>
    <HaveAQuestion />
  </div>
</template>
