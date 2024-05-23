<script setup lang="ts">
import { PlusIcon, MinusIcon } from '@heroicons/vue/20/solid'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'
</script>

<template>
  <div class="mx-3 mt-3">
    <h1 class="text-3xl font-medium">Frequently Asked Questions</h1>
    <!-- TODO: Make Divider into a component -->
    <div class="my-5">
      <div class="bg-offblack-300/30 h-[1px] mt-5"></div>
      <div>
        <!-- TODO: Make Disclosure into a component ?? ~~Maybe~~ -->
        <Disclosure v-slot="{ open }">
          <DisclosureButton class="flex w-full justify-between mt-3">
            <span class="font-semibold text-2xl text-start w-64">How much do you charge?</span>
            <PlusIcon
              v-if="!open"
              class="h-8 w-8 mt-1"
            />
            <MinusIcon v-if="open" class="h-8 w-8 mt-1" />
          </DisclosureButton>
          <DisclosurePanel class="mt-2">
            My pricing is based off how large of a project you will bring me, and how fast you need it done. A minimum price would be $600CAD  for any website. Any additions on top would be additional.
          </DisclosurePanel>
        </Disclosure>
      </div>
      <div class="bg-offblack-300/30 h-[1px] mt-5"></div>
      <div>
        <Disclosure v-slot="{ open }">
          <DisclosureButton class="flex w-full justify-between mt-3">
            <span class="font-semibold text-2xl text-start w-64">What is included in the minimum price?</span>
            <PlusIcon
              v-if="!open"
              class="h-8 w-8 mt-1"
            />
            <MinusIcon v-if="open" class="h-8 w-8 mt-1" />
          </DisclosureButton>
          <DisclosurePanel class="mt-2">
            <div>
              <p>The minimum price includes:</p>
              <ul class="list-disc ml-5">
                <li>Base landing page</li>
                <li>2 additional simple pages of your choosing</li>
                <li>Styling for the 3 total pages</li>
              </ul>
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
      <div class="bg-offblack-300/30 h-[1px] mt-5"></div>
      <div>
        <Disclosure v-slot="{ open }">
          <DisclosureButton class="flex w-full justify-between mt-3">
            <span class="font-semibold text-2xl text-start w-64">How long will it take to complete?</span>
            <PlusIcon
              v-if="!open"
              class="h-8 w-8 mt-1"
            />
            <MinusIcon v-if="open" class="h-8 w-8 mt-1" />
          </DisclosureButton>
          <DisclosurePanel class="mt-2">
            The length of time to complete each projects depends on the schedule you need it completed within, the sooner you need it the sooner ill complete it, but for what is included in the minimums it will take about 2-3 weeks depending on the content being built.
          </DisclosurePanel>
        </Disclosure>
      </div>
      <div class="bg-offblack-300/30 h-[1px] mt-5"></div>
      <div>
        <Disclosure v-slot="{ open }">
          <DisclosureButton class="flex w-full justify-between mt-3">
            <span class="font-semibold text-2xl text-start w-64">What do I need to have a website built?</span>
            <PlusIcon
              v-if="!open"
              class="h-8 w-8 mt-1"
            />
            <MinusIcon v-if="open" class="h-8 w-8 mt-1" />
          </DisclosureButton>
          <DisclosurePanel class="mt-2">
            <div>
              <p>The checklist items that I would like you to have ready to go are:</p>
              <ul class="list-disc ml-5">
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
