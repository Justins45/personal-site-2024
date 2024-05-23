<script setup lang="ts">
import { EnvelopeIcon } from "@heroicons/vue/24/outline"
import { PhoneIcon } from '@heroicons/vue/24/solid'
import Insagram from "@/assets/svgs/instagram.svg"
import LinkedIn from "@/assets/svgs/linkedin.svg"

// TODO: make footer links send to top of page when clicked

</script>

<template>
  <div class="mx-3 py-3">
    <div>
      <RouterLink to="/" class="text-lg font-semibold tracking-wider"> Justin Shaw </RouterLink>
    </div>
    <div class="mt-3 grid grid-cols-3">
      <div class="col-span-2">
        <ul class="text-xl font-thin">
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
      <div>
        <!-- Icons -->
        <div class="mr-5 flex flex-col items-end space-y-5">
          <a href="mailto: shaw,justin@shaw.ca" aria-label="email">
            <PhoneIcon class="h-8 w-8 text-offblack-500" />
          </a>
          <a href="tel: +14039881047" aria-label="phone">
            <EnvelopeIcon class="h-8 w-8 text-offblack-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/justin-shaw-598786227/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <img :src="LinkedIn" alt="linkedin svg" class="h-8 w-8 text-offblack-500" />
          </a>
          <a
            href="https://www.instagram.com/jx_shaw/"
             target="_blank"
             aria-label="Instagram"
          >
            <img :src="Insagram" alt="instagram svg" class="h-8 w-8 text-offblack-500" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
