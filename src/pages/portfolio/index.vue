<script setup lang="ts">
import LetsWorkTogether from "@/components/LetsWorkTogether.vue"
import BLCCollage from "@/assets/images/banff-log-cabin-collage.jpg"
import PPCollage from "@/assets/images/personal-project-collage.jpg"
import ComponentsCollage from "@/assets/images/artsman-components-collage.jpg"

import MDGold from "@/assets/images/mb-gold.png"
import MDMaroon from "@/assets/images/mb-maroon.png"
import MDTeal from "@/assets/images/mb-teal.png"
import MDPurple from "@/assets/images/mb-purple.png"
import MDGrey from "@/assets/images/mb-grey.png"
import MDPeach from "@/assets/images/mb-peach.png"
import { definePage } from "vue-router/auto"
definePage({
  name: "portfolio",
  path: "/portfolio",
  meta: {
    title: "Justin Shaw - Portfolio"
  }
})
</script>

<template>
  <div>
    <div class="mx-3 my-3">
      <h1 class="text-3xl font-semibold">Portfolio Projects</h1>
      <div class="mt-5 md:flex md:justify-around">
        <div class="mx-auto w-56">
          <RouterLink to="/portfolio/banfflogcabin">
            <img
              :src="BLCCollage"
              alt="Banff Log Cabin collage"
              class="mx-auto mb-10 h-56 w-56 rounded-lg object-cover object-center shadow-lg shadow-[rgb(0,0,0,0.4)] hover:shadow-offblack-300"
            />
          </RouterLink>
        </div>
        <div class="mx-auto w-56">
          <RouterLink to="/portfolio/personalproject">
            <img
              :src="PPCollage"
              alt="This current website collage"
              class="mx-auto mb-10 h-56 w-56 rounded-lg object-cover object-center shadow-lg shadow-[rgb(0,0,0,0.4)] hover:shadow-offblack-300"
            />
          </RouterLink>
        </div>
        <div class="mx-auto w-56">
          <RouterLink to="/portfolio/components">
            <img
              :src="ComponentsCollage"
              alt="Artsman components collage"
              class="mx-auto mb-10 h-56 w-56 rounded-lg object-cover object-center shadow-lg shadow-[rgb(0,0,0,0.4)] hover:shadow-offblack-300"
            />
          </RouterLink>
        </div>
      </div>
    </div>
    <LetsWorkTogether />
    <div
      class="mx-3 my-8 space-y-8 sm:mx-auto sm:flex sm:max-w-3xl sm:flex-wrap sm:justify-around sm:gap-y-5 sm:space-y-0 md:py-10"
    >
      <img
        :src="MDGold"
        alt="Gold mood board"
        class="mx-auto h-56 w-56 rounded-lg object-cover object-center shadow-lg shadow-[rgba(0,0,0,0.4)]"
      />
      <img
        :src="MDMaroon"
        alt="Maroon mood board"
        class="mx-auto h-56 w-56 rounded-lg object-cover object-center shadow-lg shadow-[rgba(0,0,0,0.4)]"
      />
      <img
        :src="MDTeal"
        alt="Teal mood board"
        class="mx-auto h-56 w-56 rounded-lg object-cover object-center shadow-lg shadow-[rgba(0,0,0,0.4)]"
      />
      <img
        :src="MDPurple"
        alt="Purple mood board"
        class="mx-auto h-56 w-56 rounded-lg object-cover object-center shadow-lg shadow-[rgba(0,0,0,0.4)]"
      />
      <img
        :src="MDGrey"
        alt="Grey mood board"
        class="mx-auto h-56 w-56 rounded-lg object-cover object-center shadow-lg shadow-[rgba(0,0,0,0.4)]"
      />
      <img
        :src="MDPeach"
        alt="Peach mood board"
        class="mx-auto h-56 w-56 rounded-lg object-cover object-center shadow-lg shadow-[rgba(0,0,0,0.4)]"
      />
    </div>
  </div>
</template>
