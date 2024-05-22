<script setup lang="ts">
import { LinkIcon } from "@heroicons/vue/24/outline"
</script>

<template>
<div class="mx-3 py-3">
  <div>
    <RouterLink to="/" class="font-semibold text-lg tracking-wider">
      Justin Shaw
    </RouterLink>
  </div>
  <div class="grid grid-cols-3 mt-3">
    <div class="col-span-2">
      <ul class="font-thin text-xl">
        <li class="p-2 ">
          <RouterLink to="/" class="hover:underline">
            Home
          </RouterLink>
        </li>
        <li class="p-2">
          <RouterLink to="/about" class="hover:underline">
            About
          </RouterLink>
        </li>
        <li class="p-2">
          <RouterLink to="/portfolio" class="hover:underline">
            Portfolio
          </RouterLink>
        </li>
        <li class="p-2">
          <RouterLink to="/contact" class="hover:underline">
            Contact Me
          </RouterLink>
        </li>
        <li class="p-2">
          <RouterLink to="/faq" class="hover:underline">
            FAQ
          </RouterLink>
        </li>
      </ul>
    </div>
    <div>
      <!-- Icons -->
      <div class="flex flex-col space-y-5 items-end mr-5">
        <a href="#" aria-label="email">
          <LinkIcon class="w-8 h-8" />
        </a>
        <a href="#" aria-label="phone">
          <LinkIcon class="w-8 h-8" />
        </a>
        <a href="#" aria-label="Instagram">
          <LinkIcon class="w-8 h-8" />
        </a>
        <a href="#" aria-label="LinkedIn">
          <LinkIcon class="w-8 h-8" />
        </a>
      </div>
    </div>
  </div>
</div>
</template>
