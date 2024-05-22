<script setup>
import { ref } from "vue"
import { Dialog, DialogPanel } from "@headlessui/vue"
import { Bars3Icon, XMarkIcon, LinkIcon } from "@heroicons/vue/24/outline"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact Me", href: "/contact" }
]

const mobileMenuOpen = ref(false)
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
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-8 w-8" aria-hidden="true" />
        </button>
      </div>
      <div class="flex lg:flex-1">
        <RouterLink to="/" class="hidden lg:block">
          Justin Shaw
        </RouterLink>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <RouterLink v-for="item in navigation" :key="item.name" :to="item.href" class="">{{
          item.name
        }}</RouterLink>
      </div>
      <div class="flex flex-1 items-center justify-end gap-x-6">
          <a href="https://www.linkedin.com/in/justin-shaw-598786227/" class="" aria-label="LinkedIn">
            <LinkIcon class="w-6 h-6" />
          </a>
        <a href="https://www.linkedin.com/in/justin-shaw-598786227/" class="" aria-label="Instagram">
          <LinkIcon class="w-6 h-6" />
        </a>
      </div>
    </nav>
    <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-offwhite-500 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center">
          <button type="button" class="" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-8 w-8" aria-hidden="true" />
          </button>
          <div class="flex flex-1 items-center justify-end gap-x-6">
            <a href="https://www.linkedin.com/in/justin-shaw-598786227/" class="" aria-label="LinkedIn">
              <LinkIcon class="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/justin-shaw-598786227/" class="" aria-label="Instagram">
              <LinkIcon class="w-6 h-6" />
            </a>
          </div>
        </div>

        <div class="flex flex-col text-center font-medium space-y-4 mt-10 text-3xl">
          <RouterLink v-for="item in navigation" :key="item.name" :to="item.href" class="hover:bg-offwhite-700 rounded-xl py-2">{{
            item.name
          }}</RouterLink>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>


