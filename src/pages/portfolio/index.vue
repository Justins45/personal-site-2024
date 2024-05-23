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
</script>

<template>
  <div>
    <div class="mx-3 my-3">
      <h1 class="text-3xl font-semibold">Portfolio Projects</h1>
      <div class="mt-5">
        <RouterLink to="/portfolio/banfflogcabin">
          <img :src="BLCCollage" alt="Banff Log Cabin collage" class="mb-10 w-56 h-56 object-cover object-center mx-auto rounded-lg shadow-lg shadow-[rgb(0,0,0,0.4)] hover:shadow-offblack-300" />
        </RouterLink>
        <RouterLink to="/portfolio/personalproject">
          <img :src="PPCollage" alt="This current website collage" class="mb-10 w-56 h-56 object-cover object-center mx-auto rounded-lg shadow-lg shadow-[rgb(0,0,0,0.4)] hover:shadow-offblack-300" />
        </RouterLink>
        <RouterLink to="/portfolio/components">
          <img :src="ComponentsCollage" alt="Artsman components collage" class="mb-10 w-56 h-56 object-cover object-center mx-auto rounded-lg shadow-lg shadow-[rgb(0,0,0,0.4)] hover:shadow-offblack-300" />
        </RouterLink>
      </div>
    </div>
    <LetsWorkTogether />
    <div class="mx-3 my-8 space-y-8">
      <img :src="MDGold" alt="Gold mood board" class="w-56 h-56 object-center object-cover shadow-lg shadow-[rgba(0,0,0,0.4)] rounded-lg mx-auto" />
      <img :src="MDMaroon" alt="Maroon mood board" class="w-56 h-56 object-center object-cover shadow-lg shadow-[rgba(0,0,0,0.4)] rounded-lg mx-auto" />
      <img :src="MDTeal" alt="Teal mood board" class="w-56 h-56 object-center object-cover shadow-lg shadow-[rgba(0,0,0,0.4)] rounded-lg mx-auto" />
      <img :src="MDPurple" alt="Purple mood board" class="w-56 h-56 object-center object-cover shadow-lg shadow-[rgba(0,0,0,0.4)] rounded-lg mx-auto" />
      <img :src="MDGrey" alt="Grey mood board" class="w-56 h-56 object-center object-cover shadow-lg shadow-[rgba(0,0,0,0.4)] rounded-lg mx-auto" />
      <img :src="MDPeach" alt="Peach mood board" class="w-56 h-56 object-center object-cover shadow-lg shadow-[rgba(0,0,0,0.4)] rounded-lg mx-auto" />
    </div>
  </div>
</template>
