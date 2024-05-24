<script setup lang="ts">
import { EnvelopeIcon } from "@heroicons/vue/24/outline"
import { PhoneIcon } from "@heroicons/vue/24/solid"
import Insagram from "@/assets/svgs/instagram.svg"
import LinkedIn from "@/assets/svgs/linkedin.svg"
</script>

<template>
  <div class="mx-3 flex justify-between py-3">
    <div class="lg:flex">
      <div>
        <RouterLink to="/" class="text-xl font-bold">Justin Shaw</RouterLink>
      </div>
      <div class="mt-3 sm:-ml-2 md:-mt-2 lg:ml-5">
        <ul class="flex flex-col text-xl font-thin md:flex-row">
          <li class="p-2">
            <RouterLink to="/" class="hover:underline"> Home </RouterLink>
          </li>
          <li class="p-2">
            <RouterLink to="/about" class="hover:underline"> About </RouterLink>
          </li>
          <li class="p-2">
            <RouterLink to="/portfolio" class="hover:underline"> Portfolio </RouterLink>
          </li>
          <li class="p-2">
            <RouterLink to="/contact" class="hover:underline"> Contact Me </RouterLink>
          </li>
          <li class="p-2">
            <RouterLink to="/faq" class="hover:underline"> FAQ </RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="mr-5 flex flex-col space-y-5 sm:mt-10 sm:w-56 sm:flex-row sm:justify-between sm:space-y-0 md:mt-6 lg:mt-0"
    >
      <a href="tel: +14039881047" aria-label="email">
        <PhoneIcon class="h-8 w-8 text-offblack-500" />
      </a>
      <a href="mailto: shaw,justin@shaw.ca" aria-label="phone">
        <EnvelopeIcon class="h-8 w-8 text-offblack-500" />
      </a>
      <a
        href="https://www.linkedin.com/in/justin-shaw-598786227/"
        target="_blank"
        aria-label="LinkedIn"
      >
        <img :src="LinkedIn" alt="linkedin svg" class="h-8 w-8 text-offblack-500" />
      </a>
      <a href="https://www.instagram.com/jx_shaw/" target="_blank" aria-label="Instagram">
        <img :src="Insagram" alt="instagram svg" class="h-8 w-8 text-offblack-500" />
      </a>
    </div>
  </div>
</template>
