<script setup lang="ts">
import { ref } from "vue"
import { Dialog, DialogPanel } from "@headlessui/vue"
import { XMarkIcon } from "@heroicons/vue/24/outline"

import Insagram from "@/assets/svgs/instagram.svg"
import LinkedIn from "@/assets/svgs/linkedin.svg"
import BurgerMenu from "@/assets/svgs/burger-menu.svg"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact Me", href: "/contact" }
]

const navOpen = ref(false)
</script>

<template>
  <header>
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-3 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:hidden">
        <button
          type="button"
          class="inline-flex items-center justify-center"
          @click="navOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <img
            :src="BurgerMenu"
            alt="burger menu svg"
            class="h-8 w-8 text-offblack-500"
            aria-hidden="true"
          />
        </button>
      </div>
      <div class="flex lg:flex-1">
        <RouterLink to="/" class="hidden text-xl font-bold lg:block"> Justin Shaw </RouterLink>
      </div>
      <div class="hidden text-xl font-medium lg:flex lg:gap-x-12">
        <RouterLink v-for="item in navigation" :key="item.name" :to="item.href">{{
          item.name
        }}</RouterLink>
      </div>
      <div class="flex flex-1 items-center justify-end gap-x-2">
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
    </nav>
    <Dialog class="lg:hidden" @close="navOpen = false" :open="navOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="sm:ring-gray-900/10 fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-offwhite-500 p-3 sm:max-w-sm sm:ring-1"
      >
        <div class="flex items-center">
          <button type="button" @click="navOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-8 w-8" aria-hidden="true" />
          </button>
          <div class="flex flex-1 items-center justify-end gap-x-2">
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

        <div class="mt-10 flex flex-col space-y-4 text-center text-3xl font-medium">
          <RouterLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            class="rounded-xl py-2 hover:bg-offwhite-700"
            @click="navOpen = false"
            >{{ item.name }}</RouterLink
          >
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>
