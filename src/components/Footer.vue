<script setup lang="ts">
import { LinkIcon } from "@heroicons/vue/24/outline"
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
          <a href="#" aria-label="email">
            <LinkIcon class="h-8 w-8" />
          </a>
          <a href="#" aria-label="phone">
            <LinkIcon class="h-8 w-8" />
          </a>
          <a href="#" aria-label="Instagram">
            <LinkIcon class="h-8 w-8" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <LinkIcon class="h-8 w-8" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
