<script setup lang="ts">
import { PlusIcon, MinusIcon } from "@heroicons/vue/20/solid"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue"

import { definePage } from "vue-router/auto"
definePage({
  name: "FAQ",
  path: "/faq",
  meta: {
    title: "Justin Shaw - FAQ"
  }
})
</script>

<template>
  <div class="mx-3 mt-3">
    <h1 class="text-3xl font-medium lg:text-5xl">Frequently Asked Questions</h1>
    <div class="my-5 lg:my-10">
      <div class="mt-5 h-[1px] bg-offblack-300/30"></div>
      <div>
        <Disclosure v-slot="{ open }">
          <DisclosureButton class="mt-3 flex w-full justify-between">
            <span class="w-64 text-start text-2xl font-semibold md:w-full lg:text-3xl"
              >How much do you charge?</span
            >
            <PlusIcon v-if="!open" class="mt-1 h-8 w-8 md:h-10 md:w-10" />
            <MinusIcon v-if="open" class="mt-1 h-8 w-8 md:h-10 md:w-10" />
          </DisclosureButton>
          <DisclosurePanel class="mt-2 lg:py-3 lg:text-lg">
            My pricing is based off how large of a project you will bring me, and how fast you need
            it done. A minimum price would be $600CAD for any website. Any additions on top would be
            additional.
          </DisclosurePanel>
        </Disclosure>
      </div>
      <div class="mt-5 h-[1px] bg-offblack-300/30"></div>
      <div>
        <Disclosure v-slot="{ open }">
          <DisclosureButton class="mt-3 flex w-full justify-between">
            <span class="w-64 text-start text-2xl font-semibold md:w-full lg:text-3xl"
              >What is included in the minimum price?</span
            >
            <PlusIcon v-if="!open" class="mt-1 h-8 w-8 md:h-10 md:w-10" />
            <MinusIcon v-if="open" class="mt-1 h-8 w-8 md:h-10 md:w-10" />
          </DisclosureButton>
          <DisclosurePanel class="mt-2 lg:py-3 lg:text-lg">
            <div>
              <p>The minimum price includes:</p>
              <ul class="ml-5 list-disc">
                <li>Base landing page</li>
                <li>2 additional simple pages of your choosing</li>
                <li>Styling for the 3 total pages</li>
              </ul>
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
      <div class="mt-5 h-[1px] bg-offblack-300/30"></div>
      <div>
        <Disclosure v-slot="{ open }">
          <DisclosureButton class="mt-3 flex w-full justify-between">
            <span class="w-64 text-start text-2xl font-semibold md:w-full lg:text-3xl"
              >How long will it take to complete?</span
            >
            <PlusIcon v-if="!open" class="mt-1 h-8 w-8 md:h-10 md:w-10" />
            <MinusIcon v-if="open" class="mt-1 h-8 w-8 md:h-10 md:w-10" />
          </DisclosureButton>
          <DisclosurePanel class="mt-2 lg:py-3 lg:text-lg">
            The length of time to complete each projects depends on the schedule you need it
            completed within, the sooner you need it the sooner ill complete it, but for what is
            included in the minimums it will take about 2-3 weeks depending on the content being
            built.
          </DisclosurePanel>
        </Disclosure>
      </div>
      <div class="mt-5 h-[1px] bg-offblack-300/30"></div>
      <div>
        <Disclosure v-slot="{ open }">
          <DisclosureButton class="mt-3 flex w-full justify-between">
            <span class="w-64 text-start text-2xl font-semibold md:w-full lg:text-3xl"
              >What do I need to have a website built?</span
            >
            <PlusIcon v-if="!open" class="mt-1 h-8 w-8 md:h-10 md:w-10" />
            <MinusIcon v-if="open" class="mt-1 h-8 w-8 md:h-10 md:w-10" />
          </DisclosureButton>
          <DisclosurePanel class="mt-2 lg:py-3 lg:text-lg">
            <div>
              <p>The checklist items that I would like you to have ready to go are:</p>
              <ul class="ml-5 list-disc">
                <li>All written content</li>
                <li>Any images used and their licencing / sources</li>
                <li>A reliable way to contact you</li>
              </ul>
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  </div>
</template>
